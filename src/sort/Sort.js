import bubbleSort from './algorithms/bubble.js';
import selectionSort from './algorithms/selection.js';
import insertionSort from './algorithms/insertion.js';
import mergeSort from './algorithms/merge.js';
import quickSort from './algorithms/quick.js';
import heapSort from './algorithms/heap.js';
import countingSort from './algorithms/counting.js';

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

	static merge(state, setState) {
		return mergeSort(state, setState);
	}

	static quick(state, setState) {
		return quickSort(state, setState);
	}

	static heap(state, setState) {
		return heapSort(state, setState);
	}

	static counting(state, setState) {
		return countingSort(state, setState);
	}
}

export default Sort;
