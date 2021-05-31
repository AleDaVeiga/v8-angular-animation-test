import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListVillainFadeComponent } from './hero/list-villain-fade.component';
import { ListHeroFadeComponent } from './hero/list-hero-fade.component';
import { VillainService } from './hero/villain.service';
import { HeroService } from './hero/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './material-module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  declarations: [AppComponent, ListHeroFadeComponent, ListVillainFadeComponent],
  providers: [HeroService, VillainService],
  bootstrap: [AppComponent]
})
export class AppModule {}
