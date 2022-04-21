import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const listResto = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">
          Mau Pergi Makan Tapi Bingung ?
      </h1>
      <p class="hero__tagline">
        Ayo Lihat List Restaurant Terbaikmu
      </p>
    </div>
  </div>
  
    <div class="content">
    <h2 class="content__heading">List Restaurant</h2>
    <div id="restaurants" class="restaurants">

    </div>
  </div>
`;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default listResto;
