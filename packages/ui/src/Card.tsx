export const Card = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="flex aspect-square flex-col items-center gap-2">
      <img src={imgSrc} />
      <h2 className="text-lg font-semibold">Plain White Shirt</h2>
      <p>Rs. 500</p>
    </div>
  );
};
