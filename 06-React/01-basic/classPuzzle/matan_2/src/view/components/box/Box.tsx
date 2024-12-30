import styles from './Box.module.scss';
import image1 from '../../../assets/1.jpeg';
import image2 from '../../../assets/2.jpeg';


const Box = () => {
  return (
    <div className={styles.boxes}>
    <div className={styles.box}>
    <h2>Article 1</h2>
      <img src={image1} alt="" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus et officiis esse?</p>
      <h6>November 30 | 19:11</h6>
    </div>
    <div className={styles.box}>
    <h2>Article 2</h2>
      <img src={image2} alt="" />
      <p>Lorem ssssss, ipsum dolor sit amet consectetur adipisicing elit. Natus et officiis esse?</p>
      <h6>October 17| 15:32</h6>
    </div>
  </div>
  )
}

export default Box
