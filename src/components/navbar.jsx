import React from "react";

function Navbar(props) {
    return (
        <a href="#home">{props.list}</a>
    )
}

function createNavItems(x) {
    return (
        <Navbar
            list={x.name}
        />
    )
}

export default Navbar;
export { createNavItems };