import Head from "next/head"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Head>
        <title>Welcome</title>
      </Head>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get")
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
