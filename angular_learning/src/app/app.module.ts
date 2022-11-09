import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule} from '@angular/router';

const route:Routes =[
  {path:'users', component:UsersComponent}, 
  {path:'users/:id', component:UserComponent}, 
  //code diatas menunjukkan bahwa akan mengakses user berdasarkan id users
  {path:'servers', component:ServersComponent}, 
  {path:'', component:HomeComponent} 
  //disini path adalah/ yang mau ditampilkan dan component
  //merupakan tempat dari file yang mau ditampilkan
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
    //mebuat router dari object yang ada pada route menggunakan routermodule sehingga angular tau kita punya route
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
