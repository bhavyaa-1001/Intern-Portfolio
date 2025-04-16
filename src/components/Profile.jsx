import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-content">
          <div>
            <img 
              className="profile-image" 
              src="https://via.placeholder.com/150" 
              alt="Profile"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Bhavya Bansal</h1>
            <p className="profile-bio">
              A passionate web developer with a keen interest in creating user-friendly 
              applications. Always eager to learn new technologies and solve complex problems.
            </p>
            <div>
              <h2 className="hobbies-title">Hobbies</h2>
              <ul className="hobbies-list">
                <li>Cricket</li>
                <li>Going on Hackathons</li>
                <li>Hiking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;