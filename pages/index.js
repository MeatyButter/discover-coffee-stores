import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner';
import Card from '../components/card';

const handleOnBannerButtonClick = () => {
  console.log('Banner button clicked');
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerButtonClick} />
        <Image src="/static/hero-image.png" width={700} height={400} className={styles.heroImage}/>

        <Card name='DarkHorse Coffee' imgUrl='/static/hero-image.png' href="/coffee-store/darkhorse-coffee"/>
      </main>

    </div>
  )
}
