import { useState } from 'react';
import classNames from 'classnames';
import styles from '../../styles/nav-menu.module.css';

import NavLink from './nav-link';
import NavToggler from './nav-toggler';
import ButtonClose from '../button-close';

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuClass = classNames(
    styles.menu,
    'transition-all',
    'md:flex',
    'md:-mx-3',
    'z-10',
    {
      [styles.show]: showMenu,
    }
  );

  return (
    <>
      <NavToggler className="md:hidden" onClick={() => setShowMenu(!showMenu)} />

      <ul className={menuClass}>
        <li className={classNames('md:hidden border-b border-gray-900 mb-2 py-6 px-3 flex justify-end', styles.close)}>
          <ButtonClose onClick={() => setShowMenu(!showMenu)} />
        </li>

        <NavLink href="/link-1">Link 1</NavLink>
        <NavLink href="/link-2">Link 2</NavLink>
        <NavLink href="/link-3">Link 3</NavLink>
        <NavLink href="/link-4">Link 4</NavLink>
      </ul>

      <div className={classNames(styles.backdrop, 'bg-black bg-opacity-60 transition-opacity')} onClick={() => setShowMenu(false)}></div>
    </>
  );
}

export default NavMenu;
