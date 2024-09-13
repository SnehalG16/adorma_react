import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { RiSearchEyeLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Deals from '../page/Deals';
import Topdeals from '../page/Topdeals';
import VIPrewards from '../page/VIPrewards';
import { TbGiftCard } from 'react-icons/tb';
import Program from '../page/Program';
import Events from '../page/Events';
import Giftcard from '../page/Giftcard';
import Adormacard from '../page/Adormacard';

export const Navbar = () => {
  const [search, setSearch] = useState("");

  const getdatafunction = () => {
    // Fetch or handle data based on the search value
    axios.get("http://localhost:3000/product", {
      params:
      {
        search: search,
        q: search
      }
    })
      .then((res) => setSearch(res.search))
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    getdatafunction();
  }, [search]);

  return (
    <div>
      <div className='up'>
        <p>Master the Moment with NEW
          Canon EOS R5 Mark II & Canon EOS R1
          PRE-ORDER NOW</p>
      </div>
      <div className='nav'>
        <div className='navbar'>
          <Link to={"/"} style={{ textDecoration: "none" }}><h1 className='navbar-title'>Adorma</h1></Link>
          <div className='navbar-search'>
            <div className='' style={{ display: "flex" }}>
              <div style={{ right: "35%", color: "#014B96" }}>
                <RiSearchEyeLine className='search-icon' />
              </div>
              <div>
                <input type="search"
                  placeholder='Search'
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <Link to={"/signin"} className='si'><RiContactsLine style={{ fontSize: "40px", display: "flex", textDecoration: "none" }} />
              <div style={{ height: "100px" }}>
                <h6>sign in</h6>
                <h6>MY ACCOUNT</h6>
              </div></Link>
            <Link to={"/AddtoCart"}>
            <IoCartOutline style={{ fontSize: "30px", marginLeft: "10px" }} />
            </Link>

          </div>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px" }}>
          <div className='nav1' style={{ marginLeft:"80px"}}>
            <Link style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/product"}>Product</Link>
            <Link style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/brands"}>Brands</Link>
            <Link style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/used"}>Used</Link>
            
            <Link style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/deals"}></Link>
            <Deals />
          </div>

          <div className='nav2' style={{ color: "white", marginLeft:"150px"}}>
            <NavLink style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/Topdeals"}></NavLink>
            <Topdeals/>
            <NavLink style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/Adormacard"}></NavLink>
            <Adormacard/>
            <NavLink style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/VIPrewards"}></NavLink>
            <VIPrewards/>
            <NavLink style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/Giftcard"}></NavLink>
            <Giftcard/>
            <NavLink style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/Program"}></NavLink>
            <Program/>
            <NavLink style={{ color: "white", padding: "10px 15px", textDecoration: "none" }} to={"/Evnets"}></NavLink>
            <Events/>
          </div>

        </div>
      </div>

    </div>
  );
}

