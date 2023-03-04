import React, { useState } from "react";
import "./App.css";
import "./Header.css";
import { Link } from "react-router-dom";

import { FaSearchLocation, FaCartPlus, FaSearch } from "react-icons/fa";

import productItems from "./back/Data.js";



function Header({setTempdata, tempdata}) {

    const [query, setQuery] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleClick() {
    {
     const filterData = productItems.filter((productItem, index) => {
        return productItem.name.toLowerCase().includes(query.toLowerCase());
      });
      console.log(filterData);
      setTempdata(filterData)
    }
  }
  return (
    <header className="header">
      <div>
        <ul>
          <li>
            <h2>
              <Link to="/" className="logo">
                Amazon
              </Link>
            </h2>
          </li>
        </ul>
      </div>

      <div className="location">
        <p className="small">
          Hello <br />
          <span className="big">
            
            <FaSearchLocation />Select Your Address 
          
            <select className="select-item">
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>

              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Kolkata</option>
              <option>Jaipur</option>
              <option>Pune</option>
              <option>Nagpur</option>
              <option>Chandigarh</option>
              <option>Amritsar</option>
            </select>
            </span>
        </p>
      </div>

      <div className="search-bar">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Amazon.in"
          onChange={handleChange}
        />
        <button className="btn-2" onClick={handleClick}>
          {" "}
          <FaSearch />{" "}
        </button>
      </div>

      <div className="header-link">
        <ul>
          <li>
            <Link to="/singh">Sing Up</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/cart" className="cart">
              <FaCartPlus height="90px" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
