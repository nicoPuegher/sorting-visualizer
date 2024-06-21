import Animation from '../core/Animation.js';
import displayAnimations from '../helpers/displayAnimations.js';

const generateAnimations = (array) => {
	const copy = structuredClone(array);
	const len = copy.length;
	const animations = [];

	for (let i = 1; i < len; i++) {
		let temporal = copy[i];
		let j = i - 1;

		// Push a comparison animation
		Animation.comparison(animations, j, i);

		// Swap items
		while (j >= 0 && copy[j].height > temporal.height) {
			copy[j + 1] = copy[j];
			copy[j] = temporal;

			// Push a comparison and swap animation
			Animation.comparison(animations, j + 1, j);
			Animation.swap(animations, j + 1, j);

			j--;
		}
	}

	return animations;
};

const insertion = (state, setState) => {
	const animations = generateAnimations(state.charArray);
	displayAnimations(setState, animations);
};

export default insertion;
