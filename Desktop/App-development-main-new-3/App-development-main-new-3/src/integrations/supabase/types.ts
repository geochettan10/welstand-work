export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      bonding_challenges: {
        Row: {
          challenge_name: string
          created_at: string
          id: string
          is_completed: boolean
          progress_count: number
          started_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          challenge_name: string
          created_at?: string
          id?: string
          is_completed?: boolean
          progress_count?: number
          started_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          challenge_name?: string
          created_at?: string
          id?: string
          is_completed?: boolean
          progress_count?: number
          started_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      bonding_sessions: {
        Row: {
          created_at: string
          duration_minutes: number | null
          end_time: string | null
          id: string
          notes: string | null
          pet_id: number | null
          session_type: Database["public"]["Enums"]["session_type"]
          start_time: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_minutes?: number | null
          end_time?: string | null
          id?: string
          notes?: string | null
          pet_id?: number | null
          session_type: Database["public"]["Enums"]["session_type"]
          start_time: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration_minutes?: number | null
          end_time?: string | null
          id?: string
          notes?: string | null
          pet_id?: number | null
          session_type?: Database["public"]["Enums"]["session_type"]
          start_time?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bonding_sessions_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      bonding_stats: {
        Row: {
          created_at: string
          current_streak_days: number
          last_session_date: string | null
          max_streak: number
          total_sessions: number
          updated_at: string
          user_id: string
          xp_points: number
        }
        Insert: {
          created_at?: string
          current_streak_days?: number
          last_session_date?: string | null
          max_streak?: number
          total_sessions?: number
          updated_at?: string
          user_id: string
          xp_points?: number
        }
        Update: {
          created_at?: string
          current_streak_days?: number
          last_session_date?: string | null
          max_streak?: number
          total_sessions?: number
          updated_at?: string
          user_id?: string
          xp_points?: number
        }
        Relationships: []
      }
      clinic_staff: {
        Row: {
          clinic_id: string
          created_at: string | null
          id: string
          is_admin: boolean | null
          user_id: string
        }
        Insert: {
          clinic_id: string
          created_at?: string | null
          id?: string
          is_admin?: boolean | null
          user_id: string
        }
        Update: {
          clinic_id?: string
          created_at?: string | null
          id?: string
          is_admin?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinic_staff_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      clinics: {
        Row: {
          address: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          id: string
          is_approved: boolean | null
          name: string
          password_hash: string | null
          phone: string
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          is_approved?: boolean | null
          name: string
          password_hash?: string | null
          phone: string
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          is_approved?: boolean | null
          name?: string
          password_hash?: string | null
          phone?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      journal_entries: {
        Row: {
          content: string
          created_at: string
          id: string
          tags: string[] | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      medical_documents: {
        Row: {
          created_at: string | null
          file_name: string
          file_url: string
          id: string
          pet_id: number
          section: string
          uploaded_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_url: string
          id?: string
          pet_id: number
          section: string
          uploaded_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_url?: string
          id?: string
          pet_id?: number
          section?: string
          uploaded_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_medical_documents_pet"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      medical_info: {
        Row: {
          created_at: string
          date_of_birth: string | null
          grooming_status: string | null
          id: number
          notes: string | null
          pet_id: number | null
          spaying_status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date_of_birth?: string | null
          grooming_status?: string | null
          id?: number
          notes?: string | null
          pet_id?: number | null
          spaying_status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date_of_birth?: string | null
          grooming_status?: string | null
          id?: number
          notes?: string | null
          pet_id?: number | null
          spaying_status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      medical_records: {
        Row: {
          created_at: string | null
          file_name: string | null
          file_url: string | null
          id: string
          is_verified: boolean | null
          notes: string | null
          pet_id: number
          record_type: string
          title: string
          updated_at: string | null
          uploaded_by_clinic_id: string | null
          uploaded_by_user_id: string | null
          visit_date: string | null
        }
        Insert: {
          created_at?: string | null
          file_name?: string | null
          file_url?: string | null
          id?: string
          is_verified?: boolean | null
          notes?: string | null
          pet_id: number
          record_type: string
          title: string
          updated_at?: string | null
          uploaded_by_clinic_id?: string | null
          uploaded_by_user_id?: string | null
          visit_date?: string | null
        }
        Update: {
          created_at?: string | null
          file_name?: string | null
          file_url?: string | null
          id?: string
          is_verified?: boolean | null
          notes?: string | null
          pet_id?: number
          record_type?: string
          title?: string
          updated_at?: string | null
          uploaded_by_clinic_id?: string | null
          uploaded_by_user_id?: string | null
          visit_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "medical_records_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_uploaded_by_clinic_id_fkey"
            columns: ["uploaded_by_clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          dismissed: boolean | null
          due_date: string
          id: number
          message: string
          pet_id: number | null
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          dismissed?: boolean | null
          due_date: string
          id?: number
          message: string
          pet_id?: number | null
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          dismissed?: boolean | null
          due_date?: string
          id?: number
          message?: string
          pet_id?: number | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      pet_claim_tokens: {
        Row: {
          claimed_by_user_id: string | null
          created_at: string | null
          expires_at: string
          id: string
          owner_phone: string
          pet_id: number
          token: string
          used_at: string | null
        }
        Insert: {
          claimed_by_user_id?: string | null
          created_at?: string | null
          expires_at: string
          id?: string
          owner_phone: string
          pet_id: number
          token: string
          used_at?: string | null
        }
        Update: {
          claimed_by_user_id?: string | null
          created_at?: string | null
          expires_at?: string
          id?: string
          owner_phone?: string
          pet_id?: number
          token?: string
          used_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pet_claim_tokens_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      pets: {
        Row: {
          additional_photos: string[] | null
          age: number
          breed: string
          claim_expires_at: string | null
          created_at: string
          created_by_clinic_id: string | null
          current_owner_name: string
          date_of_birth: string | null
          dog_parent_name: string
          grooming_status: string
          health_condition: string | null
          id: number
          is_claimed: boolean | null
          is_medical_info_public: boolean | null
          name: string
          next_vaccination_due: string | null
          numeric_code: string
          owner_address: string
          owner_phone: string | null
          previous_owners: number
          profile_photo_url: string | null
          qr_code_url: string | null
          qr_image_url: string | null
          sex: string
          species: Database["public"]["Enums"]["pet_species"] | null
          updated_at: string | null
          user_id: string | null
          vaccination_history: string | null
          weight: number
        }
        Insert: {
          additional_photos?: string[] | null
          age?: number
          breed?: string
          claim_expires_at?: string | null
          created_at?: string
          created_by_clinic_id?: string | null
          current_owner_name?: string
          date_of_birth?: string | null
          dog_parent_name?: string
          grooming_status?: string
          health_condition?: string | null
          id?: number
          is_claimed?: boolean | null
          is_medical_info_public?: boolean | null
          name?: string
          next_vaccination_due?: string | null
          numeric_code?: string
          owner_address?: string
          owner_phone?: string | null
          previous_owners?: number
          profile_photo_url?: string | null
          qr_code_url?: string | null
          qr_image_url?: string | null
          sex?: string
          species?: Database["public"]["Enums"]["pet_species"] | null
          updated_at?: string | null
          user_id?: string | null
          vaccination_history?: string | null
          weight?: number
        }
        Update: {
          additional_photos?: string[] | null
          age?: number
          breed?: string
          claim_expires_at?: string | null
          created_at?: string
          created_by_clinic_id?: string | null
          current_owner_name?: string
          date_of_birth?: string | null
          dog_parent_name?: string
          grooming_status?: string
          health_condition?: string | null
          id?: number
          is_claimed?: boolean | null
          is_medical_info_public?: boolean | null
          name?: string
          next_vaccination_due?: string | null
          numeric_code?: string
          owner_address?: string
          owner_phone?: string | null
          previous_owners?: number
          profile_photo_url?: string | null
          qr_code_url?: string | null
          qr_image_url?: string | null
          sex?: string
          species?: Database["public"]["Enums"]["pet_species"] | null
          updated_at?: string | null
          user_id?: string | null
          vaccination_history?: string | null
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "pets_created_by_clinic_id_fkey"
            columns: ["created_by_clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      qr_tag_requests: {
        Row: {
          address: string
          created_at: string
          email: string | null
          id: string
          notes: string | null
          owner_name: string
          pet_id: number
          pet_name: string
          phone: string
          pincode: string
          status: string
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          email?: string | null
          id?: string
          notes?: string | null
          owner_name: string
          pet_id: number
          pet_name: string
          phone: string
          pincode: string
          status?: string
          user_id: string
        }
        Update: {
          address?: string
          created_at?: string
          email?: string | null
          id?: string
          notes?: string | null
          owner_name?: string
          pet_id?: number
          pet_name?: string
          phone?: string
          pincode?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "qr_tag_requests_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      reminders: {
        Row: {
          category: string | null
          completed: boolean | null
          completed_at: string | null
          created_at: string
          id: string
          notes: string | null
          pet_id: number
          reminder_time: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          category?: string | null
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          pet_id: number
          reminder_time: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          category?: string | null
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          pet_id?: number
          reminder_time?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      medical_records_with_clinic: {
        Row: {
          clinic_name: string | null
          created_at: string | null
          file_name: string | null
          file_url: string | null
          id: string | null
          is_verified: boolean | null
          notes: string | null
          pet_id: number | null
          record_type: string | null
          title: string | null
          updated_at: string | null
          uploaded_by_clinic_id: string | null
          uploaded_by_user_id: string | null
          visit_date: string | null
        }
        Insert: {
          clinic_name?: never
          created_at?: string | null
          file_name?: string | null
          file_url?: string | null
          id?: string | null
          is_verified?: boolean | null
          notes?: string | null
          pet_id?: number | null
          record_type?: string | null
          title?: string | null
          updated_at?: string | null
          uploaded_by_clinic_id?: string | null
          uploaded_by_user_id?: string | null
          visit_date?: string | null
        }
        Update: {
          clinic_name?: never
          created_at?: string | null
          file_name?: string | null
          file_url?: string | null
          id?: string | null
          is_verified?: boolean | null
          notes?: string | null
          pet_id?: number | null
          record_type?: string | null
          title?: string | null
          updated_at?: string | null
          uploaded_by_clinic_id?: string | null
          uploaded_by_user_id?: string | null
          visit_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "medical_records_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_uploaded_by_clinic_id_fkey"
            columns: ["uploaded_by_clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      get_clinic_name: { Args: { _clinic_id: string }; Returns: string }
      get_public_medical_records: {
        Args: { p_pet_id: number }
        Returns: {
          clinic_name: string
          created_at: string
          file_name: string
          file_url: string
          id: string
          is_verified: boolean
          notes: string
          pet_id: number
          record_type: string
          title: string
          updated_at: string
          uploaded_by_clinic_id: string
          uploaded_by_user_id: string
          visit_date: string
        }[]
      }
      get_public_pet_by_code: {
        Args: { _code: string }
        Returns: {
          additional_photos: string[]
          age: number
          breed: string
          date_of_birth: string
          grooming_status: string
          health_condition: string
          id: number
          is_medical_info_public: boolean
          name: string
          next_vaccination_due: string
          profile_photo_url: string
          qr_code_url: string
          qr_image_url: string
          sex: string
          vaccination_history: string
          weight: number
        }[]
      }
      get_user_clinic_id: { Args: { _user_id: string }; Returns: string }
      get_user_pets: {
        Args: { target_user_id: string }
        Returns: {
          id: number
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_clinic_staff: {
        Args: { _clinic_id: string; _user_id: string }
        Returns: boolean
      }
      is_pet_medical_public: { Args: { pet_id: number }; Returns: boolean }
      is_pet_owner: {
        Args: { pet_id: number; target_user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "clinic_staff" | "pet_owner"
      pet_species:
        | "dog"
        | "cat"
        | "bird"
        | "rabbit"
        | "fish"
        | "hamster"
        | "turtle"
        | "other"
      session_type: "Walk" | "Play"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["clinic_staff", "pet_owner"],
      pet_species: [
        "dog",
        "cat",
        "bird",
        "rabbit",
        "fish",
        "hamster",
        "turtle",
        "other",
      ],
      session_type: ["Walk", "Play"],
    },
  },
} as const
