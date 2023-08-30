<script>
  import '../app.postcss';
  import { initializeStores } from '@skeletonlabs/skeleton';
  import { Toast } from '@skeletonlabs/skeleton';

  initializeStores();
</script>

<Toast />
<slot />
