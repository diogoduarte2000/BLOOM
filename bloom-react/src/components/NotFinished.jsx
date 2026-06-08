import { useState } from 'react'

const accordionItems = [
  {
    id: 'open-living',
    icon: '/icons/Vector.svg',
    label: 'Open living spaces',
    body: 'Open plan living and kitchen areas that extend to private balconies, bringing light and openness into daily life.',
  },
  {
    id: 'energy',
    icon: '/icons/Vector-1.svg',
    label: 'Energy-efficient homes',
    body: 'High-performance insulation and smart systems that reduce energy consumption significantly.',
  },
  {
    id: 'kitchens',
    icon: '/icons/Vector-2.svg',
    label: 'Equipped kitchens',
    body: 'Fully equipped kitchens with quality appliances included from day one.',
  },
  {
    id: 'parking',
    icon: '/icons/Vector-7.svg',
    label: 'Underground parking',
    body: 'Secure underground parking included with each unit.',
  },
  {
    id: 'shared',
    icon: '/icons/Vector-4.svg',
    label: 'Shared living space',
    body: 'Community spaces designed for connection, co-working, and relaxation.',
  },
  {
    id: 'bikes',
    icon: '/icons/Vector-5.svg',
    label: 'Bicycle parking',
    body: 'Dedicated secure bicycle storage and maintenance area.',
  },
]

export default function NotFinished() {
  const [openId, setOpenId] = useState('open-living')

  function toggle(id) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section className="not-finished" id="about">
      <div className="nf-left">
        <h2 className="nf-title">
          Here, the home is not<br/><em>a finished product</em>
        </h2>
        <p className="nf-body">
          It is a living project — designed to start with the essentials, letting you invest in what truly matters.
          At Bloom Living, you begin in a functional, efficient space, with the freedom to adapt and personalise
          your home as your priorities and life evolve.
        </p>
        <button className="btn btn-dark">
          <span className="arrow-icon">
            <svg viewBox="0 0 24 24">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </span>
          Book a visit
        </button>
      </div>

      <div className="nf-right">
        <div className="nf-accordion">
          {accordionItems.map(item => (
            <div key={item.id}>
              <div
                className={`nf-item${openId === item.id ? ' open' : ''}`}
                onClick={() => toggle(item.id)}
              >
                <div className="nf-item-inner">
                  <img className="nf-icon" src={item.icon} alt=""/>
                  <span className="nf-item-label">{item.label}</span>
                </div>
                <span className="nf-item-arrow">↓</span>
              </div>
              {openId === item.id && (
                <div className="nf-item-body">{item.body}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
