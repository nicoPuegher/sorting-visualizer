import bubbleSort from '../algorithms/bubble.js';
import selectionSort from '../algorithms/selection.js';
import insertionSort from '../algorithms/insertion.js';
import quickSort from '../algorithms/quick.js';

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

	static quick(barChart, setBarChart) {
		return quickSort(barChart, setBarChart);
	}
}

export default Sort;
