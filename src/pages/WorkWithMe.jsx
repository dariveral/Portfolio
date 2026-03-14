import { useState } from 'react'
import styles from './WorkWithMe.module.css'

const MY_EMAIL = 'darleneriveral@icloud.com'
const TODAY = new Date().toISOString().split('T')[0]

const TIME_SLOTS = [
  { value: 'Morning (9am – 12pm)',   label: 'Morning', sub: '9am – 12pm' },
  { value: 'Afternoon (12pm – 5pm)', label: 'Afternoon', sub: '12pm – 5pm' },
  { value: 'Evening (5pm – 8pm)',    label: 'Evening', sub: '5pm – 8pm' },
]

const PROJECT_TYPES = [
  'UX / UI Design',
  'Brand Identity',
  'Product Design',
  'Consultation',
  'Other',
]

function openMailto(subject, body) {
  window.location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function WorkWithMe() {
  const [activeTab, setActiveTab] = useState(0)

  const [booking, setBooking] = useState({ name: '', email: '', date: '', time: '' })
  const [brief, setBrief]     = useState({ name: '', email: '', projectType: '', description: '' })

  function handleBookingSubmit(e) {
    e.preventDefault()
    const subject = `Chat request from ${booking.name}`
    const body = [
      `Hi Darlene,`,
      ``,
      `I'd love to book a chat with you.`,
      ``,
      `Name: ${booking.name}`,
      `Email: ${booking.email}`,
      `Preferred date: ${booking.date}`,
      `Preferred time: ${booking.time}`,
    ].join('\n')
    openMailto(subject, body)
  }

  function handleBriefSubmit(e) {
    e.preventDefault()
    const subject = `Project brief from ${brief.name} — ${brief.projectType}`
    const body = [
      `Hi Darlene,`,
      ``,
      `My name is ${brief.name}. I have a ${brief.projectType} project I'd like to discuss with you.`,
      ``,
      `--- Project brief ---`,
      brief.description,
      ``,
      `Best,`,
      `${brief.name}`,
      `${brief.email}`,
    ].join('\n')
    openMailto(subject, body)
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Hero */}
        <h1 className={styles.heading}>Let's build something together.</h1>
        <p className={styles.sub}>
          I'm open to full-time roles, freelance projects, and collaborations.
          Book a chat to find a time that works, or send me a brief with details about your project.
        </p>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 0 ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Book a chat
          </button>
          <button
            className={`${styles.tab} ${activeTab === 1 ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Send a brief
          </button>
        </div>

        {/* Book a chat */}
        {activeTab === 0 && (
          <form className={styles.form} onSubmit={handleBookingSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your name"
                  required
                  value={booking.name}
                  onChange={e => setBooking(b => ({ ...b, name: e.target.value }))}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={booking.email}
                  onChange={e => setBooking(b => ({ ...b, email: e.target.value }))}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Preferred date</label>
              <input
                className={styles.input}
                type="date"
                min={TODAY}
                required
                value={booking.date}
                onChange={e => setBooking(b => ({ ...b, date: e.target.value }))}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Preferred time</label>
              <div className={styles.radioGroup}>
                {TIME_SLOTS.map(slot => (
                  <label
                    key={slot.value}
                    className={`${styles.radioOption} ${booking.time === slot.value ? styles.radioActive : ''}`}
                  >
                    <input
                      type="radio"
                      name="time"
                      value={slot.value}
                      required
                      checked={booking.time === slot.value}
                      onChange={() => setBooking(b => ({ ...b, time: slot.value }))}
                    />
                    <span className={styles.radioLabel}>{slot.label}</span>
                    <span className={styles.radioSub}>{slot.sub}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className={styles.submitBtn} type="submit">
              Send request
            </button>
          </form>
        )}

        {/* Send a brief */}
        {activeTab === 1 && (
          <form className={styles.form} onSubmit={handleBriefSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your name"
                  required
                  value={brief.name}
                  onChange={e => setBrief(b => ({ ...b, name: e.target.value }))}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={brief.email}
                  onChange={e => setBrief(b => ({ ...b, email: e.target.value }))}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Project type</label>
              <select
                className={styles.select}
                required
                value={brief.projectType}
                onChange={e => setBrief(b => ({ ...b, projectType: e.target.value }))}
              >
                <option value="">Select a type…</option>
                {PROJECT_TYPES.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Tell me about your project</label>
              <textarea
                className={styles.textarea}
                placeholder="What are you working on? What do you need help with?"
                required
                rows={5}
                value={brief.description}
                onChange={e => setBrief(b => ({ ...b, description: e.target.value }))}
              />
            </div>

            <button className={styles.submitBtn} type="submit">
              Send brief
            </button>
          </form>
        )}

      </div>
    </div>
  )
}
