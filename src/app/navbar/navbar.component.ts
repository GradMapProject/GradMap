import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  items: MenuItem[] = [
          {
              label:'My Plans',
              icon:'pi pi-fw pi-file'
          },
          {
              label:'Profile',
              icon:'pi pi-fw pi-user'
          },
          {
              label:'Help',
              icon:'pi pi-fw pi-question'
          }
      ];
}