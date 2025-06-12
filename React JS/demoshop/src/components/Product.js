import React from 'react'; // Fixed capitalization
import ProductItem from './ProductItem';
import Card from './Card';
import './Product.css';

const Products = (props) => {
  return (
    <Card className="products">
      {props.items.map((item) => ( // Use map to render all items dynamically
        <ProductItem
          key={item.id} // Add key for React's reconciliation
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Products; // Make sure to export