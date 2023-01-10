import React, {useState} from 'react'

export default function Emails({emails, toggleEmail}) {
  function handleClick() {
    toggleEmail(emails.id)
  }
  return (
    <>
    <div className='p-3'>
        <div className='container-fluid d-flex align-items-center shadow-sm' style={{border: "1px solid silver", borderRadius: "7px", height: "80px"}}>
            <svg fill="#000000" width="20" height="20" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
            <path d="M104,196.0001a12,12,0,1,1-12-12A12,12,0,0,1,104,196.0001Zm-12-80a12,12,0,1,0,12,12A12,12,0,0,0,92,116.0001Zm72-44a12,12,0,1,0-12-12A12,12,0,0,0,164,72.0001Zm0,44a12,12,0,1,0,12,12A12,12,0,0,0,164,116.0001Zm-72-68a12,12,0,1,0,12,12A12,12,0,0,0,92,48.0001Zm72,136a12,12,0,1,0,12,12A12,12,0,0,0,164,184.0001Z"/>
            </svg>
            <input className="mx-3" type="checkbox" checked={emails.complete} onChange={handleClick}/>
            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
            </svg>
            <div className='py-1 px-3 mx-3 text-center fw-bold' 
              style={{border: "1px solid silver", borderRadius: "7px", backgroundColor: "whitesmoke"}}>
                {(emails.Date).substr(4,2)} 
                <div className='text-center fw-normal' style={{fontSize: "10px"}}>{(emails.Date).substr(0,3)} </div>
            </div>
           <div className='py-1 text-white bg-secondary' style={{borderRadius: '50%', padding: '7px'}}>TA</div>
           <div className='container d-flex justify-content-between'>
            <div className="px-3">
                <div>{emails.EmailSubject}</div>
                <div style={{fontSize: "12px", color: "gray"}}>{emails.Sender} {emails.Date}</div>
                <div></div>
            </div>
            <div className="p-0 px-2 d-flex align-items-center" style={{border: "1px solid dodgerblue", borderRadius: "7px"}}>
                <div style={{fontSize: "12px", color: "dodgerblue"}}>{emails.Tags}</div>
            </div> 
           </div>
           <div style={{cursor: "pointer"}}>
           <svg width="17" height="17" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg">
                <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
                <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#0c2c67"/>
                </g>
            </svg>
           </div>
           
        </div>
    </div>
  </>
  )
}
