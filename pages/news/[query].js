import Layout from '../../components/Layout'
import { search } from '../api'
import styles from '../../styles/Home.module.css'

export default function News({ results, query }) {
  return (
    <Layout>
      <h1 className={styles.title}>Search: {query}</h1>
      <ul>
        {results.map(result => {
          return (
            <p className={styles.card} key={result.uri}>
              <a href={result.url} target="_blank" rel="noopener norefferer">
                {result.title}
              </a>
            </p>
          )
        })}
      </ul>
    </Layout>
  )
}

// to register for a new New York Times API KEY, visit :
const API_KEY = 'MVJmN0JjT80pqtduXAtyDekmw4BTTl7P'
export async function getServerSideProps({ params }) {
  // The value of the `props` key will be
  //  passed to the `Home` component
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`
  const results = await search(URL)
  return {
    props: {
      results,
      query: params.query
    }
  }
}
