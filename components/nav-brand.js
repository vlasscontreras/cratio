import Link from 'next/link';

const NavBrand = () => {
  return (
    <Link href="/">
      <a className="text-xl my-3">
        Logo
      </a>
    </Link>
  );
}

export default NavBrand;
