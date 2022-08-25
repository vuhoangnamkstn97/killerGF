import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './screens/header/header.component';
import { FooterComponent } from './screens/footer/footer.component';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { SocialItemsComponent } from './components/social-items/social-items.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { ObserveSlideUpDirective } from './directive/observe-slide-up.directive';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeScreenComponent } from './screens/main-screen/home-screen/home-screen.component';
import { RoadmapScreenComponent } from './screens/main-screen/roadmap-screen/roadmap-screen.component';
import { StoryScreenComponent } from './screens/main-screen/story-screen/story-screen.component';
import { FeatureArtistsComponent } from './screens/main-screen/feature-artists/feature-artists.component';
import { FeatureArtistItemComponent } from './screens/main-screen/feature-artist-item/feature-artist-item.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    SocialItemsComponent,
    MenuItemsComponent,
    ObserveSlideUpDirective,
    HomeScreenComponent,
    RoadmapScreenComponent,
    StoryScreenComponent,
    FeatureArtistsComponent,
    FeatureArtistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzBackTopModule,
    NzIconModule,
    CarouselModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
