import React from "react";
import { Link } from "react-router-dom"
import user from "./user.png"

const ContactCard = (props) => {
    const {id, name, phone, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
                <div className="content">
                    <Link to={`contact/${id}`} state= {{contact: props.contact}}>
                        <div className="header">{name}</div>
                        <div>{phone}</div>
                        <div>{email}</div>
                    </Link>
                    
                </div>
                {/* <i className="trash alternate outline icon" style={{color:"red"}} onClick={() => props.clickHandler(id)}/> */}
                <Link to={`confirmation/${id}`} state= {{contact: props.contact}}><i className="trash alternate outline icon" style={{color:"red", fontSize: "1.7em", marginTop:"20px", float:"right", marginLeft:"7px"}}/></Link>
                <Link to={`/edit`} state= {{contact: props.contact}}><i className="edit alternate outline icon" style={{color:"blue",fontSize: "1.7em", marginTop:"20px", float:"right"}}/></Link>
            </div>
    );
}
export default ContactCard;