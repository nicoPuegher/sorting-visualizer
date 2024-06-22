import Animation from '../core/Animation.js';
import displayAnimations from '../helpers/displayAnimations.js';

const generateAnimations = (chartArray) => {
	const copyArray = structuredClone(chartArray);
	const len = copyArray.length;
	const animations = [];

	for (let i = 0; i < len - 1; i++) {
		let smallest = i;

		for (let j = i + 1; j < len; j++) {
			// Push a comparison animation
			Animation.compared(animations, j, smallest);

			// Update which bar is the smallest
			if (copyArray[j].height < copyArray[smallest].height) {
				smallest = j;
			}
		}

		// Swap items
		if (smallest !== i) {
			[copyArray[i], copyArray[smallest]] = [
				copyArray[smallest],
				copyArray[i],
			];

			// Push a swap animation
			Animation.swapped(animations, i, smallest);
		}

		// Push a sorted animation
		Animation.sorted(animations, i);
	}

	// Push a sorted animation for the last item
	Animation.sorted(animations, len - 1);

	return animations;
};

const selection = (chartArray, setState) => {
	const animations = generateAnimations(chartArray);
	displayAnimations(setState, animations);
};

export default selection;
