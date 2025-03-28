import { Skeleton } from "./skeleton";

export function SkeletonCollectionPage() {
  return (
    <div className="flex flex-col w-full gap-8 p-3">
      {/* Skeleton for the collection title */}
      <Skeleton className="h-8 w-3/5 rounded-md bg-[var(--color-050)] skeleton-shimmer" />

      {/* Skeleton for the collection description */}
      <Skeleton className="h-6 w-4/5 rounded-md bg-[var(--color-050)] skeleton-shimmer" />

      {/* Skeleton for the product list */}
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex gap-4">
            {/* Skeleton for product image */}
            <Skeleton className="h-32 w-28 rounded-lg bg-[var(--color-050)] skeleton-shimmer" />
            <div className="flex flex-col gap-2 w-full">
              {/* Skeleton for product title */}
              <Skeleton className="h-5 w-3/5 bg-[var(--color-050)] skeleton-shimmer" />
              {/* Skeleton for product price */}
              <Skeleton className="h-4 w-1/4 bg-[var(--color-050)] skeleton-shimmer" />
              {/* Skeleton for product availability */}
              <Skeleton className="h-4 w-1/4 bg-[var(--color-050)] skeleton-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
