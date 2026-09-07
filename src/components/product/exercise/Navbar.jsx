import { CartIcon } from '../CartIcon';

export function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <p className="font-semibold text-stone-900">Simple Store</p>
        <CartIcon/>
      </nav>
    </header>
  );
}
