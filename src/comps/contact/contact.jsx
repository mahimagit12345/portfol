import "./contact.css";
import phone from "../../images/phone.png" 
import email from "../../images/Email.png" 
import location from "../../images/Location.png" 

export default function contact() {
    return (
        <div className="c">
            <div className="c-bg">
            </div>
            
            <div className="c-wrapper">
            <div className="c-left">
                        <h1 className="c-title">Contact Me</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={phone} alt="" className="c-icon" />+91 9359957531
                            </div>

                            <div className="c-info-item">
                                <img src={email} alt="" className="c-icon" />mahimagovekar1366@mail.com
                            </div>

                            <div className="c-info-item">
                                <img src={location} alt="" className="c-icon" />Nachinola-Goa
                            </div>
                        </div>
                    </div>
                    
                </div>

                </div>
        
    )
}
