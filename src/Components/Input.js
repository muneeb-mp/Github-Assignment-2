import React from "react";

const Input = ({ displayProfile, userSearch, setUserSearch }) => {
  return (
    <form className="input-container" onSubmit={displayProfile}>
      <input
        type="text"
        id="inputBox"
        placeholder="Enter Username"
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
      />
      <button className="primaryBtn" id="searchBtn">
        Search
      </button>
    </form>
  );
};

export default Input;
