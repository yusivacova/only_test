import { BUTTONS, INNER_BUTTON_CLASS, BUTTON_ICON_CONTENT } from './dataButtons';
import { createPoint, createPositionPoint, createSpan } from './createPoint';

export default function createPage() {
  const map = document.querySelector('.map');

  BUTTONS.forEach((point) => {
    const elementPoint = createPoint(map, point.nameClass);
    createSpan(elementPoint, INNER_BUTTON_CLASS.icon, BUTTON_ICON_CONTENT.close);
    createSpan(elementPoint, INNER_BUTTON_CLASS.title, point.text);
    createPositionPoint(elementPoint, point.position);
  });
}
