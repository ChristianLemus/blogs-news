import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { UserRegisterComponent } from "./components/user-register/user-register.component";
import { BlogsNewsComponent } from "./components/blogs-news/blogs-news.component";
import { DetailedInfoComponent } from "./components/detailed-info/detailed-info.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "user-register",
    component: UserRegisterComponent,
  },
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  {
    path: "detailed-info/:id",
    component: DetailedInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "blogs-news",
    component: BlogsNewsComponent,
    canActivate: [AuthGuard],
  },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  { path: "**", pathMatch: "full", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
