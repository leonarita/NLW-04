import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompleteChanllenges.module.css'

export function CompleteChanllenges() {

    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}

