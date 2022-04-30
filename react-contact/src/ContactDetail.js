import React from "react";
import { Link, useLocation} from "react-router-dom"
import user from "./user.png"

const ContactDetail = (props) => {
    const location = useLocation();
    const {name, phone, email} = location.state.contact;
    return(
        <div className="ui main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {phone}
                    </div>
                    <div className="description">
                        {email}
                    </div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/"><button className="ui button blue right">Back to Contact List</button></Link>
            </div>
        </div>
    );
}
export default ContactDetail;