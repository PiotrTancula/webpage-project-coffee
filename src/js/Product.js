import { select } from './settings.js';
// eslint-disable-next-line no-unused-vars
import Productsdata from './Productsdata.js';
// eslint-disable-next-line no-unused-vars



class Product{
  constructor(param) {

    const thisProduct = this;
    thisProduct.createProduct(param);

  }

  createProduct(param){

    // eslint-disable-next-line no-unused-vars
    const thisProduct = this;

    const productSource = document.querySelector('#product-template').innerHTML;
    const tplHello = Handlebars.compile(productSource);
    // const dataHello = {firstName: 'John', lastName: 'Smith'};
    let generatedHTML = tplHello(param);
    console.log(thisProduct);
    console.log(productSource);

    // const targetElement = document.body;
    //   targetElement.insertAdjacentHTML('beforeend', generatedHTML);
    // targetElement.appendChild(generatedHTML);
    console.log(document.querySelector(select.productsPage));
    document.querySelector(select.productsPage).insertAdjacentHTML('beforeend',generatedHTML);
    // document.querySelector(select.productsPage).insertAdjacentHTML('beforeend',generatedHTML);

    document.querySelector(select.homePage).insertAdjacentHTML('afterend',generatedHTML);
  }
}

export default Product;