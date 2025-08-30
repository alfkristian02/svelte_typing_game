import { levels } from '$lib/data/levels';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const level = levels.find((level) => level.route === params.level);

	if (!level) {
		throw error(404, `Level does not exist`);
	}

	return {
		level
	};
}
