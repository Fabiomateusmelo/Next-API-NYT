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
    <Layout>
      <div className="container">
        <h1>404 PAGE NOT FOUND</h1>
        <Image src={gif} alt="not found" />
        <a href="#" onClick={goBack}>
        Back
        </a>
        <style>
          {`
            .container {
              height: 80vh;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
          `}
        </style>
      </div>
    </Layout>
  )
}
