import Image from 'next/image';

import Tiro1 from '../../../public/images/tiro.jpg'
import Tiro2 from '../../../public/images/tiro2.jpg'
import Tiro3 from '../../../public/images/tiro3.jpg'


const carousel = () => {
  return (
    <>

    <div id="carouselExampleIndicators" class="carousel slide mt-5 px-1">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <Image 
                        src={Tiro1} 
                        alt="Logo" 
                        width={1500}  // Ancho deseado
                        height={600} // Altura deseada
                        />
            </div>
            <div class="carousel-item">
            <Image 
                        src={Tiro2} 
                        alt="Logo" 
                        width={1500}  // Ancho deseado
                        height={600} // Altura deseada
                        />
            </div>
            <div class="carousel-item">
            <Image 
                        src={Tiro3} 
                        alt="Logo" 
                        width={1500}  // Ancho deseado
                        height={600} // Altura deseada
                        />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Previous</span> */}
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            {/* <span class="visually-hidden">Next</span> */}
        </button>
    </div>

    </>
  )
}

export default carousel
