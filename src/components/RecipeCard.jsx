import React, {Component} from 'react';

class RecipeCard extends Component {
  render() {
    const ingreds = this.props.ingredients;
    // const formattedIngreds = ingreds.map((item, i ) => {
    //     if((ingreds.length) === i + 1 ) {
    //       return item;
    //     }else {
    //       return item + ", ";
    //     }
    // });


    const image = this.props.image;
    const imagePath = `./images/recipe_images/${image}.jpg`;


    const items = []

    for (const [index, value] of ingreds.entries()) {
      const iconPath = `./images/icons/${value}.jpg`;
      items.push(<div class="iconContainer"><img src={iconPath} /><li key={index} class="ingredientName">{value}</li></div>)
    }

    return (
      <React.Fragment>
        <article className="recipeCard">
          <h3>{this.props.name}</h3>
          <div className="recipeImage">
            <img src={imagePath} />
          </div>

          <div className="recipeIngredients">
            <p>INGREDIENTS</p>
            <div className="icons">{items}</div>
          </div>

        </article>
      </React.Fragment>
    );
  }
}

export default RecipeCard;
