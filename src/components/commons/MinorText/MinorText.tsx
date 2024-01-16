import React from 'react';
import styles from './MinorText.module.css';

const MinorText = React.memo(({ str }: { str: string }) => {
  return <span className={styles.text}>{str}</span>;
});

MinorText.displayName = 'MinorText';
export default MinorText;
