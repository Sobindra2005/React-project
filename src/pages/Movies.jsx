
import { useEffect, useState } from 'react';
import { MovieApi } from '../api';
import { MovieCard, SkeletonMovieCard } from '../components/movieCard';

export function Movies() {
    const [movieList,setMovieList]=useState([])

    useEffect(() => {
        async function FetchSearchMovie() {
            try {
                const response = await MovieApi.get('/search/movie', {
                    params: {
                        query: 'avenger'
                    }
                })

                console.log(response.data.results[0])
                setMovieList(response.data.results)

            } catch (err) {
                console.log(err.message)
            }
        }

        FetchSearchMovie()
    }, [])

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-10">
            <section className="mx-auto max-w-6xl">
                <header className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">TMDB search</p>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Movie search</h1>
                    <form className="mt-6 flex max-w-xl gap-3" >
                        <label className="sr-only" htmlFor="movie-query">Search for a movie</label>
                        <input
                            className="min-w-0 flex-1 rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                            id="movie-query"
                            placeholder="Search for a movie"
                            type="search"
                        />
                        <button className="rounded-md bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300" type="submit">
                            Search
                        </button>
                    </form>
                </header>


                {false && <div className=" grid gap-4 grid-cols-6">
                    {Array.from({ length: 12 }, (_, index) => <SkeletonMovieCard key={index} />)}
                </div>
                }
                {false && (
                    <p className="rounded-md border border-red-400/30 bg-red-950/40 p-4 text-red-200" role="alert">
                        {error}
                    </p>
                )}

                {false && (
                    <p className="text-slate-300">No movies were found.</p>
                )}

                {true && (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                        {movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                    </div>
                )}
            </section>
        </main>
    );
}