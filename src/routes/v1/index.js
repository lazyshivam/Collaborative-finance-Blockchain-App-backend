const express = require('express');
const companyRoute = require('./company.route');

const AdminAuthRoute = require('./admin/auth.route');
const AdminRoleRoute = require('./admin/role.route');
const AdminStaffRoute = require('./admin/staff.route');
const AdminCompanyRoute = require('./admin/company.route');
const AdminDashboardRoute = require('./admin/dashboard.route');
const userTicketRoute=require('./ticket.route');
const companySubscriptionRoute = require('./companySubscription.route');
const ourServicesRoute = require('./ourServices.route');
const servicePlanRoute = require('./servicesPlan.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  { path: '/company', route: companyRoute },
  
  { path: '/admin', route: AdminAuthRoute },
  { path: '/admin/dashboard', route: AdminDashboardRoute },
  { path: '/admin/roles', route: AdminRoleRoute },
  { path: '/admin/staff', route: AdminStaffRoute },
  { path: '/admin/company', route: AdminCompanyRoute },
  {path:'/userTickets',route: userTicketRoute },
  // { path: '/admin/report', route: AdminDashboardRoute },

  // ourServices route goes here

  { path: '/service', route: ourServicesRoute },
  { path: '/plans', route: servicePlanRoute },
  {path:'/subscriptions', route:companySubscriptionRoute}
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
