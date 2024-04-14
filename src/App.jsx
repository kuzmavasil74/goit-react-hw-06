import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import Contact from './components/Contacts/Contacts'
import { nanoid } from 'nanoid'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, deleteContact } from './redux/contactsSlice'
import { setFilterContact } from './redux/filtersSlice'

function App() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contact.contacts.items)
  const filter = useSelector((state) => {
    console.log(state)
    return state.filter.filters.name
  })

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    }
    const action = addContact(finalContact)
    dispatch(action)
  }

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId)
    dispatch(action)
  }
  const onChangeFilter = (event) => {
    dispatch(setFilterContact(event.target.value))
  }

  const filteredContacts = contacts.filter((contact) => {
    return (
      (contact.name &&
        contact.name
          .toLowerCase()
          .includes(filter ? filter.toLowerCase() : '')) ||
      (contact.number && contact.number.includes(filter ? filter : ''))
    )
  })

  return (
    <div>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
      <Contact />
    </div>
  )
}

export default App
