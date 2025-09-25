import glowingifyLogo from '../assets/glowingifyLogo.png';
import './Header.css';

export default function Header() {
    return (
        <header>
            <a href='/' >
                <img src={glowingifyLogo} alt="logo" />
            </a>
        </header>
    )
}