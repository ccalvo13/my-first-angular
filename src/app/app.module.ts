import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerStatusComponent } from './server-status/server-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
