import '../styles/footer.scss';
import arrow from '../assets/arrow.png';
import X from '../assets/x.png';
import linkedIn from '../assets/linkedin.png';
import Playstore from '../assets/play-store.png';
import Appstore from '../assets/app-store.png'

const SocialImg = [
    { img: linkedIn, alt: "LinkedIn" },
    { img: X, alt: "X (Twitter)" },
    { img: X, alt: "X (Twitter)" }
];

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-container">
                    <h1>
                        Manage your sales <br />
                        and analytics at one <br />
                        place
                    </h1>
                    <div className="description">
                        <div className='socials_cont'>
                            <img src={arrow} alt="arrow" />
                            <p>
                                Empowering Your Projects,<br />
                                Enhancing Your Success, Every<br />
                                Step of the Way.
                            </p>
                            <div className="socials">
                                {SocialImg.map((icon, index) => (
                                    <div key={index}>
                                        <img src={icon.img} alt={icon.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='apps'>
                            <h4>Download our App</h4>
                            <img src={Playstore} alt="" />
                            <img src={Appstore} alt="" />
                        </div>
                    </div>
                    <div className="copyright">
                        <p>ropflow.in</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
