<script lang="ts">
	import TopBarItem from './TopBarItem.svelte';
</script>

<nav class="w-full flex flex-wrap items-center justify-center mx-auto p-4 absolute">
	<div class="w-full md:block md:w-auto" id="navbar-default">
		<ul
			class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
		>
			<TopBarItem href="#home">Home</TopBarItem>
			<TopBarItem href="#about">About</TopBarItem>
			<TopBarItem href="#services">Services</TopBarItem>
			<TopBarItem href="#projects">Projects</TopBarItem>
			<TopBarItem href="#contact">Contact</TopBarItem>
		</ul>
	</div>
</nav>
<!-- <div class="w-full absolute text-white h-16 align-middle text-center">
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
</div> -->
