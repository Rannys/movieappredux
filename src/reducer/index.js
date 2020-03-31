import MovieReducer from './movieReducer'
import { combineReducers } from 'redux'

export default combineReducers({ movies: MovieReducer })