import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const links = [
    {
      title: 'Top Stories',
      desc: 'Read articles currently on the homepage of the New York Times',
      path: '/news/top-stories'
    },
    {
      title: 'Popular',
      desc: 'Read the most popular articles on the New York Times',
      path: '/news/popular'
    },
    {
      title: 'Sections',
      desc: 'Get an up-to-the-minute stream of published articles',
      path: '/sections'
    }
  ]
  const [query, getQuery] = useState()
  const router = useRouter()
  const handleOnChange = e => getQuery(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    router.push(`/search/${query}`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>News Feed</h1>

        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            onChange={handleOnChange}
            placeholder="Search..."
            name="search"
          />
          <button type="submit">
            Search
          </button>
        </form>

        <div className={styles.grid}>
          {links.map(link => {
            return (
              <Link key={link.path} href={link.path}>
                <a className={styles.card}>
                  <h2>{link.title} &rarr;</h2>
                  <p>{link.desc}</p>
                </a>
              </Link>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
