import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const EditContact = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {id, name, phone, email} = location.state.contact;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const update = (data) => {
        props.updateContactHandler({id, name, ...data});
        navigate("/")
    };
    return(
        <div className="ui main">
            <h3>Edit Contact</h3>
            <form className="ui form" onSubmit={handleSubmit(update)}>
                <div className="field">
                    <h3>{name}</h3>
                    <label>Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        defaultValue={phone}
                        placeholder="Phone" 
                        {...register("phone", {required: "Phone number is required.",
                                pattern: {
                                    value: /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,
                                    message: "This is not a valid phone number."
                                }})}></input>
                    <p style={{fontWeight: "bold", color: "red"}}>{errors.phone?.message}</p>
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        defaultValue={email}
                        {...register("email", {required: "Email is required.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                    message: "This is not a valid email address."
                                },
                                maxLength:{
                                    value: 50,
                                    message: "Email cannot exceed more than 30 characters."
                                }})}></input>
                    <p style={{fontWeight: "bold", color: "red"}}>{errors.email?.message}</p>
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