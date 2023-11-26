/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from 'react'

import Link from 'next/link'

// import styles from '../navbar/navbar.module.css'
import styles from '../navbar.module.css'

const navbar = () => {

    const[activeLink, setActiveLink] = useState('inicio');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };


  return (
    <div className='mt-5'>
        <div>
            <nav className='d-flex justify-content-evenly'>
            
            {/* <Link href="/premier">Dashboard</Link> */}
            <a 
                    onClick={() => handleLinkClick('inicio')}
                    className={`${styles.navLink} ${styles.navBarLink}  
                    ${activeLink === 'inicio' &&  styles.active}`} 
                    href="/#"
                >Inicio</a>
                <a 
                    onClick={() => handleLinkClick('premier')}
                    className={`${styles.navLink} ${styles.navBarLink}  
                    ${activeLink === 'premier' &&  styles.active}`} 
                    href="/premier"
                >Premier</a>
                <a 
                    onClick={() => handleLinkClick('primerEspecial')}
                    className={`${styles.navLink} ${styles.navBarLink}  
                    ${activeLink === 'primerEspecial' &&  styles.active}`} 
                    href="#">
                Primera Especial</a>
                <a 
                    onClick={() => handleLinkClick('primerFuerza')}
                    className={`${styles.navLink} ${styles.navBarLink}  
                    ${activeLink === 'primerFuerza' &&  styles.active}`} 
                    href="#">
                Primera Fuerza</a>
                <a 
                     onClick={() => handleLinkClick('segundaFuerza')}
                     className={`${styles.navLink} ${styles.navBarLink}  
                     ${activeLink === 'segundaFuerza' &&  styles.active}`} 
                    href="#">
                Segunda Fuerza</a>
            </nav>
        </div>
    </div>
  )
}

export default navbar