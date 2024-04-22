import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'

import css from './Contact.module.css'
const Contact = ({ name, number, favColor, id }) => {
  const dispatch = useDispatch()
  return (
    <div className={css.contactCart} key={id}>
      <ul className={css.contactList}>
        <li className={css.contactListItem}>
          <div style={{ backgroundColor: favColor }} className={css.color} />
          👨‍🦱 {name}
        </li>

        <li className={css.contactListItem}>☎️ {number}</li>
      </ul>
      <button
        type="button"
        onClick={() => {
          return dispatch(deleteContact(id))
        }}
        className={css.cantactListBtn}
      >
        {' '}
        ❌ Delete
      </button>
    </div>
  )
}
export default Contact
