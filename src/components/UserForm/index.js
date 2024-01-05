import { useState } from "react"

const UserForm = () => {
    const [Name, setName] = useState({
        name: "",
        age: null,
        gender: "male",
    });

    const handleUserChange =(e) =>{
        event.preventDefault();
        setName({
            ...Name,
            [event.target.name]: event.target.value,
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <div class="name-input">
             <label>Name: </label>
             <input type="text" value={name} onChange={handleChangeName}></input>
            </div>
        </form>
    )

}

export default UserForm