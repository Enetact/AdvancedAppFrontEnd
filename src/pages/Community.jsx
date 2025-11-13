import React, {useRef} from 'react'
export default function Community(){
  const emailRef = useRef(null)
  function onSubmit(e){
    e.preventDefault()
    const email = emailRef.current?.value?.trim()
    if (!email) return
    const el = document.createElement('div')
    el.className = 'toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3'
    el.setAttribute('role','status')
    el.innerHTML = '<div class="d-flex"><div class="toast-body">Subscribed! (demo only)</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>'
    document.body.appendChild(el)
    // @ts-ignore
    const t = new bootstrap.Toast(el)
    t.show()
    setTimeout(()=>el.remove(), 4000)
    e.target.reset()
  }
  return (
    <section>
      <h2>Community</h2>
      <p>Subscribe for occasional updates (demo only).</p>
      <form className="row g-2" onSubmit={onSubmit} noValidate>
        <div className="col-sm-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input ref={emailRef} id="email" type="email" required className="form-control" placeholder="you@example.com" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We don't store anything in this demo.</div>
        </div>
        <div className="col-sm-3 align-self-end">
          <button className="btn btn-brand" type="submit">Subscribe</button>
        </div>
      </form>
      <div id="feed" className="row g-3 mt-3"></div>
    </section>
  )
}
