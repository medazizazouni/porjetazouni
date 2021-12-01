import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetazouni';
  test:boolean=false;
  user:any;
  constructor(private authService:AuthServiceService){
    
  }
  ngOnInit(){
    this.user=this.authService.getUser();
    console.log(this.user==null)
    if(this.user){
      this.test=true;
    }
    else if(this.user!=null){
      this.test=false;
    }
    console.log(this.user);

  }
}
