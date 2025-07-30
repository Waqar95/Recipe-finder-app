import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Recipe Finder</span>
    </mat-toolbar>

    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Welcome to Recipe Finder</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Find the best recipes for your meals!</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent {}
