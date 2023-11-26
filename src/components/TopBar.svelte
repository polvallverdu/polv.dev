<script lang="ts">
	import TopBarItem from './TopBarItem.svelte';

	let mobileMenu = false;

	const anchors = [
		{
			name: 'Home',
			href: '#home'
		},
		{
			name: 'About',
			href: '#about'
		},
		{
			name: 'Services',
			href: '#services'
		},
		{
			name: 'Projects',
			href: '#projects'
		},
		{
			name: 'Contact',
			href: '#contact'
		}
	];

	const links = [
		{
			name: 'CV',
			href: 'https://cdn.polv.dev/files/CV.pdf',
			text: 'text-white hover:bg-white',
			textphone: 'text-black hover:text-white hover:bg-black'
		},
		{
			name: 'Github ➜',
			href: 'https://github.com/polvallverdu',
			text: 'text-white hover:bg-white',
			textphone: 'text-black hover:text-white hover:bg-black'
		},
		{
			name: 'Linkedin ➜',
			href: 'https://www.linkedin.com/in/polvallverdu',
			text: 'text-[#0077B5] hover:bg-[#0077B5]',
			textphone: 'text-[#0077B5] hover:bg-[#0077B5]'
		}
	];
</script>

<!-- PC MENU -->
<div class="hidden lg:flex lg:flex-row justify-between backdrop-blur">
	<div>
		<nav class="p-4 bg-black bg-opacity-75 backdrop-blur rounded-br-2xl border-r-4 border-b-4">
			<div class="md:block md:w-auto" id="navbar-default">
				<ul class="flex flex-row">
					<a href="#home" class="text-white font-bold mr-2"> polv.dev </a>
					{#each anchors as anchor}
						<li>
							<TopBarItem href={anchor.href} highlight={anchor.name === 'Contact'}
								>{anchor.name}</TopBarItem
							>
						</li>
					{/each}
				</ul>
			</div>
		</nav>
	</div>
	<div>
		<div class="p-4 bg-black bg-opacity-75 backdrop-blur rounded-bl-2xl border-l-4 border-b-4">
			<ul class="flex flex-row">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class={link.text +
								' px-4 py-2 m-1 rounded-lg font-semibold hover:text-black transition-colors'}
							target="_blank"
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<!-- Menu Button (mobile) -->
<div class="flex flex-row justify-between align-middle items-center bg-black bg-opacity-75 backdrop-blur lg:hidden">
	<button
		class={'justify-start border-4 rounded-xl m-4 p-2 ' + (mobileMenu ? 'bg-white' : '')}
		on:click={() => (mobileMenu = !mobileMenu)}
	>
		<img src="menu.webp" alt="menu" class={'object-contain w-6 ' + (mobileMenu ? '' : 'invert')} />
	</button>
	<a href="#home" class="text-white fmontserrat mx-6 text-2xl font-bold">polv.dev</a>
</div>

<nav
	class={(mobileMenu ? 'flex flex-col' : 'hidden') +
		' ml-4 flex flex-col bg-white text-black py-2 rounded-xl w-fit lg:hidden'}
	on:click={() => (mobileMenu = false)}
>
	<ul>
		{#each anchors as anchor}
			<li class="m-2">
				<TopBarItem
					href={anchor.href}
					highlight={anchor.name === 'Contact'}
					color={'text-black'}
					background={'bg-niceblue'}
				>
					{anchor.name}
				</TopBarItem>
			</li>
		{/each}
	</ul>

	<ul class="mt-2">
		{#each links as link}
			<li class="m-2">
				<a
					href={link.href}
					class={link.textphone +
						' px-4 py-2 m-1 rounded-lg font-semibold hover:text-black transition-colors'}
					target="_blank"
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.fmontserrat {
		font-family: 'Montserrat', sans-serif;
	}
</style>
