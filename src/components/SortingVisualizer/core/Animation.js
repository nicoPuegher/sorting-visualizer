class Animation {
	static compared(animations, i, j) {
		animations.push({ type: 'compared', indices: [i, j] });
	}

	static swapped(animations, i, j) {
		animations.push({ type: 'swapped', indices: [i, j] });
	}

	static sorted(animations, i) {
		animations.push({ type: 'sorted', index: i });
	}
}

export default Animation;
