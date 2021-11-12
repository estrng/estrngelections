import React from "react";

// import { Container } from './styles';

function Header({ children }) {
  return <header className="bg-gray-100 mx-auto p-4">{children}</header>;
}

export default Header;
