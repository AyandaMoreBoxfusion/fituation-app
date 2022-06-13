import React, { FC } from 'react'
import Link from 'next/link';
import styles from './styles.module.scss';


const NavBar : FC = ({}) => {
  return (
    <>
        <div className={styles.nav}>
          <Link href="/">
          <a><h1>Fituation</h1></a>
          </Link>
          <ul>
            <li>
              
              <a>About</a>
              
              
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
            <Link href="/signup">
              Sign Up 
              </Link>
            </li>

            <li>
            <Link href="/login">
              Login 
              </Link>
            </li>
          </ul>
        </div>
    </>
  )
}

export default NavBar