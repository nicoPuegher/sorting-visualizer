import PropTypes from 'prop-types';

import styles from './Selector.module.css';

// Allow user to select an algorithm and disable it when the sorting animation is active
function Selector({ isAnimationActive, onSubmit }) {
	// Call Sort class in SortingVisualizer component with the selected algorithm
	const handleSubmit = (e) => {
		e.preventDefault();

		const algorithm = e.target[0].value;
		onSubmit(algorithm);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label id="selector">Sorting</label>

			<select
				aria-labelledby="selector"
				name="selectElement"
				disabled={isAnimationActive}
			>
				<option value="bubble">Bubble</option>
				<option value="selection">Selection</option>
				<option value="insertion">Insertion</option>
				<option value="quick">Quick</option>
			</select>

			<button type="submit" disabled={isAnimationActive}>
				Sort
			</button>
		</form>
	);
}

Selector.propTypes = {
	isAnimationActive: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Selector;
