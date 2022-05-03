import React from "react";
import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";



const AddContact = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const add = (data) => {
        props.addContactHandler(data);
        navigate("/")
    }
    return(
        <div className="ui main">
            <h3>Add Contact</h3>
            <form className="ui form" onSubmit={handleSubmit(add)}>
            <p>Please make sure name is typed correctly since it cannot be changed later.</p>
                <div className="field">
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        {...register("name", {required: "Name is required.",
                                pattern: {
                                    value: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
                                    message: "This is not a valid full name."
                                },
                                maxLength:{
                                    value: 30,
                                    message: "Name cannot exceed more than 30 characters."
                                }})}>
                        </input>
                    <p style={{fontWeight: "bold", color: "red"}}>{errors.name?.message}</p>
                    <label>Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
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
                <button className="ui button blue right">Add</button>
                <Link to="/">
                        <button className="ui button blue center">Cancel</button>
                    </Link>
            </form>
        </div>
    )
}

export default AddContact;