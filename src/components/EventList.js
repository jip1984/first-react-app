import React from 'react';
import styles from './EventList.module.css'

const EventList = ({ events, click }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <p>{event.location} - {event.date}</p>
          <button onClick={() => click(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default EventList;
