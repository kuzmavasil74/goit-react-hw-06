import css from './Contact.module.css'

const Contact = ({ onDeleteContact, name, number, favColor, id }) => {
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
        onClick={() => onDeleteContact(id)}
        className={css.cantactListBtn}
      >
        {' '}
        ❌ Delete
      </button>
    </div>
  )
}
export default Contact
