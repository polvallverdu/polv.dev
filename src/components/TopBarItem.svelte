<script lang="ts">
	export let href: string;
	export let highlight: boolean = false;
	export let color: string = 'text-white';
	export let background: string = 'bg-white';
</script>

<a
	{href}
	class={(highlight ? background + ' text-black' : color) +
		' px-4 py-2 m-1 rounded-lg font-semibold hover:text-black hover:' +
		background +
		' transition-colors'}
>
	<slot />
</a>
