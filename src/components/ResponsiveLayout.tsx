import React from 'react'
import '../styles/responsive.css'

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <div className="w-full min-h-screen">
      {/* Header Responsive */}
      <header className="bg-white border-b border-gray-200">
        <div className="container">
          <nav className="flex justify-between items-center py-responsive">
            <div className="text-2xl font-bold text-[#1e08b1]">
              Carent
            </div>
            <ul className="flex gap-responsive hidden-mobile">
              <li><a href="#" className="nav-button">Home</a></li>
              <li><a href="#" className="nav-button">About</a></li>
              <li><a href="#" className="nav-button">Services</a></li>
              <li><a href="#" className="nav-button">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto">
        {children}
      </main>

      {/* Footer Responsive */}
      <footer className="bg-gray-900 text-white mt-responsive">
        <div className="container">
          <div className="grid">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>Carent Foundation</p>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Service 1</a></li>
                <li><a href="#">Service 2</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: info@carent.com</p>
            </div>
          </div>
          <div className="text-center py-responsive border-t border-gray-700 mt-responsive">
            <p>&copy; 2024 Carent Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
