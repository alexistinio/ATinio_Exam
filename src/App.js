import React, {useEffect, useState} from 'react'
import Nav from './Nav'
import Emails from './Emails'
import Objects from './Objects'


const local_key = 'local_key.emails'
function App() {

  const [all, setAll] = useState(false);
  const [emails, setEmails] = useState([])

useEffect(() => {
  const storedEmails = JSON.parse(localStorage.getItem(local_key))
  if (storedEmails) setEmails(storedEmails)
}, [])

  function clearEmails() {
    const deleteEmails = emails.filter(email => !email.complete)
    setEmails(deleteEmails)
    localStorage.setItem(local_key, JSON.stringify(deleteEmails))
  }


  function selectAll() {
    const toggleEmails = [...emails]
    setAll(all => !all)
    toggleEmails.map((l) => {

  
      return l.complete = !all
    })
    } 
 
  function toggleEmail(id){
    const toggleEmails = [...emails]
    const email = toggleEmails.find(email => email.id === id)
    email.complete = !email.complete
    setEmails(toggleEmails)
  }
 
    
  return (
    <>
    <Objects setData={setEmails} />
      <Nav 
      selectAll={selectAll} 
      all={all}
      clearEmails={clearEmails}/>
      
    <div className='ms-4 mt-4 fw-bolder text-muted'>Unread</div>
     {emails.map((email) => {
        return (
          <Emails 
          emails={email}
          toggleEmail={toggleEmail}
          />
        )
      })}
    </>
  )
}

export default App;
