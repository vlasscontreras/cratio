import { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './nav-toggler.module.css';

interface IProps extends HTMLAttributes<HTMLElement> {
  className?: string,
  onClick?: () => void,
}

const NavToggler = ({ className, onClick }: IProps) => (
  <>
    <button type="button" className={classNames(className, styles.navToggler)} onClick={onClick} aria-label="Toggle menu">
      <span />
    </button>
  </>
);

export default NavToggler;
