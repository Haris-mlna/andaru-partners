import { H6tag, Ptag16 } from '../../components/Atom/text/text'
import styles from './about.module.css'
import {infoProfilee} from '../../../src/data/layout'

const About = () => {
    return(
        <div className={styles.about}>
            <H6tag text={'About'}/>
            <Ptag16 text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, corrupti.'}/>
            <hr />
            <H6tag text={'Info'}/>
            <br />
            {infoProfilee.icons.map((x, index) => (
              <div className={styles.info_Profile_map} key={index}>
                <i className={x.className}>{x.title}</i>
                <span className="nameofinfo">{x.name}</span>
              </div>
            ))}
        </div>
        
    )
}

export default About