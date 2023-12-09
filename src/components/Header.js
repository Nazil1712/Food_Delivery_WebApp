import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import {
  faMagnifyingGlass,
  faPercent,
  faHandshakeAngle,
  faSignIn,
  faCartShopping,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineMsg from "./Helpers/OfflineMsg";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign In");

  const onlineStatus = useOnlineStatus();

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

  const data = useContext(UserContext);

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status : {onlineStatus ? "🟩" : "🔴"}</li>
            <li>
              <Link to={'/home'}>
                <FontAwesomeIcon icon={faHome}/>
                Home
              </Link>
            </li>
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
            <p>{data.loggedInUserName}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
