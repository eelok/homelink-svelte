<script>
	let isOpen = false;
</script>

<header class="navbar">
	<div class="left">
		Stay | Enjoy
	</div>
	<div class="hamburger" on:click={() => isOpen = !isOpen}>
		<div class={isOpen ? 'bar1 animateBar1' : 'bar1'}></div>
		<div class={isOpen ? 'bar2 animateBar2' : 'bar2'}></div>
		<div class={isOpen ? 'bar3 animateBar3' : 'bar3'}></div>
	</div>
</header>
<nav class={isOpen ? 'mobileNav openDrawer' : 'mobileNav'}>
	<a href="apartment-guide" on:click={() => isOpen = false}>Do & Don't Guide</a>
	<a href="garbage" on:click={() => isOpen = false}>Trasch & Recycling</a>
</nav>
