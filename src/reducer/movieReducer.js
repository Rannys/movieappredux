import { v4 as uuidv4 } from 'uuid'
import { ADD_BTN, DELETE_BTN, EDIT_BTN, GET_KEYWORD, GET_RATING } from '../action/type'
let initState = [
    {
        imgUrl: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
        name: 'inception',
        year: '2010',
        id: uuidv4(),
        rating: 2

    },
    {
        imgUrl: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
        name: 'YOu',
        year: '2010',
        id: uuidv4(),
        rating: 3

    },
    {
        imgUrl: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
        name: 'inception',
        year: '2010',
        id: uuidv4(),
        rating: 5

    },
    {
        imgUrl: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
        name: 'inception',
        year: '2010',
        id: uuidv4(),
        rating: 4


    },
    {
        imgUrl: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
        name: 'inception',
        year: '2010',
        id: uuidv4(),
        rating: 3

    }
]






const MovieReducer = (state = { movies: initState, keyword: '', rating: '', }, action) => {
    switch (action.type) {
        case ADD_BTN:
            return { ...state, movies: state.movies.concat(action.payload) };
        case DELETE_BTN:
            return { ...state, movies: state.movies.filter(el => action.payload !== el.id) };
        case EDIT_BTN:
            return { ...state, movies: state.movies.map(el => el.id === action.payload.id ? { ...el, ...action.payload.newList } : el) }
        case GET_KEYWORD:
            return { ...state, keyword: action.payload }
        case GET_RATING:
            return { ...state, rating: action.payload };



        default:
            return state
    }
}
export default MovieReducer