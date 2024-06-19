class Animation {
	static comparison(animations, i, j) {
		animations.push({ type: 'comparison', indices: [i, j] });
	}

	static swap(animations, i, j) {
		animations.push({ type: 'swap', indices: [i, j] });
	}

	static sorted(animations, i) {
		animations.push({ type: 'sorted', index: i });
	}
}

export default Animation;
