import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { StudentAreaComponent } from './pages/student-area/student-area.component';
import { MyPlanComponent } from './pages/my-plan/my-plan.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'XHealth - Home'

    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'XHealth - Sobre Nós'
    },
    {
        path: 'faq',
        component: FaqComponent,
        title: 'XHealth - Perguntas Frequentes'
    },
    {
        path: 'student-area',
        component: StudentAreaComponent,
        title: 'XHealth - Área do Aluno'
    },
    {
        path: 'my-plan',
        component: MyPlanComponent,
        title: 'XHealth - Meu Plano'
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        title: 'XHealth - Entrar'
    }
];
