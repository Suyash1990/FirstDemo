import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is a test", "https://www.thecookierookie.com/wp-content/uploads/2019/08/pasta-pomodoro-recipe-3-of-7.jpg.webp")
  ];

  constructor() { }

  ngOnInit() {
  }

}
