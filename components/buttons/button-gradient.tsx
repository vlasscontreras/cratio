import classNames from 'classnames';

interface IProps {
  className?: string,
  onClick?: () => void,
  children: any,
  disabled?: boolean,
}

const ButtonGradient = ({
  className,
  onClick,
  children,
  disabled,
}: IProps) => {
  const buttonClasses = classNames(
    'px-5',
    'py-2.5',
    'bg-gradient-to-r',
    'from-primary',
    'to-secondary',
    'rounded-full',
    'font-bold',
    'focus:outline-none',
    'transition-opacity',
    'opacity-100',
    'hover:opacity-90',
    className,
  );

  return (
    <button type="button" className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonGradient;
