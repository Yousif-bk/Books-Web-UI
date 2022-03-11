import { AppRoutes } from './shared/models/app/AppRoutes';

export const App_Routes = [
    {
        path: AppRoutes.langing,
        loadChildren: () =>
            import('./components/home.module').then(
                (m) => m.HomeModule
            ),
    },
]