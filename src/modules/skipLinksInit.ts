import { headingElements, skipLinksList } from './domRefs.ts';

export function initSkipLinks() {
  headingElements.forEach((element) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('link');
    button.setAttribute('data-location', element.id);

    const title = element.textContent;

    if (title) {
      button.textContent = title;

      li.appendChild(button);
      skipLinksList.appendChild(li);
    }
  });
}
