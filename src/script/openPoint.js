import { ACTIVE_CLASS_BUTTON, INITIAL_CLASS_BUTTON, INNER_BUTTON_CLASS } from './dataButtons';

/* eslint-disable import/prefer-default-export */
function togglePointButton(element) {
  element.classList.toggle(ACTIVE_CLASS_BUTTON.open);
}

function removeTitlePointButton(element) {
  element.classList.remove(ACTIVE_CLASS_BUTTON.open);
}

function removeTitlePointButtonActive() {
  const openPoint = document.querySelector(`.${ACTIVE_CLASS_BUTTON.open}`);
  if (openPoint) {
    removeTitlePointButton(openPoint);
  }
}

export function buttonPointHandler() {
  const map = document.querySelector('.map');

  map.addEventListener('click', (e) => {
    const clickedTag = e.target;

    if (clickedTag.className.includes(INNER_BUTTON_CLASS.title)) {
      removeTitlePointButton(clickedTag);
    }

    if (clickedTag.className === INNER_BUTTON_CLASS.icon) {
      const titleElement = clickedTag.nextElementSibling;
      togglePointButton(titleElement);
    }

    if (clickedTag.className.includes(INITIAL_CLASS_BUTTON)) {
      const titleElement = clickedTag.lastElementChild;
      togglePointButton(titleElement);
    }

    if (!clickedTag.className.includes('point')) {
      removeTitlePointButtonActive();
    }
  });
}
