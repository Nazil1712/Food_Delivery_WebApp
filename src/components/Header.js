import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faMagnifyingGlass,
  faPercent,
  faHandshakeAngle,
  faSignIn,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign In");

  // console.log("Header Render");
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);

  const handleClick = () => {
    if (btnName == "Sign In") {
      setBtnName("Sign Out");
    } else {
      setBtnName("Sign In");
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/Search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </Link>
            </li>
            <li>
              <Link to="/Offer">
                <FontAwesomeIcon icon={faPercent} />
                Offers
              </Link>
            </li>
            <li>
              <Link to="/Help">
                <FontAwesomeIcon icon={faHandshakeAngle} />
                Help
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleClick}>
                <FontAwesomeIcon icon={faSignIn} /> {btnName}
              </Link>
            </li>
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faCartShopping} /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
