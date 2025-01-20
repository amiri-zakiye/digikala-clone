const ProductSpecifications = () => {
  return (
    <>
      <ProductRating
        ratingCount={data?.rating.count ?? 0}
        rate={data?.data_layer.dimension9 ?? 0}
      />
      <ProductFeatures
        features={data?.review.attributes}
        returnAlert={data?.category.return_reason_alert}
      />
    </>
  );
};
export default ProductSpecifications;
