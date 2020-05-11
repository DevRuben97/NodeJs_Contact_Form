import {Router} from 'express';


//Functions:
import{
    Contact 
}
from '../Controllers/ContactController';
const ContactRoutes= Router();



ContactRoutes.get('/contact',Contact)


export default ContactRoutes;