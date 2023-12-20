import styles from './Icon.module.css';

const Icon = ({
  patchIcon,
  tooltip,
}: {
  patchIcon: string;
  tooltip: string;
}) => <img className={styles.img} src={patchIcon} alt='img' title={tooltip} />;

Icon.displayName = 'Icon';
export default Icon;
