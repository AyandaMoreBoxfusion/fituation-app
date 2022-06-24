import Title from 'antd/lib/typography/Title'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/Nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const homeItems = [
    {key: 1, label: "Home", route: "/"}
  ]
  return (
      <>
      <Nav />
    <div className={styles.landing}>
        <Title style={{color: 'white'}}>Hello, welcome to Fituation! </Title>
        <p style={{color: 'white'}}> Want to take care of your physical health, but don't know where to start? </p>
           <p style={{color: 'white'}}> Fituation is here to make that easier for you!
        </p>
        <div className={styles.featuresContainer}>
           <div className={styles.features}>
               <img className={styles.pic} src='https://img.icons8.com/officel/344/curls-with-dumbbells.png' />
               <p>indicate where you're working out from</p>
            </div>
            <div className={styles.features}>
                <img className={styles.pic} src='https://img.icons8.com/external-microdots-premium-microdot-graphic/344/external-body-sport-fitness-vol4-microdots-premium-microdot-graphic-2.png'/>
                <p>choose what body part you want to train.</p>
            </div>
          <div className={styles.features}>
                <img className={styles.pic} src='https://img.icons8.com/clouds/344/dumbbell.png' />
                <p>exercise!</p>
            </div> 
        </div>
    </div>
    </>
  )
}

export default Home
