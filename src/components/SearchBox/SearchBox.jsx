import { useDispatch, useSelector } from 'react-redux'
import { setFilterContact } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter.filters.name)
  const onChange = (event) => {
    dispatch(setFilterContact(event.target.value))
  }

  return (
    <div>
      <h2 className={css.searchBoxTitle}>Find contact by name</h2>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Please enter name ..."
        value={filter}
        onChange={onChange}
      />
    </div>
  )
}
export default SearchBox
