import bubbleSort from '../algorithms/bubble.js';
import selectionSort from '../algorithms/selection.js';
import insertionSort from '../algorithms/insertion.js';
import quickSort from '../algorithms/quick.js';

class Sort {
	static bubble(state, setState) {
		return bubbleSort(state, setState);
	}

	static selection(state, setState) {
		return selectionSort(state, setState);
	}

	static insertion(state, setState) {
		return insertionSort(state, setState);
	}

	static quick(state, setState) {
		return quickSort(state, setState);
	}
}

export default Sort;
