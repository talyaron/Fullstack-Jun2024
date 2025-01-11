import { FC } from "react"
import styles from "./ProfileImg.module.scss"

interface Props{
    img : string
}

const ProfileImg: FC<Props> = ({img}) => {
  return (
    <div className={styles.profileImg}>
      <img src={img || 'default-profile.png'} alt="Profile" />
    </div>
  )
}

export default ProfileImg