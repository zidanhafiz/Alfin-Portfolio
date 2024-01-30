const SvgGradient = () => {
  return (
    <svg
      width='0'
      height='0'
    >
      <linearGradient
        id='blue-gradient'
        x1='100%'
        y1='100%'
        x2='0%'
        y2='0%'
      >
        <stop
          stopColor='#6366f1'
          offset='0%'
        />
        <stop
          stopColor='#e9d5fe'
          offset='100%'
        />
      </linearGradient>
    </svg>
  );
};

export default SvgGradient;
