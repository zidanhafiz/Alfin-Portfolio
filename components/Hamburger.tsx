type HamburgerProps = {
  showMenuToggle: () => void;
};

const Hamburger = ({ showMenuToggle }: HamburgerProps) => {
  return (
    <div
      className='md:hidden flex flex-col gap-y-2 w-fit p-2 cursor-pointer border border-transparent hover:border-white rounded-md transition'
      onClick={showMenuToggle}
    >
      <div className='h-1 w-8 bg-white rounded-sm'></div>
      <div className='h-1 w-8 bg-white rounded-sm'></div>
      <div className='h-1 w-8 bg-white rounded-sm'></div>
    </div>
  );
};

export default Hamburger;
