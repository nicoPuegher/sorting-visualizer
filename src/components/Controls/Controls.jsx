import Selector from '../Selector/Selector';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

function Controls({ onDisplay, onSubmit, onSelect }) {
	return (
		<div className={styles.container}>
			<button className={styles.primary} onClick={onDisplay}>
				Generate
			</button>
			<Selector onSubmit={onSubmit} onSelect={onSelect} />
		</div>
	);
}

Controls.propTypes = {
	onDisplay: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default Controls;
