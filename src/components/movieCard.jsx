export function MovieCard({ movie }) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div
            className="relative min-w-[100px] h-[200px] cursor-pointer group rounded-md overflow-hidden flex-shrink-0 snap-start"
        >
            <img
                src={posterUrl}
                alt={movie.title || movie.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
            />
            {/* Optional Gradient Overlay on Hover for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-sm font-semibold truncate w-full">
                    {movie.title || movie.name}
                </h3>
            </div>
            {/* Border effect like in the design (white border on hover or active) */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 rounded-md transition-colors duration-300 pointer-events-none"></div>
        </div>
    )
}

export function SkeletonMovieCard() {
    return (
        <div className="relative min-w-[100px] h-[200px] rounded-md overflow-hidden flex-shrink-0 snap-start bg-gray-800 animate-pulse">
            {/* Poster skeleton */}
            <div className="w-full h-full bg-gray-700" />

            {/* Optional bottom text skeleton */}
            <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="h-3 w-3/4 bg-gray-600 rounded" />
            </div>

            {/* Border */}
            <div className="absolute inset-0 border-2 border-transparent rounded-md pointer-events-none" />
        </div>
    )
}



