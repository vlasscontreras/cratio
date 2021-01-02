import Link from 'next/link';
import { HTMLAttributes } from 'react';
import c from 'classnames';

interface IProps extends HTMLAttributes<HTMLElement>  {
  href: string,
  className?: string,
  children: string,
}

const NavLink = ({ href, className, children, ...props }: IProps) => {
  const itemClass = [
    className,
    'px-6',
    'py-3',
    'block',
    'md:px-3',
    'md:py-0',
  ]

  return (
    <li>
      <Link href={href}>
        <a className={c(itemClass)} {...props}>{children}</a>
      </Link>
    </li>
  );
}

export default NavLink;
