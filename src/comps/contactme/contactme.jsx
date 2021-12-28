import  "./contactme.css"
import phone from "../../images/phone.png" 
import email from "../../images/Email.png" 
import location from "../../images/Location.png"

export default function contactme() {
    return (
        <div className="outer-box">
            
            <div className="title-box">
                Contact Me
            </div>
            <div className="content-box">
                <div className="image-box">
                     <img src={phone} alt="" className="c-icon" />  
                </div>
                <div className="contact">
                    +91 9359957531
                </div>
                
            </div>
            
            <div className="content-box">
                <div className="image-box">
                    <img src={email} alt="" className="c-icon" /> 
                </div>
                <div className="contact">
                    mahimagovekar1366@gmail.com
                </div>
                
            </div>
        
            <div className="content-box">
                <div className="image-box">
                    <img src={location} alt="" className="c-icon" /> 
                </div>
                <div className="contact">
                    Nachinola-Goa
                </div>
                
            </div>
            
        </div>
    )
}
