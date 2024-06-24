import { approaches } from '../../data'
import { ApproachCard } from '../../entities/ApproachCard/ApproachCard'
import styles from './ApproachCards.module.scss'

export const ApproachCards = () => {
  return (
    <div className={styles.approachCards}>
      {approaches.map((approach, idx) => (
        <ApproachCard
          id={idx + 1}
          title={approach.title}
          text={approach.text}
          icon={approach.icon}
        />
      ))}
    </div>
  )
}
