import React, {useMemo, useState} from 'react'

const RARITIES = ['Common','Uncommon','Rare','Epic','Legendary']
const TRAITS = ['solar','lunar','aqua','terra','ember','metal','wind','arc','void','flora']
const KEY = 'gallery:mock'

function generate(count=72){
  const items = []
  for (let i=1; i<=count; i++){
    const rarity = RARITIES[Math.floor(Math.random()*RARITIES.length)]
    const traits = Array.from(new Set(Array(3).fill(0).map(()=>TRAITS[Math.floor(Math.random()*TRAITS.length)])))
    items.push({ id:i, name:`Specimen #${i}`, rarity, traits })
  }
  return items
}

function load(){
  const cached = localStorage.getItem(KEY)
  if (cached) { try { return JSON.parse(cached) } catch{} }
  const data = generate()
  localStorage.setItem(KEY, JSON.stringify(data))
  return data
}

export default function Gallery(){
  const base = useMemo(()=>load(), [])
  const [rarity, setRarity] = useState('')
  const [trait, setTrait] = useState('')

  const data = base.filter(d => {
    const okR = rarity ? d.rarity === rarity : true
    const t = trait.trim().toLowerCase()
    const okT = t ? d.traits.some(tr => tr.toLowerCase().includes(t)) : true
    return okR && okT
  })

  return (
    <section aria-labelledby="galleryHeading">
      <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
        <div>
          <h2 id="galleryHeading">Gallery</h2>
          <p className="text-muted">Client-side mock data with trait and rarity filters. Cached for offline revisit.</p>
        </div>
        <form className="row g-2" onSubmit={(e)=>e.preventDefault()}>
          <div className="col-auto">
            <label htmlFor="rarity" className="form-label">Rarity</label>
            <select id="rarity" className="form-select form-select-sm" value={rarity} onChange={e=>setRarity(e.target.value)}>
              <option value="">All</option>
              {RARITIES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className="col-auto">
            <label htmlFor="trait" className="form-label">Trait</label>
            <input id="trait" className="form-control form-control-sm" placeholder="e.g., solar" value={trait} onChange={e=>setTrait(e.target.value)} />
          </div>
          <div className="col-auto align-self-end">
            <button className="btn btn-sm btn-brand" type="button" onClick={()=>{}}>Apply</button>
          </div>
        </form>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mt-2" aria-live="polite">
        {data.map(item => (
          <div className="col" key={item.id}>
            <div className="card h-100">
              <div className="skeleton" role="img" aria-label={`placeholder image for ${item.name}`}></div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="h5 card-title">{item.name}</h3>
                  <span className={`badge bg-${{Common:'secondary',Uncommon:'info',Rare:'primary',Epic:'warning',Legendary:'success'}[item.rarity] || 'light'}`}>{item.rarity}</span>
                </div>
                <p className="card-text text-muted">ID: {item.id}</p>
                <div>{item.traits.map(tr => <span key={tr} className="badge bg-secondary me-1">{tr}</span>)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
