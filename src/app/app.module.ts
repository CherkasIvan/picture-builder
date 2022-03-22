import { ErrorHandler, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import { AppRoutingModule } from './app-routing.module';

import { MainPageModule } from './pages/main-page/main-page.module';
import { BlogPageModule } from './pages/blog-page/blog-page.module';
import { BuilderBricksModule } from './components/builder-bricks/builder-bricks.module';
import { BuilderManageButtonsModule } from './components/builder-manage-buttons/builder-manage-buttons.module';
import { BuilderNavModule } from './components/builder-nav/builder-nav.module';
import { BuilderBgSelectorModule } from './components/builder-bg-selector/builder-bg-selector.module';
import { BuilderInfinityPanelModule } from './components/builder-infinity-panel/builder-infinity-panel.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainPageModule,
    BlogPageModule,
    BuilderBricksModule,
    BuilderManageButtonsModule,
    BuilderNavModule,
    BuilderBgSelectorModule,
    BuilderInfinityPanelModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
