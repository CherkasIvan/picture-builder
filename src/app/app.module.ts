import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';

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
import { BuilderDropdownModule } from './components/builder-dropdown/builder-dropdown.module';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCazlcZEhdXkBlVf2HxASNWj8UbPnomAM8',
  authDomain: 'builder-app-e09bc.firebaseapp.com',
  databaseURL: 'https://builder-app-e09bc-default-rtdb.firebaseio.com',
  projectId: 'builder-app-e09bc',
  storageBucket: 'builder-app-e09bc.appspot.com',
  messagingSenderId: '930933291394',
  appId: '1:930933291394:web:b711a5120e958bf078b79b',
  measurementId: 'G-LR3WQB8WCQ',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ColorPickerModule,
    MainPageModule,
    BlogPageModule,
    BuilderBricksModule,
    BuilderManageButtonsModule,
    BuilderNavModule,
    BuilderBgSelectorModule,
    BuilderInfinityPanelModule,
    BuilderDropdownModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
