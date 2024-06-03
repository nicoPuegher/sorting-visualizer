const customStyles = (bars, styles) => {
	return bars.display
		? `${styles.container} ${styles.bars}`
		: `${styles.container}`;
};

export default customStyles;
