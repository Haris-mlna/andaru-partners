import { PhotoSidebar } from '../../Atom/image-placeholder/image-placeholder'
import { H6tag } from '../../Atom/text/text'
import styles from './right.module.css'

const SidebarGallery = () => {

  const total = [
    {
      no : 1
    },
    {
      no : 2
    },
    {
      no : 3
    },
    {
      no : 4
    },
    {
      no : 5
    },
    {
      no : 6
    },
  ]

  return (
    <div className={styles.container_gallery}>
      <H6tag new_className={styles.title_gallery} text={'Photo'}/>
      <div className={styles.container_photo}>
        {total.map((total) => (
          <PhotoSidebar key={total.no} new_className={styles.img_gallery}/>
        ))}
      </div>
    </div>
  )
}

export {
  SidebarGallery
}