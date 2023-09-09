/* eslint-disable import/prefer-default-export */
import { BUTTONS, INNER_BUTTON_CLASS, BUTTON_ICON_CONTENT } from './dataButtons';
import { createPoint, createSpan } from './createPoint';

export function createPage() {
  const map = document.querySelector('.map');
  BUTTONS.forEach((point) => {
    const elementPoint = createPoint(map, point.nameClass);
    createSpan(elementPoint, INNER_BUTTON_CLASS.icon, BUTTON_ICON_CONTENT.close);
    createSpan(elementPoint, INNER_BUTTON_CLASS.title, point.text);
  });
}
