import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GiRingingBell } from "react-icons/gi";

function Dec({ name, price, image }) {
  const { id } = useParams();

  const [data, setdata] = useState({});
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }; 
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const addToCardFunction = () => {
    axios
      .post("http://localhost:3000/cart", data)
      .then((res) => {
        console.log(res);
        alert("Data added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="d-sm-block d-lg-flex d-xl-flex d-xxl-flex row desck">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 col-8">
              <div className="d-sm-block d-lg-flex d-xl-flex row d-xxl-flex">
                <div className="col-sm-2 d-sm-flex d-lg-block col-2">
                  {data.img &&
                    data.img.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        className="img-fluid mt-4 thumbnail"
                      />
                    ))}
                </div>
                <div className="col-sm-12 mt-sm-3 col-lg-10 col-xl-10 col-xxl-10 col-10 ps-0">
                  {data.img && data.img[0] && (
                    <img
                      src={data.img[0]}
                      alt=""
                      className="img-fluid mt-4 main-image"
                    />
                    
                    
                  )}
                  <div style={{marginTop:"100px",display:"flex",justifyContent:"space-evenly"}}>
                    {/* <img src={data?.img[1]} alt=""  height={100} style={{border:"solid gray",borderRadius:"35px"}}/>
                    <img src={data?.img[2]} alt="" height={100} style={{border:"solid gray",borderRadius:"35px"}}/> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-sm-5 col-md-12 col-lg-4 col-xl-4 col-xxl-4 col-4">
              <div className="desc-heading">
                <p>
                  <span>{data.heading}</span>
                </p>
              </div>
              <div className="desc-title">
                <h1 className="h5">{data.title}</h1>
              </div>
              <div className="desc-price mt-3">
                <h5>
                  <span>${data.price}</span>
                </h5>
              </div>

              <div className="desc-button">
                <Link to={"/cart"}>
                  <button className="button" onClick={addToCardFunction}>
                    Add To Cart
                  </button>
                </Link>
                <br /> <br /><hr />
                <div className="quantity" style={{display:"flex",justifyContent:"space-evenly"}}>
                  <h6 style={{marginTop:"10px"}}>ADD MORE</h6>
                    <button onClick={decreaseQuantity} disabled={quantity === 1} style={{width:"90px "}}>-1</button>
                        <span>{quantity}</span>
                      <button onClick={increaseQuantity} disabled={quantity === 5} style={{width:"90px "}}>+1</button>
                 </div>
                     <br />
                     <div style={{display:"flex",justifyContent:'space-evenly'}}>
                      <div style={{display:"flex"}}>
                      <FaHeart style={{marginTop:"5px",color:"red"}}/><p>ADD TO CART LIST</p>
                      </div>
                         <div style={{display:"flex"}}>
                          <GiRingingBell style={{marginTop:"5px"}} /><p>get sale alert</p>
                         </div>
                     </div>
                     <div>
                      <p>protect your gear with </p>
                      <h6>Adorma Protect* . <a href="">learn more</a></h6>
                      <div style={{display:"flex",justifyContent:"space-evenly"}}>
                            <div style={{border: '1px solid #003773', width: '100px', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                              <p>  2 year  </p>
                              <h6>  $159.09  </h6>
                            </div>
                            <div style={{border: '1px solid #003773', width: '100px', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <p>3 year</p>
                            <h6>$259.09</h6>
                            </div>
                            <div style={{border: '1px solid #003773', width: '100px', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <p>4 year</p>
                            <h6>$269.09</h6>
                            </div>
                      </div>
                      <p>avaliable to US only</p>
                     </div>
                  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div>
              <hr />
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row"></div>
        </div>
        
      </section>
         
         <Footer/>
    </div>
  );
}

export default Dec;
