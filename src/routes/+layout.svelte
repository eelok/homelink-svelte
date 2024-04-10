<script>
		import 'bootstrap/dist/css/bootstrap.min.css';
		import Navigation from '@components/navigation.svelte';
  		import { page } from '$app/stores';
		// Extract the first segment of the path as the language
		$: lang = $page.url.pathname.split('/')[1];

</script>

<Navigation lang="{lang}" />
<slot />
