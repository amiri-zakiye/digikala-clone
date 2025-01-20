const ProductItemShimmer = ({ Id }: { Id: string }) => {
  return (
    <div className="block cursor-pointer relative overflow-hidden grow py-3 px-4 lg:px-2 h-full">
      <svg
        aria-labelledby="l8nd94-aria"
        role="img"
        viewBox="0 0 320 530"
        className="m-auto w-full h-full"
      >
        <title id="l8nd94-aria">Loading...</title>
        <rect
          role="presentation"
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath={`url(#${Id}-diff)`}
          style={{ fill: `url(#${Id}-animated-diff)` }}
        ></rect>
        <defs>
          <clipPath id={`${Id}-diff`}>
            <rect x="16" y="16" rx="8" ry="8" width="288" height="272"></rect>
            <rect x="16" y="308" rx="2" ry="2" width="288" height="20"></rect>
            <rect x="164" y="344" rx="2" ry="2" width="140" height="20"></rect>
            <rect x="16" y="400" rx="2" ry="2" width="98" height="20"></rect>
            <rect x="16" y="454" rx="2" ry="2" width="136" height="20"></rect>
          </clipPath>
          <linearGradient id={`${Id}-animated-diff`}>
            <stop offset="0%" stopColor="#f3f3f3" stopOpacity="1"></stop>
            <stop offset="50%" stopColor="#ecebeb" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#f3f3f3" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ProductItemShimmer;
