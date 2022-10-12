import Layout from '../../components/Layout'
import styles from '../../styles/Home.module.css'

export default function News({ results }) {
  return (
    <Layout>
      <h1 className={styles.title}>Top Stories</h1>
      <ul>
        {results.map(result => {
          return (
            <p className={styles.grid} key={result.uri}>
              <a
                className={styles.cardd}
                href={result.url}
                target="_blank"
                rel="noopener norefferer"
              >
                {result.updated_date} &rarr; {result.title}
              </a>
            </p>
          )
        })}
      </ul>
    </Layout>
  )
}

const API_KEY = 'MVJmN0JjT80pqtduXAtyDekmw4BTTl7P'
export async function getStaticProps() {
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data.results)
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results: data.results
    }
  }
}
