import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { ListehotelComponent } from './components/listehotel/listehotel.component';
import { LoginComponent } from './components/login/login.component';
import { ServjsonComponent } from './components/servjson/servjson.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PromotionPipe } from './promotion.pipe';
import { DetailComponent } from './components/detail/detail.component';
import { WeekendPipe } from './weekend.pipe';
import { ReservationformComponent } from './components/reservationform/reservationform.component';
import { ModifAjoutComponent } from './components/modif-ajout/modif-ajout.component';
import { AjoutformComponent } from './components/ajoutform/ajoutform.component';
import { ModifformComponent } from './components/modifform/modifform.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MatTableModule } from '@angular/material/table';
import { SuprimformComponent } from './components/suprimform/suprimform.component';
import { VosreservationComponent } from './components/vosreservation/vosreservation.component';
 



@NgModule({
  declarations: [
    DetailComponent,
    AppComponent,
    NavComponent,
    ListehotelComponent,
        LoginComponent,
        ServjsonComponent,
        SearchPipe,
        AcceuilComponent,
        PromotionPipe,
        WeekendPipe,
        ReservationformComponent,
        ModifAjoutComponent,
        AjoutformComponent,
        ModifformComponent,
        AboutusComponent,
        SuprimformComponent,
        VosreservationComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
