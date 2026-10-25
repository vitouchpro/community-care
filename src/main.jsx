import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, ShieldCheck, Users, HandHeart, MapPin, Phone, Mail, ArrowUpRight, Menu, X, CheckCircle2, QrCode, Sparkles } from "lucide-react";
import "./styles.css";

const trust = {
  name: "Community Care Trust",
  tamilName: "சமூக நல அறக்கட்டளை",
  location: "Kanchipuram, Tamil Nadu",
  phone: "+91 XXXXX XXXXX",
  email: "hello@example.org",
  upiId: "trustname@upi",
  // Replace this placeholder with the trust's verified payment QR image.
  qrImage: ""
};

const activities = [
  { icon: HandHeart, title: "Community support", text: "Help families access essential support and resources." },
  { icon: Users, title: "Education & wellbeing", text: "Support learning, wellbeing and opportunities for local communities." },
  { icon: Heart, title: "Relief initiatives", text: "Contribute to community-led assistance when it is needed most." }
];

function App() {
  const [amount, setAmount] = useState("500");
  const [monthly, setMonthly] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const startDonation = () => {
    setShowQr(true);
    document.getElementById("donate")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> Every contribution can help build a stronger community <span className="announcement-tamil">• உங்கள் பங்களிப்பு சமூகத்தை வலுப்படுத்தும்</span></div>
      <header className="header container">
        <a className="brand" href="#home" aria-label="Trust home">
          <span className="brand-mark"><Heart size={23} strokeWidth={2.2} /></span>
          <span><strong>{trust.name}</strong><small>{trust.location}</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X /> : <Menu />}</button>
        <nav className={mobileMenu ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#work" onClick={() => setMobileMenu(false)}>Our work</a>
          <a href="#transparency" onClick={() => setMobileMenu(false)}>Transparency</a>
          <a className="nav-donate" href="#donate" onClick={() => { setMobileMenu(false); startDonation(); }}>Donate <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> A little help. A lasting impact.</div>
            <h1>Together, we can make <em>good things</em> happen.</h1>
            <p className="hero-tamil">ஒன்றிணைவோம், நன்மைகளை உருவாக்குவோம்.</p>
            <p className="hero-description">Your kindness can support community welfare initiatives and help create a more caring future for people in and around Kanchipuram.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={startDonation}><Heart size={18} /> Make a donation</button>
              <a className="text-link" href="#about">Learn about our trust <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-proof"><span className="proof-icon"><ShieldCheck size={18}/></span><span><strong>Giving with purpose</strong><small>Transparent, community-focused support</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="image-frame">
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1100&q=85" alt="Volunteers working together to support their community" />
              <div className="image-label"><span className="label-icon"><HandHeart size={20}/></span><span><strong>Small acts. Real change.</strong><small>Every contribution matters.</small></span></div>
            </div>
            <div className="floating-note"><span className="note-heart"><Heart size={17} fill="currentColor"/></span><span><strong>Give with heart</strong><small>Support a cause that matters</small></span></div>
            <div className="decor decor-one"></div><div className="decor decor-two"></div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container strip-inner">
            <div><span className="strip-icon"><MapPin size={20}/></span><span><strong>Rooted in Kanchipuram</strong><small>Serving our local community</small></span></div>
            <div><span className="strip-icon"><Users size={20}/></span><span><strong>Community first</strong><small>People and dignity at the centre</small></span></div>
            <div><span className="strip-icon"><ShieldCheck size={20}/></span><span><strong>Responsible giving</strong><small>Clear records for donations</small></span></div>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <div className="section-heading">
            <div className="eyebrow">WHO WE ARE</div>
            <h2>Compassion is where <em>change begins.</em></h2>
            <p>This is a starter layout for your trust. Once the official details are confirmed, this section can explain the trust's registered objectives, story, and the people it serves.</p>
          </div>
          <div className="about-card">
            <div className="about-symbol"><HandHeart size={32}/></div>
            <div><h3>{trust.tamilName}</h3><p>Our aim is to bring people together to support meaningful community initiatives through kindness, participation and responsible use of donations.</p><a href="#donate" className="inline-link">Be part of the mission <ArrowUpRight size={16}/></a></div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow">HOW WE HELP</div>
              <h2>Goodness takes <em>many forms.</em></h2>
              <p>These are sample activity categories only. Replace them with the trust's actual programmes before publishing.</p>
            </div>
            <div className="activity-grid">{activities.map(({ icon: Icon, title, text }, i) => <article className="activity-card" key={title}><span className="activity-number">0{i + 1}</span><span className="activity-icon"><Icon size={24}/></span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="donation-section" id="donate">
          <div className="container donation-layout">
            <div className="donation-copy">
              <div className="eyebrow eyebrow-light">YOUR KINDNESS COUNTS</div>
              <h2>Be the reason someone smiles <em>today.</em></h2>
              <p>Choose a contribution amount and use the trust's verified payment QR once it is provided. Every donation should be recorded and acknowledged responsibly.</p>
              <div className="donation-points"><span><CheckCircle2 size={18}/> Choose an amount that feels right</span><span><CheckCircle2 size={18}/> One-time donation or monthly interest</span><span><CheckCircle2 size={18}/> Payment confirmation and records</span></div>
              <p className="small-note">Monthly giving requires a separate recurring-payment authorization. Scanning a static QR does not activate AutoPay.</p>
            </div>
            <div className="donation-card">
              <div className="donation-card-heading"><span className="donation-card-icon"><Heart size={20}/></span><div><h3>Make a contribution</h3><p>Your support makes a difference</p></div></div>
              <div className="field-label">Select an amount</div>
              <div className="amount-grid">{["250", "500", "1000", "2000"].map(v => <button key={v} className={amount === v ? "amount-option selected" : "amount-option"} onClick={() => setAmount(v)}>₹{Number(v).toLocaleString("en-IN")}</button>)}</div>
              <label className="custom-amount"><span>Custom amount (₹)</span><input inputMode="numeric" type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)} aria-label="Donation amount in rupees"/></label>
              <button className={monthly ? "frequency-toggle frequency-active" : "frequency-toggle"} onClick={() => setMonthly(!monthly)} type="button"><span className="toggle-indicator">{monthly ? "✓" : ""}</span><span><strong>I'd like to give monthly</strong><small>Optional recurring contribution interest</small></span><span className="optional-tag">OPTIONAL</span></button>
              {monthly && <div className="monthly-info">Monthly AutoPay is not enabled in this demo. A supported payment mandate and your explicit authorization will be required.</div>}
              <button className="button button-primary button-full" onClick={() => setShowQr(!showQr)}><QrCode size={18}/>{showQr ? "Hide QR instructions" : "Continue to QR donation"}</button>
              {showQr && <div className="qr-panel">
                {trust.qrImage ? <img src={trust.qrImage} alt="Trust donation QR code"/> : <div className="qr-placeholder"><QrCode size={52}/><strong>Verified QR goes here</strong><small>Replace with the trust's actual payment QR.</small></div>}
                <strong>Scan using your UPI app</strong>
                <p>Confirm the recipient name before paying. This prototype cannot verify payments.</p>
                <div className="upi-placeholder">UPI ID: {trust.upiId}</div>
              </div>}
              <div className="secure-note"><ShieldCheck size={15}/> Demo only · No payment is processed on this page</div>
            </div>
          </div>
        </section>

        <section className="section container transparency-section" id="transparency">
          <div className="transparency-icon"><ShieldCheck size={30}/></div>
          <div className="transparency-copy"><div className="eyebrow">TRUST & TRANSPARENCY</div><h2>Giving deserves <em>clarity.</em></h2><p>Before launch, we'll add verified registration details, official bank/payment information, donation-use reporting and the appropriate receipt or tax-exemption information.</p></div>
          <div className="transparency-list"><span><CheckCircle2 size={17}/> Verified trust details</span><span><CheckCircle2 size={17}/> Clear donation records</span><span><CheckCircle2 size={17}/> Privacy and donation policies</span></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand"><a className="brand brand-footer" href="#home"><span className="brand-mark"><Heart size={22}/></span><span><strong>{trust.name}</strong><small>{trust.location}</small></span></a><p>Building a more caring community, one act of kindness at a time.</p></div>
          <div className="footer-contact"><h4>Contact us</h4><span><MapPin size={16}/> {trust.location}</span><span><Phone size={16}/> {trust.phone}</span><span><Mail size={16}/> {trust.email}</span></div>
          <div className="footer-links"><h4>Explore</h4><a href="#about">About the trust</a><a href="#work">Our work</a><a href="#transparency">Transparency</a><a href="#donate">Donate</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {trust.name}. Prototype content.</span><span>Privacy policy · Donation terms</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
