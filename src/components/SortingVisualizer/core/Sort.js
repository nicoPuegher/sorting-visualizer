import bubbleSort from '../algorithms/bubble.js';
import selectionSort from '../algorithms/selection.js';

class Sort {
	static bubble(barChart, setBarChart) {
		return bubbleSort(barChart, setBarChart);
	}

	static selection(barChart, setBarChart) {
		return selectionSort(barChart, setBarChart);
	}
}

export default Sort;
