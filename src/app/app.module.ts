import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { from } from 'rxjs';
import { ListStoreComponentComponent } from './list-store-component/list-store-component.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ProductViewListComponent } from './product-view-list/product-view-list.component';
import { GroupOfferShareComponent } from './group-offer-share/group-offer-share.component';
import { CreareNewGroupComponent } from './creare-new-group/creare-new-group.component';
import { createComponent } from '@angular/compiler/src/core';
import { ProdctDetailsDescriptionComponent } from './prodct-details-description/prodct-details-description.component';
import { ProductViewAllComponent } from './product-view-all/product-view-all.component';
import { MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalCategoryComponent } from './global-category/global-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CategoryNavBarComponent } from './category-nav-bar/category-nav-bar.component';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatListModule} from '@angular/material/list';
import { RedeemOptionsComponent } from './redeem-options/redeem-options.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { QrProductGeneratorComponent } from './qr-product-generator/qr-product-generator.component';
import { OrderCancelComponent } from './order-cancel/order-cancel.component';
import { MatDialogModule} from '@angular/material/dialog';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { NavigationCmpComponent } from './navigation-cmp/navigation-cmp.component'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { StoreTimePickupComponent } from './store-time-pickup/store-time-pickup.component';
import { ChangeDeliveryAddressComponent } from './change-delivery-address/change-delivery-address.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductOutofstockComponent } from './product-outofstock/product-outofstock.component';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppStoreFooterComponent } from './app-store-footer/app-store-footer.component';
import { XZoomComponent } from './x-zoom/x-zoom.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SlideAppInfoComponent } from './slide-app-info/slide-app-info.component';
import { MatCommonModule } from '@angular/material/core';
 




const routes: Routes = [
  { path:'store-locator', component: StoreLocatorComponent },
  { path:'store-list', component:ListStoreComponentComponent},
  { path:'product-view',component: ProductViewListComponent},
  { path:'group-offer',component: GroupOfferShareComponent},
  { path:'create-group', component:CreareNewGroupComponent},
  { path:'product-details', component: ProdctDetailsDescriptionComponent },
  { path:'product-view-all',component:ProductViewAllComponent},
  { path:'global-category',component: GlobalCategoryComponent},
  { path:'product-cart',component:CartDetailsComponent},
  { path:'delivery-address',component:DeliveryAddressComponent},
  { path:'feedback',component:FeedbackFormComponent},
  { path:'user-profile', component:UserProfileComponent},
  { path:'redeem-options',component:RedeemOptionsComponent},
  { path:'qr-display', component:QrProductGeneratorComponent},
  { path:'cancel-order', component:OrderCancelComponent},
  { path:'home', component:NavigationCmpComponent},
  { path:'payment-method',component:PaymentMethodComponent},
  { path:'change-delivery',component:ChangeDeliveryAddressComponent},
  { path:'store-pickup',component:StoreTimePickupComponent},
  { path:'order-details',component:OrderDetailsComponent},
  { path:'wish-list',component:WishlistComponent},
  { path:'out-stock',component:ProductOutofstockComponent},
  { path:'x-zoom', component:XZoomComponent},
  { path:'login',component:LoginComponentComponent},
  { path:'slider',component:SlideAppInfoComponent }
,];

@NgModule({
  declarations: [
    AppComponent,
    StoreLocatorComponent,
    ListStoreComponentComponent,
    ProductViewListComponent,
    GroupOfferShareComponent,
    CreareNewGroupComponent,
    ProdctDetailsDescriptionComponent,
    ProductViewAllComponent,
    GlobalCategoryComponent,
    CartDetailsComponent,
    CategoryNavBarComponent,
    DeliveryAddressComponent,
    FeedbackFormComponent,
    UserProfileComponent,
    RedeemOptionsComponent,
    QrProductGeneratorComponent,
    OrderCancelComponent,
    ModalContentComponent,
    AppHeaderComponent,
    AppNavbarComponent,
    AppFooterComponent,
    ReviewRatingComponent,
    NavigationCmpComponent,
    PaymentMethodComponent,
    StoreTimePickupComponent,
    ChangeDeliveryAddressComponent,
    OrderDetailsComponent,
    WishlistComponent,
    ProductOutofstockComponent,
    AppLoaderComponent,
    AppStoreFooterComponent,
    XZoomComponent,
    LoginComponentComponent,
    SlideAppInfoComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    SlickCarouselModule,
    OwlModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatProgressSpinnerModule,
    MatCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalContentComponent,
    ReviewRatingComponent
  ]
})
export class AppModule { }
