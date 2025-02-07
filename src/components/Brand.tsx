import brand_6 from '../assets/Item-6.png'
import brand_1 from '../assets/Item-1.png';
import brand_2 from '../assets/Item-2.png';
import brand_3 from '../assets/Item-3.png';
import brand_4 from '../assets/Item-4.png';
import brand_5 from '../assets/Item-5.png';
import '../styles/brand.scss'

// Store images in an array
const brandImages = [brand_6,brand_1, brand_2, brand_3, brand_4, brand_5];

export const Brand = () => {
    return (
        <div className='container'>
        <div className="brand-container">
            {brandImages.map((image, index) => (
                <img key={index} src={image} alt={`Brand ${index + 1}`} className="brand-image" />
            ))}
        </div>
        </div>
    )
}