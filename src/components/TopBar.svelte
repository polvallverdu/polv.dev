<script lang="ts">
	import TopBarItem from './TopBarItem.svelte';
</script>

<div class="flex flex-row justify-between backdrop-blur">
	<div>
		<nav class="p-4 bg-black bg-opacity-75 backdrop-blur rounded-br-2xl border-r-4 border-b-4">
			<div class="md:block md:w-auto" id="navbar-default">
				<ul class="flex flex-row">
					<a href="#home" class="text-white font-bold mr-2">
						polv.dev
					</a>
					<li>
						<TopBarItem href="#home">Home</TopBarItem>
					</li>
					<li>
						<TopBarItem href="#about">About</TopBarItem>
					</li>
					<li>
						<TopBarItem href="#services">Services</TopBarItem>
					</li>
					<li>
						<TopBarItem href="#projects">Projects</TopBarItem>
					</li>
					<li>
						<TopBarItem href="#contact" highlight={true}>Contact</TopBarItem>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div>
		<div class="p-4 bg-black bg-opacity-75 backdrop-blur rounded-bl-2xl border-l-4 border-b-4">
			<ul class="flex flex-row">
				<li>
					<a
						href="https://cdn.polv.dev/files/CV.pdf"
						class={'text-white px-4 py-2 m-1 rounded-lg font-semibold hover:text-black hover:bg-white transition-colors'}
						target="_blank"
					>
						CV
					</a>
				</li>
				<li>
					<a
						href="https://github.com/polvallverdu"
						class={'text-white px-4 py-2 m-1 rounded-lg font-semibold hover:text-black hover:bg-white transition-colors'}
						target="_blank"
					>
						Github ➜
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/polvallverdu"
						class={'text-[#0077B5] px-4 py-2 m-1 rounded-lg font-semibold hover:text-black hover:bg-[#0077B5] transition-colors'}
						target="_blank"
					>
						Linkedin ➜
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- <div class="w-full absolute text-white h-16 align-middle text-center">
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
  <TopBarItem href="#home">Home</TopBarItem>
</div> -->
