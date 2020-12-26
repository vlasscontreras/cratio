import NavMenu from './nav-menu';
import NavBrand from './nav-brand';

const Navbar = () => {
  return (
    <nav className="border-gray-200 py-6 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
      <NavBrand />
      <NavMenu />
    </nav>
  );
}

export default Navbar;
