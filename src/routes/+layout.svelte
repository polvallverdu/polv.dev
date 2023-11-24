<script>
	import '../app.css';
	import TopBar from '../components/TopBar.svelte';
</script>

<!-- NAV BAR -->
<div class="navBarTransition fixed w-full z-10 md:visible">
	<TopBar />
</div>
<slot />

<style>
	.navBarTransition {
		opacity: 0;
		transform: translateY(-1rem);
		animation: fadeInTop 0.5s ease-in-out forwards;
	}

	@keyframes fadeInTop {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0rem);
		}
	}
</style>
