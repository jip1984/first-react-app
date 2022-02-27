import React, { useState } from 'react'
import './App.css';
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = event => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })

    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleOpen = () => {
    setShowModal(true)
  }



  const subtitle = "All the latest events"

  return (

    <div className="App">

      <Title title="Events in your area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} click={handleClick} />
      }
      <div>
        <button onClick={handleOpen}>Add New Event</button>
      </div>


      {/* <Modal>
        <h2>10% of coupon</h2>
        <p>Use the code NINJA10 at the checkout</p>
      </Modal> */}
      {showModal && <Modal
        isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
    </div>
  );
}

export default App;
