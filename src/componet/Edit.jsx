import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Edit = () => {
  const { id } = useParams();
  const initialValue = {
    img: "",
    title: "",
    dec: "",
    category: "",
    price: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const { title, img, category, dec, price } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/product/${id}`, formData)
      .then((res) => {
        console.log(formData);
        alert("DATA UPDATED");
      })
      .catch((err) => { console.log(err) });
  };

  const getDataFunction = () => {
    axios.get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => { console.log(err) });
  };

  useEffect(() => {
    getDataFunction();
  }, []);

  return (
    <div style={{ color: "#014B96" }}>
      <h1>EDIT</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="img">Image:</label>
          <input name="img" value={img} type="text" onChange={(e) => handleChange(e)} placeholder="Image" /> <br /><br />
          <label htmlFor="title">Title:</label>
          <input name="title" value={title} type="text" placeholder="Title" onChange={(e) => handleChange(e)} /> <br /><br />
          <label htmlFor="category">Category:</label>
          <select name="category" value={category} onChange={(e) => handleChange(e)}>
            <option value="">Select Your Category</option>
            <option value="camera">Camera</option>
            <option value="lens">Lens</option>
            <option value="music">Music</option>
            <option value="lighting">Lighting</option>
          </select><br /><br />
          <label htmlFor="price">Price:</label>
          <input name="price" value={price} type="text" placeholder="Price" onChange={(e) => handleChange(e)} /> 
          <br /><br />
          <label htmlFor="dec">Description:</label>
          <input name="dec" value={dec} type="text" placeholder="Description" onChange={(e) => handleChange(e)} /> <br /><br />
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};
export default Edit
