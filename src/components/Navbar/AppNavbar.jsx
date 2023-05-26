import { Navbar, Avatar, Dropdown, Button } from "flowbite-react";
import logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const AppNavbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className="container mx-auto px-4 py-1" fluid={true} rounded={true}>
      <NavLink to="/" className="flex gap-3 items-center">
        <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Fan Vault Toys
        </span>
      </NavLink>

      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User profile"
                img={`${user?.photoURL}`}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Link to="/mytoys">
              <Dropdown.Item>My Toys</Dropdown.Item>
            </Link>

            <Link to="/addtoy">
              <Dropdown.Item>AddToys</Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to={"/signin"}>
            <Button size={"sm"}>Join Now</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/toys">All Toys</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
