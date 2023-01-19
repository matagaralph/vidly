import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: []
    };

    componentDidMount() {
        this.setState({ movies: getMovies() });
    }

    handleDelete = movieId => {
        console.log('Clicked', movieId);
        let movies = { ...this.state.movies };
        movies = Object.values(movies).filter(movie => movie._id !== movieId);
        this.setState({ movies });
    }

    render() {
        const { movies } = this.state;
        if (movies.length === 0) return <p className='text-info'>They are no movies in the database.</p>;
        return (
            <React.Fragment>
                <p className='text-info'>Showing {movies.length} movies in the database.</p>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie._id)} className='btn btn-sm btn-danger'>Remove</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </React.Fragment >
        );
    }
}

export default Movies;