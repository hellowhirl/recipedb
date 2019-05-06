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

    const time = this.props.time;

    return (
      <React.Fragment>
        <article className="recipeCard">
          <div className="recipeHeader">
            <img src={imagePath} />
            <div className="metaDetails">
              <h2>{this.props.name}</h2>
              <div className="prepTime">
                <p className="prepTime">{time}</p>
                <p className="minutes">minutes</p>
              </div>
              <div className="percentIngredients">
                <p>{this.props.percent}</p>
              </div>
            </div>
          </div>

          <div className="recipeIngredients">
            <h3>INGREDIENTS</h3>
            <div className="icons">{items}</div>
          </div>

        </article>
      </React.Fragment>
    );
  }
}

export default RecipeCard;
