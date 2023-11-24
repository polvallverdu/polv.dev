const logos: {
	[key: string]: string;
} = {
	fabric: 'icons/fabric.webp',
	gradle: 'icons/gradle.svg',
	java: 'icons/java.svg',
	mongodb: 'icons/mongodb-compass.webp',
	mysql: 'icons/mysql.svg',
	redis: 'icons/redis.webp',
	python: 'icons/python.svg',
	spigot: 'icons/spigot.webp',
	bukkit: 'icons/bukkit.webp',
	paper: 'icons/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.webp',
	nodejs: 'icons/nodejs.webp',
	typescript: 'icons/ts-logo-512.svg',
	velocity: 'icons/velocity.webp',
	minecraft: 'icons/minecraft.webp',
	kubernetes: 'icons/kubernetes-icon-color.svg',
	docker: 'icons/docker.webp',
	svelte: 'icons/Svelte_Logo.svg.webp',
	tailwind: 'icons/tailwindcss.svg',
	discord: 'icons/discord.svg',
	instagram: 'icons/instagram.webp',
	tiktok: 'icons/tiktok.webp',
	twitch: 'icons/twitch.svg',
	twitter: 'icons/twitter.svg',
	youtube: 'icons/youtube.webp',
	vscode: 'icons/vscode.webp',
	davinci: 'icons/davinci.webp',
	idea: 'icons/IntelliJ_IDEA_Icon.svg',
	flutter: 'icons/flutter.webp',
	backend: 'icons/backend.webp',
	frontend: 'icons/frondend.webp',
	rust: 'icons/rust.svg',
	consultation: 'icons/consultation.webp',
	x: 'icons/x.webp',
	reactjs: 'icons/React-icon.svg',
	spring: 'icons/spring.svg'
};

export default function getIcon(name: string) {
	return logos[name.toLowerCase()];
}
