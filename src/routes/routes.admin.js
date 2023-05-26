import { AdminLayout } from '../layouts'
import { LoginAdmin } from '../pages/Admin'
import {
    CategoriesAdmin,
    ProductAdmin,
    TableDetailsAdmin,
    PaymentsHistory,
  } from "../pages/Admin";


const routesAdmin = [
    {
        path: '/admin',
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true,
    },
    {
        path: '/admin/users',
        layout: AdminLayout,
        component: UsersAdmin,
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
      {
        path: "/admin/table/:id",
        layout: AdminLayout,
        component: TableDetailsAdmin,
        exact: true,
      },
      {
        path: "/admin/payments-history",
        layout: AdminLayout,
        component: PaymentsHistory,
        exact: true,
      },
];

export default routesAdmin;