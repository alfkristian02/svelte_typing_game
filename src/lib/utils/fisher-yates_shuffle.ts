function get_random_number(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fisher_yates_shuffle<T>(sequence: Array<T>){
	const copy = [...sequence];
	for (let i = copy.length - 1; i > 0; i--) {
		let j = get_random_number(0, i);
		let temp = copy[i];
		copy[i] = copy[j];
        copy[j] = temp;
	}
	return copy;
}
