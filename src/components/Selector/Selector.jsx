import PropTypes from 'prop-types';
import styles from './Selector.module.css';

function Selector({ onSelect }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const sortingAlgorithm = e.target[0].value;
	};

	const handleChange = () => onSelect();

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label id="selector">Sorting</label>

			<select
				name="selectElement"
				onChange={handleChange}
				aria-labelledby="selector"
			>
				<option value="bubble">Bubble</option>
				<option value="selection">Selection</option>
				<option value="insertion">Insertion</option>
				<option value="quick">Quick</option>
				<option value="merge">Merge</option>
				<option value="heap">Heap</option>
				<option value="counting">Counting</option>
			</select>

			<button type="submit">Sort</button>
		</form>
	);
}

Selector.propTypes = {
	onSelect: PropTypes.func.isRequired,
};

export default Selector;
