import React from 'react'
import WSPGallery from '../components/WSPGallery'
import Header from '../components/header';
import Footer from '../components/footer';

const gallery = () => {

    const galleryImages = [
        {
            img: 'assets/img/gallery/1.jpg'
        },
        {
            img: 'assets/img/gallery/2.jpg'
        },
        {
            img: 'assets/img/gallery/3.jpg'
        },
        {
            img: 'assets/img/gallery/4.jpg'
        },
        {
            img: 'assets/img/gallery/5.jpg'
        },
        {
            img: 'assets/img/gallery/6.jpg'
        },
        {
            img: 'assets/img/gallery/7.jpg'
        },
        {
            img: 'assets/img/gallery/8.jpg'
        },
        {
            img: 'assets/img/gallery/9.jpg'
        },
        {
            img: 'assets/img/gallery/10.jpg'
        },
        {
            img: 'assets/img/gallery/11.jpg'
        },
        {
            img: 'assets/img/gallery/12.jpg'
        },
        {
            img: 'assets/img/gallery/13.jpg'
        },
        {
            img: 'assets/img/gallery/14.jpg'
        },
        {
            img: 'assets/img/gallery/15.jpg'
        },
        {
            img: 'assets/img/gallery/16.jpg'
        },
        {
            img: 'assets/img/gallery/17.jpg'
        },
        {
            img: 'assets/img/gallery/18.jpg'
        },
        {
            img: 'assets/img/gallery/19.jpg'
        },
        {
            img: 'assets/img/gallery/reception.jpg'
        },
        {
            img: 'assets/img/gallery/scan.jpg'
        }
    ]

  return (
    <>

        <Header />

        <br />

        <div className="section-title">
              <h2>Gallery</h2>
              <h3>Welcome to <span>Baze University Teaching Hospital</span></h3>
            </div>

        <WSPGallery
            galleryImages={galleryImages} />
        <br />

        

        <Footer />
    
    </>
  )
}

export default gallery