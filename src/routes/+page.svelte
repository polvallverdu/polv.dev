<script lang="ts">
	import ServiceCard from '../components/ServiceCard.svelte';
	import TopBar from '../components/TopBar.svelte';
	import Project from '../components/Project.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let failed: boolean = false;
	let successful: boolean = false;
	let name = '';
	let email = '';
	let message = '';

	async function submitForm() {}

	let form: HTMLFormElement | null;
	onMount(() => {
		form = document.getElementById('contact-form') as HTMLFormElement;
		form.addEventListener('submit', async (event) => {
			event.preventDefault();
			try {
				const response = await fetch('/form', {
					method: 'POST',
					body: JSON.stringify({
						name,
						email,
						message
					})
				});
				failed = response.status !== 200;
				successful = response.status === 200;
			} catch (e) {
				failed = true;
			}
			setTimeout(() => {
				failed = false;
				successful = false;
			}, 5000);
		});
	});

	const textboxClasses =
		'backdrop-blur-md w-full appearance-none rounded border bg-black bg-opacity-50 py-2 px-3 font-semibold leading-tight text-white outline outline-1 transition-all focus:bg-white focus:font-normal focus:bg-opacity-90 focus:text-black focus:outline-double hover:outline-4 hover:bg-opacity-40 hover:bg-white duration-100';
	const labelsClasses = 'text-xl font-semibold mt-6';
</script>

<main>
	<!-- TITLE SECTION -->
	<section id="home">
		<div
			class="p-4 mx-auto text-center w-full h-screen bg-black flex justify-center items-center drop-shadow-2xl"
		>
			<div class="text-white titleTransition">
				<h1 class="text-6xl lg:text-9xl font-extrabold">Pol Vallverdú</h1>
				<br />
				<h2 class="text-3xl lg:text-6xl font-bold text-niceblue">Developer & Freelancer</h2>
				<!--h3 class="text-xl md:text-xl font-bold p-8">
        <i>(⚠️ Under Construction ⚠️)</i>
      </h3-->
			</div>

			<div class="absolute bottom-0 mb-[5vh] arrowTransition">
				<div class="animate-bounce">
					<p class="text-white font-extrabold text-3xl align-middle rotate-90">➜</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ABOUT SECTION -->
	<section id="about">
		<div class="w-full h-auto aboutmebg py-1">
			<div
				class="bg-[#141414] drop-shadow rounded-3xl m-4 md:m-20 2xl:m-40 w-auto lg:w-1/2 p-6 md:p-12 text-white text-xl md:text-3xl"
			>
				<h3 class="font-extrabold text-white w-full h-32 pt-8 text-4xl md:text-6xl">👑 About Me</h3>
				<p>
					HI👋, I'm Pol! I'm a developer (and currently a student) who likes to solve problems and
					challenges through coding, and learn new stuff everyday.
				</p>
				<p>
					I was born in Barcelona, Spain, and I still live here. I'm currently studying a Bachelor's
					Degree in Computer Science at the <a
						href="https://www.fib.upc.edu/en"
						target="_blank"
						class="text-blue-500">FIB</a
					> (Facultat d'Informàtica de Barcelona).
				</p>
				<p>
					My parents tell me that when I was a little kid, I got distracted with every device that
					had buttons, just wanting to figure out how it worked. I guess that's why I'm so
					passionate about technology and computers.
				</p>
			</div>
		</div>
	</section>

	<!-- SERVICES SECTION -->
	<section id="services">
		<!-- <div class="h-auto bg-gradient-to-b from-[#141414] from-30% to-[#6B6B6B] pb-10"> -->
		<div class="h-auto bg-[#141414] pb-10">
			<h3 class="font-extrabold text-white w-full text-center h-32 pt-16 text-6xl">Services</h3>
			<div class="flex flex-wrap justify-evenly mx-10 my-16 text-black">
				<ServiceCard
					name="Backend Development"
					icon="backend"
					description="I create powerful backend services for your website or app, ensuring seamless performance and functionality. Let me handle the technical complexities while you focus on your core business goals."
					technologies={['typescript', 'java', 'python', 'rust']}
				/>
				<ServiceCard
					name="Frontend Development"
					icon="frontend"
					description="I specialize in crafting intuitive and responsive interfaces for web, Android, and iOS platforms. With a focus on dynamic and engaging designs, I bring your ideas to life, making user interaction delightful."
					technologies={['flutter', 'svelte', 'tailwind']}
				/>
				<ServiceCard
					name="Code Assistance & Software Consultation"
					icon="consultation"
					description="Stuck with coding issues or need software development guidance? I offer comprehensive support, from debugging code to providing insights on structure and deployment. Your projects, from conception to deployment, are in good hands."
					technologies={['docker', 'kubernetes', 'idea', 'vscode']}
				/>
			</div>
		</div>
	</section>

	<!-- PROJECTS SECTION -->
	<section id="projects">
		<div class="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
			<h3 class="font-extrabold text-white w-full text-center h-32 pt-16 text-6xl drop-shadow-xl">
				~ Projects ~
			</h3>

			<div class="flex flex-wrap justify-evenly py-20 px-10 lg:px-10 content-between">
				{#each data.projects as proj}
					<Project project={proj} />
				{/each}
			</div>
		</div>
	</section>

	<!-- CONTACT SECTION -->
	<section id="contact">
		<div class="contactbg h-auto pb-5">
			<h3
				class="font-extrabold text-white w-full text-center h-32 pt-16 text-3xl md:text-6xl drop-shadow-xl"
			>
				Contact
			</h3>

			<div class="flex flex-col justify-center w-full">
				<form
					method="POST"
					action="/form"
					id="contact-form"
					class="text-white w-[85%] sm:w-[75%] lg:w-1/2 text-left mx-auto"
				>
					<label for="name">
						<p class={labelsClasses}>Name</p>
					</label>
					<input id="name" class={textboxClasses} type="text" required bind:value={name} />
					<label for="email">
						<p class={labelsClasses}>Email</p>
					</label>
					<input id="email" class={textboxClasses} type="email" required bind:value={email} />
					<label for="message">
						<p class={labelsClasses}>Message</p>
					</label>
					<textarea
						id="message"
						class={textboxClasses}
						placeholder="(max. of 1000 characters)"
						maxlength="1000"
						required
						bind:value={message}
					/>
					<input
						type="submit"
						class="w-full my-8 py-2 px-4 outline outline-2 outline-white bg-black backdrop-blur-md bg-opacity-50 hover:bg-opacity-100 hover:bg-white transition-all hover:text-black font-semibold text-xl rounded"
						value="✈️ Submit"
					/>
				</form>

				<div class="text-xl shadow-lg font-semibold text-center">
					<p class="text-white">
						or message me on <a href="mailto:contact@polv.dev">contact@polv.dev</a>
					</p>
					{#if successful}
						<p class="text-green-500">Your message was sent successfully!</p>
					{/if}
					{#if failed}
						<p class="text-red-400">Something went wrong. Your message couldn't be sent.</p>
					{/if}
				</div>
			</div>

			<div class="text-white text-md mt-8 shadow-lg text-center mx-4">
				Designed and Coded with ♥ by Pol Vallverdu. Powered by <a href="https://kit.svelte.dev/"
					>SvelteKit</a
				>.
			</div>
		</div>
	</section>
</main>

<style>
	p {
		margin-bottom: 20px;
	}

	.aboutmebg {
		background-image: url('/aboutme.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position-y: 60%;
		background-position-x: 70%;
	}

	.contactbg {
		background-image: url('/matrix.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-color: #000;
	}

	.titleTransition {
		opacity: 0;
		transform: translateY(10rem);
		animation: fadeIn 500ms ease-out forwards;
	}

	.arrowTransition {
		opacity: 0;
		transform: translateY(10rem);
		animation: fadeIn 1s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10rem);
		}
		to {
			opacity: 1;
			transform: translateY(0rem);
		}
	}
</style>
