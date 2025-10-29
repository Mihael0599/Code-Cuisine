import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { GenerateRecipeComponent } from './generate-recipe/generate-recipe.component';
import { CookbookComponent } from './cookbook/cookbook.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'generate-recipe', component: GenerateRecipeComponent },
    { path: 'cookbook', component: CookbookComponent },
];
