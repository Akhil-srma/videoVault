import "./Styles/navbar.css"
import { Search, Menu, Video, Bell, User } from "lucide-react";

const Navbar = ({logo}) => {
  return (
    <nav >
      <div className="left">
        <Menu/>

        <h1>YouTube</h1>
      </div>

      <div className="center">
        <input
          type="text"
          placeholder="Search"
        />
        <button>
          <Search/>
        </button>
      </div>
      
      <div className="right">
        <Video/>
        <Bell/>
        <User/>
      </div>
    </nav>
  );
};

export default Navbar;