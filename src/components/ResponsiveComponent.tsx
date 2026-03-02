import React from 'react'
import '../styles/responsive.css'

export function ResponsiveComponent() {
  return (
    <div className="container">
      <div className="grid">
        <div className="card">
          <h2>Card 1</h2>
          <p>Mobile: 1 kolom | Tablet: 2 kolom | Desktop: 3 kolom</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Responsive otomatis</p>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>Tidak perlu JavaScript</p>
        </div>
      </div>
    </div>
  )
}
