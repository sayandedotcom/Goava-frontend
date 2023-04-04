import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'components/button/button';
import NewTooltip from 'components/tooltip/tooltip';

const Cart = () => {
  return (
    <div>
      Cart
      <NewTooltip items='Checkout'>
        <Link to={'/checkout'}>
          <Button buttonType='inverted'>Checkout</Button>
        </Link>
      </NewTooltip>
    </div>
  );
};

export default Cart;
