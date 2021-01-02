import Link from 'next/link';

const NavLink = ({ href, className, children }) => {
  return (
    <li>
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
}

export default NavLink;
