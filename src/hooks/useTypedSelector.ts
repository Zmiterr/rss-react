import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const storeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default storeSelector;
