import { Express } from 'express';
import authentication from '../middleware/authentication';

class RoutesHelper {

    static generateRoutePath(route: any): string {
        const routeName = route.name.replace('Routes', '');
        return `/${routeName.charAt(0).toLowerCase()}${routeName.slice(1)}`;
    }
    
    static initializeRoutes(app: Express, authenticated: boolean, routes: any[]): void {
        if (authenticated) {
            routes.forEach((route) => {
                    const routePath = this.generateRoutePath(route);
                    const router = new route().getRouter();
                    app.use(routePath, authentication.authenticateToken, router);
            })
        } else {
            routes.forEach((route) => {
                const routePath = this.generateRoutePath(route);
                const router = new route().getRouter();
                app.use(routePath, router);
            });
        }
    }
}

export default RoutesHelper;
