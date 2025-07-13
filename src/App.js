import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Typewriter } from 'react-simple-typewriter';
import logo from './logo.svg';  

import "./App.css";
function ServiceItem({ title, details, titleStyle }) {
  const [show, setShow] = useState(false);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <button
        className="btn btn-link text-decoration-none text-start flex-grow-1 p-0"
        onClick={() => setShow(!show)}
        style={{ ...titleStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span>{title}</span>
        <span style={{ marginLeft: '10px' }}>{show ? '▲' : '▼'}</span>
      </button>
      {show && <p className="mt-2 mb-0 text-muted">{details}</p>}
    </li>
  );
}

function App() {
  const [formData, setFormData] = useState({ name: "", number: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <nav
  className="navbar navbar-expand-lg sticky-top"
  style={{
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(10px)",
    height: "64px",
    paddingLeft: "12px",
    paddingRight: "12px",
    zIndex: 1050,
  }}
>
  <div className="container-fluid">
    <a
      className="navbar-brand"
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("home");
      }}
      style={{
        display: "flex",
        alignItems: "center",
        height: "64px",
      }}
    >
      <img
  src={`${process.env.PUBLIC_URL}/logo.png`}
  alt="Mediva Logo"
  style={{
    height: "150px",
    width: "auto",
    padding: "0px 34px"
  }}
/>

    </a>

    {/* Toggle button for small screens */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
    </button>

    {/* Collapsible menu */}
    <div
      className="collapse navbar-collapse custom-collapse"
      id="navbarMenu"
    >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {["home", "about", "Features", "contact"].map((item) => (
          <li className="nav-item" key={item}>
            <a
              href={`#${item}`}
              className="nav-link text-dark fw-semibold"
              oonClick={(e) => {
  e.preventDefault();
  scrollToSection(item);

  const menu = document.getElementById("navbarMenu");

  if (menu?.classList.contains("show")) {
    try {
      // Use Bootstrap Collapse safely
      const bsCollapse = window.bootstrap?.Collapse;
      if (bsCollapse) {
        new bsCollapse(menu).hide();
      }
    } catch (err) {
      console.warn("Collapse failed", err);
    }
  }
}}

            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

     <header
  id="home"
  className="text-center"
  style={{
    backgroundImage: "url('/hero-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#003300",
    minHeight: "580px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textShadow: "1px 1px 2px white",
  }}
>
  <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100%" }}>
    <p className="lead mb-4" style={{ fontSize: "3rem", fontWeight: "100" }}>
      <Typewriter
        words={['Smarter Health at Your Fingertips','Refined Access To Trusted Doctors', 'Book Instantly', 'Track Doctors Live', 'Navigate to Care']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={40}
        delaySpeed={1000}
      />
    </p>

    <a
      href="#Notify"
      className="btn btn-light"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("Notify");
      }}
      style={{ fontWeight: "600", fontSize: "1.25rem", padding: "10px 30px" }}
    >
      Get Notified
    </a>
  </div>
</header>

      <section id="about" className="py-5" style={{ backgroundColor: "#e8ffe5" }}>
        <div className="container">
          <h2 className="text-success">About Mediva</h2>
          <p>
            Mediva is a health tech startup revolutionizing patient-doctor interaction. We
            offer smart appointment booking, real-time doctor tracking, integrated maps, and
            hassle-free rescheduling—all from your device. Building on our core services,
            Mediva is dedicated to empowering patients with transparency and control over their healthcare journey.
            We leverage innovative technology to ensure that booking appointments is quick and hassle-free,
            minimizing the common frustrations faced in traditional healthcare systems.
            Our live tracking of doctor activities provides real-time updates so you can plan your visit without uncertainty.
            By integrating maps directly into our platform, we guide users effortlessly to the nearest and most suitable healthcare facilities.
            Additionally, our easy rescheduling feature, coupled with timely notifications, keeps you informed and in control at every step.
            At Mediva, our mission is to make quality healthcare accessible, efficient, and patient-centric through smart digital solutions.
          </p>
        </div>
      </section>

      <section id="Features" className="py-5" style={{ backgroundColor: "#dff1ddff" }}>
        <div className="container">
          <h2 className="text-success mb-4">Services We Provide</h2>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                <ServiceItem
                  title="📅 Appointment Booking"
                  details="Book appointments quickly through our user-friendly interface. Choose your preferred doctor, view available time slots in real time, 
                  and confirm instantly—no paperwork or long queues."
                   titleStyle={{ color: "#198b56", fontWeight: "600" }}
                />
                <ServiceItem
                  title="📍 Live Doctor Activity Tracking"
                  details="Know when your doctor is available or running late. Track their status in real-time and reduce your waiting time significantly."
                   titleStyle={{ color: "#198b56", fontWeight: "600" }}
                />
                <ServiceItem
                  title="🗺️ Map Integration for Clinics & Hospitals"
                  details="Get directions to the nearest hospitals or clinics directly through our app. Integrated maps show real-time navigation and distances."
                titleStyle={{ color: "#198b56", fontWeight: "600" }}/>
                <ServiceItem
                  title="🔁 Easy Rescheduling and Notifications"
                  details="Plans changed? No worries. Reschedule your appointment with a single tap and receive instant updates via notifications."
                titleStyle={{ color: "#198b56", fontWeight: "600" }}/>
              </ul>
            </div>
            <div className="col-md-6">
              <p>
                At Mediva, we streamline the healthcare experience with technology that brings convenience and transparency.
                Our services ensure you can manage appointments efficiently, track doctors’ availability in real-time, navigate easily
                to clinics, and reschedule hassle-free — all on one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
  id="Notify"
  className="py-5"
  style={{
    backgroundImage: "url('/notify.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "350px", // optional height
    color: "#003300"
  }}
>
  <div className="container" style={{ maxWidth: "500px", backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "10px", padding: "20px" }}>
    <h2 className="text-success text-center mb-4">Get Notified</h2>
    {!submitted ? (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Phone Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            className="form-control"
            value={formData.number}
            onChange={handleChange}
            required
            placeholder="+91 XXXXXXXXXX"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#ddf7adff", color: "#003300", fontWeight: "600" }}
        >
          Notify Me
        </button>
      </form>
    ) : (
      <div className="alert alert-success" role="alert">
        Thanks for signing up! We'll notify you soon.
      </div>
    )}
  </div>
</section>


      <section id="contact" className="py-5" style={{ backgroundColor: "#e8ffe5" }}>
        <div className="container">
          <h2 className="text-success">Contact Us</h2>
          <p>Email: Mediva.life@gmail.com</p>
          <p>Phone: +91-8281342964</p>
        </div>
      </section>

      <footer className="text-center py-3" style={{ backgroundColor: "#e8ffe5", color: "#003300" }}>
        <p className="mb-0">© 2025 Mediva. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
