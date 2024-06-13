// import { Link, NavLink } from "react-router-dom";
// import { Badge, IconButton } from "@mui/material";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import PersonIcon from "@mui/icons-material/Person";
// import "./navbar.scss";
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="container">
//         <div className="nameicon">
//           <div className="logo">
//             <NavLink
//               to="/"
//               className="logoNavlink"
//               style={{ textDecoration: "none", color: "#222" }}
//             >
//               NorthStar
//             </NavLink>

//             <IconButton sx={{ color: "black" }} className="bugger">
//               <DehazeIcon />
//             </IconButton>
//           </div>

// <div className="names">
//   <Link to="/" className="navlink">
//     home
//   </Link>
//   <Link to="/about" className="navlink">
//     about
//   </Link>
//   <Link to="/products" className="navlink">
//     Products
//   </Link>
//   <Link to="/contact" className="navlink">
//     contact us
//   </Link>
// </div>
//         </div>

// <div className="icons">
//   <IconButton sx={{ color: "black" }} className="mobile">
//     <PersonIcon />
//   </IconButton>
//   <IconButton sx={{ color: "black" }}>
//     <Badge badgeContent={4} className="mobile">
//       <LocalMallIcon />
//     </Badge>
//   </IconButton>
// </div>
// </div>
//     </div>
//   );
// };

// export default Navbar;
import { Link, NavLink } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink
            to="/"
            className="logoNavlink"
            style={{ textDecoration: "none", color: "#222" }}
          >
            NorthStar
          </NavLink>
        </div>

        <div className="nav-bar">
          <Link to="/" className="navlink">
            home
          </Link>
          <Link to="/about" className="navlink">
            about
          </Link>
          <Link to="/products" className="navlink">
            Products
          </Link>
          <Link to="/contact" className="navlink">
            contact us
          </Link>
        </div>

        <div className="icons">
          <IconButton sx={{ color: "black" }} className="mobile">
            <PersonIcon />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <Badge badgeContent={4} className="mobile">
              <LocalMallIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "black" }} className="burger">
            <DehazeIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
