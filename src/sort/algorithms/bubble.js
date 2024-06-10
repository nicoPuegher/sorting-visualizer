const bubble = (state, setState) => {
	const array = [...state.arr];
	let jLen = array.length;
	let swapped;
	const animations = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < jLen - 1; j++) {
			animations.push([j, j + 1, false, false]);
			if (array[j].height > array[j + 1].height) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				animations[animations.length - 1][2] = true;
			}
		}
		animations[animations.length - 1][3] = true;
		jLen--;
	}
};

export default bubble;
