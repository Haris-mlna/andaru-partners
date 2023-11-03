import styles from './contact.module.css'

// Atom
import { ButtonDanger, ButtonPrimary } from '../../Atom/button/button'
import { IconsFA } from '../../Atom/icons/icons'
import { ContactAvatar, RequestAvatar, TigaRoda } from '../../Atom/image-placeholder/image-placeholder'
import { Atag16, H6tag, Span12 } from '../../Atom/text/text'

// Mock-up Data
import { contactPeople, requestContact } from '../../../data/data'

const RequestContact = () => {
  return (
    <div className={styles.request_contact}>
      <H6tag new_className={styles.title_request} text={'Request'}/>
      {requestContact.people.map((people, index) => (
        <div className={styles.req_card} key={index}>
          <div className={styles.req_container}>
            <div className={styles.avatar_container}>
              <RequestAvatar new_className={styles.avatar_req}/>
            </div>
            <div className={styles.req_info}>
              <Atag16 text={people.name}/>
              <div className={styles.mutual}>
                <TigaRoda/>
                <Span12 new_className={styles.mutual_text} text={people.mutual_friend}/>
              </div>
            </div>
          </div>
          <div className={styles.button_container_req}>
            <ButtonPrimary new_className={styles.button_req_margin} text={'Confirm'}/>
            <ButtonDanger text={'Delete'}/>
           
          </div>
        </div>
      ))}
    </div>
  )
}

const ContactOnly = () => {
  return (
    <div className={styles.contact_only}>
      <H6tag text={'Contact'} new_className={styles.title_contact}/>
      {contactPeople.map((people, index)=> (
        <div key={index}  className={styles.contact}>
          <ContactAvatar/>
          <Atag16 new_className={styles.contact_name} text={people.name}/>
          <IconsFA title={'more_horiz'}/>
        </div>
      ))}
    </div>
  )
}

const SidebarContact = () => {
  return(
    <div className={styles.sidebar_contact} id='contact-res'>
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