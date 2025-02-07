import { useState } from 'react';
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';
import ReactDOM from 'react-dom';
import logo from '../assets/logo.png';
import '../styles/hero.scss';

type ModalNavbarProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};

const ModalNavbar: React.FC<ModalNavbarProps> = ({ isOpen, toggleMenu }) => {
    if (!isOpen) {
        return null;
    }

    const modalRoot = document.getElementById('modal-root');

    return modalRoot ? ReactDOM.createPortal(
        <div className="mobile-overlay" onClick={toggleMenu}>
            <div className="mobile-modal">
                <ul className="mobile-nav-links">
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Comparison</li>
                    <li>Blogs</li>
                    <li>
                        <button className="close-modal-button" onClick={toggleMenu}>
                            <RiCloseFill size={25} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>,
        modalRoot
    ) : null;
};

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="container">
            <div className="navbar">
                <img src={logo} alt="logo"/>
                <button className="menu-button" onClick={toggleMenu}>
                    {isOpen ? <RiCloseFill size={25} /> : <RiMenu2Fill size={25} />}
                </button>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Comparison</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <ModalNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    );
};
