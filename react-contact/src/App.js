import './App.css';
import Amplify, { API as api } from "aws-amplify";
import config from './aws-exports';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {v4 as uuid } from 'uuid';
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import ContactDetail from "./ContactDetail";
import DeleteConfirmation from "./DeleteConfirmation";
import EditContact from "./EditContact";

// import {withAuthenticator} from "@aws-amplify/ui-react";

Amplify.configure(config);

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");


  const retrieveContacts = async () => {
    const response = await api.get("contactapi", "/contact/id");
    return response;
  };

  const addContactHandler = async (contact) => {
    const request = { body:{
      id: uuid(),
      ...contact
      } 
    }

    const response = await api.post("contactapi", "/contact", request)
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id,name) => {
    const myinit = {headers: {},};
    await api.del("contactapi", "/contact/object/" + id + "/" + name, myinit);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    });

    setContacts(newContactList);

  };

  const updateContactHandler = async (contact) => {
    const request = { body:{
      ...contact
      } 
    }
    const response = await api.put("contactapi", "/contact", request)
    const {id} = response.data;
    setContacts(contacts.map(contact => {
    return contact.id === id? {...response.data}: contact;
    }))
  };

  const searchHandler = (searchTerm) =>{
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }

    getAllContacts();
  }, [])

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} term={searchTerm} searchKeyword={searchHandler}/>}/>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
          <Route path="/contact/:id" element={<ContactDetail/>}/>
          <Route path="/confirmation/:id" element={<DeleteConfirmation getContactKey={removeContactHandler}/>}/>
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler}/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
