import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import BookingForm from "../../components/BookingForm";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="hero"><HeroSection /></section>
      <section id="booking"><BookingForm /></section>
      <section id="menu"><Menu /></section>
      <section id="about"><About /></section>
      <hr className="w-24 h-0 bg-purple-900 border-0 rounded md:my-4 mx-auto" />
      <section id="contact"><Contact /></section>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11523351159!2d38.7781448!3d8.96317685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis-Abeba%2C%20%C3%89thiopie!5e0!3m2!1sfr!2sdz!4v1716765613753!5m2!1sfr!2sdz" width="800" height="600" className="border-0 w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  );
}
