// import LogoIcon from '../assets/Luxe.png';
import MenuIcon from '../assets/Menu.svg';

function Header() {
  return (
    <header className="header">
        <div className="logo">
            Luxe
        </div>
        <nav>
            <ul className="list">
                <li><a href="/home">Home</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">How we work</a></li>
            </ul>
        </nav>
        <div className="menu">
            <img src={MenuIcon} alt="menu-button" />
        </div>
    </header>
  );
}

export default Header;
