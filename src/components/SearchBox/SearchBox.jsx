import css from './SearchBox.module.css'

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <h2 className={css.searchBoxTitle}>Find contact by name</h2>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Please enter name ..."
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  )
}
export default SearchBox
