import styles from './Selector.module.css';

function Selector() {
	return (
		<form className={styles.form}>
			<label id="selector">Sorting</label>

			<select aria-labelledby="selector">
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

export default Selector;
