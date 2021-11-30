import React from 'react';
const Myprofileadmin = React.lazy(() => import('./Myprofileadmin'));
const Myprofileadvisor = React.lazy(() => import('./Myprofileadvisor'));
const Myprofilestudent = React.lazy(() => import('./Myprofilestudent'));
const Myprofileprof = React.lazy(() => import('./Myprofileprof'));

const routes = [
  { path: '/myprofileadmin', component: Myprofileadmin },
  { path: '/myprofilestudent', component: Myprofilestudent },
  { path: '/myprofileprof', component: Myprofileprof },
  { path: '/myprofileadvisor', component: Myprofileadvisor },
];


export default routes;
