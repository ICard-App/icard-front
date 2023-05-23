import { AdminLayout } from '../layouts'
import { LoginAdmin } from '../pages/Admin'
import {
    CategoriesAdmin,
    ProductAdmin,
  } from "../pages/Admin";


const routesAdmin = [
    {
        path: '/admin',
        layout: AdminLayout,
        component: LoginAdmin,
        exact: true,
    }, 
    {
        path: "/admin/categories",
        layout: AdminLayout,
        component: CategoriesAdmin,
        exact: true,
      },
      {
        path: "/admin/products",
        layout: AdminLayout,
        component: ProductAdmin,
        exact: true,
      },

];

export default routesAdmin;