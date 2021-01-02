import { useState } from 'react';
import NavLink from './nav-link';
import NavToggler from './nav-toggler';

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <NavToggler className="md:hidden" onClick={() => setShowMenu(!showMenu)} />

      <ul className="flex -mx-3">
        <NavLink href="/link-1" className="px-3">Link 1</NavLink>
        <NavLink href="/link-2" className="px-3">Link 2</NavLink>
        <NavLink href="/link-3" className="px-3">Link 3</NavLink>
        <NavLink href="/link-4" className="px-3">Link 4</NavLink>
      </ul>
    </>
  );
}

export default NavMenu;
