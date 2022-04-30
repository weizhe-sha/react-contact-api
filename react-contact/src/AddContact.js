import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const AddContact = (props) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    const navigate = useNavigate();


    const add = (e) => {
        e.preventDefault();
        if(name === "" || phone === "" || email === ""){
            alert("All the fields are mandatory!");
            return
        }
        props.addContactHandler({name, phone, email});
        setName("");
        setPhone("");
        setEmail("");
        navigate("/")
    }
    return(
        <div className="ui main">
            <h3>Add Contact</h3>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value = {name} 
                        onChange={(e) => setName(e.target.value)}></input>
                    <label>Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Phone" 
                        value = {phone} 
                        onChange={(e) => setPhone(e.target.value)}></input>
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value = {email} 
                        onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <button className="ui button blue right">Add</button>
            </form>
        </div>
    )
}

export default AddContact;