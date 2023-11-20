import { useDispatch, useSelector } from 'react-redux';
import css from './SearchFilter.module.css';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label>
      Find contacts by name
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value.trim()))}
      />
    </label>
  );
};
