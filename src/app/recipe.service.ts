import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  private apiKey = 'YOUR_SPOONACULAR_API_KEY'; // Replace with your Spoonacular API key

  constructor(private http: HttpClient) {}

  getRecipes(query: string, numberOfResults: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('query', query)
      .set('number', numberOfResults.toString())
      .set('apiKey', this.apiKey);

    return this.http.get<any>(this.apiUrl, { params });
  }
}
