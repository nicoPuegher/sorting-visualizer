import Animation from '../core/Animation.js';
import displayAnimations from '../helpers/displayAnimations.js';

// Generate an array of animations for bubble sort
const generateAnimations = (chartArray) => {
	const copyArray = structuredClone(chartArray);
	const len = copyArray.length;
	const animations = [];

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			// Push a comparison animation
			Animation.compared(animations, j, j + 1);

			// Swap items
			if (copyArray[j].height > copyArray[j + 1].height) {
				[copyArray[j], copyArray[j + 1]] = [
					copyArray[j + 1],
					copyArray[j],
				];

				// Push a swap animation
				Animation.swapped(animations, j, j + 1);
			}
		}

		// Push a sorted animation
		Animation.sorted(animations, len - i - 1);
	}

	return animations;
};

// Animate the sorting algorithm updating the state with the generated animations
const bubble = (chartArray, setState) => {
	const animations = generateAnimations(chartArray);
	displayAnimations(setState, animations);
};

export default bubble;
