import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import ProfileCard from "./Components/ProfileCard";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [userdata, setUserdata] = useState("");

  const submitUsername = async (e) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${userSearch}`
      );
      const data = await response.json();
      setUserdata(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const displayProfile = (e) => {
    e.preventDefault();
    submitUsername();
  };

  return (
    <>
      <div className="container">
        <h2 className="main-title">Github Profile Finder</h2>
        <Input
          displayProfile={displayProfile}
          userSearch={userSearch}
          setUserSearch={setUserSearch}
        />
        <ProfileCard userdata={userdata} />
      </div>
    </>
  );
}

export default App;
