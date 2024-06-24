import Transform from '../core/Transform.js';
import constants from '../../../data/constants.js';
import { currentAnimationToken } from './setNewDimensions.js';

const { SORTING_SPEED } = constants;

let timeouts = [];

const displayAnimations = (setState, animations) => {
	// Use current animation token
	const animationToken = currentAnimationToken;

	// Clear previous timeouts and remove them all
	timeouts.forEach((timeout) => clearTimeout(timeout));
	timeouts = [];

	animations.forEach((animation, i) => {
		// Generate a timeout id for each animation
		const timeoutId = setTimeout(() => {
			// Abort if the token changed
			if (animationToken !== currentAnimationToken) return;

			setState((prevState) => {
				const copyArray = structuredClone(prevState.chartArray);

				// If the array is empty, abort the animation
				if (!copyArray || copyArray.length == 0) return prevState;

				// Reset the isCompared boolean value of every bar after each animation
				Transform.allToNotCompared(copyArray);

				// Check if the current animation is a compared, swapped or sorted type and call its animation
				isCompared(animation, copyArray);
				isSwapped(animation, copyArray);
				isSorted(animation, copyArray);

				// Make the isSorted boolean value of every bar true after all animations
				Transform.allToSorted(animations, copyArray, i);

				return {
					...prevState,
					isAnimationActive: true,
					chartArray: copyArray,
				};
			});
		}, i * SORTING_SPEED);

		// Track timeouts IDs
		timeouts.push(timeoutId);
	});
};

// Make compared bars red
const isCompared = (animation, copyArray) => {
	if (animation.type === 'compared') {
		const [j, k] = animation.indices;

		if (j !== undefined && k !== undefined) {
			copyArray[j].isCompared = true;
			copyArray[k].isCompared = true;
		}
	}
};

// Swap bars
const isSwapped = (animation, copyArray) => {
	if (animation.type === 'swapped') {
		const [j, k] = animation.indices;

		if (j !== undefined && k !== undefined) {
			[copyArray[j], copyArray[k]] = [copyArray[k], copyArray[j]];
		}
	}
};

// Make sorted bar purple
const isSorted = (animation, copyArray) => {
	if (animation.type === 'sorted') {
		const index = animation.index;

		if (index !== undefined) {
			copyArray[index].isSorted = true;
		}
	}
};

export default displayAnimations;
