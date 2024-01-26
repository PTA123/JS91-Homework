import React, { useState } from 'react';

const UserForm = ({ onFormSubmit }) => {
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');

    const handleSubmit = () => {
        if (name.trim() === '' || age.trim() === '') {
            alert('Vui lòng nhập đầy đủ thông tin.');
            return;
        }
        onFormSubmit({ name, age: parseInt(age), gender });

    };

    return (
        <div>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Age: </label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <div>
                <label>Gender: </label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UserForm;