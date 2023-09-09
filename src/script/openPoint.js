import {
  ACTIVE_CLASS_BUTTON, BUTTON_ICON_CONTENT, INITIAL_CLASS_BUTTON, INNER_BUTTON_CLASS,
} from './dataButtons';

function changeIconButton(element) {
  const iconElement = element;

  if (iconElement.textContent === BUTTON_ICON_CONTENT.close) {
    iconElement.textContent = BUTTON_ICON_CONTENT.open;
  } else {
    iconElement.textContent = BUTTON_ICON_CONTENT.close;
  }
}

function togglePointButton(element) {
  element.classList.toggle(ACTIVE_CLASS_BUTTON.open);
}

function removeTitlePointButton(element) {
  element.classList.remove(ACTIVE_CLASS_BUTTON.open);
}

function removeTitlePointButtonActive() {
  const openPointButtons = document.querySelectorAll(`.${ACTIVE_CLASS_BUTTON.open}`);

  if (openPointButtons.length) {
    openPointButtons.forEach((point) => {
      const iconElement = point.previousElementSibling;
      removeTitlePointButton(point);
      changeIconButton(iconElement);
    });
  }
}

export default function buttonPointHandler() {
  const map = document.querySelector('.map');

  map.addEventListener('click', (e) => {
    const clickedTag = e.target;

    if (clickedTag.className.includes(INNER_BUTTON_CLASS.title)) {
      const iconElement = clickedTag.previousElementSibling;
      removeTitlePointButton(clickedTag);
      changeIconButton(iconElement);
    }

    if (clickedTag.className === INNER_BUTTON_CLASS.icon) {
      const titleElement = clickedTag.nextElementSibling;
      togglePointButton(titleElement);
      changeIconButton(clickedTag);
    }

    if (clickedTag.className.includes(INITIAL_CLASS_BUTTON)) {
      const iconElement = clickedTag.firstElementChild;
      const titleElement = clickedTag.lastElementChild;
      togglePointButton(titleElement);
      changeIconButton(iconElement);
    }

    if (!clickedTag.className.includes('point')) {
      removeTitlePointButtonActive();
    }
  });
}
