import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const directors_message = () => {
  return (
    
    <>
        <Header />

        <section id="about" class="about">
          <div class="container-fluid">

            <div class="row">
              <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <img src="assets/img/buh/pc.png" className="pc-img" alt="buh-pc-img" />
              </div>

              <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>THE DIRECTOR'S MESSAGE</h3>
                <p>
                  No-one chooses to be unwell but if you need healthcare of any sort, we hope that you would make BAZE University Hospital your hospital of choice based
                   on its reputation for excellent clinical outcomes, its facilities and its friendly nature. We are your local hospital in the heart of your community.
                </p>
                <p>
                  As well as expert medical care we aim to provide superior facilities over and above those that you would find in any other local hospital. For example, most of our food is freshly prepared on the premises using local suppliers for meat, fruit and vegetables.
                  </p>
                  <p>We offer access to hot and cold drinks in our reception areas for our outpatient visitors and guests.</p>
                  <p>All of our rooms have en-suite facilities as standard.</p>
                  <p>A large investment of funds has enhanced the patient’s experience of care, cleanliness and comfort at BAZE University Hospital. </p>
                  <p>This investment has been spent on refurbishing the facilities and purchasing the latest equipment including CT scanner.</p>
                <p>
                  All public areas and patient rooms have an ongoing refurbishment programme with peaceful colour schemes and non-slip wood flooring. The flooring has also been installed for easy cleaning and to enable us to maintain our excellent low rates of infection. We continually work with our infection control officer to minimise infection risk.
                </p>
                  <p>We ensure all our staff are continually updated and appropriately trained in order to provide an excellent holistic clinical service based on current research. We are able to accept children here at BAZE University Hospital for treatment and we provide specialist paediatric nurses.
                </p>
                <p>
                  It has been found that 90% of complaints made by patients in any hospital relate to poor communication. We are determined at BAZE University Hospital to ensure this is not the case and aim to keep you fully informed throughout your visit. However, if at any time you have concerns please do not hesitate to speak to a member of staff. Most importantly please don’t wait until you have left the building to give us your feedback, as we would always try to put right any issues that you have at the time that you experience them.
                </p>
                <p>
                  If you are not satisfied with the response you receive or still have concerns please ask to speak to any of my Senior Management Team and we will do our very best to assist you.
                </p>
                <p>
                  It is because we care that we are proud to say that 98.9% of our patients would recommend us.
                </p>
                <hr />
                <h4>THE DIRECTOR'S - BAZE UNIVERSITY HOSPITAL</h4>
                <h1>Senator Yusuf Datti Baba-Ahmed (PhD)</h1>



              </div>
            </div>

          </div>
        </section>

        <Footer />
    </>
    
  )
}
export default directors_message