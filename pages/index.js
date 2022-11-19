import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomePage } from "../components"

export default function Home() {
  return (
    <div className='bg-gray-100 border-b-2 border-transparent'>
    <HomePage />
    </div>
  )
}
