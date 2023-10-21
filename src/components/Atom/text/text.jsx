import styles from './text.module.css'

const Ptag16 = ({text}) => {
    return <p className={styles.tagP16}>{text}</p>
}
const Ptag18 = ({text}) => {
    return <p className={styles.tagP18}>{text}</p>
}

const Atag181 = ({text, link}) => {
    return <a href={link}  className={styles.tagA181}>{text}</a>
}

const Atag182 = ({text ,link}) => {
    return <a href={link} className={styles.tagA181}>{text}</a>
}

const Atag16 = ({text ,link}) => {
    return <a href={link} className={styles.tagA16}>{text}</a>
}

const H4tag = ({text}) => {
    return <h4 className={styles.h4tag}>{text}</h4>
}

const H6tag = ({text}) => {
    return <h6 className={styles.h6tag}>{text}</h6>
}

export {
    Ptag16, Ptag18, Atag181, Atag182, Atag16, H4tag, H6tag
}