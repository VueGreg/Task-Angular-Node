import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { EditionTaskComponent } from './pages/edition-task/edition-task.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "subscribe", component: SubscribeComponent },
    { path: "edit-task", component: EditionTaskComponent },
    { path: "edit-task/:id", component: EditionTaskComponent },
    { path: "**", component:HomeComponent }
];
