import "./productlist.css";
import html from "../../images/html-5.png"
import css from "../../images/css-3.png"
import javascript from "../../images/javascript.png"
import php from "../../images/php.png"
import corel from "../../images/corel.png"
import c from "../../images/c.png"

export default function productlist() {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Courses</h1>
                <p className="pl-desc">Experience In Courses</p>
            </div>
            <div className="pl-list">
                <div className="list-icon">
                    <img src={html} alt="" className="pl-list" />
                </div>

                <div className="list-icon">
                    <img src={css} alt="" className="pl-list" />
                </div>

                <div className="list-icon">
                    <img src={javascript} alt="" className="pl-list" />
                </div>

                <div className="list-icon">
                    <img src={c} alt="" className="pl-list" />
                </div>

                <div className="list-icon">
                    <img src={php} alt="" className="pl-list" />
                </div>

                <div className="list-icon">
                    <img src={corel} alt="" className="pl-list" />
                </div>

            </div>
        </div>
    )
}

