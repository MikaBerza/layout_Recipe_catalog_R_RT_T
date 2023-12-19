import styles from './TheadIcon.module.css';

const TheadIcon = ({
  patchIcon,
  tooltip,
}: {
  patchIcon: string;
  tooltip: string;
}) => (
  <img className={styles.logo} src={patchIcon} alt='logo' title={tooltip} />
);

TheadIcon.displayName = 'TheadIcon';
export default TheadIcon;
