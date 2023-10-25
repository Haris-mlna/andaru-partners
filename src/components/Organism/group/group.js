import { group } from '../../../data/data'
import { CardGroup } from '../../Molekul/card/card'
import styles from './group.module.css'

const GroupGrid = () => {
  return (
    <div className={styles.grid}>
      {group.map((x) => (
        <CardGroup name={x.name} member={x.member}/>
      ))}
    </div>
  )
}

const GroupContainer = () => {
  return (
    <div>

      <GroupGrid/>
    </div>
  )
}

export {GroupContainer, GroupGrid}