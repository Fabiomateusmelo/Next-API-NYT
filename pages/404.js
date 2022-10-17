import Image from 'next/image'
import { useRouter } from 'next/router'
import gif from '../public/not-found.gif'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function NotFound() {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <Layout>
      <div className="container">
        <h1>404 PAGE NOT FOUND</h1>
        <button href="#" onClick={goBack}>
          Back
        </button>
        <br />
        <Image src={gif} alt="not found" />
        <style>
          {`
            .container {
              margin-top: 1.6rem;
              height: 78vh;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              background: black;
            }
          `}
        </style>
      </div>
      <footer className={styles.footer404}>
        <a
          href="https://fabiomateusmelo.github.io/Portfolio-Fabio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>{'Fábio Melo'}</span>
        </a>
      </footer>
    </Layout>
  )
}
