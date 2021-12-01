import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListehotelComponent } from './components/listehotel/listehotel.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationformComponent } from './components/reservationform/reservationform.component';
import { ServjsonComponent } from './components/servjson/servjson.component';
import { ModifAjoutComponent } from './components/modif-ajout/modif-ajout.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [{path:'listehotel' , component:ListehotelComponent},
{path:'login',component:LoginComponent},
{path:'servejson',component:ServjsonComponent},
{path:'detail',component:DetailComponent},
{path:'detail/:id',component:DetailComponent},
{path:'reservation/:nom',component:ReservationformComponent},
{path:'modifajout' , component:ModifAjoutComponent},
{path:'acceuil' , component:AboutusComponent},
{path:'' , component:AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
