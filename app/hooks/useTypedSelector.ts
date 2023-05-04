import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypeRootState } from '../../stores/store';

export const usedTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
