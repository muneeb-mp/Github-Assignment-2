import React from "react";

const ProfileCard = ({ userdata }) => {
  return (
    <div className="profile-box" id="profile-box">
      {userdata && (
        <div className="user-info" id="user-info">
          <figure>
            <img alt="user-avatar" src={userdata.avatar_url} />
          </figure>
          <div>
            <p>
              <strong>Name : </strong>
              {userdata.name}
            </p>
            <p>
              <strong>Username : </strong>@{userdata.login}
            </p>
            <p>
              <strong>Public Repositories : </strong>
              {userdata.public_repos}
            </p>
            <p>
              <strong>Public Gists : </strong>
              {userdata.public_gists}
            </p>
            <p>
              <strong>Created at : </strong>
              {userdata.created_at.substring(0, 10)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
