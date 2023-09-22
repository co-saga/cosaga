<script lang="ts">
  import '../app.postcss';
  import { initializeStores } from '@skeletonlabs/skeleton';
  import { Toast } from '@skeletonlabs/skeleton';
  import type { LayoutData } from './$types';
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';

  export let data: LayoutData;

  initializeStores();

  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<Toast />
<slot />
