
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { supabase } from "./lib/supabase";
import { User } from '@supabase/supabase-js';
import { useUserRole } from '@/hooks/useUserRole';
import Dashboard from "./components/Dashboard";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PublicMedicalProfile from './pages/PublicMedicalProfile';
import PublicPetProfile from './pages/PublicPetProfile';
import ResetPassword from './pages/ResetPassword';
import Journal from './pages/Journal';
import SmartPlanner from './pages/SmartPlanner';
import PetProfileModal from "./pages/PetProfileModal";
import EditPetModalPage from "./pages/EditPetModalPage";
import PetView from "./pages/PetView";
import { useLocation } from "react-router-dom";
import ClaimPet from "./pages/ClaimPet";
import ClinicAuthForm from "./components/auth/ClinicAuthForm";
import AppRedirectBanner from "./components/AppRedirectBanner";
import PetOwnerAuthForm from "./components/auth/PetOwnerAuthForm";
import GenericLoginForm from "./components/auth/GenericLoginForm";
import ClinicRegister from "./pages/clinic/ClinicRegister";
import ClinicDashboard from "./pages/clinic/ClinicDashboard";
import CreatePet from "./pages/clinic/CreatePet";
import SearchPet from "./pages/clinic/SearchPet";
import ClinicPetProfile from "./pages/clinic/ClinicPetProfile";
import AllPets from "./pages/clinic/AllPets";
import { toast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const queryClient = new QueryClient();

// Component to handle post-auth role assignment
const AuthHandler = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  const { roles, isLoading, addRole, refetch, isClinicStaff, isPetOwner } = useUserRole(user);
  const [isAssigning, setIsAssigning] = useState(false);

  useEffect(() => {
    const handleRoleAssignment = async () => {
      if (isLoading || isAssigning) return;

      // Check if there's a pending role to assign (from pre-auth selection)
      const pendingRole = localStorage.getItem('pendingRole');
      
      if (pendingRole && roles.length === 0) {
        setIsAssigning(true);
        try {
          await addRole(pendingRole as 'clinic_staff' | 'pet_owner');
          localStorage.removeItem('pendingRole');
          await refetch();
          
          // Check for pending claim URL
          const pendingClaimUrl = localStorage.getItem('pendingClaimUrl');
          
          // Navigate based on role
          if (pendingClaimUrl) {
            localStorage.removeItem('pendingClaimUrl');
            navigate(pendingClaimUrl);
          } else if (pendingRole === 'clinic_staff') {
            navigate('/clinic/register');
            toast({
              title: 'Welcome!',
              description: 'Please register your clinic to get started.',
            });
          } else {
            navigate('/');
            toast({
              title: 'Welcome to Petly!',
              description: 'You can now manage your pets.',
            });
          }
        } catch (error: any) {
          console.error('Error assigning role:', error);
          toast({
            title: 'Error',
            description: 'Failed to set up your account. Please try again.',
            variant: 'destructive',
          });
        } finally {
          setIsAssigning(false);
        }
        return;
      }

      // User already has roles - redirect to appropriate dashboard
      if (roles.length > 0) {
        localStorage.removeItem('pendingRole');
        const pendingClaimUrl = localStorage.getItem('pendingClaimUrl');
        if (pendingClaimUrl) {
          localStorage.removeItem('pendingClaimUrl');
          navigate(pendingClaimUrl);
        } else if (isClinicStaff && !isPetOwner) {
          navigate('/clinic');
        } else {
          navigate('/');
        }
      }
    };

    handleRoleAssignment();
  }, [isLoading, roles, isAssigning, addRole, refetch, navigate, isClinicStaff, isPetOwner]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
      <div className="text-center space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
        <p className="text-muted-foreground">Setting up your account...</p>
      </div>
    </div>
  );
};

// Component to save claim URL before showing auth
const ClaimRedirectHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    localStorage.setItem('pendingClaimUrl', location.pathname);
  }, [location.pathname]);

  return <PetOwnerAuthForm onSuccess={() => {}} />;
};

// Wrapper for claim route: shows AppRedirectBanner on Android, normal flow otherwise
const ClaimRouteHandler = ({ user }: { user: User | null }) => {
  // In native app or browser: show claim flow wrapped with redirect banner
  const content = user ? <ClaimPet user={user} /> : <ClaimRedirectHandler />;

  return <AppRedirectBanner>{content}</AppRedirectBanner>;
};

// Redirect to clinic dashboard if clinic session exists, otherwise show landing
const RootRedirect = () => {
  const clinicSession = getClinicSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (clinicSession) {
      navigate('/clinic', { replace: true });
    }
  }, [clinicSession, navigate]);

  if (clinicSession) return null;
  return <Landing />;
};

// Helper to get clinic session from localStorage
const getClinicSession = () => {
  const session = localStorage.getItem('clinic_session');
  if (session) {
    try {
      return JSON.parse(session);
    } catch {
      return null;
    }
  }
  return null;
};

// Wrapper components for clinic routes (use localStorage session)
const ClinicRegisterWrapper = () => {
  const clinicSession = getClinicSession();
  if (!clinicSession) return <ClinicAuthForm />;
  return <ClinicRegister clinicId={clinicSession.id} />;
};

const ClinicDashboardWrapper = () => {
  const clinicSession = getClinicSession();
  if (!clinicSession) return <ClinicAuthForm />;
  return <ClinicDashboard clinicId={clinicSession.id} clinicName={clinicSession.name} />;
};

const CreatePetWrapper = () => {
  const clinicSession = getClinicSession();
  if (!clinicSession) return <ClinicAuthForm />;
  return <CreatePet clinicId={clinicSession.id} />;
};

const SearchPetWrapper = () => {
  const clinicSession = getClinicSession();
  if (!clinicSession) return <ClinicAuthForm />;
  return <SearchPet clinicId={clinicSession.id} />;
};

const ClinicPetProfileWrapper = () => {
  const clinicSession = getClinicSession();
  if (!clinicSession) return <ClinicAuthForm />;
  return <ClinicPetProfile clinicId={clinicSession.id} />;
};

const AllPetsWrapper = () => {
  const clinicSession = getClinicSession();
  if (!clinicSession) return <ClinicAuthForm />;
  return <AllPets clinicId={clinicSession.id} />;
};

const AppContent = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Shared handler for deep link URLs (petly://claim/TOKEN, https://…/claim/TOKEN, etc.)
    const handleDeepLinkUrl = (url: string) => {
      console.log('App opened with URL:', url);

      if (url.includes('/claim/')) {
        const token = url.split('/claim/')[1]?.split('?')[0]?.split('#')[0];
        if (token) navigate(`/claim/${token}`);
      } else if (url.includes('/public/')) {
        const code = url.split('/public/')[1]?.split('?')[0]?.split('#')[0];
        if (code) navigate(`/public/${code}`);
      }
    };

    // Handle deep links from Capacitor (Universal Links / App Links / Custom Scheme)
    const handleAppUrlOpen = (event: { url: string }) => {
      handleDeepLinkUrl(event.url);
    };

    // Also check the launch URL for cold-start deep links
    // (appUrlOpen may not fire reliably on cold start in all Capacitor versions)
    const checkLaunchUrl = async () => {
      try {
        const launchUrl = await CapacitorApp.getLaunchUrl();
        if (launchUrl?.url) {
          handleDeepLinkUrl(launchUrl.url);
        }
      } catch (e) {
        // getLaunchUrl not available or no launch URL — ignore
      }
    };
    checkLaunchUrl();

    // Handle Android back button
    const handleBackButton = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '/clinic') {
        CapacitorApp.minimizeApp();
      } else {
        window.history.back();
      }
    };

    CapacitorApp.addListener('appUrlOpen', handleAppUrlOpen);
    CapacitorApp.addListener('backButton', handleBackButton);

    return () => {
      CapacitorApp.removeAllListeners();
    };
  }, [navigate]);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Routes>
      {/* Public routes that don't require authentication */}
      <Route path="/public/:code" element={<PublicPetProfile />} />
      <Route path="/public-medical/:code" element={<PublicMedicalProfile />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/pet-view" element={<PetView />} />
      
      {/* Auth routes - role selection happens before login */}
      <Route path="/auth/clinic" element={<ClinicAuthForm />} />
      <Route path="/auth/owner" element={user ? <AuthHandler user={user} /> : <PetOwnerAuthForm onSuccess={() => {}} />} />
      <Route path="/auth/login" element={user ? <AuthHandler user={user} /> : <GenericLoginForm />} />
      
      {/* Pet claim route - redirects to Play Store if not in native app */}
      <Route path="/claim/:token" element={<ClaimRouteHandler user={user} />} />
      
      {/* Clinic routes - use localStorage session instead of Supabase auth */}
      <Route path="/clinic/register" element={<ClinicRegisterWrapper />} />
      <Route path="/clinic" element={<ClinicDashboardWrapper />} />
      <Route path="/clinic/create-pet" element={<CreatePetWrapper />} />
      <Route path="/clinic/search" element={<SearchPetWrapper />} />
      <Route path="/clinic/pet/:petId" element={<ClinicPetProfileWrapper />} />
      <Route path="/clinic/all-pets" element={<AllPetsWrapper />} />
      
      {/* Protected routes that require authentication */}
      <Route path="/pet/:petId" element={user ? <PetProfileModal /> : <PetOwnerAuthForm onSuccess={() => {}} />} />
      <Route path="/edit-pet/:petId" element={user ? <EditPetModalPage /> : <PetOwnerAuthForm onSuccess={() => {}} />} />
      {user && <Route path="/journal" element={<Journal />} />}
      {user && <Route path="/planner" element={<SmartPlanner />} />}
      
      {/* Root route - Landing for unauthenticated, Dashboard for authenticated, or redirect to clinic if clinic session exists */}
      <Route path="/" element={user ? <Dashboard user={user} /> : <RootRedirect />} />
      
      {/* Catch all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
