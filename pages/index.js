import Image from 'next/image'
import Head from 'next/head';
import styles from '../styles/Home.module.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="abdi" />
      </Head>
      <div className={styles.container}>
        <h1 className="text-sky-900 mt-48 text-center font-extrabold text-5xl font-mammoth">
          Ethiopian Engineers Site......
        </h1>
      
      <div className='items-center text-center ml-56 mb-16'>
      {/* <Image src="/img1.jpg" width={534} height={534}></Image>
      <Image src="/img2.jpg" width={534} height={534}></Image>
      <Image src="/img3.jpg" width={534} height={534}></Image>
      <Image src="/img4.jpg" width={534} height={534}></Image> */}
      </div>
      </div>
    </>
  );
}
