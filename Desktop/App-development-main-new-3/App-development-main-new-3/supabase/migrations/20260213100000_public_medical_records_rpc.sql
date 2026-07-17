-- Create a SECURITY DEFINER function to fetch medical records for publicly-shared pets.
-- This bypasses RLS so that anonymous/unauthenticated users scanning a QR code
-- can view clinic-uploaded medical records when is_medical_info_public = true.

CREATE OR REPLACE FUNCTION public.get_public_medical_records(p_pet_id bigint)
RETURNS TABLE (
  id uuid,
  pet_id bigint,
  title text,
  record_type text,
  notes text,
  file_url text,
  file_name text,
  is_verified boolean,
  visit_date date,
  created_at timestamptz,
  updated_at timestamptz,
  uploaded_by_clinic_id uuid,
  uploaded_by_user_id uuid,
  clinic_name text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    mr.id,
    mr.pet_id,
    mr.title,
    mr.record_type,
    mr.notes,
    mr.file_url,
    mr.file_name,
    mr.is_verified,
    mr.visit_date,
    mr.created_at,
    mr.updated_at,
    mr.uploaded_by_clinic_id,
    mr.uploaded_by_user_id,
    get_clinic_name(mr.uploaded_by_clinic_id) as clinic_name
  FROM public.medical_records mr
  WHERE mr.pet_id = p_pet_id
    AND EXISTS (
      SELECT 1 FROM public.pets
      WHERE pets.id = mr.pet_id
        AND pets.is_medical_info_public = true
    )
  ORDER BY mr.created_at DESC;
$$;
