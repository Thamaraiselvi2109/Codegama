import '../styles/hero.scss'
import { Navbar } from './Navbar'
import dashboard from '../assets/dashboard.png'
export const Hero = () => {
    return (
        <div className='hero'>
            <Navbar />
            <div className="container">
                <div className="hero_container">
                    <div className='read'><p>Raised $ 1.5 Million funding - Read more</p></div>
                    <h1>Manage sales and <br/>analytics at one place</h1>
                    <p>The page you are looking for does not exist. <br/>Sign up for Framer to publish your own website</p>
                    <div className="cta">
                        <button>Buy Template</button>
                        <button>Book Demo</button>
                    </div>
                    <img src={dashboard} alt="dashboard" />
                </div>
            </div>
        </div>
    )
}