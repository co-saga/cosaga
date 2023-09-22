/// <reference types="@sveltejs/kit" />
import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
  declare namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient;
      getSession(): Promise<Session | null>;
      session: Session | null;
    }
    interface PageData {
      session: Session | null;
    }
    // interface Platform {}
  }
}
