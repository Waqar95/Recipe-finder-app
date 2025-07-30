import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { SearchComponent } from './search/search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipes: any[] = [];
  isLoading: boolean = false;

  constructor(private recipeService: RecipeService) {}

  // This method handles the search query and fetches recipes from the RecipeService
  onSearch(query: string) {
    this.isLoading = true; // Show loading spinner or text while fetching data
    this.recipeService.getRecipes(query).subscribe(
      (data) => {
        this.recipes = data.results; // Store fetched recipes in the recipes array
        this.isLoading = false; // Hide loading after the data is fetched
      },
      (error) => {
        console.error('Error fetching recipes:', error);
        this.isLoading = false; // Hide loading on error
      }
    );
  }
}
