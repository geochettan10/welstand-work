
import { useState, useEffect } from 'react';
import { Pet, supabase } from '../../lib/supabase';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Shield, ShieldAlert, QrCode, Download } from 'lucide-react';
import QRCode from 'qrcode';
import { config } from '@/lib/config';

interface PublicMedicalToggleProps {
  pet: Pet;
  onPetUpdated: () => void;
}

const PublicMedicalToggle = ({ pet, onPetUpdated }: PublicMedicalToggleProps) => {
  const [isPublic, setIsPublic] = useState<boolean>(!!pet.is_medical_info_public);
  const [loading, setLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  useEffect(() => {
    setIsPublic(!!pet.is_medical_info_public);
  }, [pet.id, pet.is_medical_info_public]);

  const togglePublicAccess = async (nextIsPublic: boolean) => {
    setLoading(true);
    setIsPublic(nextIsPublic);

    try {
      const { error } = await supabase
        .from('pets')
        .update({ is_medical_info_public: nextIsPublic })
        .eq('id', pet.id);

      if (error) throw error;

      toast({
        title: nextIsPublic ? "Medical info made public" : "Medical info made private",
        description: nextIsPublic
          ? "Your pet's medical information is now accessible via QR code"
          : "Your pet's medical information is now private",
      });

      onPetUpdated();
    } catch (error: any) {
      setIsPublic(!nextIsPublic);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateQRCode = async () => {
    try {
      const publicUrl = `${config.baseUrl}/public-medical/${pet.numeric_code}`;
      const qrDataUrl = await QRCode.toDataURL(publicUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        },
        errorCorrectionLevel: 'M'
      });
      setQrCodeUrl(qrDataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive",
      });
    }
  };

  const downloadQRCode = async () => {
    if (!qrCodeUrl) return;
    
    try {
      // For mobile devices, create a temporary link with download attribute
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${pet.name}-medical-qr-code.png`;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "QR Code Downloaded",
        description: "Medical QR code has been saved to your device",
      });
    } catch (error) {
      console.error('Download failed:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download QR code. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <img src="/lovable-uploads/0c52ce14-7e20-451b-8e55-52534c5589e8.png" alt="Petly" className="h-5 w-5" />
          {isPublic ? (
            <Shield className="h-5 w-5 text-green-500" />
          ) : (
            <ShieldAlert className="h-5 w-5 text-orange-500" />
          )}
          <span>Medical Info Visibility</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="public-medical"
            checked={isPublic}
            onCheckedChange={togglePublicAccess}
            disabled={loading}
          />
          <Label htmlFor="public-medical" className="text-sm">
            {isPublic ? 'Medical info is public' : 'Medical info is private'}
          </Label>
        </div>

        <p className="text-xs text-muted-foreground">
          {isPublic
            ? 'Anyone with the QR code can view this pet\'s medical information'
            : 'Only you can access this pet\'s medical information'
          }
        </p>

        {isPublic && (
          <div className="space-y-4 pt-4 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={generateQRCode}
              className="flex items-center space-x-2 border-orange-200 text-orange-700 hover:bg-orange-50"
            >
              <QrCode className="h-4 w-4" />
              <span>Generate Medical QR Code</span>
            </Button>

            {qrCodeUrl && (
              <div className="text-center space-y-3">
                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                  <CardContent className="p-3 sm:p-4">
                    <div className="relative">
                      <img 
                        src={qrCodeUrl} 
                        alt="Medical Profile QR Code" 
                        className="mx-auto rounded-lg shadow-lg w-48 h-48 sm:w-64 sm:h-64" 
                      />
                      {/* Logo overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white rounded-full p-1 sm:p-1.5 shadow-md">
                          <img src="/lovable-uploads/0c52ce14-7e20-451b-8e55-52534c5589e8.png" alt="Petly" className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-orange-700 mt-2 font-medium">Medical Profile QR</p>
                  </CardContent>
                </Card>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadQRCode}
                  className="flex items-center space-x-2 border-orange-200 text-orange-700 hover:bg-orange-50"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Medical QR</span>
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PublicMedicalToggle;
