import './RestaurantCard.css'
function RestaurantCard({name, image, type, rating, price_starts_from, number_of_votes, id}) {
  return (
    <div data-testid="restaurant-card" className="restaurant-card">
      {/* display the props */}
      <img src={image} alt={name} />
      <div>
        <p>ID: <b>{id}</b></p>
        <p>Name: <b>{name}</b></p>
        <p>Type: <b>{type}</b></p>
        <p>Price: <b>{price_starts_from}</b></p>
        <p>Rating: <b>{rating}</b></p>
        <p>Votes: <b>{number_of_votes}</b></p>
      </div>
    </div>
  );
}

export default RestaurantCard;
