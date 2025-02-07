import { useState } from 'react';
import '../styles/focus.scss';
import creator from '../assets/lapbanner.png'

export const Focus = () => {
    const [isCreatorView, setIsCreatorView] = useState(true);

    return (
        <div className="container">
            <div className="focus-container">
                <h1>Focus on what Matters</h1>
                <p>Checkout how both ends of forms look like for our users</p>

                {/* Toggle Buttons */}
                <div className="toggle">
                    <div className={isCreatorView ? "active" : ""} onClick={() => setIsCreatorView(true)} > Creator View </div>
                    <div className={!isCreatorView ? "active" : ""} onClick={() => setIsCreatorView(false)} > End-user View </div>
                </div>

                {/* Dynamic Content Based on Selection */}
                <div className="content">
                    {isCreatorView ? (
                        <div className="creator-view">
                            <img src={creator} alt="creator view" />
                        </div>
                    ) : (
                        <div className="end-user-view">
                            <h2>End-User Experience</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
