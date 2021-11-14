import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { AnimationsModule } from './animations/animations.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  validation: false
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(options),
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    SharedModule,
    AnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
