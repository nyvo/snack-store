import { Skeleton } from "./skeleton";

export function SkeletonProductPage() {
  return (
    <div className="flex flex-col w-full p-3 gap-4">
      {/* Skeleton for the product image */}
      <Skeleton className="h-64 w-full rounded-md bg-[var(--color-050)] skeleton-shimmer" />

      {/* Skeleton for the product title */}
      <Skeleton className="h-8 w-3/4 rounded-md bg-[var(--color-050)] skeleton-shimmer" />

      {/* Skeleton for the product description */}
      <Skeleton className="h-4 w-full rounded-md bg-[var(--color-050)] skeleton-shimmer" />

      {/* Skeleton for the Add to Cart button */}
      <Skeleton className="h-10 w-full rounded-md bg-[var(--color-050)] skeleton-shimmer" />
    </div>
  );
}

export default SkeletonProductPage;
