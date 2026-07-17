import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase, Pet, MedicalInfo, MedicalDocument } from '../lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WellnessStatusCard from '../components/public-medical-profile/WellnessStatusCard';
import MedicalDocumentsSection from '../components/public-medical-profile/MedicalDocumentsSection';
import ClinicRecordsSection from '../components/public-medical-profile/ClinicRecordsSection';
import PublicProfileFooter from '../components/public-medical-profile/PublicProfileFooter';
import PetPhotoSection from '../components/public-pet-profile/PetPhotoSection';
import PetTitleSection from '../components/public-pet-profile/PetTitleSection';
import PetBasicInfo from '../components/public-pet-profile/PetBasicInfo';
import AdditionalPhotosSection from '../components/public-pet-profile/AdditionalPhotosSection';
import PublicMedicalProfileHeader from '../components/public-medical-profile/PublicMedicalProfileHeader';
import AccessDeniedCard from '../components/public-medical-profile/AccessDeniedCard';
import NotFoundCard from '../components/public-medical-profile/NotFoundCard';
import LoadingSpinner from '../components/public-medical-profile/LoadingSpinner';
import UpcomingReminders from '../components/public-medical-profile/UpcomingReminders';


const PublicMedicalProfile = () => {
  const { code } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);
  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo | null>(null);
  const [documents, setDocuments] = useState<MedicalDocument[]>([]);
  const [clinicRecords, setClinicRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    if (code) {
      fetchPublicMedicalProfile(code);
    }
  }, [code]);

  const fetchPublicMedicalProfile = async (numericCode: string) => {
    try {
      console.log('Fetching medical profile for code:', numericCode);
      
      // Fetch pet data
      const { data: petData, error: petError } = await supabase
        .from('pets')
        .select('*')
        .eq('numeric_code', numericCode)
        .single();

      if (petError || !petData) {
        console.error('Pet not found:', petError);
        setNotFound(true);
        return;
      }

      console.log('Pet found:', petData);
      setPet(petData as Pet);

      // Check if medical info is public
      if (!petData.is_medical_info_public) {
        console.log('Medical info is private');
        setAccessDenied(true);
        return;
      }

      // Fetch medical info - using correct pet_id field as number
      const { data: medicalData } = await supabase
        .from('medical_info')
        .select('*')
        .eq('pet_id', petData.id)
        .maybeSingle();

      if (medicalData) {
        console.log('Medical info found:', medicalData);
        setMedicalInfo(medicalData as MedicalInfo);
      }

      // Fetch all medical documents
      const { data: documentsData } = await supabase
        .from('medical_documents')
        .select('*')
        .eq('pet_id', petData.id)
        .order('uploaded_at', { ascending: false });

      if (documentsData) {
        console.log('Medical documents found:', documentsData.length);
        setDocuments(documentsData as MedicalDocument[]);
      }

      // Fetch clinic medical records via SECURITY DEFINER RPC
      // This bypasses RLS so unauthenticated users can view records
      // for pets with is_medical_info_public = true
      const { data: clinicRecordsData, error: clinicRecordsError } = await supabase
        .rpc('get_public_medical_records', { p_pet_id: petData.id });

      if (clinicRecordsError) {
        console.error('Error fetching clinic records via RPC:', clinicRecordsError);
        // Fallback: try the view directly (works if user is authenticated)
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('medical_records_with_clinic')
          .select('*')
          .eq('pet_id', petData.id)
          .order('created_at', { ascending: false });

        if (fallbackError) {
          console.error('Fallback also failed:', fallbackError);
        } else if (fallbackData) {
          console.log('Clinic records from fallback:', fallbackData.length);
          setClinicRecords(fallbackData);
        }
      } else if (clinicRecordsData) {
        console.log('Clinic medical records found:', clinicRecordsData.length);
        setClinicRecords(clinicRecordsData);
      }
    } catch (error) {
      console.error('Error fetching public medical profile:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleMedicalInfoUpdate = (updatedInfo: MedicalInfo) => {
    setMedicalInfo(updatedInfo);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (notFound || !pet) {
    return <NotFoundCard />;
  }

  if (accessDenied) {
    return <AccessDeniedCard pet={pet} />;
  }

  // Group documents by section
  const documentsBySection = documents.reduce((acc, doc) => {
    if (!acc[doc.section]) acc[doc.section] = [];
    acc[doc.section].push(doc);
    return acc;
  }, {} as Record<string, MedicalDocument[]>);

  return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-6">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-6">
          <PublicMedicalProfileHeader />
          
          {/* Pet Profile Card with Photo and Basic Info */}
          <Card className="overflow-hidden shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <PetPhotoSection pet={pet} />
            
            <CardContent className="p-6">
              <PetTitleSection pet={pet} calculateAge={calculateAge} />
              <PetBasicInfo pet={pet} />
            </CardContent>
          </Card>

          {/* Additional Photos */}
          <AdditionalPhotosSection pet={pet} />

          {/* Upcoming Reminders */}
          <UpcomingReminders petId={pet.id} />

          {/* Medical/Wellness Information */}
          <WellnessStatusCard 
            groomingStatus={medicalInfo?.grooming_status || ''}
            spayingStatus={medicalInfo?.spaying_status || ''}
          />

          {/* Clinic Medical Records */}
          <ClinicRecordsSection records={clinicRecords} />

          {/* Medical Documents by Section */}
          <MedicalDocumentsSection documentsBySection={documentsBySection} />

          {/* Footer */}
          <PublicProfileFooter />
        </div>
      </div>
  );
};

export default PublicMedicalProfile;
