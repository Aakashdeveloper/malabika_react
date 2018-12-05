import { combineReducers } from 'redux';
import articles from './articles_reducer';
import gallery from './gallery_reducer';

const rootReducer = combineReducers({
    articles,
    gallery
})

export default rootReducer;