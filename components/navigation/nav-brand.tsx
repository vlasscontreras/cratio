import Link from 'next/link';

const NavBrand = () => {
  return (
    <Link href="/">
      <a className="text-xl my-3">
        <img src="/images/logo.svg" alt="Crat.io" width="150" />
      </a>
    </Link>
  );
}

export default NavBrand;
