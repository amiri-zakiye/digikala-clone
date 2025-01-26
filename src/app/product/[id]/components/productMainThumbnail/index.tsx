import Image from "next/image";
const ProductMainThumbnail =  ({imageUrl,title}: {imageUrl:string,title:string}) => {

  return (
    <>
      <Image width="800" height="800" src={imageUrl} alt={title} />
    </>
  );
};
export default ProductMainThumbnail;
