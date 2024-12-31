import { FC, useState } from 'react';
import styles from '../Share/Share.module.scss';
import shareIcon from 'C:/Users/97253/Documents/GitHub/Fullstack-Jun2024/06-React/01-basic/homePuzzle/matan/src/assets/send.png';


interface Props {
  initialShares: number;
}

const ShareButton: FC<Props> = ({ initialShares }) => {
  const [shares, setShares] = useState(initialShares);

  return (
    <div className={styles.button} onClick={() => setShares(shares + 1)}>
      <img src={shareIcon} alt="Share" className={styles.icon} />
      <span className={styles.text}>{shares}</span>
    </div>
  );
};


export default ShareButton;