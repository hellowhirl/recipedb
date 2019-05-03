import React, {Component} from 'react';

class RecipeCard extends Component {
  render() {
    const ingreds = this.props.ingredients;

    const formattedIngreds = ingreds.map((item, i ) => {
        if((ingreds.length) === i + 1 ) {
          return item;
        }else {
          return item + ", ";
        }
    })

    return (
      <React.Fragment>
        <article>
          <h3>{this.props.name}</h3>
          <div className="recipeImage">[RECIPE IMAGE]</div>

          <div className="recipeIngredients">
            <p>ingredients:</p>
          </div>

          <div className="ingredientBox">
            <p>{formattedIngreds}</p>
            <div className="ingredientImage">
              <p>[INGREDIENT IMAGE]</p>
            </div>
          </div>

        </article>
      </React.Fragment>
    );
  }
}

export default RecipeCard;
