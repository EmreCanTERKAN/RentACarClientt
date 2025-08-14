import { Routes } from "@angular/router";

export const router: Routes = [
    {
        path: '',
        loadComponent: () => import('./branches')
    }
]

export default router;