// const productList = document.querySelector('.products');

// productList.addEventListener('click', onProductsListItemClick);

// fetch('https://dummyjson.com/products')
//   .then(res => res.json())
//   .then(({ products }) => {
//     // console.log(products);
//     renderProductList(products);
//   });

// function onProductsListItemClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     return;
//   }
//   const id = evt.target.closest('.products-item').dataset.id;
//   console.log(id);
//   fetch(`https://dummyjson.com/products/${id}`)
//     .then(res => res.json())
//     .then(console.log);
// }

// function renderProductList(products) {
//   const markup = products
//     .map(
//       ({ brand, description, id, thumbnail, price, title }) => `
//     <li data-id="${id}" class="products-item">
//     <img src="${thumbnail}" alt="${title}">
//     <div>
//         <h2>${brand} ${title}</h2>
//         <p>${price}$</p>
//         <p>${description}</p>
//     </div>
// </li>
//     `
//     )
//     .join('');
//   //   console.log(markup);
//   productList.insertAdjacentHTML('beforeend', markup);
// }
