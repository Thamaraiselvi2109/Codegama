import '../styles/Table.scss';
import ranking from '../assets/Ranking_position.png';
import certificate from '../assets/pro-certificate.png'
import { FaRegCheckCircle } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';



export const Table = () => {
    return (
        <>
            <div className="container componenthide">
                <h1 className='Table_title'>Focus on What Matters</h1>
                <div className='Wrapper'>
                    <div className="Table_container">
                        <div className='table_column'>
                            <p></p>
                            <p>Dynamic Copyes for Questions</p>
                            <p>Auto-Sequence of questions</p>
                            <p>Folloup questios on the basis</p>
                            <p>ALi thank you and start screen</p>
                            <p>Al report generation with all important</p>
                        </div>
                        <div className='table_column'>
                            <p className='highlight'>Meta form</p>
                            <p><FaRegCheckCircle/></p>
                            <p><FaRegCheckCircle /></p>
                            <p><FaRegCheckCircle /></p>
                            <p><FaRegCheckCircle /></p>
                            <p><FaRegCheckCircle /></p>
                        </div>
                        <div className='table_column'>
                            <p className='highlight'>Meta form</p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                        </div>
                        <div className='table_column'>
                        <p className='highlight'>Meta form</p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                            <p><CgClose /></p>
                        </div>
                    </div>
                    <div className="counter_container">
                        <div className='winner'>
                            <img src={ranking} alt="Ranking" />
                            <img src={certificate} alt="certificate" />
                        </div>
                        <div className='counter'>
                            <div className='counter_col'>
                                <h1>40,00,000+</h1>
                                <h5>USERS LOVE TICKERTAPE</h5>
                            </div>
                            <div className='counter_col'>
                                <h1>4.6</h1>
                                <h5>Google Play Rating</h5>
                            </div>
                            <div className='counter_col'>
                                <h1>100CR+</h1>
                                <h5>TRANSACTION VOLUME</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}