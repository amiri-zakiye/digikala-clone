const ProductFeature = ({
  feature,
}: {
  feature: { title: string; values: string[] };
}) => {
  return (
    <li
      key={feature.title}
      className="flex flex-col items-start justify-start bg-neutral-100 p-2 rounded-md"
    >
      <div className="flex flex-col gap-2 max-w-[150px]">
        <div>
          <p className="text-neutral-500 text-body-2 !leading-none lg:!leading-9 lg:break-all lg:overflow-hidden ellipsis-1">
            {feature.title}
          </p>
          <p className="text-caption-strong !leading-none lg:!leading-9 text-neutral-700 break-all lg:overflow-hidden ellipsis-1">
            {feature.values.map((item) => `${item} `)}
          </p>
        </div>
      </div>
    </li>
  );
};
export default ProductFeature;
