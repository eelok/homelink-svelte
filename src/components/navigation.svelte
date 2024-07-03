<script>	
	import { page } from '$app/stores';
	import { getRoutes } from '$lib/navigation.routes';
	export let lang = 'en';

	const routes = getRoutes(lang);
	
	$: isActive = (url) => $page.url.pathname === url;
</script>

{#if lang}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
	<div class="container container-fluid">
		<a class="display-1 navbar-brand fw-bold text-white" href="/">T&M</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarToggler"
			aria-controls="navbarToggler"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarToggler">
			<ul class="navbar-nav ms-auto">
				<div class="dropdown-divider"></div>
				{#each routes as route}
				<li class="nav-item">
					<a class={`nav-link ${isActive(route.url) ? 'active' : ''}`} href={route.url}>{route.title}</a>
				</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
{/if}
