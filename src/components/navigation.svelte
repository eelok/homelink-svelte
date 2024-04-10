<script>
	export let lang = 'en';
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
					'title': 'Anleitung',
					'url': '/de'
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
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
	<div class="container container-fluid">
		<a class="display-1 navbar-brand fw-bold text-white" href={`/${lang}`}>T&M</a>
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
					<a class="nav-link fs-5 text-white" href={route.url}>{route.title}</a>
				</li>
				{/each}
			</ul>
		</div>
		{/if}
	</div>
</nav>
