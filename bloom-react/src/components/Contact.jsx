import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', profile: '',
    interestT2: false, interestT3: false, terms: false,
  })

  function handleChange(e) {
    const { id, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [id]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit() {
    if (!form.name || !form.email) { alert('Please fill in your name and email.'); return }
    if (!form.terms) { alert('Please accept the Terms and Conditions.'); return }
    alert(`Thank you, ${form.name}! We will be in touch shortly.`)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>If you'd like to learn more about Bloom Living, our team is here to help.</p>
          <p style={{ marginTop: '1rem' }}>Share a few details and we'll get back to you shortly.</p>
        </div>

        <div className="contact-right">
          <div className="form-group-orig">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" value={form.name} onChange={handleChange}/>
          </div>
          <div className="form-group-orig">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" value={form.email} onChange={handleChange}/>
          </div>
          <div className="form-group-orig">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" placeholder="+351 000 000 000" value={form.phone} onChange={handleChange}/>
          </div>
          <div className="form-group-orig">
            <label htmlFor="profile">Profile</label>
            <select id="profile" value={form.profile} onChange={handleChange}>
              <option value="" disabled>Select one</option>
              <option>Buyer</option>
              <option>Investor</option>
              <option>Agent</option>
            </select>
          </div>
          <div className="form-group-orig">
            <label>I am interested in the apartment type</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" id="interestT2" checked={form.interestT2} onChange={handleChange}/> T2
              </label>
              <label>
                <input type="checkbox" id="interestT3" checked={form.interestT3} onChange={handleChange}/> T3
              </label>
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" checked={form.terms} onChange={handleChange}/>
            <label htmlFor="terms">
              I declare that I have read and accept the Terms and Conditions, Privacy Policy, and Cookies Policy.
            </label>
          </div>
          <button className="btn-send" onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </section>
  )
}
