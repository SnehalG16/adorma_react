import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddtoCart = () => {
    const [addcart, setaddcart] = useState([])
    const { id } = useParams()

    const AddCartData = () => {
        axios.get("http://localhost:3000/cart")
            .then((res) => {
                setaddcart(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        AddCartData()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/cart/${id}`)
            .then((res) => {
                alert('Data Deleted');
                AddCartData()
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container mt-4 mr-9">
            <div className="row" style={{width:"850px",color:"white"}}>
                {addcart.map((el) => (
                    <div className="col-md-3 mb-4" key={el.id}>
                        <div className="card h-100">
                            <img src={el.img[0]} className="card-img-top w-100" alt={el.title}/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title" style={{color:"white"}}>{el.title}</h5>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <span className="text" style={{color:"white"}}>Price: ${el.price}</span>
                                    <span className="text" style={{color:"white"}}>reviews: {el.reviews}</span>
                                </div>
                               
                                <button className="btn btn-danger mt-2" onClick={() => handleDelete(el.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default AddtoCart
