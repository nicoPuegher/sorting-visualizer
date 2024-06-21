import PropTypes from 'prop-types';

import styles from './Selector.module.css';

function Selector({ barChart, onSubmit }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		const sortingAlgorithm = e.target[0].value;
		onSubmit(sortingAlgorithm);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label id="selector">Sorting</label>

			<select aria-labelledby="selector" name="selectElement">
				<option value="bubble">Bubble</option>
				<option value="selection">Selection</option>
				<option value="insertion">Insertion</option>
				<option value="quick">Quick</option>
			</select>

			<button type="submit" disabled={barChart.isAnimationGoing}>
				Sort
			</button>
		</form>
	);
}

Selector.propTypes = {
	barChart: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Selector;
