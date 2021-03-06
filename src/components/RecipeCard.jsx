import React, { Component } from 'react';
import { withRouter } from 'react-router';

class RecipeCard extends Component {
  render() {
    const ingreds = this.props.ingredients;
    const image = this.props.image;
    const imagePath = `./images/recipe_images/${image}.jpg`;
    const items = [];
    const time = this.props.time;

    for (const [index, value] of ingreds.entries()) {
      const iconPath = `./images/icons/${value}.jpg`;
      items.push(
        <div key={index} className="col-md-3 col-6 iconContainer">
          <img src={iconPath} />
          <li className="ingredientName">{value}</li>
        </div>
      );
    }

    const handleClick = () => {
      this.props.history.push(this.props.id + '');
    };

    return (
      <div onClick={handleClick}>
        <article className="recipeCard">
          <div className="recipeHeader">
            <img className="mainImage" src={imagePath} />
            <div className="metaDetails">
              <h2>{this.props.name}</h2>
              <div className="prepTime">
                <p>{time}</p>
                <p className="minutes">minutes</p>
              </div>
              <div className="percentIngredients">
                <p>{this.props.percent}</p>
              </div>
            </div>
          </div>

          <div className="recipeIngredients">
            <h3>INGREDIENTS</h3>
            <div className="container icons">{items}</div>
          </div>
        </article>
      </div>
    );
  }
}

const RecipeCardWithRouter = withRouter(RecipeCard);

export default RecipeCardWithRouter;
