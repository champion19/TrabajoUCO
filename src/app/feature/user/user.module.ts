import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './component/user.component';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        UserRoutingModule,
        SharedModule
    ]
})
export class UserModule { }
