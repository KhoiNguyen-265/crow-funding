import { Link } from "react-router-dom";

import logo from "../../assets/icons/logo.svg";

function Logo({ className = "" }) {
    return (
        <Link to="/" className={className}>
            <img src={logo} alt="Crow Funding" />
        </Link>
    );
}

export default Logo;
