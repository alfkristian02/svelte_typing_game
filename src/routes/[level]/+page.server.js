import { levels } from '$lib/data/levels';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const level = levels.find((level) => level.route === params.level);

	// need some error checking or something i guess
	if (!level) {
		throw error(404, `Level does not exist`);
	}

	return {
		level
	};
}
