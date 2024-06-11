import bubbleSort from './algorithms/bubble.js';
import selectionSort from './algorithms/selection.js';
import insertionSort from './algorithms/insertion.js';
import mergeSort from './algorithms/merge.js';
import quickSort from './algorithms/quick.js';
import heapSort from './algorithms/heap.js';
import countingSort from './algorithms/counting.js';

class Sort {
	bubble(state, setState) {
		return bubbleSort(state, setState);
	}

	selection(array) {
		return selectionSort(array);
	}

	insertion(array) {
		return insertionSort(array);
	}

	merge(array) {
		return mergeSort(array);
	}

	quick(array) {
		return quickSort(array);
	}

	heap(array) {
		return heapSort(array);
	}

	counting(array) {
		return countingSort(array);
	}
}

export default Sort;
