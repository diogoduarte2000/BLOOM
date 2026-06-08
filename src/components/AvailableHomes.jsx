import { useState } from 'react'

const allHomes = [
  { unit: 'A101', typology: 'T1', area: '52 m²', floor: '1st', price: '€245,000', status: 'Available' },
  { unit: 'A205', typology: 'T2', area: '78 m²', floor: '2nd', price: '€395,000', status: 'Available' },
  { unit: 'A308', typology: 'T2', area: '82 m²', floor: '3rd', price: '€335,000', status: 'Reserved' },
  { unit: 'A412', typology: 'T3', area: '105 m²', floor: '4th', price: '€425,000', status: 'Available' },
  { unit: 'AG01', typology: 'T1', area: '55 m²', floor: '0th', price: '€265,000', status: 'Available' },
  { unit: 'AG03', typology: 'T3', area: '110 m²', floor: '0th', price: '€445,000', status: 'Available' },
]

export default function AvailableHomes() {
  const [typFilter, setTypFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = allHomes.filter(h =>
    (typFilter === 'all' || h.typology === typFilter) &&
    (statusFilter === 'all' || h.status === statusFilter)
  )

  return (
    <section className="homes" id="available-homes">
      <div className="container">
        <div className="homes-header">
          <h2 className="homes-title">Available homes</h2>
          <p className="homes-desc">
            A selection of thoughtfully designed apartments, offering flexible layouts for different stages of life.
          </p>
        </div>

        <div className="homes-filters">
          {/* Typology filter */}
          <div className="filter-group">
            <span className="filter-label">Typology</span>
            {['all', 'T1', 'T2', 'T3'].map(val => (
              <button
                key={val}
                className={`filter-chip${typFilter === val ? ' active' : ''}`}
                onClick={() => setTypFilter(val)}
              >
                {val === 'all' ? 'All' : val}
              </button>
            ))}
          </div>

          {/* Status filter */}
          <div className="filter-group">
            <span className="filter-label">Status</span>
            {['all', 'Available', 'Reserved'].map(val => (
              <button
                key={val}
                className={`filter-chip${statusFilter === val ? ' active' : ''}`}
                onClick={() => setStatusFilter(val)}
              >
                {val === 'all' ? 'All' : val}
              </button>
            ))}
          </div>
        </div>

        <div className="homes-table-wrap">
        <table className="homes-table">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Typology</th>
              <th>Area</th>
              <th>Floor</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((h) => (
              <tr key={h.unit}>
                <td>{h.unit}</td>
                <td>{h.typology}</td>
                <td>{h.area}</td>
                <td>{h.floor}</td>
                <td>{h.price}</td>
                <td>
                  <span className={`status-badge ${h.status.toLowerCase()}`}>{h.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <p className="homes-note">*Prices indicative. Subject to availability.</p>
      </div>
    </section>
  )
}
