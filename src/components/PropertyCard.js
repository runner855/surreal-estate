import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="PropertyCard" data-testid="property-card">
      <div className="Property-Card__header">
        <img
          src="https://www.pinclipart.com/picdir/big/519-5193111_house-clipart-animated-transparent-house-cartoon-png.png"
          alt="house-logo"
        />
      </div>
      <div className="Property-Card__title">{title}</div>
      <div className="Property-Card__type">{type}</div>
      <div className="Property-Card__bathrooms">Bathrooms: {bathrooms}</div>
      <div className="Property-Card__bedrooms">Bedrooms:{bedrooms}</div>
      <div className="Property-Card__price">£{price}</div>
      <div className="Property-Card__city">{city}</div>
      <div className="Property-Card__email">
        <a href={`mailto:${email}`}>Email</a>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
