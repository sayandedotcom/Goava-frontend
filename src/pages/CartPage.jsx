import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'components/button/button';
import NewTooltip from 'lib/tooltip';
import GoTop from 'layout/scrollTop/scrollTop';

const Cart = () => {
  return (
    <div>
      Cart
      <NewTooltip items='Checkout'>
        <Link to={'/checkout'}>
          <Button buttonType='inverted'>Checkout</Button>
        </Link>
      </NewTooltip>
      <GoTop />
    </div>
  );
};

export default Cart;
