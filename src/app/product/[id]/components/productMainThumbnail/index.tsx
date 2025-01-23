const ProductMainThumbnail =  ({imageUrl,title}: {imageUrl:string,title:string}) => {

  return (
    <>
      <img src={imageUrl} alt={title} />
    </>
  );
};
export default ProductMainThumbnail;
