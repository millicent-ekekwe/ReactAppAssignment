import Branding from '../assets/Branding.png';
import Ui from '../assets/Ui Design.png';
import Product from '../assets/Product.png'

function Service () {
  return (
    <div>
        <p className="foot-note">
        OUR SERVICES
        </p>
        <div className="last">
            <div className="base-logo1">
                <img src={Branding} alt="base-logo"/>
                <div className="last1">
                    <p>Branding</p>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </p>
                </div>
            </div>
            <div className="last2">
                <img src={Ui} alt="base-logo"/>
                <div className="base-logo2">
                
                    <p>UI/UX</p>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </p>
                </div>
            </div>
            <div className="last3">
                <img src={Product} alt="base-logo"/>
                <div className="base-logo3">
                    <p>Product Design</p>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Service