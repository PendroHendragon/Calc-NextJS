import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calc from '../src/components/calcContainer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My NEXT Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.calcu}>
        <h1>My calc</h1>
        <Calc />
      </div>

  

    </div>
  )
}
