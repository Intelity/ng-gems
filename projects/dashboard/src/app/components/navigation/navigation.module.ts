import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../../material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [NavigationComponent, SidenavComponent],
    imports: [CommonModule, MaterialModule],
    exports: [NavigationComponent, SidenavComponent]
})
export class NavigationModule {}
