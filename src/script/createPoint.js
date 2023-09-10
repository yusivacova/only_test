import { INITIAL_CLASS_BUTTON } from './dataButtons';

export function createSpan(parent, nameClass, text) {
  const spanElement = document.createElement('span');
  spanElement.className = nameClass;
  spanElement.textContent = text;
  parent.append(spanElement);

  return spanElement;
}

export function createPositionPoint(element, positionElement) {
  const point = element;
  const WIDTH_MAP_DEFAULT = '1920';
  const HEIGHT_MAP_DEFAULT = '1080';
  const coordinateX = Math.round((positionElement.left * 100) / WIDTH_MAP_DEFAULT);
  const coordinateY = Math.round((positionElement.top * 100) / HEIGHT_MAP_DEFAULT);
  point.style.left = `${coordinateX}%`;
  point.style.top = `${coordinateY}%`;
}

export function createPoint(parent, nameClass) {
  const element = document.createElement('button');
  element.classList.add(INITIAL_CLASS_BUTTON);

  nameClass.forEach((item) => {
    element.classList.add(item);
  });
  parent.append(element);

  return element;
}
