import Head from 'next/head'
import { useEffect } from 'react'

export default function Home({ data }) {
  useEffect(() => {
    console.log('data', data)
  })

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Eth Gas Station</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-start w-full flex-1 p-10'>
        {/* <img src='/icon.svg' alt='logo' className='h-10 w-10 mb-2 sm:hidden' /> */}
        {/* <div className='flex justify-center items-center'> */}
        <h1 className='text-4xl sm:text-5xl font-bold text-center'>
          Welcome to <span className='text-purple-600'>Eth Gas Station</span>
        </h1>
        {/* </div> */}

        <p className='mt-3 text-2xl text-gray-500'>
          Quickly see how much gas is going for on the blockchain.
        </p>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
          haha
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=${process.env.DEFI_PULSE_API_KEY}`
  )
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data },
  }
}
