import React from "react";

import MenuItem from "../MenuItem/MenuItem";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/hgNNYbC/hero-1.jpg",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/gdBHJqH/hero-2.jpg",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/Y3fnQ3Q/hero-3.jpg",
          id: 3,
          linkUrl: "shop/sneakers"
        }
      ]
    };
  }
  render() {
    return (
      <div className="row no-gutters">
        {this.state.sections.map(({ id, ...otherSectionsProps }) => {
          return <MenuItem key={id} {...otherSectionsProps} />;
        })}
      </div>
    );
  }
}

export default Directory;