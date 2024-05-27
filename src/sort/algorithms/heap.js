let len;

const heapify = (array, i) => {
	const left = i * 2 + 1;
	const right = i * 2 + 2;
	let largest = i;

	if (left < len && array[left] > array[largest]) {
		largest = left;
	}

	if (right < len && array[right] > array[largest]) {
		largest = right;
	}

	if (largest !== i) {
		[array[i], array[largest]] = [array[largest], array[i]];
		heapify(array, largest);
	}
};

const heap = (array) => {
	len = array.length;
	maxHeap(array);

	while (len > 1) {
		[array[0], array[len - 1]] = [array[len - 1], array[0]];
		len--;
		heapify(array, 0);
	}

	return array;
};

const maxHeap = (array) => {
	const middle = Math.floor(len / 2) - 1;

	for (let i = middle; i >= 0; i--) {
		heapify(array, i);
	}
};

export default heap;
