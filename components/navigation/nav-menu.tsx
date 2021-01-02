import { useState } from 'react';
import classNames from 'classnames';
import styles from './nav-menu.module.css';

import NavLink from './nav-link';
import NavToggler from './nav-toggler';
import ButtonClose from '../buttons/button-close';

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
    },
  );
  const backdropClass = classNames(
    styles.backdrop,
    'bg-black',
    'bg-opacity-60',
    'transition-opacity',
  );

  const onKeyHandler = (event) => {
    if (event.keyCode === 27) {
      setShowMenu(false);
    }
  };

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

      <div
        role="banner"
        aria-hidden="true"
        className={backdropClass}
        onClick={() => setShowMenu(false)}
        onKeyUp={onKeyHandler}
      />
    </>
  );
};

export default NavMenu;
