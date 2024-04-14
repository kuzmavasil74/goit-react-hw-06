import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import contactsData from './contacts.json'
import Contact from './components/Contacts/Contacts'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import css from './App.module.css'

function App() {
  const [contactsList, setContactsList] = useState(() => {
    const stringingifiedContacts = localStorage.getItem('contacts')
    if (!stringingifiedContacts) return contactsData
    return JSON.parse(stringingifiedContacts)
  })

  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsList))
  }, [contactsList])

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    }

    setContactsList((prevState) => [...prevState, finalContact])
  }

  const onDeleteContact = (contactId) => {
    setContactsList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    )
  }
  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredContacts = contactsList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  )

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
