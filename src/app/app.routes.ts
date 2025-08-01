import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const mod = await import('./pages/home/home.component');
            return mod.HomeComponent;
        },

    },
    {
        path: 'student-area',
        loadComponent: async () => {
            const mod = await import('./pages/student-area/student-area.component');
            return mod.StudentAreaComponent;
        }
    },
    {
        path: 'about',
        loadComponent: async () => {
            const mod = await import('./pages/about/about.component');
            return mod.AboutComponent;
        }
    },
];
