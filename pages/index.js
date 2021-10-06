import Head from 'next/head'
import { useState, useEffect } from 'react'
import DataDisplay from '../components/DataDisplay'

export default function Home({ data }) {
  const [gasData, setGasData] = useState([])
  useEffect(() => {
    setGasData([
      {
        title: 'Average',
        price: data.average,
        wait: data.avgWait,
      },
      {
        title: 'Slow',
        price: data.safeLow,
        wait: data.safeLowWait,
      },
      {
        title: 'Fast',
        price: data.fast,
        wait: data.fastWait,
      },
      {
        title: 'Fastest',
        price: data.fastest,
        wait: data.fastestWait,
      },
    ])
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Eth Gas Station</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-start w-full flex-1 p-10'>
        <h1 className='text-4xl sm:text-5xl font-bold text-center'>
          Welcome to <span className='text-purple-600'>Eth Gas Station</span>
        </h1>

        <p className='mt-3 text-lg sm:text-2xl text-gray-500 text-center max-w-xl mx-auto'>
          Quickly see the recommended gas prices and wait times on the Ethereum
          Blockchain.
        </p>

        <div className='flex flex-col items-center justify-center max-w-lg mt-6 sm:mt-12 w-full space-y-4'>
          {gasData.map((item) => (
            <DataDisplay
              key={item.title}
              title={item.title}
              gasPrice={item.price}
              waitTime={item.wait}
            />
          ))}
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://twitter.com/deepwhitman'
          target='_blank'
          rel='noopener noreferrer'
        >
          Built by{' '}
          <span className='text-purple-600 font-bold ml-1'>Bilal Tahir</span>
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

  return {
    props: { data },
  }
}
