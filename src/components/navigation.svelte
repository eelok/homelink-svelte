<script>
	import { page } from '$app/stores';
	import { getRoutes } from '$lib/navigation.routes';
	export let lang = 'en';

	const routes = getRoutes(lang);
	
	$: isActive = (url) => $page.url.pathname === url;

	let isMenuOpen = false;
	const toggleMenu = () => isMenuOpen = !isMenuOpen;
</script>

{#if lang}
<nav class="navbar navbar-dark bg-dark text-white">
	<div class="container container-fluid">
		<a class="navbar-brand fw-bold text-white" href="/">T&M</a>
		<button
			class="navbar-toggler"
			type="button"
			on:click={toggleMenu}
			aria-controls="navbarToggler"
			aria-expanded={isMenuOpen}
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>
<div class="collapse bg-dark {isMenuOpen ? 'show' : ''}" id="navbarToggler">
	<div class="container py-2">
		<ul class="navbar-nav">
			{#each routes as route}
			<li class="nav-item">
				<a 
					class={`nav-link py-2 px-3 ${isActive(route.url) ? 'active' : ''}`} 
					href={route.url}
					on:click={() => isMenuOpen = false}
				>
					{route.title}
				</a>
			</li>
			{/each}
		</ul>
	</div>
</div>
{/if}

<style>
	.navbar {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.navbar-brand {
		font-size: 1.5rem;
	}
	.navbar-nav {
		padding-left: 0;
		list-style: none;
	}
	.nav-item {
		margin: 0.25rem 0;
	}
	.nav-link {
		display: block;
		padding: 0.5rem 1rem;
		color: rgba(255,255,255,.55);
		text-decoration: none;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
	}
	.nav-link:hover, .nav-link.active {
		color: #fff;
		background-color: rgba(255, 255, 255, 0.1);
	}
	.collapse:not(.show) {
		display: none;
	}
	.collapse.show {
		display: block;
	}
</style>