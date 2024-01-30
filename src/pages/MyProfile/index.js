import React from 'react';

const MyProfile = ({ name, email, phone, gender, dateOfBirth }) => {
  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <strong>Name: Phan Thiên Ân </strong> {name}
      </div>
      <div>
        <strong>Email: anphanvip09@gmail.com</strong> {email}
      </div>
      <div>
        <strong>Phone: 0966341727</strong> {phone}
      </div>
      <div>
        <strong>Gender: Male</strong> {gender}
      </div>
      <div>
        <strong>Date of Birth: 16/06/2003</strong> {dateOfBirth}
      </div>
    </div>
  );
};

export default MyProfile;