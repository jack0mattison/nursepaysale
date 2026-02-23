export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  current_band: string | null;
  current_location: string | null;
  years_experience: number | null;
  specialism: string | null;
  is_pro: boolean;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  subscription_status: string;
  created_at: string;
  updated_at: string;
}

export interface ToolUsage {
  id: string;
  user_id: string;
  tool_name: string;
  created_at: string;
}

export type LondonWeightingKey = "inner" | "outer" | "fringe" | "none";
