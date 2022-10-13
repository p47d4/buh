import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
// import Accordion from './accordion';
// import './accordion.css';

import HeroSlider from '../components/HeroSlider';

const Index  = () => {
  // const accordionData = [
  //   {
  //     title: 'HOW FREQUENTLY IS A HEALTH CHECK-UP REQUIRED?',
  //     content: 
  //     <div>
  //     <p>The interval is specific to an individual depending on their health status. 
  //       The general classification would be that beyond the age of 40 an individual 
  //       must undergo bi-annual health check-ups and below the age of 40, 
  //       they must undergo annual check-ups. Pre-Health check instructions.</p>
  //     <ol>
  //        <li>Plan all your health checks well in advance</li>
  //        <li>Overnight fasting</li>
  //        <li>Avoid alcohol consumption at least 48-72 hours before you book health checks</li>
  //        <li>Females guests avoid health checks during their monthly cycles</li>
  //        <li>If you’ve had a surprise cycle upon booking the health check, please notify the Health Check Team</li>
  //        <li>Carry all your current medications and your previous ailment files at the time of your doctor’s consultation</li>
  //        <li>Notify the doctor about any of your allergic reactions towards drugs.</li>
  //     </ol>
  //   </div>
  //   },
  //   {
  //     title: `WHO REQUIRES A HEALTH CHECK-UP?`,
  //     content: <p>Everyone needs a health check-up, no matter how healthy an individual is. 
  //       The most common causes of premature death in the world are due to heart, lung, bowel, 
  //       kidney disease and cancer. Early detection is an important form of disease prevention. 
  //       Getting a check-up periodically is a good step to staying healthy always. 
  //       It is recommended to have a health check-up at an early age for those with a family 
  //       history of diabetes, high blood pressure, cholesterol or heart disease and also for 
  //       individuals who have a smoking habit or with any of the health risk behaviors.</p>

  //   },
  //   {
  //     title: 'HOW IS THE HEALTH CHECK-UP CONDUCTED?',
  //     content:             <p>We carry all the assessments in a peaceful and welcoming atmosphere. 
  //       We assign a dedicated health check team to escort you through the stages of the 
  //       health check-up so that you can rest easy.
  //     You will be initially subjected to the definitive investigations depending upon the specialist you select.
  //      Later, when the results are examined by a qualified doctor, suitable medical advice is given &amp; 
  //      necessary steps to improve your health can be taken. Most reports are reviewed by the doctor on the same day.
  //      If there are any specified tests that require more time, you will be notified.</p>
  //   },
  //   {
  //     title: 'WHAT IS THE HEALTH CHECK-UP ABOUT?',
  //     content: <><p>A health check-up allows you to “know your numbers”.
  //       Your blood pressure, cholesterol, blood sugar and body mass index are
  //       important markers of your overall health that indicate a healthier life.
  //       The Key Health Indicators are checked and any deviations will be observed
  //       carefully by our physicians and necessary advice would be provided to improve these.
  //       Some aspects which we go through during a health check up are:</p><ol>
  //         <li>CBC – A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia</li>
  //         <li>Lipid Profile – The lipid profile is used as part of a cardiac risk assessment to help determine an individual’s risk of heart disease.</li>
  //         <li>Chest X-ray –The chest X-Ray is performed to produce images of the heart, lungs, airways, blood vessels and the bones of the spine and chest. Especially for smokers or individual affected by toxic substances.</li>
  //         <li>ECG – Electrocardiogram is to check the state of the heart muscles and the heartbeat rhythm from which the doctor can diagnose the existence of heart disease.</li>
  //         <li>Stool Routine Examination – To check the functioning of the excretion system. If any blood traces are found in stool, it can be caused by a disorder of the intestine.</li>
  //         <li>Urine Analysis – To examine if any irregularity in the urinary tract such as inflamed urine bladder or kidney disease.</li>
  //         <li>Liver Function Test – This screening test can help us to detect the presence of liver disease from an early stage. Examination for any abnormalities of liver enzymes and bilirubin metabolism.</li>
  //         <li>Kidney Function Test – This test is done to detect abnormalities in kidney function.</li>
  //         <li>Ultrasound Abdomen – To diagnose abnormalities in various internal organs, such as the kidneys, liver, gallbladder, pancreas, spleen and abdominal aorta.</li>
  //       </ol></>
  //   },
  //   {
  //     title: 'WHY DO I NEED A HEALTH CHECK-UP?',
  //     content: <p>Regular medical check-ups are important to verify that you are in a 
  //       normal state of health and to detect any medical issues before they crop up. 
  //       They are also important in treating diseases/disorders in their early stages 
  //       greatly improving chances of complete cure. This leads to a happier, healthier and 
  //       longer life. They are a form of Preventive Health Initiatives or preventive health check-ups.</p>
  //   }
  // ];
  return (
  
  <>
    <Header />

    <HeroSlider />

    <section id="featured-services" className="featured-services">
    <div className="section-title">
            <h2>Services</h2>
            <h3><span>Our Promise For A New Kind Of Care</span></h3>
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

    <section id="departments" className="departments section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Departments</h2>
        </div>

        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Surgery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Obstetrics and Gynecology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Laboratory Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Ophthalmology(Eye Care)</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-6">Physiotherapy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-7">Family Medicine</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-8">Emergency and Trauma</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-9">Anesthesia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-10">Dental and Maxillofacial</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Surgery</h3>
                    <p className="fst-italic">The Medical-Surgical Unit provides care to patients who are hospitalized with a wide variety of conditions.</p>
                    <p>Including pneumonia, stroke and fractures. Our caregivers also prepare patients for surgical procedures and provide post-surgical care required until the time of discharge. Private rooms are available for patients requiring isolation or other special treatments. Our nursing staff has a wide range of training and experience, providing treatment for those ranging in age from the young adult to end of life patients.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-1.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Obstetrics and Gynecology</h3>
                    <p className="fst-italic">Baze university Hospital Obstetrics and Gynaecology offers a wide range of Gynaecological services</p>
                    <p> viz General Gynaecology and Obstetrics
Fetomaternal services screening for Gynaecological cancers laparoscopic Gynaecological surgeries 
Diagnostic and therapeutic Hysteroscopy
 Assisted Reproduction Technology services including IVF Freezing of Embryos and Gamates and Pre Genetic Diagnosis.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Laboratory Services</h3>
                    <p className="fst-italic">Laboratory services</p>
                    <p>•	Chemical pathology
•	Hematology and blood transfusion
•	Microbiology and molecular laboratory
•	Histopathology and forensics</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-3.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Pediatrics</h3>
                    <p className="fst-italic">Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18.</p>
                    <p>Pediatrics is the branch of medicine that involves the medical care of infants, children, adolescents, and young adults. In the United Kingdom, paediatrics covers many of their youth until the age of 18.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Ophthalmology(Eye Care)</h3>
                    <p className="fst-italic">Some of the most common everyday procedures that an ophthalmologist will perform include diagnosing and monitoring mild eye and vision conditions.</p>
                    <p> They will also spend time prescribing and fitting glasses and contact lenses to correct vision problems.
                      Our ophthalmology department encompasses routine eye check ups, refraction services ,eye surgeries(includinf glacoma, cataract and so on).We offer routine artificial eye care and much more concerning the human eye for infants, children and adults.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-5.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-6">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Physiotherapy</h3>
                    <p className="fst-italic">We believe in creating long-term, optimal health for you by promoting, maintaining, restoring and preventing physical, social and psychological well-being of our patients</p>
                    <p>Our physiotherapy department is a  rehabilitation and physiotherapy centre that offers a unique approach to recovery and well-being. We provide the best Physiotherapy in Abuja and Nasarawa state to assist you with your pain and injuries. We provide treatments such as  Massage Therapy, Hydrotherapy, Yoga, and Podiatry for your optimal health.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-7">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Family Medicine</h3>
                    <p className="fst-italic">The aim of medicine is to prevent disease and prolong life; the ideal of medicine is to eliminate the need of a physician.</p>
                    <p>Family Medicine is the medical specialty that provides continuing, coordinated and comprehensive health care for all individuals in a holistic manner regardless of age, gender and affected organ or system in the context of family and community. It stands on the principles of comprehensiveness, continuity, coordination and accessibility.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-8">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Emergency and Trauma</h3>
                    <p className="fst-italic">A medical treatment facility specializing in emergency medicine, the acute care of patients who present without prior appointment.</p>
                    <p>Due to the unplanned nature of patient attendance, the department must provide initial treatment for a broad spectrum of illnesses and injuries, some of which may be life-threatening and require immediate attention.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-9">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Anaesthesia</h3>
                    <p className="fst-italic">At Baze Univrsity Hospital, our anesthesics is concerned with total perioperative care of patients before, during and after surgery.</p>
                    <p> The core element of the specialty is the study and use of anesthesia to safely support a patient’s vital functions through the perioperative period.</p>
                    <p>We provide provide different types of anesthesia here in Baze University Hospital like : General anesthesia, monitored anesthesia or IV sedation , Regional anesthesia, local anesthesia and more.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-10">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Dental and Maxillofacial</h3>
                    <p className="fst-italic">Our Dental Clinic is a private practice dedicated to providing you with the highest standard of dental care in Abuja.</p>
                    <p> We provide quality dental treatments, and service. We want you to relax in our practice, confident in the knowledge that you are getting the best treatment, with great dentists to fulfill all your dental needs.

Our dedicated and welcoming team is enthusiastic and progressive in their approach to dentistry and their service to you.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/dept/departments-4.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    <section id="doctors" className="doctors">
      <div className="container">

        <div className="section-title">
          <h2>Doctors</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-3">
            <div className="member d-flex align-items-start">
              {/* <div className="pic"><img src="assets/img/team/buhCMD.jpg" className="img-fluid" alt="" /></div> */}
              <div className="member-info">
              <img src="assets/img/team/buhCMD.jpg" className="img-fluid" alt="" />
                <h4>Dr. Dogo Muhammed</h4>
                <span>Chief Medical Officer</span>
                
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
              <img src="assets/img/team/buhCMAC.jpg" className="img-fluid" alt="" />
                <h4>Dr. Usman Gwaram</h4>
                <span>Director of Clinical Services</span>
                
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
              <img src="assets/img/team/buhDA.jpg" className="img-fluid" alt="" />
                <h4>Dr. Taofeek Uthman</h4>
                <span>Director of Administration</span>
                
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src="assets/img/doctors/doctors-4.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
              <img src="assets/img/team/buhGyn.jpg" className="img-fluid" alt="" />
                <h4>Dr. Godae Donbaridam</h4>
                <span>Gynecology and Obstetrics</span>
                
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              
              <div className="member-info">
              <img src="assets/img/team/buhdrZainab.jpg" className="img-fluid" alt="" />
                <h4>Dr. Zainab Mustapha Abubakar</h4>
                <span>Chemical Pathologist</span>
                
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    
    <section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq-list-1">HOW FREQUENTLY IS A HEALTH CHECK-UP REQUIRED? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
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
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapse">WHO REQUIRES A HEALTH CHECK-UP? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Everyone needs a health check-up, no matter how healthy an individual is. 
                  The most common causes of premature death in the world are due to heart, lung, bowel, 
                  kidney disease and cancer. Early detection is an important form of disease prevention. 
                  Getting a check-up periodically is a good step to staying healthy always. 
                  It is recommended to have a health check-up at an early age for those with a family 
                  history of diabetes, high blood pressure, cholesterol or heart disease and also for 
                  individuals who have a smoking habit or with any of the health risk behaviors.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">HOW IS THE HEALTH CHECK-UP CONDUCTED? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  We carry all the assessments in a peaceful and welcoming atmosphere. 
                  We assign a dedicated health check team to escort you through the stages of the 
                  health check-up so that you can rest easy.
                  You will be initially subjected to the definitive investigations depending upon the specialist you select.
                  Later, when the results are examined by a qualified doctor, suitable medical advice is given &amp; 
                  necessary steps to improve your health can be taken. Most reports are reviewed by the doctor on the same day.
                  If there are any specified tests that require more time, you will be notified.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">WHAT IS THE HEALTH CHECK-UP ABOUT? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  A health check-up allows you to “know your numbers”.
                  Your blood pressure, cholesterol, blood sugar and body mass index are
                  important markers of your overall health that indicate a healthier life.
                  The Key Health Indicators are checked and any deviations will be observed
                  carefully by our physicians and necessary advice would be provided to improve these.
                  Some aspects which we go through during a health check up are:
                </p>
                <ol>
                  <li>CBC – A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia</li>
                  <li>Lipid Profile – The lipid profile is used as part of a cardiac risk assessment to help determine an individual’s risk of heart disease.</li>
                  <li>Chest X-ray –The chest X-Ray is performed to produce images of the heart, lungs, airways, blood vessels and the bones of the spine and chest. Especially for smokers or individual affected by toxic substances.</li>
                  <li>ECG – Electrocardiogram is to check the state of the heart muscles and the heartbeat rhythm from which the doctor can diagnose the existence of heart disease.</li>
                  <li>Stool Routine Examination – To check the functioning of the excretion system. If any blood traces are found in stool, it can be caused by a disorder of the intestine.</li>
                  <li>Urine Analysis – To examine if any irregularity in the urinary tract such as inflamed urine bladder or kidney disease.</li>
                  <li>Liver Function Test – This screening test can help us to detect the presence of liver disease from an early stage. Examination for any abnormalities of liver enzymes and bilirubin metabolism.</li>
                  <li>Kidney Function Test – This test is done to detect abnormalities in kidney function.</li>
                  <li>Ultrasound Abdomen – To diagnose abnormalities in various internal organs, such as the kidneys, liver, gallbladder, pancreas, spleen and abdominal aorta.</li>
                </ol>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">WHY DO I NEED A HEALTH CHECK-UP? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Regular medical check-ups are important to verify that you are in a 
                  normal state of health and to detect any medical issues before they crop up. 
                  They are also important in treating diseases/disorders in their early stages 
                  greatly improving chances of complete cure. This leads to a happier, healthier and 
                  longer life. They are a form of Preventive Health Initiatives or preventive health check-ups.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>

    {/* <section className='accordion-section'>
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
        </section> */}
        
    <Footer />
  </>
  )
}
export default Index