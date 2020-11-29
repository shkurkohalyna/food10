import foods from './menu.json';
import menuMurkupTpl from '../templates/menu-markup.hbs';

export const menuList = document.querySelector('.js-menu');
export const menuMurkup = createMenuFoodMarkup(foods);

menuList.insertAdjacentHTML('beforeend', menuMurkup);

function createMenuFoodMarkup(foods) {
  return menuMurkupTpl(foods);
}
