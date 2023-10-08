const logos: {
	[key: string]: string;
} = {
	fabric: 'icons/fabric.png',
	gradle: 'icons/gradle.svg',
	java: 'icons/java.svg',
	mongodb: 'icons/mongodb-compass.png',
	mysql: 'icons/mysql.svg',
	redis: 'icons/redis.png',
	python: 'icons/python.svg',
	spigot: 'icons/spigot.png',
	bukkit: 'icons/bukkit.png',
	paper: 'icons/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png',
	nodejs: 'icons/nodejs.png',
	typescript: 'icons/ts-logo-512.svg',
	velocity: 'icons/velocity.png',
	minecraft: 'icons/minecraft.png',
	kubernetes: 'icons/kubernetes-icon-color.svg',
	docker: 'icons/docker.png',
	svelte: 'icons/Svelte_Logo.svg.png',
	tailwind: 'icons/tailwindcss.svg',
	discord: 'icons/discord.svg',
	instagram: 'icons/instagram.png',
	tiktok: 'icons/tiktok.png',
	twitch: 'icons/twitch.svg',
	twitter: 'icons/twitter.svg',
	youtube: 'icons/youtube.png',
	vscode: 'icons/vscode.png',
	davinci: 'icons/davinci.png',
	idea: 'icons/IntelliJ_IDEA_Icon.svg',
	flutter: 'icons/flutter.png',
	backend: 'icons/backend.png',
	frontend: 'icons/frondend.png',
	rust: 'icons/rust.svg',
	consultation: 'icons/consultation.png',
	x: 'icons/x.png',
	reactjs: 'icons/React-icon.svg',
	spring: 'icons/spring.svg'
};

export default function getIcon(name: string) {
	return logos[name.toLowerCase()];
}
