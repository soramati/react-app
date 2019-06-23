import React from 'react';
import ReactDOM from 'react-dom';
import {createStore}from 'redux';
import { Provider }from 'react-redux';
import { persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate}from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import MemoStore,{memoReducer} from './memo/Store';

// 設定
const persistConfig = {
    key :'memo',
    storage,
    blacklist:[`message`,'mode','fdata'],
    whitelist:['data']
};

// パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig,memoReducer);

let store = createStore(persistedReducer);//ストアの作成
let pstore = persistStore(store);//パーシストストアの作成



ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<p>loading now...</p>} persistor={pstore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

export default pstore ;