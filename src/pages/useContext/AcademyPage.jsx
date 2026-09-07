
import { useContext } from 'react';
import { RandomContext } from './randomProvider';
import {ParentSections} from './ParentSections'

export function AcademyPage() {
  const { randomizeHighlight } = useContext(RandomContext)

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-12 text-stone-900">
      
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
            prop drilling playground
          </p>
          <h1 className="text-4xl font-bold tracking-tight">A tiny learning tree</h1>
          <p className="mt-3 max-w-2xl text-stone-600">
            The page owns the state, then passes it through each parent to the child.
          </p>
          <button
            className="mt-5 rounded-md bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
            type="button"
            onClick={randomizeHighlight}
          >
            Pick a random lesson
          </button>
        </header>

        <ParentSections  />
      </div>
    </main>

  );
}