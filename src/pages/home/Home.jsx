import './Home.css'
import AppBar from "../../components/appBar/AppBar";
import Footer from "../../components/footer/Footer";
import checkmarkCircleOutline from '../../assets/icons/ionicons/checkmark-circle-outline.svg';
import WhyUsCards from '../../components/whyUsCards/WhyUsCards';
import bgProgrammingPixelArt from '../../assets/images/bg/bg-programming-pixel-art.png'
import pixelArtHtml from '../../assets/images/logo/pixel-art/pixel-art-html.png'
import pixelArtCss from '../../assets/images/logo/pixel-art/pixel-art-css.png'
import OurCourseCards from '../../components/ourCourseCards/OurCourseCards';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fungsi untuk mengambil kutipan dari API
const fetchQuote = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');  // Perhatikan perubahan di sini
    setQuote(response.data);
    setLoading(false);
    console.log(response);
  } catch (error) {
    console.error('Error fetching quote:', error);
    setLoading(false);
  }
};

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div>
            <AppBar />
            <section id="hero">
                <div className="hero-content">
                    <h1>Dulu Pemula, Besok Pembuat Aplikasi</h1>
                    <p>Untukmu yang sering minder, jangan khawatir. Di sini kamu belajar pelan-pelan, langkah demi langkah—hingga suatu hari bisa berkata: "aku seorang programmer".</p>
                </div>
            </section>
            <section className="about-section">
                <div className="inner-container">
                    <h1>About Us</h1>
                    <p className="text">
                        Belajar coding bukan hanya soal bahasa pemrograman—ini tentang membuka peluang baru. Kami menyediakan platform online yang memungkinkanmu belajar kapan saja, di mana saja, dengan materi yang langsung bisa dipraktikkan. Tidak perlu ragu. Mulai dari langkah kecil hari ini, dan lihat bagaimana coding bisa mengubah cara kamu belajar, bekerja, dan berkarya.
                    </p>
                    <div className="skills">
                        <span>Front End Developer</span>
                        <span>Back End Developer</span>
                        <span>FullStack Developer</span>
                    </div>
                </div>
            </section>
            <section id='why-us'>
              <h2>Why AefjoCode ?</h2>
              <ul>
                <WhyUsCards icon={checkmarkCircleOutline} title={"Belajar dari Nol, Tanpa Minder"} subtitle={"Cocok untuk pemula yang merasa tidak punya pengalaman"}/>
                <WhyUsCards icon={checkmarkCircleOutline} title={"Harga Terjangkau"} subtitle={"lebih hemat dibanding kursus lain yang mahal."}/>
                <WhyUsCards icon={checkmarkCircleOutline} title={"Fleksibel, Belajar Kapan Saja"} subtitle={"Tidak terikat jam. Kamu bisa belajar kapanpun, cukup buka laptop atau HP."}/>
                <WhyUsCards icon={checkmarkCircleOutline} title={"Materi Terstruktur & Praktis"} subtitle={"Tidak hanya teori, tapi langsung praktek"}/>
              </ul>
            </section>

            <section id="our-courses">
                <h2>Our Courses</h2>

                <ul>
                    <OurCourseCards icon={pixelArtHtml} title={"HTML"} subtitle={"bahasa standar yang digunakan untuk membuat dan menyusun konten di halaman web."}/>
                    <OurCourseCards icon={pixelArtHtml} title={"HTML"} subtitle={"bahasa standar yang digunakan untuk membuat dan menyusun konten di halaman web."}/>
                    <OurCourseCards icon={pixelArtHtml} title={"HTML"} subtitle={"bahasa standar yang digunakan untuk membuat dan menyusun konten di halaman web."}/>
                    <OurCourseCards icon={pixelArtHtml} title={"HTML"} subtitle={"bahasa standar yang digunakan untuk membuat dan menyusun konten di halaman web."}/>
                    <OurCourseCards icon={pixelArtHtml} title={"HTML"} subtitle={"bahasa standar yang digunakan untuk membuat dan menyusun konten di halaman web."}/>
                    <OurCourseCards icon={pixelArtHtml} title={"HTML"} subtitle={"bahasa standar yang digunakan untuk membuat dan menyusun konten di halaman web."}/>
                </ul>
            </section>

            <Footer />
        </div>
    )
}

export default Home;