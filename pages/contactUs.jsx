import React from 'react'
import styles from "../styles/Home.module.css"
import Link from 'next/link'

export default function contactUs() {
  return (
    <div className={styles.container}>
      <h2 className="text-sky-900 mt-48 text-center font-extrabold text-5xl">Contact Information</h2>
     <div className='text-center text-2xl text-cyan-50'>

    <Link href="/"><p>Email: abdihalim487@gmail.com</p></Link> 
     <Link href="{phonecall.call}"><p>Phone: +251 955224175</p></Link> 
     </div>
      
    </div>
  )
}
