import styles from './Icon.module.css';

const Icon = ({ patch, tooltip }: { patch: string; tooltip: string }) => (
  <img className={styles.img} src={patch} alt='img' title={tooltip} />
);

Icon.displayName = 'Icon';
export default Icon;
