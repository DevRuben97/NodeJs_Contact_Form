import HomeRoutes from './Home';
import ContactRoutes from './Contact';


const Routes = app=> {
    app.use(HomeRoutes);
    app.use(ContactRoutes);
}


export default Routes;

