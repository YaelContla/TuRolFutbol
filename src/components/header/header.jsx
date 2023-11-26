/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import FMF from '../../../public/images/fmf.png'

import styles from '../header/header.module.css'

const header = () => {
  return (
    <div className={`${' px-5 d-flex justify-content-around'} ${styles.header}`}>
        <div className=''>
            <Image 
                src={FMF} 
                alt="Logo" 
                width={195}  // Ancho deseado
                height={180} // Altura deseada
                />
        </div>
        <div className='mt-5 pt-3'>
          <p className={styles.encabezado}>LIGA DE FUTBOL AMATEUR DEL VALLE DE TEOTIHUACÁN, A.C.</p>
        </div>
    </div>
  )
}

export default header