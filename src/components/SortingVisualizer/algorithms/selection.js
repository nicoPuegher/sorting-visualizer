import Animation from '../core/Animation.js';
import displayAnimations from '../helpers/displayAnimations.js';

const generateAnimations = (array) => {
	const copy = structuredClone(array);
	const len = copy.length;
	const animations = [];

	for (let i = 0; i < len - 1; i++) {
		let smallest = i;

		for (let j = i + 1; j < len; j++) {
			// Push a comparison animation
			Animation.comparison(animations, j, smallest);

			// Update which bar is the smallest
			if (copy[j].height < copy[smallest].height) {
				smallest = j;
			}
		}

		// Swap items
		if (smallest !== i) {
			[copy[i], copy[smallest]] = [copy[smallest], copy[i]];

			// Push a swap animation
			Animation.swap(animations, i, smallest);
		}

		// Push a sorted animation
		Animation.sorted(animations, i);
	}

	// Push a sorted animation for the last item
	Animation.sorted(animations, len - 1);

	return animations;
};

const selection = (barChart, setBarChart) => {
	const animations = generateAnimations(barChart.array);
	displayAnimations(setBarChart, animations);
};

export default selection;
