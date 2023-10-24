import { ProfileBanner } from '../../components/Atom/image-placeholder/image-placeholder'
import Navbar from '../../components/Organism/navbar/navbar'
import styles from './profile.module.css'

const Profile = () => {
    return(
        <div className={styles.profile}>

            <div className={styles.navbar}>
                <Navbar/>
            </div>

            <div className={styles.headerProfile}>
                <ProfileBanner new_className={styles.profileBanner}/>
                
            </div>

        </div>
    )
}

export default Profile