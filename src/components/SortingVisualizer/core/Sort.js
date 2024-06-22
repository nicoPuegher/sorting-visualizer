import bubbleSort from '../algorithms/bubble.js';
import selectionSort from '../algorithms/selection.js';
import insertionSort from '../algorithms/insertion.js';
import quickSort from '../algorithms/quick.js';

class Sort {
	static bubble(chartArray, setState) {
		return bubbleSort(chartArray, setState);
	}

	static selection(chartArray, setState) {
		return selectionSort(chartArray, setState);
	}

	static insertion(chartArray, setState) {
		return insertionSort(chartArray, setState);
	}

	static quick(chartArray, setState) {
		return quickSort(chartArray, setState);
	}
}

export default Sort;
