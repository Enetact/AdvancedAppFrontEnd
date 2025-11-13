import React, {useEffect, useState} from 'react'
const KEY = 'club:lastCard'

function uid(){ return (Date.now().toString(36) + Math.random().toString(36).slice(2,8)).toUpperCase() }

export default function Club(){
  const [name, setName] = useState('')
  const [card, setCard] = useState(null)

  useEffect(()=>{
    const cached = localStorage.getItem(KEY)
    if (cached) { try { setCard(JSON.parse(cached)) } catch {} }
  }, [])

  function onSubmit(e){
    e.preventDefault()
    if (!name.trim()) return
    const c = { name: name.trim(), id: uid() }
    localStorage.setItem(KEY, JSON.stringify(c))
    setCard(c)
  }

  return (
    <section>
      <h2>Membership Card</h2>
      <p>Generate a simple membership card. Your last card is saved for offline use.</p>
      <form className="row g-2" onSubmit={onSubmit}>
        <div className="col-sm-6">
          <label htmlFor="memberName" className="form-label">Your name</label>
          <input id="memberName" required className="form-control" placeholder="Ada Lovelace" value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className="col-sm-3 align-self-end">
          <button className="btn btn-brand" type="submit">Generate</button>
        </div>
      </form>
      <div className="mt-4">
        {card && (
          <div className="card p-3">
            <div className="d-flex justify-content-between">
              <strong>Club PWA</strong><span className="badge bg-success">Member</span>
            </div>
            <hr/>
            <div className="d-flex flex-column">
              <span className="text-muted">Name</span>
              <span className="fs-4">{card.name}</span>
              <span className="text-muted mt-2">ID</span>
              <code>{card.id}</code>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
