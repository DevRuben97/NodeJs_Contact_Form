import {Router} from 'express';


//Functions:
import{
    Contact,
    Submit
}
from '../Controllers/ContactController';
const ContactRoutes= Router();



ContactRoutes.get('/contact',Contact)
ContactRoutes.post('/contact',Submit)


export default ContactRoutes;