import React, {Component} from 'react';

class RecipeCard extends Component {
  render() {
    return (
      <React.Fragment>
        <article>
          <h3>{this.props.name}</h3>
          <div class="recipeImage">[RECIPE IMAGE]</div>

          <div class="recipeIngredients">
            <p>ingredients:</p>
          </div>

          <div class="ingredientBox">
            <p>{this.props.ingredients}</p>
            <div class="ingredientImage">
              <p>[INGREDIENT IMAGE]</p>
            </div>
          </div>

        </article>
      </React.Fragment>
    );
  }
}

export default RecipeCard;
