import View from './view';
import icons from 'url:../../img/icons.svg';

export class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `
      <li class="preview">
        <a class="preview__link ${ this._data.id === id ? 'oreview__link--active' : '' }" href="#5ed6604591c37cdc054bc886">
          <figure class="preview__fig">
            <img src="${ this._data.image }" alt="${ this._data.title }" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${ this._data.title }</h4>
            <p class="preview__publisher">${ this._data.publisher }</p>
            <div class="recipe__user-generated ${ this._data.key ? '' : 'hidden' }">
              <svg>
                <use href="src/img/icons.svg#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }
}
export default new PreviewView();
