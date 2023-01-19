import express from 'express';
import _ from 'lodash';
import extensionsRoutes from './extension.routes';
// import swaggerRoutes from './swagger.routes';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/extensions',
    route: extensionsRoutes,
  },
];

const devRoutes = [
  // {
  //   path: '/docs',
  //   route: swaggerRoutes,
  // },
];

_.forEach(defaultRoutes, (route) => {
  router.use(route.path, route.route);
});

if (['development', 'staging'].includes(process.env.NODE_ENV)) {
  _.forEach(devRoutes, (route) => {
    router.use(route.path, route.route);
  });
}

export default router;
