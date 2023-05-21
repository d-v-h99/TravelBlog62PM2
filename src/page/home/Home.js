import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import imgTrangChu from "../../assets/1.jpg"
import Destination from '../../components/destination/Destination'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName= "hero"
      heroImg={imgTrangChu}
      title="Câu chuyện về hành trình của bạn"
      text="Lên kế hoạch du lịch trải nghiệm những điều thú vị trước mắt"
      buttonText="Đặt vé"
      url="/service"
      btnClass="show"/>  
      <Destination/>
      <Footer/>
    </div>
  )
}

export default Home