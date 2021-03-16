'use strict';

import {bootstrapInspire, mountInspire, unmountInspire} from './module';



(function() {
  class ItemsList extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();
      console.log(bootstrapInspire);

      // attaches shadow tree and returns shadow root reference
      const shadow = this.attachShadow({ mode: 'open' });

      // creating a container for the items-list component
      const ItemsListContainer = document.createElement('div');

      // get attribute values from getters
      const title = this.title;
      const listItems = this.items;

      // adding a class to our container for the sake of clarity
      ItemsListContainer.classList.add('items-list');

      // creating the inner HTML of the items list element
      ItemsListContainer.innerHTML = `
        <link rel="stylesheet" type="text/css" href="component.css">
        <h3>${title}</h3>
        <ul class="item-list">
          ${listItems.map(item => `
            <li class="list-item">
              <a href="${item.url}?product=${item.id}">
                <img src="${item.img}">
                <span>${item.name}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      `;

      // appending the container to the shadow DOM
      shadow.appendChild(ItemsListContainer);
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
  customElements.define('items-list', ItemsList);
})();