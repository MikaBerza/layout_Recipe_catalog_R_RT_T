import React from 'react';
import { splitSentenceWithLineBreak } from '../../../utils/modules';
import styles from './Recipe.module.css';

const Recipe = React.memo(({ str }: { str: string }) => {
  const splitStr = React.useMemo(() => splitSentenceWithLineBreak(str), [str]);

  return (
    <div className={styles.text}>
      {splitStr.map((item, index) => (
        <p className={styles.line} key={index}>
          {item}
        </p>
      ))}
    </div>
  );
});

Recipe.displayName = 'Recipe';
export default Recipe;
