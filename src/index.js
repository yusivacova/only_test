import '@babel/polyfill';
import './index.html';
import './styles/index.css';

import { createPage } from './script/createPage';
import { buttonPointHandler } from './script/openPoint';

window.onload = () => {
  createPage();
  buttonPointHandler();
};
