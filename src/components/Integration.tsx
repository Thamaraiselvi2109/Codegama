import '../styles/integration.scss'
import optimisation from '../assets/list-of-media.png'
import alerts from '../assets/alerts.jpg'
import encrypted from '../assets/bar-code-scan.png'
export const Integration = () => {
    return (
        <div className="container">
            <div className="Integration_container">
                <div className='left'>
                    <div className='left-1'>
                        <h3>Timely Alerts & sync ups</h3>
                        <p>Pick Winning Confidently with 120+ filters or create your own goal-based screens</p>
                        <img src={alerts} alt="alerts" />
                    </div>
                    <div className='left-2'>
                        <h3>Encrypted Integrations Across</h3>
                        <p>Pick Winning Confidently with 120+ filters or create your own goal-based screens</p>
                        <img src={encrypted} alt="encrypted" />
                    </div>
                </div>
                <div className='right'>
                    <h3>AI suggested optimisation</h3>
                    <p>Pick Winning Confidently with 120+ filters or create your own goal-based screens</p>
                    <img src={optimisation} alt="optimisation" />
                </div>
            </div>
        </div>
    )
}