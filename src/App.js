import React, {useEffect, useState} from 'react'
import Nav from './Nav'
import Emails from './Emails'
import Objects from './Objects'


const local_key = 'local_key.emails'
function App() {

const [all, setAll] = useState(false)
const [pageStart, setPageStart] = useState([0])
const [pageEnd, setPageEnd] = useState([10])
const [emails, setEmails] = useState([])


useEffect(() => {
  const storedEmails = JSON.parse(localStorage.getItem(local_key))
  if (storedEmails) setEmails(storedEmails)
}, [])

  function nextPage() {
    const start = parseInt(pageStart) + 10
    const end = parseInt(pageEnd) + 10

    if(pageStart<90){
      setPageStart(start)
      setPageEnd(end)
    }
    else{
      //
    }
  }

  function prevPage() {
    const start = parseInt(pageStart) - 10
    const end = parseInt(pageEnd) - 10
    
    if(pageStart>0){
      setPageStart(start)
      setPageEnd(end)
    }
    else{
      //
    }      
  }

  function clearEmails() {
    const filterEmails = emails.filter(email => !email.complete)
    setEmails(filterEmails)
    localStorage.setItem(local_key, JSON.stringify(filterEmails))
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
      clearEmails={clearEmails}
      pageStart={pageStart}
      pageEnd={pageEnd}
      nextPage={nextPage}
      prevPage={prevPage}
      />
      
    <div className='ms-4 mt-4 fw-bolder text-muted'>Unread</div>
 
     {emails.slice(pageStart,pageEnd).reverse().map((email) => {
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
