import { requestContact } from '../../../data/data'
import { RequestAvatar } from '../../Atom/image-placeholder/image-placeholder'
import { H6tag } from '../../Atom/text/text'
import styles from './contact.module.css'

const RequestContact = () => {
  return (
    <div className={styles.request_contact}>
      <H6tag new_className={styles.title_request} text={'Request'}/>
      {requestContact.people.map((people, index) => (
        <div key={index}>
          <div className={styles.req_container}>
            <RequestAvatar new_className={styles.avatar_req}/>
            <div className={styles.req_info}>

            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  )
}

const ContactOnly = () => {
  return (
    <div className={styles.contact_only}>
    
    </div>
  )
}

const SidebarContact = () => {
  return(
    <div className={styles.sidebar_contact}>
      <RequestContact/>
      <ContactOnly/>
    </div>
  )
}

export {
  RequestContact,
  ContactOnly,
  SidebarContact
}