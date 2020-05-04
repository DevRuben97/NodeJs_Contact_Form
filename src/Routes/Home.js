import {Router} from 'express';


//Functions:

import {
    Home
}
from '../Controllers/HomeController'

const HomeRoutes= Router();


HomeRoutes.get('/', Home);


export default HomeRoutes;