const ProductStars = ({ rate }: { rate: number }) => {
  const rating = Math.trunc(rate);
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <svg
            key={item}
            width={20}
            height={20}
            className={`${
              item <= rating ? "fill-icon-warning" : "fill-icon-low-emphasis"
            }`}
          >
            <use xlinkHref="#starFill"></use>
          </svg>
        );
      })}
    </div>
  );
};
export default ProductStars;
