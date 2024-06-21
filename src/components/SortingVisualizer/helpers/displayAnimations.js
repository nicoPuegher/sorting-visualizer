import Transform from '../core/Transform.js';
import constants from '../../../data/constants.js';
import { currentAnimationToken } from './setNewDimensions.js';

const { SORTING_SPEED } = constants;

let timeouts = [];

const displayAnimations = (setBarChart, animations) => {
	// Use current animation token
	const animationToken = currentAnimationToken;

	timeouts.forEach((timeout) => clearTimeout(timeout));
	timeouts = [];

	animations.forEach((animation, i) => {
		const timeoutId = setTimeout(() => {
			// Abort if the token changed
			if (animationToken !== currentAnimationToken) return;

			setBarChart((b) => {
				const copy = structuredClone(b.array);

				// If the array is empty, abort the animation
				if (!copy || copy.length == 0) return b;

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

		// Track timeouts IDs
		timeouts.push(timeoutId);
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
