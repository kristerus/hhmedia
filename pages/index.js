import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Footbar from '../components/Footbar'
import About from '../components/About'
import Prices from '../components/Prices'
import Gallery from '../components/Gallery'
import Main from "../components/Home"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>H&H Media - Social Media Marketing Agency - Content Creating - Website Development</title>
        <meta name="description" content="H&H Media is a premier social media marketing agency dedicated to providing comprehensive and tailored digital solutions for businesses of all sizes. With a keen focus on content creation, social media marketing, and website development, H&H Media empowers brands to thrive in the ever-evolving digital landscape. Our team of seasoned experts crafts engaging and impactful content strategies, designs compelling websites, and implements data-driven social media campaigns to effectively meet the unique needs and goals of each client. At H&H Media, we are committed to delivering exceptional results and helping businesses establish a robust online presence that drives growth and success."/>
        <link rel="icon" href="/12.png" />

      </Head>


      <main className={styles.main}>
        <Navbar />
        <section className='home' id="home">
          <Main />
        </section>
        <section className='about' id="about">
          <About />
        </section>
        <section className='pricing'>
          <Prices />
        </section>
        <section className='gallery' id="gallery">
          <Gallery />
        </section>


      </main>

      <footer className={styles.footer} id="contacts">
        <Footbar />
      </footer>
    </div>
  )
}
