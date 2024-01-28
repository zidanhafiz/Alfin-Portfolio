type HamburgerProps = {
  showMenuToggle: () => void;
};

const Hamburger = ({ showMenuToggle }: HamburgerProps) => {
  return (
    <div
      className='md:hidden flex flex-col gap-y-2 w-fit p-2 cursor-pointer border border-transparent rounded-md transition hover:border-white'
      onClick={showMenuToggle}
    >
      <div className='h-1 w-8 rounded-sm bg-white'></div>
      <div className='h-1 w-8 rounded-sm bg-white'></div>
      <div className='h-1 w-8 rounded-sm bg-white'></div>
    </div>
  );
};

export default Hamburger;
