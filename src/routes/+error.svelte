<script>
	import { page } from '$app/stores';
</script>

<main class="w-full h-screen bg-black p-10 grid items-center text-center">
	<div class="my-52">
		<p class="text-9xl text-[#9f2b2b]">{$page.status}</p>
		<div class="my-32">
			<p class="text-[#ffffffd4] font-semibold text-3xl">{$page.error?.message}</p>
			<br />
			<a href="/" class="text-[#fececed4] transition-all duration-500 hover:text-[#ffffffd4]"
				>Click here to go to the main page. -></a
			>
		</div>
	</div>
</main>
