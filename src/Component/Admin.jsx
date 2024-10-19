import React, { useEffect, useState } from "react";
import DeleteConfrm from "./DeleteConfrm";
import AddUserModal from "./AddUserModal ";
import SearchData from "./SearchData";


export default function Admin() {
  const [user, setUser] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const [itemToDelete, setItemToDelete] = useState(null);
  const [editingUser,seteditingUser]= useState(null)


  const handleAddUser = (newUser) => {
   if(editingUser){

      setUser( user.map((u)=>(
        u.id===editingUser.id ? {...u, ...newUser} : u )))
     
     console.log(newUser)
     console.log(editingUser)

   }else{
    setUser([...user, newUser]);
    setOpenModel(false);
    seteditingUser(null);
    console.log(newUser)
   }
   
  };


  const handleEdit =(user)=>{
    seteditingUser(user)
    setOpenModel(true)
    console.log(user)
  }


  const handleOpneModel = () => {
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
    //setEdit(false)
  };

  const fetchData = () => {
    const userData = fetch("https://dummyapi.online/api/users")
      .then((response) => response.json())
      .then((json) =>
        // console.log(json)
        setUser(json)
      );
  };

  const handlehandleDeleteClick = (id) => {
    setItemToDelete(id);
    setIsOpen(true);
  };

  const confirmDelete = (id) => {
    const deleteUser = user.filter((usrid) => usrid.id !== itemToDelete);
    setUser(deleteUser);
    setIsOpen(false);
    setItemToDelete(null);
    // console.log(deleteUser[0])
  };

  const cancelDelete = () => {
    setIsOpen(false);
    setItemToDelete(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h3>All Users Data</h3>
        <button className="btn btn-primary" onClick={() => handleOpneModel()}>
          Add User{" "}
        </button>

        <SearchData user={user}/>

        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th>Ǎction</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((u, i) => (
              <tr key={i}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.address.city}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    //onClick={()=>alert(`do you want to delete ${u.id}`)}
                    onClick={() => handlehandleDeleteClick(u.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(u)}
                    style={{ marginLeft: "3px" }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <DeleteConfrm
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}

      
      <AddUserModal
        show={openModel}
        onClose={handleCloseModel}
        onAddUser={handleAddUser}
        editingUser={editingUser}

      />
    </>
  );
}
