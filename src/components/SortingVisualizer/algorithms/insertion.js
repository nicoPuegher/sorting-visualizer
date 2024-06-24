import Animation from '../core/Animation.js';
import displayAnimations from '../helpers/displayAnimations.js';

// Generate an array of animations for insertion sort
const generateAnimations = (chartArray) => {
	const copyArray = structuredClone(chartArray);
	const len = copyArray.length;
	const animations = [];

	for (let i = 1; i < len; i++) {
		let temporal = copyArray[i];
		let j = i - 1;

		// Push a comparison animation
		Animation.compared(animations, j, i);

		// Swap items
		while (j >= 0 && copyArray[j].height > temporal.height) {
			copyArray[j + 1] = copyArray[j];
			copyArray[j] = temporal;

			// Push a comparison and swap animation
			Animation.compared(animations, j + 1, j);
			Animation.swapped(animations, j + 1, j);

			j--;
		}
	}

	return animations;
};

// Animate the sorting algorithm updating the state with the generated animations
const insertion = (chartArray, setState) => {
	const animations = generateAnimations(chartArray);
	displayAnimations(setState, animations);
};

export default insertion;
