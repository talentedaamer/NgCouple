import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes, {
            useHash: true
        }),
        SidebarModule,
        HeaderModule,
        FooterModule
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
