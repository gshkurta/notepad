/**
 * @file supabase.js
 * @description This file initializes and exports a Supabase client instance using environment variables for configuration.
 *
 * @requires @supabase/supabase-js
 *
 * @constant {string} supabaseUrl - The URL of the Supabase instance, retrieved from environment variables.
 * @constant {string} supabaseAnonKey - The anonymous key for the Supabase instance, retrieved from environment variables.
 *
 * @function createClient
 * @memberof supabase
 * @description Creates a new Supabase client instance.
 *
 * @exports supabase - The initialized Supabase client instance.
*/

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
