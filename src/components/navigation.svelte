<script>	
	import { page } from '$app/stores';
	export let lang = 'en';
	export let currentPath = '';
	
	const routes = {
		'en': {
			'urls': [
				{
					'title': 'Guide',
					'url': '/en'
				},
				{
					'title': 'Ausflüge',
					'url': '/en/excursions'
				},
				{
					'title': 'Do & Don\'t Guide',
					'url': '/en/apartment-guide'
				},
				{
					'title': 'Trash & Recycling',
					'url': '/en/garbage'
				}
			]
		},
		'de': {
			'urls': [
				{
					'title': 'Willkommen',
					'url': '/de'
				},
				{
					'title': 'Kaffeemaschine',
					'url': '/de/coffee-machine'
				},
				{
					'title': 'Restaurants',
					'url': '/de/restaurants'
				},
				{
					'title': 'Ausflüge',
					'url': '/de/excursions'
				},
				{
					'title': 'Do & Don\'t Guide',
					'url': '/de/apartment-guide'
				},
				{
					'title': 'Müll & Recycling',
					'url': '/de/garbage'
				}				
			]
		}
	}
	$: isActive = (url) => $page.url.pathname === url;
</script>

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
		{#if lang}
		<div class="collapse navbar-collapse" id="navbarToggler">
			<ul class="navbar-nav ms-auto">
				<div class="dropdown-divider"></div>
				{#each routes[lang].urls as route}
				<li class="nav-item">
					<a class={`nav-link ${isActive(route.url) ? 'active' : ''}`} href={route.url}>{route.title}</a>
				</li>
				{/each}
			</ul>
		</div>
		{/if}
	</div>
</nav>
