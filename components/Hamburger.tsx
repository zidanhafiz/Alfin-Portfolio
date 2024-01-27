import clsx from 'clsx';

type HamburgerProps = {
  showMenuToggle: () => void;
  isFixed: boolean;
};

const Hamburger = ({ showMenuToggle, isFixed }: HamburgerProps) => {
  return (
    <div
      className={clsx(
        'md:hidden flex flex-col gap-y-2 w-fit p-2 cursor-pointer border border-transparent rounded-md transition',
        isFixed ? 'hover:border-black' : 'hover:border-white'
      )}
      onClick={showMenuToggle}
    >
      <div
        className={clsx('h-1 w-8 rounded-sm', isFixed ? 'bg-black' : 'bg-white')}
      ></div>
      <div
        className={clsx('h-1 w-8 rounded-sm', isFixed ? 'bg-black' : 'bg-white')}
      ></div>
      <div
        className={clsx('h-1 w-8 rounded-sm', isFixed ? 'bg-black' : 'bg-white')}
      ></div>
    </div>
  );
};

export default Hamburger;
