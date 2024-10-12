import Head from 'next/head'
import styles from './Teste2.module.css'

export default function Teste2() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.overlay}>
          <h1>Welcome to the Homepage</h1>
        </div>
      </div>
    </div>
  )
}
