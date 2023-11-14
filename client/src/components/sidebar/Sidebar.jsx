import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
//import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BiChat } from 'react-icons/bi';

import styled from 'styled-components';

const IconSize = '2.5rem'; // Set the desired size for the icons

const SidebarStyles = styled.nav`
background: linear-gradient(to bottom, white, skyblue); /* Set the gradient from white to black */
backdrop-filter: blur(10px);
width: max-content;
height: 42vh;
display: flex;
flex-direction: column;
padding: 3% 0.3rem;
z-index: 2;
position: fixed;
left: 8px;
top: 35%;
gap: 1rem;
border-radius: 1rem;
backdrop-filter: blur(15px);

a {
  background: transparent;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: ${IconSize};
}

a:hover {
  background: rgba(0, 0, 0, 0.3);
}

a.active {
  background: var(--color-black);
  color: var(--color-white);
}
`;

const Sidebar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = React.useState(location.pathname);

  React.useEffect(() => {
    setActiveNav(location.pathname);
  }, [location.pathname]);

  return (
    <SidebarStyles>
      <a href="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="/about" onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="/networkai" onClick={() => setActiveNav('/networkai')} className={activeNav === '/networkai' ? 'active' : ''}>
        <BiChat />
      </a>
      <a href="/sign-in" onClick={() => setActiveNav('/sign-in')} className={activeNav === '/sign-in' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="/contact" onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </SidebarStyles>
  );
};

export default Sidebar;
