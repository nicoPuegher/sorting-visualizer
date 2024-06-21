import Selector from '../Selector/Selector';

import PropTypes from 'prop-types';

import styles from './Controls.module.css';

function Controls({ barChart, onDisplay, onSubmit }) {
	return (
		<div className={styles.container}>
			<button onClick={onDisplay}>Generate</button>
			<Selector barChart={barChart} onSubmit={onSubmit} />
		</div>
	);
}

Controls.propTypes = {
	barChart: PropTypes.object.isRequired,
	onDisplay: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Controls;
