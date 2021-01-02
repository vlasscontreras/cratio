const NavToggler = ({ className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        <span></span>
      </button>

      <style jsx>{`
        button {
          position: relative;
          height: 2rem;
          width: 2rem;
        }

        button span,
        button span::before,
        button span::after {
          background-color: #fff;
          content: '';
          height: 2px;
          left: 0;
          width: 100%;
          position: absolute;
        }

        button span::before {
          top: -0.5rem;
        }

        button span::after {
          bottom: -0.5rem;
        }
      `}</style>
    </>
  )
}

export default NavToggler;
