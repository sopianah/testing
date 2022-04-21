import listResto from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': listResto, // default page
  '/home': listResto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
