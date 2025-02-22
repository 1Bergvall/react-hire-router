import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'
import HiredPeopleList from './components/HiredPeopleList'

function Dashboard(props) {
  const { people, hiredPeople, setEdit } = props

  

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <HiredPeopleList people={hiredPeople} setEdit={setEdit} />
      </section>
    </main>
  )
}

export default Dashboard
