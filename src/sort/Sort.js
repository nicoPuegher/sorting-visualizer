import bubbleSort from './algorithms/bubble.js';
import selectionSort from './algorithms/selection.js';
import insertionSort from './algorithms/insertion.js';
import mergeSort from './algorithms/merge.js';
import quickSort from './algorithms/quick.js';
import heapSort from './algorithms/heap.js';
import countingSort from './algorithms/counting.js';

class Sort {
	static bubble(barChart, setBarChart) {
		return bubbleSort(barChart, setBarChart);
	}

	static selection(barChart, setBarChart) {
		return selectionSort(barChart, setBarChart);
	}

	static insertion(barChart, setBarChart) {
		return insertionSort(barChart, setBarChart);
	}

	static merge(barChart, setBarChart) {
		return mergeSort(barChart, setBarChart);
	}

	static quick(barChart, setBarChart) {
		return quickSort(barChart, setBarChart);
	}

	static heap(barChart, setBarChart) {
		return heapSort(barChart, setBarChart);
	}

	static counting(barChart, setBarChart) {
		return countingSort(barChart, setBarChart);
	}
}

export default Sort;
