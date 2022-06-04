import React from "react";
import axios from "axios";
import { useState } from "react";

function ChangePassWord() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const changePass = (oldPassword, newPassword) => {
    axios
      .put(
        "http://localhost:3001/auth/changepass",
        { oldPassword: oldPassword, newPassword: newPassword },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        }
      });
  };
  return (
    <div>
      <h1>ChangePassWord</h1>
      <input
        type="text"
        placeholder="Old Password"
        onChange={(event) => {
          setOldPassword(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="New Password"
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <button onClick={() => changePass()}>Save Changes</button>
    </div>
  );
}

export default ChangePassWord;
