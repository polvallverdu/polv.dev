<script lang="ts">
	import type { ProjectDataType } from '$lib/types';
	import { onMount } from 'svelte';
	import getIcon from '$lib/icons';
	export let project: ProjectDataType;

	let isPaused = true;

	let dialog: HTMLDialogElement | null;
	onMount(() => {
		dialog = document.getElementById(`${project.name}-dialog`) as HTMLDialogElement;
	});

	const showDialog = () => {
		dialog?.showModal();
	};

	const closeDialog = () => {
		dialog?.close();
		isPaused = true;
	};
</script>

<div
	style={`background-image: url(${project.image}); background-size: cover; background-position: center; `}
	class="w-[30rem] h-[23rem] m-2 rounded-xl flex flex-col place-content-between text-white border-4 border-black"
>
	<div
		class="p-2 w-full text-center text-4xl font-semibold bg-black rounded-t-lg bg-opacity-50 backdrop-blur border-b-4 border-black"
	>
		{project.name}
		<p class="text-xl">
			{project.subtitle}
		</p>
	</div>

	<button
		on:click={showDialog}
		class="p-2 w-full text-xl bg-black rounded-b-lg bg-opacity-50 hover:bg-opacity-80 border-t-4 border-black backdrop-blur transition-all duration-150"
	>
		More information ➡️
	</button>
</div>

<dialog
	id={`${project.name}-dialog`}
	class="dialog-transition w-auto h-auto mx-4 xl:mx-48 2xl:mx-72 bg-white px-12 pt-6 rounded-lg"
>
	<button
		class="relative text-black text-4xl left-full hover:text-[#ff0000] transition-colors duration-200"
		on:click={closeDialog}
	>
		×
	</button>

	<div>
		<h1 class="text-6xl">
			{project.name}
		</h1>
		<h2 class="text-2xl mt-2">
			{project.subtitle}
		</h2>
	</div>

	<img
		src={project.image}
		alt={`${project.name} image`}
		class="my-8 object-cover h-80 w-full mx-auto border-4 border-black rounded-lg"
	/>

	<div class="lg:flex justify-between">
		<div>
			<p class="text-lg">
				{@html project.description}
			</p>
		</div>

		<div class="mr-10 mt-10 lg:ml-16 lg:mt-0 min-w-fit">
			<h3 class="text-xl font-semibold">| Role</h3>
			<p class="ml-3 mb-8 text-lg">
				{project.role}
			</p>
			<div>
				<h3 class="text-xl font-semibold">| Technologies used</h3>
				<div class="flex flex-row ml-3">
					{#each project.technologies as tech}
						<img alt={tech} src={getIcon(tech)} class="w-10 object-contain my-4 mr-4" />
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Video -->
	<div class="mt-12 lg:px-12 w-auto">
		<video class="rounded-lg" controls autoplay muted bind:paused={isPaused}>
			<source src={project.video} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.47);
		backdrop-filter: blur(8px);
		opacity: 1;
		animation: fadeIn 0.5s ease-in-out forwards;
	}

	.dialog-transition {
		opacity: 1;
		animation: fadeIn 0.5s ease-in-out forwards;
	}

	@keyframes dialogAnim {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
