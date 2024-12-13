import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const NavMenuUl = styled.ul`
display:flex;
flex-direction:row;
border:1px solid red;
gap:20px;
`

const NavMenuLi = styled.li`
list-style-type:none;
`


function Layout() {
    return (
        <>
            <nav>
                <NavMenuUl>
                    <NavMenuLi>
                        <Link to="/">Home</Link>
                    </NavMenuLi>
                    <NavMenuLi>
                        <Link to="/About">About</Link>
                    </NavMenuLi>
                    {/* <NavMenuLi>
                        <Link to="/contact">Contact</Link>
                    </NavMenuLi> */}
                </NavMenuUl>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;