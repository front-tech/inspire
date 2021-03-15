'use strict';

(function() {
  class EditableList extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();

      // attaches shadow tree and returns shadow root reference
      const shadow = this.attachShadow({ mode: 'open' });

      // creating a container for the editable-list component
      const editableListContainer = document.createElement('div');

      // get attribute values from getters
      const title = this.title;
      const listItems = this.items;

      // adding a class to our container for the sake of clarity
      editableListContainer.classList.add('editable-list');

      // creating the inner HTML of the editable list element
      editableListContainer.innerHTML = `
        <h3>${title}</h3>
        <ul class="item-list">
          ${listItems.map(item => `
              <a href="${item.url}?product=${item.id}">
                <img src="${item.img}">
                <div>${item.name}</div>
              </a>
          `).join('')}
        </ul>
      `;

      // appending the container to the shadow DOM
      shadow.appendChild(editableListContainer);
    }

    // gathering data from element attributes
    get title() {
      return this.getAttribute('title') || '';
    }

    get items() {
      let items = [];

      [...this.attributes].forEach(attr => {
        if (attr.name.includes('items')) {
          items = JSON.parse(attr.value);
        }
      });

      return items;
    }

  }

  // let the browser know about the custom element
  customElements.define('editable-list', EditableList);
})();