import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}"/>
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Nama Restaurant: </h4>
    <p>${restaurant.name}</p>
    <h4>Alamat: </h4>
    <p>${restaurant.address}</p>
    <h4>Kota: </h4>
    <p>${restaurant.city} City</p>
    <h4>Deskripsi: </h4>
    <p>${restaurant.description}</p>
    <h4>Rating: </h4>
    <p>${restaurant.rating}</p>
    <h4>Menu Makanan: </h4>
    ${restaurant.menus.foods
    .map(
      (food) => `
                  <li class="detail-restaurant__listMenu-item">
                    ${food.name}
                  </li>
                `,
    )
    .join('')}
    <h4>Menu Minuman: </h4>
    ${restaurant.menus.drinks
    .map(
      (drink) => `
                  <li class="detail-restaurant__listMenu-item">
                    ${drink.name}
                  </li>
                `,
    )
    .join('')}
    <h4>Reviews: </h4>
    ${restaurant.customerReviews
    .map(
      (review) => `
            <div class="detail-restaurant__review-item">
              <p class="detail-restaurant__review-item-user">${review.name}</p>
              <p class="detail-restaurant__review-item-text">${review.review}</p>
              <p class="detail-restaurant__review-item-date">${review.date}</p>
            </div>`,
    )
    .join('')}
    </div>
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
    <img class="restaurant-item__header__poster lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}"/>
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${
  restaurant.rating
}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href=${`/#/detail/${restaurant.id}`}>${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
