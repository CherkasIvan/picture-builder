import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { AppRoutingModule } from './app-routing.module';

import { MainPageModule } from './pages/main-page/main-page.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BlogPageModule } from './pages/blog-page/blog-page.module';
import { BuilderBricksModule } from './components/builder-bricks/builder-bricks.module';
import { BuilderManageButtonsModule } from './components/builder-manage-buttons/builder-manage-buttons.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    BlogPageModule,
    BuilderBricksModule,
    BuilderManageButtonsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
