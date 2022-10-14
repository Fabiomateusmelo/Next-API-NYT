import Image from 'next/image'
import { useRouter } from 'next/router'
import gif from '../public/not-found.gif'
import Layout from '../components/Layout'

export default function NotFound() {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <div className="container">
      <Layout>
        <br />
        <a href="#" onClick={goBack}>
          Back
        </a>
        <div className="container">
          <h1>404 PAGE NOT FOUND</h1>
          <Image src={gif} alt="not found" />
          <style jsx>
            {`
              .container {
                height: 80vh;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
              },
              .black {
                background: black;
              }
            `}
          </style>
        </div>
      </Layout>
    </div>
  )
}
