import styles from './text.module.css'

const Ptag16 = ({text , new_className}) => {
    return <p className={`${styles.tagP16} ${new_className}`}>{text}</p>
}
const Ptag18 = ({text , new_className}) => {
    return <p className={`${styles.tagP18} ${new_className}`}>{text}</p>
}

const Atag181 = ({text, link, new_className}) => {
    return <a href={link}  className={`${styles.tagA181} ${new_className}`}>{text}</a>
}

const Atag182 = ({text ,link , new_className}) => {
    return <a href={link} className={`${styles.tagA181} ${new_className}`}>{text}</a>
}

const Atag16 = ({text ,link, new_className}) => {
    return <a href={link} className={`${styles.tagA16} ${new_className} `}>{text}</a>
}

const H4tag = ({text, new_className}) => {
    return <h4 className={`${styles.h4tag} ${new_className}`}>{text}</h4>
}

const H6tag = ({text, new_className}) => {
    return <h6 className={`${styles.h6tag} ${new_className}`}>{text}</h6>
}

const Span16 = ({text}) => {
    return <span className={styles.spanTag}>{text}</span>
}

export {
    Ptag16, Ptag18, Atag181, Atag182, Atag16, H4tag, H6tag, Span16
}