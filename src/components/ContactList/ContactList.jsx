import { useDispatch, useSelector } from 'react-redux'
import css from './ContactList.module.css'
import { deleteContact } from '../../redux/contactsSlice'
import Contact from '../Contact/Contact'

const ContactList = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter.filters.name)
  const contacts = useSelector((state) => {
    const allContacts = state.contact.contacts.items
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter ? filter.toLowerCase() : '')
    )
  })

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
  }

  return (
    <ul className={css.contactListMainContainer}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            favColor={contact.favColor}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        )
      })}
    </ul>
  )
}

export default ContactList
