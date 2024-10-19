import React, { useEffect, useState } from "react";
import "../App.css";

export default function AddUserModal({ show, onClose, onAddUser,editingUser }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");


useEffect(()=>{

  if(editingUser){
    setId(editingUser.id)
    setName(editingUser.name)
    setEmail(editingUser.email)
    setUserName(editingUser.username)
    setAddress(editingUser.address.city)
  }
  else{
    setId("")
    setName("")
    setEmail("")
    setUserName("")
    setAddress("")
  }
},[editingUser])





  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser  = {
      id, // Include id if it's required
      name,
      username,
      email,
      address

      
    };

    onAddUser(updatedUser);
    console.log(updatedUser)
    onClose(); // Close modal after submission
    
   
  };

  if (!show) {
    return null; // Render nothing if the modal is not supposed to be shown
  }



  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editingUser ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>id : </label>
            <input
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </div>

          <div>
            <label>Name : </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label>username : </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label>Email : </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div>
            <label>Address : </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          

          <button type="submit" className="btn btn-success">
            {editingUser ? "Update" : "Submit" }
          </button>
        </form>

        <button className="btn btn-danger" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
