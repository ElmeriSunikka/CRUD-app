import React, { useEffect } from 'react';
import './CRUD.css';

function CRUD() {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [age, setAge] = React.useState();
  const [nameArray, setNameArray] = React.useState([]);
  const [editing, setEditing] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [currentUserID, setCurrentUserID] = React.useState();
  const [buttonState, setButtonState] = React.useState("Submit");

  useEffect(() => {
    const setUser = () => {
      const {firstName, lastName, age} = currentUser;
      setFirstName(firstName);
      setLastName(lastName);
      setAge(age);
    }
    if(editing === true) {
      setUser();
    }
  }, [currentUser])

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = {firstName: firstName, lastName: lastName, age: age}
    if(editing === false) {
      setNameArray([...nameArray, person])
    }

    else {
      update(person);
    }
  }

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastName = (event) => {
    setLastName(event.target.value);
  }

  const handleAge= (event) => {
    setAge(event.target.value);
  }

  const deleteRow = (i) => {
    setNameArray(nameArray.filter((item, ind) => {
      return ind !== i;
    }))
  }

  const editRow = (i) => {
    setEditing(true);
    setButtonState("Update")
    const user = nameArray[i];
    user.id = i;
    setCurrentUser(user);
    setCurrentUserID(user.id);

  }

  const update =  (person) => {
    let copyArray = nameArray;
    copyArray[currentUserID] = person
    setNameArray(copyArray);
    setEditing(false);
    setButtonState("Submit")
  }

  return (
    <>
      <div className="Forms">
        <form>
        <label id="labels">
          First Name:
          <input type="text" name="First Name" onChange={handleFirstName}/>
        </label>
        <label id="labels">
          Last Name:
        <input type="text" name="Last Name" onChange={handleLastName}/>
        </label>
        <label id="labels">
          Age:
        <input type="text" name="Age" onChange={handleAge}/>
        </label>

        <input type="submit" id="Button" value={buttonState} onClick={handleSubmit}/>
        <input type="reset" id="Button" value="Reset Form"/>
        </form>
      </div>

      <table className='Table'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
          {nameArray.map((item, i) => {
            return (<>
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <input type="button" id="Button" value="Delete" onClick={() => deleteRow(i)}/>
                <input type="button" id="Button" value="Edit" onClick={() => editRow(i)}/>
              </tr>
            </>) 
          })}
      </table>

    </>
  );
}

export default CRUD;