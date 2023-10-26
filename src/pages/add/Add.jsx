import React, { useState } from "react";
import './Add.scss';


function  Add_discover() {
  const [users, setUsers] = useState([
  ]);

  const [title, settitle] = useState("");
  const [descript, setdescript] = useState("");
  const [imgUrl, setimgUrl] = useState("");

  const addUser = () => {
    const newUser = { title, descript, imgUrl };
    setUsers([...users, newUser]);
    clearForm();
  };

  const clearForm = () => {
    settitle("");
    setdescript("");
    setimgUrl("");
  };

  return (
    <div>
      <div className="adddiv">
          <h1>Add Local Discoveries</h1>
      </div>
      <form>
        <label htmlFor="title" className="labbb">Title for Local Review:</label><br />
        <input
          type="text"
          className="inppp"
          descript="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="descript" className="labbb">Description for Local Review:</label><br />
        <input
          type="text"
          className="inppp"
          descript="descript"
          value={descript}
          onChange={(e) => setdescript(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="imgUrl" className="labbb">Image link/URL for Local Review:</label><br />
        <input
          type="text"
          className="inppp"
          descript="imgUrl"
          value={imgUrl}
          onChange={(e) => setimgUrl(e.target.value)}
          required
        /><br /><br />

        <button type="button" onClick={addUser} className="buttonn">ADD FOR REVIEW</button>
      </form>

      <br />

      <h3>Table View:</h3>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>descript</th>
            <th>imgUrl</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.title}</td>
              <td>{user.descript}</td>
              <td><img src={user.imgUrl}/></td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

     
    </div>
  );
}

export default  Add_discover;