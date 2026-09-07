import { AddToCart } from './AddToCart';

export function ProductCard({ product}) {
  return (
    <article className="flex flex-col justify-between rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
          {product.category}
        </p>
        <h2 className="text-lg font-semibold text-stone-900">{product.name}</h2>
        <p className="mt-2 text-sm text-stone-600">${product.price.toFixed(2)}</p>
      </div>
      <div className="mt-6">
        <AddToCart product={product}  />
      </div>
    </article>
  );
}
