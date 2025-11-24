import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const fills = document.querySelectorAll('.progress-fill')
    fills.forEach(fill => {
      const target = fill.getAttribute('data-target')
      setTimeout(() => (fill.style.width = target + '%'), 200)
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
  }, [])

  return (
    <>
      <div className="bg-gradient" />

      <header>
        <div className="logo">Tartan Volt</div>
        <nav>
          <a href="#technology">Technology</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>
          Test Batteries in Minutes,
          <br />Not Hours
        </h1>
        <p>
          Revolutionary EIS technology delivers 98% accurate battery diagnostics 60x
          faster than traditional methods
        </p>
        <a href="#contact" className="cta-button">
          Get Started
        </a>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div className="stat-label">Estimation Accuracy</div>
          <div className="stat-sublabel">Benchmarked against 6hr cycling test</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">60x</div>
          <div className="stat-label">Faster Testing</div>
          <div className="stat-sublabel">5 minutes vs 6+ hours</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100</div>
          <div className="stat-label">Batteries per Week</div>
          <div className="stat-sublabel">With just one device</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2 MWh</div>
          <div className="stat-label">Energy Recovered</div>
          <div className="stat-sublabel">From 1600+ modules tested</div>
        </div>
      </section>

      <section className="product-section" id="products">
        <h2 className="section-title">BattScan Product Line</h2>
        <p className="section-subtitle">Advanced battery diagnostics for every voltage range</p>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-name">BattScan050M</div>
            <div className="product-spec">
              <span className="spec-label">Voltage Range</span>
              <span className="spec-value">5-50V</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">Application</span>
              <span className="spec-value">Module Level</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">EIS Current</span>
              <span className="spec-value">10A, 0.08Hz-1kHz</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">Status</span>
              <span className="spec-value">✓ Available</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-name">BattScan450P</div>
            <div className="product-spec">
              <span className="spec-label">Voltage Range</span>
              <span className="spec-value">95-400V</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">Application</span>
              <span className="spec-value">Pack Level</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">EIS Current</span>
              <span className="spec-value">10A, 0.08Hz-1kHz</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">Status</span>
              <span className="spec-value">Prototype</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-name">BattScan500V</div>
            <div className="product-spec">
              <span className="spec-label">Voltage Range</span>
              <span className="spec-value">95-500V</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">Application</span>
              <span className="spec-value">In-Vehicle</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">Interface</span>
              <span className="spec-value">CCS Combo, NACS</span>
            </div>
            <div className="product-spec">
              <span className="spec-label">Status</span>
              <span className="spec-value">Prototype</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section" id="technology">
        <div className="tech-grid">
          <div className="tech-content">
            <h2>Electrochemical Impedance Spectroscopy</h2>
            <p>
              Our patented EIS technology enables advanced battery diagnostics on
              high voltage battery systems, providing rapid insights into materials
              degradation and capacity fade.
            </p>

            <div className="tech-features">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <div className="feature-title">Non-Invasive Testing</div>
                  <div className="feature-desc">Fast, reliable diagnostics without damaging cells</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-text">
                  <div className="feature-title">ML-Powered Analysis</div>
                  <div className="feature-desc">Advanced algorithms for accurate SOH estimation</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">☁️</div>
                <div className="feature-text">
                  <div className="feature-title">Cloud Integration</div>
                  <div className="feature-desc">BatteryDB tracks all tests and devices in real-time</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <div className="feature-text">
                  <div className="feature-title">Circular Economy</div>
                  <div className="feature-desc">Enable battery reuse and second-life applications</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-visual">
            <div className="data-viz">
              <div className="viz-title"><span className="live-indicator" />Live Battery Diagnostics</div>

              <div className="progress-bar">
                <div className="progress-label">
                  <span>Capacity Estimation</span>
                  <span>98%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" data-target="98" />
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-label">
                  <span>Testing Speed vs Cycling</span>
                  <span>60x</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" data-target="95" />
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-label">
                  <span>State of Health (SOH)</span>
                  <span>83%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" data-target="83" />
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-label">
                  <span>Test Time Reduction</span>
                  <span>-92%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" data-target="92" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-box">
          <h2>Ready to Transform Your Battery Testing?</h2>
          <p>
            Join the circular economy revolution. Contact us to learn how Tartan Volt
            can accelerate your battery grading process.
          </p>
          <a href="mailto:info@tartanvolt.com" className="cta-button">Contact Us</a>
        </div>
      </section>

      <footer>
        <p>© 2025 Tartan Volt Inc. | Kigali, Rwanda | info@tartanvolt.com</p>
        <p>Maximizing the Value of EV Batteries</p>
      </footer>
    </>
  )
}
