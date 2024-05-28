import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shpment = () => {
  const [user] = useAuthState(auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Shipping information</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input onBlur={handleNameBlur} type="text" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                value={user?.email}
                readOnly
                type="email"
                name="email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddressBlur}
                type="text"
                name="address"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="number">Phone</label>
              <input
                onBlur={handlePhoneBlur}
                type="number"
                name="phone"
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shpment;
