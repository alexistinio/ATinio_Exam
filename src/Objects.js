import React, { useEffect } from 'react'

export default function Objects({setData}) {
    useEffect(() => {
        setData(() => {
          return [
            {id: 1, Date: 'Jan 12, 2022 at 4:10 PM', EmailSubject: 'Fwd: New Project 1', Sender: 'Leo Manoban <sbtest.khr@gmail.com>', Tags: 'New Project 3/admin', complete: false},
            {id: 2, Date: 'Jan 13, 2022 at 5:10 PM', EmailSubject: 'Fwd: New Project 2', Sender: 'Alexis Tinio <tinioalexis@gmail.com>', Tags: 'New Project 3', complete: false},
            {id: 3, Date: 'Jan 11, 2022 at 6:50 PM', EmailSubject: 'Fwd: New Project 3', Sender: 'John Doe <johndoe@gmail.com>', Tags: 'Mountain Homes Construction', complete: false},
            {id: 4, Date: 'Jan 10, 2022 at 1:20 PM', EmailSubject: 'Fwd: New Project 4', Sender: 'Bruce Wayne <brucewayne@gmail.com>', Tags: 'New Project 3/admin', complete: false},
            {id: 5, Date: 'Jan 09, 2022 at 6:30 AM', EmailSubject: 'Fwd: New Project 5', Sender: 'Harley Quinn <harleyquinn@gmail.com>', Tags: 'Project', complete: false},
            {id: 6, Date: 'Jan 12, 2022 at 4:10 PM', EmailSubject: 'Fwd: New Project 1', Sender: 'Kobe Bryant <kobebryant@gmail.com>', Tags: 'New Project 3/admin', complete: false},
            {id: 7, Date: 'Jan 13, 2022 at 5:10 PM', EmailSubject: 'Fwd: New Project 2', Sender: 'Lebron James <lebronjames@gmail.com>', Tags: 'New Project 3', complete: false},
            {id: 8, Date: 'Jan 11, 2022 at 6:50 PM', EmailSubject: 'Fwd: New Project 3', Sender: 'Donovan Mitchell <donavalmitchell@gmail.com>', Tags: 'Mountain Homes Construction', complete: false},
            {id: 9, Date: 'Jan 10, 2022 at 1:20 PM', EmailSubject: 'Fwd: New Project 4', Sender: 'Bruce Wayne <brucewayne@gmail.com>', Tags: 'New Project 3/admin', complete: false},
            {id: 10, Date: 'Jan 09, 2022 at 6:30 AM', EmailSubject: 'Fwd: New Project 5', Sender: 'Harley Quinn <harleyquinn@gmail.com>', Tags: 'Project', complete: false},
        ]})
}, [])
      
  return (
    <div>Objects</div>
  )
}
