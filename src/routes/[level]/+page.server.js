import { levels } from '$lib/data/levels';

export function load({ params }) {
    const level = levels.find((level) => level.route === params.level)

    // need some error checking or something i guess

    return {
        level
    };
}