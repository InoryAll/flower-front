/**
 * store
 * Created by tianrenjie on 2017/11/9
 */
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { rootReducer } from './rootReducer';
import * as actionCreators from './action/action';

const composeEnhancers = composeWithDevTools({ actionCreators });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(invariant(), thunk)));

export default store;
