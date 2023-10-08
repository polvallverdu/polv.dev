<script lang="ts">
	export let href: string;
</script>

<a {href} class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0">
	<slot />
</a>
