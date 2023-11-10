/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import FMF from '../../../public/images/fmf.png'

const header = () => {
  return (
    <div>
        <div>
            <Image 
                src={FMF} 
                alt="Logo" 
                width={150}  // Ancho deseado
                height={150} // Altura deseada
                />
        </div>
    </div>
  )
}

export default header