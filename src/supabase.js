import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eccsksayjrvbxgmidxpr.supabase.co";
const supabaseKey = "sb_publishable_1iP4ppuHGRoOSo8rpHtFCw_aK3AzCjq";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;