/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react'
import Drawer from '../drawer/drawer'
import styles from '../navbar/navbar.module.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navbar = () => {

    const[activeLink, setActiveLink] = useState('inicio');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };


  return (

    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
        <Drawer />
          <Typography className={styles.contenedorText} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <p className={styles.text}>Menú principal</p>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </>

    // <div className='mt-5'>
    //     <div>
    //         <nav className='d-flex justify-content-evenly'>

    //         

    //         <a 
    //                 onClick={() => handleLinkClick('inicio')}
    //                 className={`${styles.navLink} ${styles.navBarLink}  
    //                 ${activeLink === 'inicio' &&  styles.active}`} 
    //                 href="/#"
    //             >Inicio</a>
    //             <a 
    //                 onClick={() => handleLinkClick('premier')}
    //                 className={`${styles.navLink} ${styles.navBarLink}  
    //                 ${activeLink === 'premier' &&  styles.active}`} 
    //                 href="/premier"
    //             >Premier</a>
    //             <a 
    //                 onClick={() => handleLinkClick('primerEspecial')}
    //                 className={`${styles.navLink} ${styles.navBarLink}  
    //                 ${activeLink === 'primerEspecial' &&  styles.active}`} 
    //                 href="#">
    //             Primera Especial</a>
    //             <a 
    //                 onClick={() => handleLinkClick('primerFuerza')}
    //                 className={`${styles.navLink} ${styles.navBarLink}  
    //                 ${activeLink === 'primerFuerza' &&  styles.active}`} 
    //                 href="#">
    //             Primera Fuerza</a>
    //             <a 
    //                  onClick={() => handleLinkClick('segundaFuerza')}
    //                  className={`${styles.navLink} ${styles.navBarLink}  
    //                  ${activeLink === 'segundaFuerza' &&  styles.active}`} 
    //                 href="#">
    //             Segunda Fuerza</a>
    //         </nav>
    //     </div>
    // </div>
  )
}

export default navbar