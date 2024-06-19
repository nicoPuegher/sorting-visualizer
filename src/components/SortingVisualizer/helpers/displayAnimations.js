import Transform from '../core/Transform.js';
import constants from '../../../data/constants.js';

const { SORTING_SPEED } = constants;

const displayAnimations = (setBarChart, animations) => {
	animations.forEach((animation, i) => {
		setTimeout(() => {
			setBarChart((b) => {
				const copy = structuredClone(b.array);

				// Reset the isCompared boolean value of every bar
				Transform.allToNotCompared(copy);

				isComparison(animation, copy);
				isSwap(animation, copy);
				isSorted(animation, copy);

				// Make the isSorted boolean value of every bar true
				Transform.allToSorted(animations, copy, i);

				return { ...b, array: copy };
			});
		}, i * SORTING_SPEED);
	});
};

// Make compared bars red
const isComparison = (animation, copy) => {
	if (animation.type === 'comparison') {
		const [j, k] = animation.indices;
		if (j !== undefined && k !== undefined) {
			copy[j].isCompared = true;
			copy[k].isCompared = true;
		}
	}
};

// Swap bars
const isSwap = (animation, copy) => {
	if (animation.type === 'swap') {
		const [j, k] = animation.indices;
		if (j !== undefined && k !== undefined) {
			[copy[j], copy[k]] = [copy[k], copy[j]];
		}
	}
};

// Make sorted bar purple
const isSorted = (animation, copy) => {
	if (animation.type === 'sorted') {
		const index = animation.index;
		if (index !== undefined) {
			copy[index].isSorted = true;
		}
	}
};

export default displayAnimations;
