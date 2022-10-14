import Image from 'next/image'
import { useRouter } from 'next/router'
import gif from '../public/not-found.gif'
import Layout from '../components/Layout'

export default function NotFound500() {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <Layout>
      <div className="container">
        <h1>500 SERVER ERROR</h1>
        <button href="#" onClick={goBack}>
          Back
        </button>
        <Image src={gif} alt="not found" />
        <style>
          {`
            .container {
              height: 85vh;
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
