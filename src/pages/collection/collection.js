import React from "react";
import { connect } from "react-redux";

import Collectionitem from "../../components/CollectionItem/CollectionItem";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="row items">
        {items.map(item => (
          <Collectionitem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
