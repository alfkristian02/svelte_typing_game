function get_random_number(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function fisher_yates_shuffle<T>(sequence: Array<T>){
	for (let i = sequence.length - 1; i > 0; i--) {
		let j = get_random_number(0, i);
		let temp = sequence[i];
		sequence[i] = sequence[j];
        sequence[j] = temp;
	}
}
