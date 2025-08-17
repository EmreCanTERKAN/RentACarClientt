import { Routes } from "@angular/router";

const router: Routes = [
    {
        path: '',
        loadComponent: () => import('./branches')
    },
    {
        path: 'add',
        loadComponent: () => import('./create/create').then(m => m.default)
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./create/create').then(m => m.default)
    },
    {
        path: 'detail/:id',
        loadComponent: () => import('./detail/detail').then(m => m.default)
    },
]

export default router;