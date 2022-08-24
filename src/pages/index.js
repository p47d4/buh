import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Accordion from './accordion';
import './accordion.css';

import HeroSlider from '../components/HeroSlider';

const Index  = () => {
  const accordionData = [
    {
      title: 'HOW FREQUENTLY IS A HEALTH CHECK-UP REQUIRED?',
      content: 
      <div>
      <p>The interval is specific to an individual depending on their health status. 
        The general classification would be that beyond the age of 40 an individual 
        must undergo bi-annual health check-ups and below the age of 40, 
        they must undergo annual check-ups. Pre-Health check instructions.</p>
      <ol>
         <li>Plan all your health checks well in advance</li>
         <li>Overnight fasting</li>
         <li>Avoid alcohol consumption at least 48-72 hours before you book health checks</li>
         <li>Females guests avoid health checks during their monthly cycles</li>
         <li>If you’ve had a surprise cycle upon booking the health check, please notify the Health Check Team</li>
         <li>Carry all your current medications and your previous ailment files at the time of your doctor’s consultation</li>
         <li>Notify the doctor about any of your allergic reactions towards drugs.</li>
      </ol>
    </div>
    },
    {
      title: `WHO REQUIRES A HEALTH CHECK-UP?`,
      content: <p>Everyone needs a health check-up, no matter how healthy an individual is. 
        The most common causes of premature death in the world are due to heart, lung, bowel, 
        kidney disease and cancer. Early detection is an important form of disease prevention. 
        Getting a check-up periodically is a good step to staying healthy always. 
        It is recommended to have a health check-up at an early age for those with a family 
        history of diabetes, high blood pressure, cholesterol or heart disease and also for 
        individuals who have a smoking habit or with any of the health risk behaviors.</p>

    },
    {
      title: 'HOW IS THE HEALTH CHECK-UP CONDUCTED?',
      content:             <p>We carry all the assessments in a peaceful and welcoming atmosphere. 
        We assign a dedicated health check team to escort you through the stages of the 
        health check-up so that you can rest easy.
      You will be initially subjected to the definitive investigations depending upon the specialist you select.
       Later, when the results are examined by a qualified doctor, suitable medical advice is given &amp; 
       necessary steps to improve your health can be taken. Most reports are reviewed by the doctor on the same day.
       If there are any specified tests that require more time, you will be notified.</p>
    },
    {
      title: 'WHAT IS THE HEALTH CHECK-UP ABOUT?',
      content: <><p>A health check-up allows you to “know your numbers”.
        Your blood pressure, cholesterol, blood sugar and body mass index are
        important markers of your overall health that indicate a healthier life.
        The Key Health Indicators are checked and any deviations will be observed
        carefully by our physicians and necessary advice would be provided to improve these.
        Some aspects which we go through during a health check up are:</p><ol>
          <li>CBC – A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia</li>
          <li>Lipid Profile – The lipid profile is used as part of a cardiac risk assessment to help determine an individual’s risk of heart disease.</li>
          <li>Chest X-ray –The chest X-Ray is performed to produce images of the heart, lungs, airways, blood vessels and the bones of the spine and chest. Especially for smokers or individual affected by toxic substances.</li>
          <li>ECG – Electrocardiogram is to check the state of the heart muscles and the heartbeat rhythm from which the doctor can diagnose the existence of heart disease.</li>
          <li>Stool Routine Examination – To check the functioning of the excretion system. If any blood traces are found in stool, it can be caused by a disorder of the intestine.</li>
          <li>Urine Analysis – To examine if any irregularity in the urinary tract such as inflamed urine bladder or kidney disease.</li>
          <li>Liver Function Test – This screening test can help us to detect the presence of liver disease from an early stage. Examination for any abnormalities of liver enzymes and bilirubin metabolism.</li>
          <li>Kidney Function Test – This test is done to detect abnormalities in kidney function.</li>
          <li>Ultrasound Abdomen – To diagnose abnormalities in various internal organs, such as the kidneys, liver, gallbladder, pancreas, spleen and abdominal aorta.</li>
        </ol></>
    },
    {
      title: 'WHY DO I NEED A HEALTH CHECK-UP?',
      content: <p>Regular medical check-ups are important to verify that you are in a 
        normal state of health and to detect any medical issues before they crop up. 
        They are also important in treating diseases/disorders in their early stages 
        greatly improving chances of complete cure. This leads to a happier, healthier and 
        longer life. They are a form of Preventive Health Initiatives or preventive health check-ups.</p>
    }
  ];
  return (
  
  <>
    <Header />

    <HeroSlider />

    <section id="featured-services" className="featured-services">
    <div className="section-title">
            <h2>Services</h2>
            <h3><span>Our Featured Services</span></h3>
        </div>
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="/services">Clinical Services</a></h4>
              <p className="description">Examination & Diagnosis</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="/services">Laboratory Services</a></h4>
              <p className="description">Accurate & Reliable Results</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="/services">Diagnostic Services</a></h4>
              <p className="description">Reliable & Fast Diagnosis</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="/services">Interventional Services</a></h4>
              <p className="description">World Class Equipement</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section className='accordion-section'>
        <div className="section-title">
            <h2>FAQ</h2>
            <h3><span>FAQ'S - HEALTH CHECK</span></h3>
        </div>
        <div>
        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
        </div>
        </div>
        </section>
    <Footer />
  </>
  )
}
export default Index