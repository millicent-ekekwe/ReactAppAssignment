import lady from '../assets/image.png';

export default function Hero() {
  return (
    <div className="hero-section">
        <div className="intro-text">
            <p>
            Hi, there!
            </p>
            <h1>
            <span>LUXE</span> IS HERE TO BE<br/> YOUR ASSISTANCE
            </h1>
            <p>
            I am here ready to help you in making creative digital products
            </p>
            <button>
            Let’s Discuss
            </button>
        </div>
        <div className="lady">
            <img className="fine" src={lady} alt="beauty" />
        </div>
    </div>
  );
}
