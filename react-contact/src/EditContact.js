import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


const EditContact = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id, name, phone, email} = location.state.contact;
    const [newPhone, setNewPhone] = useState(phone);
    const [newEmail, setNewEmail] = useState(email);
    

    // const {addContactHandler} = useContactsCrud();


    const update = (e) => {
        e.preventDefault();
        if(newPhone === "" || newEmail === ""){
            alert("All the fields are mandatory!");
            return
        }
        props.updateContactHandler({id, name, phone: newPhone, email: newEmail});
        setNewPhone("");
        setNewEmail("");
        navigate("/")
    }
    return(
        <div className="ui main">
            <h3>Edit Contact</h3>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <h3>{name}</h3>
                    <label>Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Phone" 
                        value = {newPhone} 
                        onChange={(e) => setNewPhone(e.target.value)}></input>
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value = {newEmail} 
                        onChange={(e) => setNewEmail(e.target.value)}></input>
                </div>
                <button className="ui button blue right">Update</button>
                <Link to="/">
                        <button className="ui button blue center">Cancel</button>
                    </Link>
            </form>
        </div>
    )
}

export default EditContact;