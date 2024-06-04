import Selector from '../Selector/Selector';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

function Controls({ onDisplay }) {
	return (
		<div className={styles.container}>
			<button className={styles.primary} onClick={onDisplay}>
				Generate
			</button>
			<Selector />
		</div>
	);
}

Controls.propTypes = {
	onDisplay: PropTypes.func.isRequired,
};

export default Controls;
