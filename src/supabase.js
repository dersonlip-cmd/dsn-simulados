import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ksbbwpchlioekrqrlzdi.supabase.co'
const supabaseKey = 'sb_publishable_P1hfdAIxW0LwPdikx5kBrA_6BJGgxDX'

export const supabase = createClient(supabaseUrl, supabaseKey)