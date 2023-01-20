import React, { Component } from 'react';
import Like from '../common/like';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import Pagination from '../common/pagination';
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    };

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    }
    handleLike = movie => {
        const movies = this.state.movies;
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState(movies);
    }
    handleDelete = movieId => {
        const movies = this.state.movies.filter(movie => movie._id !== movieId);
        this.setState({ movies });
    }

    render() {
        const { length: count } = this.state.movies;
        const { movies: allMovies, currentPage, pageSize, genres } = this.state;
        if (allMovies.length === 0) return <p className='text-info'>They are no movies in the database.</p>;
        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-4">
                        <ListGroup items={genres} />
                    </div>
                    <div className="col">
                        <p className='text-info'>Showing {movies.length} out of {allMovies.length} movies in the database.</p>
                        <table className='table table-striped table-responsive table-sm'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th />
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                                    </td>
                                    <td><button onClick={() => this.handleDelete(movie._id)} className='btn btn-sm btn-danger'>Remove</button></td>
                                </tr>)}
                            </tbody>
                        </table>
                        <Pagination
                            itemsCount={count}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>


            </React.Fragment >
        );
    }
}

export default Movies;