import React from "react";

import '../App.css'

export default function DeleteConfrm({confirmDelete,cancelDelete}) {
  return (
    <>
    
    <div className="container">
       <div className="popup">
        <div className="popup-inner">
        <h2>Are you sure you want to delete this item?</h2>
        <button style={{marginRight:'7px'}} onClick={confirmDelete}>Yes</button>
        <button onClick={cancelDelete}>No</button>
      </div>
    </div>
    </div>
    </>
  );
}
