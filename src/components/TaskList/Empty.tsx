import { ClipboardText } from '@phosphor-icons/react'
import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <ClipboardText size={48} />
      <p>
        <strong>You don't have any tasks registered yet</strong>
        Create tasks and organise your to-do items
      </p>
    </div>
  )
}