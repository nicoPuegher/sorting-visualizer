import Animation from '../core/Animation.js';
import displayAnimations from '../helpers/displayAnimations.js';

const generateAnimations = (array) => {
	const copy = structuredClone(array);
	const len = copy.length;
	const animations = [];

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			// Push a comparison animation
			Animation.comparison(animations, j, j + 1);

			// Swap items
			if (copy[j].height > copy[j + 1].height) {
				[copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];

				// Push a swap animation
				Animation.swap(animations, j, j + 1);
			}
		}

		// Push a sorted animation
		Animation.sorted(animations, len - i - 1);
	}

	return animations;
};

const bubble = (state, setState) => {
	const animations = generateAnimations(state.chartArray);
	displayAnimations(setState, animations);
};

export default bubble;
