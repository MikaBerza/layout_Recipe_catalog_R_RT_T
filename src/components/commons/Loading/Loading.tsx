import { BounceLoader } from 'react-spinners';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <BounceLoader size={100} color='#3D642D' />
    </div>
  );
};

Loading.displayName = 'Loading';
export default Loading;
