import { INITIAL_CLASS_BUTTON } from './dataButtons';

/* eslint-disable import/prefer-default-export */
export function createSpan(parent, nameClass, text) {
  const spanElement = document.createElement('span');
  spanElement.className = nameClass;
  spanElement.textContent = text;
  parent.append(spanElement);

  return spanElement;
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
