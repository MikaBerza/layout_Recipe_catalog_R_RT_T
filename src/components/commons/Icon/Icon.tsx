import styles from './Icon.module.css';

const Icon = ({ patch, tooltip }: { patch: string; tooltip: string }) => (
  <div className={styles.wrapper} data-tooltip={tooltip}>
    <img className={styles.img} src={patch} alt='img' />
  </div>
);

Icon.displayName = 'Icon';
export default Icon;
