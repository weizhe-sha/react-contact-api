import React from "react";
import { Link, useLocation} from "react-router-dom"

const DeleteConfirmation = (props) => {
    const location = useLocation();
    const {id, name} = location.state.contact;
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    return(
        <div className="item" style={{display:"auto", marginTop:"60px"}}>
                <div className="content">
                    <h3>Are you sure you want to delete {name}?</h3>
                    <Link to="/"><button className="ui button blue center" onClick={() => deleteContactHandler(id)}>Confirm</button></Link>
                    <Link to="/">
                        <button className="ui button blue center">Cancel</button>
                    </Link>
                </div>
        </div>
    );
}
export default DeleteConfirmation;