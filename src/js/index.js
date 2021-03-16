import singleSpaHtml from 'single-spa-html';

class ItemsList extends HTMLElement {
  constructor() {
    // establish prototype chain
    super();

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
      <style>
        ul {
          padding: 0;
        } 
        li,
        div > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .items-list {
          color: #2b2b2b;
          font-family: sans-serif;
          margin: 0 auto;
          max-width: 350px;
          padding-top: 5rem;
        }
        
        .list-item {
          display: block;
          border: 1px solid gray;
          border-radius: 2px;
          margin-bottom: 10px;
        }
        
        .list-item a {
            align-items: center;
            display: block;
            display: flex;
            flex-direction: column;
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        
        .list-item:hover {
            border: 1px solid blue;
        }
        
        .list-item img {
            display: block;
        }
      </style>
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
window.customElements.define('inspire-comp', ItemsList);

const htmlLifecycles = singleSpaHtml({
  template: '<inspire-comp></inspire-comp>',
})
export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;