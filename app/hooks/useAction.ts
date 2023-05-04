import { cartActions } from '../../stores/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const allActions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
