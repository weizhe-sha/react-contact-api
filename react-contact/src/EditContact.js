import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const EditContact = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id, name, phone, email} = location.state.contact;
    const [newName, setNewName] = useState(name);
    const [newPhone, setNewPhone] = useState(phone);
    const [newEmail, setNewEmail] = useState(email);
    

    // const {addContactHandler} = useContactsCrud();


    const update = (e) => {
        e.preventDefault();
        if(newName === "" || newPhone === "" || newEmail === ""){
            alert("All the fields are mandatory!");
            return
        }
        props.updateContactHandler({id, name: newName, phone: newPhone, email: newEmail});
        setNewName("");
        setNewPhone("");
        setNewEmail("");
        navigate("/")
    }
    return(
        <div className="ui main">
            <h3>Edit Contact</h3>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value = {newName} 
                        onChange={(e) => setNewName(e.target.value)}></input>
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
            </form>
        </div>
    )
}

export default EditContact;