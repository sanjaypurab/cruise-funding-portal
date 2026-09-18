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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      application_audit_log: {
        Row: {
          action: string
          actor_user_id: string | null
          application_id: string
          created_at: string
          id: string
          metadata: Json
        }
        Insert: {
          action: string
          actor_user_id?: string | null
          application_id: string
          created_at?: string
          id?: string
          metadata?: Json
        }
        Update: {
          action?: string
          actor_user_id?: string | null
          application_id?: string
          created_at?: string
          id?: string
          metadata?: Json
        }
        Relationships: [
          {
            foreignKeyName: "application_audit_log_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      application_documents: {
        Row: {
          application_id: string
          category: string | null
          created_at: string
          file_size: number
          id: string
          mime_type: string
          original_name: string
          storage_path: string
        }
        Insert: {
          application_id: string
          category?: string | null
          created_at?: string
          file_size: number
          id?: string
          mime_type: string
          original_name: string
          storage_path: string
        }
        Update: {
          application_id?: string
          category?: string | null
          created_at?: string
          file_size?: number
          id?: string
          mime_type?: string
          original_name?: string
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          account_type: string | null
          address: string | null
          annual_turnover: number | null
          applicant_email: string | null
          application_number: string
          approximate_equity: number | null
          bank_statement_availability: string | null
          business_address: string | null
          business_city: string | null
          business_email: string | null
          business_phone: string | null
          business_plan_available: string | null
          business_state: string | null
          business_type: string | null
          business_zip: string | null
          city: string | null
          company_name: string | null
          corporate_bank_name: string | null
          created_at: string
          data_hash: string | null
          date_of_birth: string | null
          desired_financing_term: string | null
          document_version: string | null
          employees: number | null
          existing_business_loans: boolean | null
          existing_lender: string | null
          existing_line_of_credit: boolean | null
          existing_loan_count: number | null
          existing_monthly_repayment: number | null
          existing_outstanding_balance: number | null
          fax: string | null
          financing_purpose: string
          financing_purpose_other: string | null
          gender: string | null
          home_phone: string | null
          id: string
          internal_notes: string | null
          inventory_value: number | null
          legal_status: string | null
          line_of_credit_balance: number | null
          line_of_credit_lender: string | null
          line_of_credit_limit: number | null
          mobile: string
          net_profit: number | null
          number_of_partners: number | null
          outstanding_mortgage: number | null
          owner_name: string
          ownership_percentage: number
          payload: Json
          pdf_url: string | null
          projected_atps: number | null
          property_location: string | null
          real_estate_owned: boolean | null
          real_estate_value: number | null
          requested_financing_amount: number
          signature_url: string | null
          signature_user_agent: string | null
          signed_at: string | null
          state: string | null
          status: string
          total_annual_sales: number | null
          total_assets: number | null
          total_liabilities: number | null
          uid: string | null
          updated_at: string
          website: string | null
          year_established: number | null
          years_in_business: number | null
          zip_code: string | null
        }
        Insert: {
          account_type?: string | null
          address?: string | null
          annual_turnover?: number | null
          applicant_email?: string | null
          application_number: string
          approximate_equity?: number | null
          bank_statement_availability?: string | null
          business_address?: string | null
          business_city?: string | null
          business_email?: string | null
          business_phone?: string | null
          business_plan_available?: string | null
          business_state?: string | null
          business_type?: string | null
          business_zip?: string | null
          city?: string | null
          company_name?: string | null
          corporate_bank_name?: string | null
          created_at?: string
          data_hash?: string | null
          date_of_birth?: string | null
          desired_financing_term?: string | null
          document_version?: string | null
          employees?: number | null
          existing_business_loans?: boolean | null
          existing_lender?: string | null
          existing_line_of_credit?: boolean | null
          existing_loan_count?: number | null
          existing_monthly_repayment?: number | null
          existing_outstanding_balance?: number | null
          fax?: string | null
          financing_purpose: string
          financing_purpose_other?: string | null
          gender?: string | null
          home_phone?: string | null
          id?: string
          internal_notes?: string | null
          inventory_value?: number | null
          legal_status?: string | null
          line_of_credit_balance?: number | null
          line_of_credit_lender?: string | null
          line_of_credit_limit?: number | null
          mobile: string
          net_profit?: number | null
          number_of_partners?: number | null
          outstanding_mortgage?: number | null
          owner_name: string
          ownership_percentage: number
          payload?: Json
          pdf_url?: string | null
          projected_atps?: number | null
          property_location?: string | null
          real_estate_owned?: boolean | null
          real_estate_value?: number | null
          requested_financing_amount: number
          signature_url?: string | null
          signature_user_agent?: string | null
          signed_at?: string | null
          state?: string | null
          status?: string
          total_annual_sales?: number | null
          total_assets?: number | null
          total_liabilities?: number | null
          uid?: string | null
          updated_at?: string
          website?: string | null
          year_established?: number | null
          years_in_business?: number | null
          zip_code?: string | null
        }
        Update: {
          account_type?: string | null
          address?: string | null
          annual_turnover?: number | null
          applicant_email?: string | null
          application_number?: string
          approximate_equity?: number | null
          bank_statement_availability?: string | null
          business_address?: string | null
          business_city?: string | null
          business_email?: string | null
          business_phone?: string | null
          business_plan_available?: string | null
          business_state?: string | null
          business_type?: string | null
          business_zip?: string | null
          city?: string | null
          company_name?: string | null
          corporate_bank_name?: string | null
          created_at?: string
          data_hash?: string | null
          date_of_birth?: string | null
          desired_financing_term?: string | null
          document_version?: string | null
          employees?: number | null
          existing_business_loans?: boolean | null
          existing_lender?: string | null
          existing_line_of_credit?: boolean | null
          existing_loan_count?: number | null
          existing_monthly_repayment?: number | null
          existing_outstanding_balance?: number | null
          fax?: string | null
          financing_purpose?: string
          financing_purpose_other?: string | null
          gender?: string | null
          home_phone?: string | null
          id?: string
          internal_notes?: string | null
          inventory_value?: number | null
          legal_status?: string | null
          line_of_credit_balance?: number | null
          line_of_credit_lender?: string | null
          line_of_credit_limit?: number | null
          mobile?: string
          net_profit?: number | null
          number_of_partners?: number | null
          outstanding_mortgage?: number | null
          owner_name?: string
          ownership_percentage?: number
          payload?: Json
          pdf_url?: string | null
          projected_atps?: number | null
          property_location?: string | null
          real_estate_owned?: boolean | null
          real_estate_value?: number | null
          requested_financing_amount?: number
          signature_url?: string | null
          signature_user_agent?: string | null
          signed_at?: string | null
          state?: string | null
          status?: string
          total_annual_sales?: number | null
          total_assets?: number | null
          total_liabilities?: number | null
          uid?: string | null
          updated_at?: string
          website?: string | null
          year_established?: number | null
          years_in_business?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          converted_html: string
          created_at: string
          id: string
          mime_type: string
          original_file_name: string
          original_file_path: string
          public_slug: string
          published: boolean
          title: string
          updated_at: string
        }
        Insert: {
          converted_html: string
          created_at?: string
          id?: string
          mime_type: string
          original_file_name: string
          original_file_path: string
          public_slug: string
          published?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          converted_html?: string
          created_at?: string
          id?: string
          mime_type?: string
          original_file_name?: string
          original_file_path?: string
          public_slug?: string
          published?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          key: string
          updated_at: string
          value: string | null
        }
        Insert: {
          created_at?: string
          key: string
          updated_at?: string
          value?: string | null
        }
        Update: {
          created_at?: string
          key?: string
          updated_at?: string
          value?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      next_business_loan_application_number: { Args: never; Returns: string }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
