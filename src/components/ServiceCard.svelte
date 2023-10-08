<script lang="ts">
	import getIcon from '$lib/icons';

	export let name: string;
	export let description: string;
	export let icon: string;

	export let technologies: string[];
</script>

<div
	class="bg-white text-black rounded-lg text-center select-none pointer-events-none w-[375px] mx-4 my-10 h-auto drop-shadow-lg justify-around flex flex-col"
>
	<div
		class="rounded-full bg-niceblue w-24 p-4 mx-auto -translate-y-10 mb-[-45px] items-center drop-shadow-lg"
	>
		<img
			src={getIcon(icon)}
			alt={icon}
			class={'block w-full p-1 h-full aspect-square object-contain ' +
				(icon === 'consultation' ? '' : 'white-icon')}
		/>
	</div>

	<!-- Text -->
	<div class="p-4">
		<p class="text-3xl font-bold m-2">{name}</p>
		<p class="text-lg mt-4">{description}</p>
	</div>

	<div>
		<!-- Separator -->
		<div class="inset-0 flex items-center">
			<div class="w-full border-b border-gray-300 mx-8" />
		</div>

		<!-- Icons -->
		<div class="flex justify-center m-4">
			{#each technologies as tech}
				<img
					src={getIcon(tech)}
					alt={tech}
					class="w-10 m-2 aspect-square object-contain hover:-translate-y-2 transition-all duration-100"
				/>
			{/each}
		</div>
	</div>

	<div />
</div>

<style>
	.white-icon {
		filter: invert(100%);
	}
</style>
