import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IRootState } from './store';

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export { useTypedSelector as useSelector };
