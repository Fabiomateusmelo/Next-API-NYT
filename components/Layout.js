import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.code}>
      <Link href="/">
        <a>Home</a>
      </Link>
      {children}
    </div>
  )
}
