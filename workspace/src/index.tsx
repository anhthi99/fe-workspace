import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import {createStore}  from 'redux';
import  reducerApp  from "./redux/reducer";
import { Provider } from 'react-redux';

const store = createStore(reducerApp);

const mountNode = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
  <CookiesProvider>
    <App />
    </CookiesProvider>
    </Provider>,
  mountNode
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
