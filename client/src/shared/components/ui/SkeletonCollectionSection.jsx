import { Skeleton } from "./skeleton";

export function SkeletonCollectionSection() {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* Skeleton for the collection title */}
      <Skeleton className="h-8 w-3/5 rounded-md bg-[var(--color-050)] skeleton-shimmer" />

      {/* Skeleton for the collection link */}
      <div className="flex items-center gap-2 self-start p-1">
        <Skeleton className="h-8 w-24 bg-[var(--color-050)] rounded-full skeleton-shimmer" />
      </div>

      {/* Product list skeletons */}
      <div
        className="flex gap-6 overflow-x-auto w-full pb-3 hide-scrollbar"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // Internet Explorer
          WebkitScrollbar: {
            display: "none"
          }
        }}
      >
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-4 min-w-[225px] max-w-[225px] min-h-[325px] bg-[var(--color-050)] rounded-lg shadow-sm"
          >
            {/* Skeleton for the product image */}
            <Skeleton className="h-32 w-full rounded-md bg-[var(--color-100)] skeleton-shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonCollectionSection;
