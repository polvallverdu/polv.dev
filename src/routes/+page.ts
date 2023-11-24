import type { ProjectDataType } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const projects: ProjectDataType[] = [
		{
			name: 'SquidCraftGames',
			subtitle: 'Twitch Rivals',
			description:
				"<p>Welcome to SquidCraft Games, an extraordinary Twitch Rivals event that brought the adrenaline and excitement of the famous Squid Game Netflix series to the Minecraft universe. As the Developer and Backend Engineer behind this groundbreaking project, I spearheaded the creation of a thrilling gaming experience that captured the essence of the series, engaging 150 Spanish streamers and captivating audiences worldwide.</p><p>As the Developer and Backend Engineer for SquidCraft Games, I played a pivotal role in shaping the event's technical landscape. My responsibilities included crafting the intricate gameplay mechanics, ensuring seamless server performance, and implementing backend solutions that facilitated a smooth and immersive gaming experience for both participants and viewers.</p>",
			role: 'Software Developer, Infrastructure Engineer',
			technologies: ['minecraft', 'java', 'gradle', 'spigot', 'fabric'],
			image: '/images/FJ6DtqOWQAMCVQz.webp',
			video: '/images/squidgamestrailer.webm'
		},
		{
			name: 'StickyBot',
			subtitle: 'A WhatsApp bot',
			description:
				'StickyBot (2021) is a WhatsApp bot I developed using TypeScript and Kubernetes. This innovative bot converts images into stickers, enhancing user interactions on the platform. With a user base of 25,000, StickyBot quickly gained popularity for its simplicity and creativity. Check out the project on <a href="https://github.com/wosherco/StickyBot" target="_blank">Github (github.com/wosherco/StickyBot)</a> to explore the code and learn more about this successful venture.',
			role: 'Software Engineer',
			technologies: ['kubernetes', 'typescript', 'mongodb', 'redis'],
			image: '/images/sticky.webp',
			video: '/images/stickybot.webm'
		},
		{
			name: 'Soundicly',
			subtitle: 'Music Research',
			description:
				'<p>Welcome to Soundicly, where my love for music converges with the precision of mathematics and the power of technology. I am a devoted Software Engineer deeply passionate about exploring music in a unique way – through mathematical analysis and creative innovation.</p><p>I utilize various technologies based on the specific requirements of each project. Soundicly is built using a large cluster comprising a wide variety of microservices, ranging from processing Text-To-Speech to creating and rendering videos for social media platforms, all accessible through a simple web request.</p><p>Check out more of Soundicly\'s stuff on our <a href="https://github.com/Soundicly" target="_blank">Github Page (github.com/Soundicly)</a></p>',
			role: 'Software Engineer',
			technologies: ['java', 'spring', 'python', 'typescript', 'reactjs', 'mongodb', 'redis'],
			image: '/images/soundicly.webp',
			video: '/images/soundicly.webm'
		}
	];

	return {
		projects
	};
};
