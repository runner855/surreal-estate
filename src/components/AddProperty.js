import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    type: "",
    bedrooms: 1,
    bathrooms: 1,
    price: 100000,
    city: "",
    email: "",
  },
  alert: {
    message: "",
    isSuccess: false,
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() =>
        setAlert({
          message: "Property Added",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="prop" value="AddProperty">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty}>
        <div className="title">
          <label htmlFor="title">
            Title:
            <br />
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
              placeholder="title"
            />
          </label>
        </div>
        <div className="type">
          <label htmlFor="type">
            Type:
            <br />
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="bedrooms">
          <label htmlFor="bedrooms">
            Bedrooms:
            <br />
            <input
              type="number"
              min="1"
              step="1"
              max="20"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              placeholder="bedrooms"
            />
          </label>
        </div>
        <div div className="bathrooms">
          <label htmlFor="bathrooms">
            Bathrooms:
            <br />
            <input
              type="number"
              min="1"
              step="1"
              max="15"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              placeholder="bathrooms"
            />
          </label>
        </div>
        <div div className="price">
          <label htmlFor="price">
            Price:
            <br />
            <input
              type="number"
              className="currency"
              min="10000"
              step="5000"
              max="800000"
              valuec="800000"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              placeholder="price"
            />
          </label>
        </div>
        <div className="city">
          <label htmlFor="city">
            City:
            <br />
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
              placeholder="price"
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London">London</option>
            </select>
          </label>
        </div>
        <div className="email">
          <label htmlFor="email">
            Email:
            <br />
            <input
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="email"
            />
          </label>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
