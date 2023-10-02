import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faPercent,
  faHandshakeAngle,
  faSignIn,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faPercent} />
                Offers
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faHandshakeAngle} />
                Help
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faSignIn} /> Sign In
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCartShopping} /> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
