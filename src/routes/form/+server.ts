import type { RequestHandler } from './$types';
import { Webhook, MessageBuilder } from 'discord-webhook-node';

const hook = new Webhook({
	url: process.env.DISCORD_WEBHOOK as string,
	throwErrors: true,
	retryOnLimit: true
});
hook.setUsername('Form Bot');

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, message } = await request.json();

	const embed = new MessageBuilder()
		.setTitle('New message')
		.addField('Name', `${name}`, true)
		.addField('Email', `${email}`, true)
		.addField('Message', `${message}`, false)
		.addField('IP', `${request.headers.get('x-real-ip')}`, true)
		.addField('Browser', `${request.headers.get('User-Agent')}`, true)
		.setColor(45300)
		.setTimestamp();

	try {
		await hook.send(embed);
	} catch (e) {
		console.error(e);
		return new Response(JSON.stringify({ body: 'error', status: 500 }));
	}

	return new Response(JSON.stringify({ body: 'successful' }));
};
