import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Booking = () => {
  return (

        <>
            <Header />

            <section id="register" className="contact">
    <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
            <h2>Booking</h2>
            <h3><span>Book </span>An Appointment</h3>
        </div>
        <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-qw">
                <div className="editd_person_details_formpage">
                    <div className="container main_section">
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <div className="first_section">
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <label for="">Payment Reference <span className="text-danger">*</span></label><input type="text" placeholder="Enter your payment reference here" className="form-control" />
                                                <p>Yet to pay? <a href="/patient/pay-now">Pay Here</a></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label for="title">Title <span className="text-danger">*</span></label>
                                                <select name="title" className="form-control" id="title">
                                                    <option></option>
                                                    <option>Mr</option>
                                                    <option>Mrs</option>
                                                    <option>Ms</option>
                                                    <option>Dr</option>
                                                    <option>Capt</option>
                                                    <option>Prof</option>
                                                    <option>HRH</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="firstName">First Name <span className="text-danger">*</span></label><input name="firstName" type="text" className="form-control" id="firstName" value="" />
                                            </div>
                                            <div className="col-md-4 mb-3"><label for="middleName">Middle Name</label><input name="middleName" type="text" className="form-control" id="middleName" value="" /></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label for="surname">Surname <span className="text-danger">*</span></label><input name="surname" type="text" className="form-control" id="surname" value="" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="gender">Gender <span className="text-danger">*</span></label>
                                                <select name="gender" className="form-control" id="gender">
                                                    <option></option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="phoneNumber">Phone Number <span className="text-danger">*</span></label><input name="phoneNumber" type="text" className="form-control" id="phoneNumber" value="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3"><label for="altPhoneNumber">Alt Phone Number</label><input name="altPhoneNumber" type="text" className="form-control" id="altPhoneNumber" value="" /></div>
                                            <div className="col-md-4 mb-3">
                                                <label for="dateOfBirth">Date of Birth <span className="text-danger">*</span></label>
                                                <div className="MuiInputBase-root MuiInput-root MuiInputBase-formControl MuiInput-formControl">
                                                     <input aria-invalid="false" autocomplete="off" id="dateOfBirth" name="dateOfBirth" readonly="" type="date" className="MuiInputBase-input MuiInput-input" value="" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="bloodGroup">Blood Group <span className="text-danger">*</span></label>
                                                <select name="bloodGroup" type="text" className="form-control" id="bloodGroup">
                                                    <option></option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>N/A</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3"><label for="emailAddress">Email Address</label><input name="emailAddress" type="email" className="form-control" id="emailAddress" value="" /></div>
                                            <div className="col-md-4 mb-3">
                                                <label for="maritalStatus">Marital Status <span className="text-danger">*</span></label>
                                                <select name="maritalStatus" className="form-control" id="maritalStatus">
                                                    <option></option>
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                    <option>Divorced</option>
                                                    <option>Widowed</option>
                                                    <option>Separated</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="religion">Religion <span className="text-danger">*</span></label>
                                                <select name="religion" className="form-control" id="religion">
                                                    <option></option>
                                                    <option>Christianity</option>
                                                    <option>Islam</option>
                                                    <option>Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3"><label for="occupation">Occupation</label><input type="text" name="occupation" className="form-control" id="occupation" value="" /></div>
                                            <div className="col-md-4 mb-3">
                                                <label for="residentialAddress">Residential Address <span className="text-danger">*</span></label>
                                                <input name="residentialAddress" type="text" className="form-control" id="residentialAddress" value="" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="nationality">Nationality <span className="text-danger">*</span></label>
                                                <select name="nationality" id="nationality" className="form-control">
                                                    <option></option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Antarctica">Antarctica</option>
                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cabo Verde">Cabo Verde</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                    <option value="Central African Republic">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Christmas Island">Christmas Island</option>
                                                    <option value="Cocos Islands">Cocos Islands</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Congo">Congo</option>
                                                    <option value="Cook Islands">Cook Islands</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Curaçao">Curaçao</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czechia">Czechia</option>
                                                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican Republic">Dominican Republic</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Eswatini">Eswatini</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Falkland Islands [Malvinas]">Falkland Islands [Malvinas]</option>
                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="French Guiana">French Guiana</option>
                                                    <option value="French Polynesia">French Polynesia</option>
                                                    <option value="French Southern Territories">French Southern Territories</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Gambia">Gambia</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Gibraltar">Gibraltar</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Greenland">Greenland</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guadeloupe">Guadeloupe</option>
                                                    <option value="Guam">Guam</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                                    <option value="Holy See">Holy See</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong Kong">Hong Kong</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran">Iran</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Isle of Man">Isle of Man</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jersey">Jersey</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kiribati">Kiribati</option>
                                                    <option value="Korea (the Democratic People's Republic of Korea)">Korea (the Democratic People's Republic of Korea)</option>
                                                    <option value="Korea (the Republic of Korea)">Korea (the Republic of Korea)</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libya">Libya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macao">Macao</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Marshall Islands">Marshall Islands</option>
                                                    <option value="Martinique">Martinique</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mayotte">Mayotte</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Micronesia">Micronesia</option>
                                                    <option value="Moldova">Moldova</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Montserrat">Montserrat</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nauru">Nauru</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="New Caledonia">New Caledonia</option>
                                                    <option value="New Zealand">New Zealand</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Niue">Niue</option>
                                                    <option value="Norfolk Island">Norfolk Island</option>
                                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestine">Palestine</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Pitcairn">Pitcairn</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Republic of North Macedonia">Republic of North Macedonia</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russian Federation">Russian Federation</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Réunion">Réunion</option>
                                                    <option value="Saint Barthélemy">Saint Barthélemy</option>
                                                    <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                    <option value="Saint Lucia">Saint Lucia</option>
                                                    <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San Marino">San Marino</option>
                                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                                    <option value="South Sudan">South Sudan</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                    <option value="Taiwan">Taiwan</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-Leste">Timor-Leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tokelau">Tokelau</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                    <option value="Tuvalu">Tuvalu</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                    <option value="United Kingdom of Great Britain and Northern Ireland">United Kingdom of Great Britain and Northern Ireland</option>
                                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                    <option value="United States of America">United States of America</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Viet Nam">Viet Nam</option>
                                                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                    <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                    <option value="Western Sahara">Western Sahara</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                    <option value="Åland Islands">Åland Islands</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label for="state">State <span className="text-danger">*</span></label>
                                                <select name="state" id="state" className="form-control">
                                                    <option></option>
                                                    <option value="Abia">Abia</option>
                                                    <option value="Adamawa">Adamawa</option>
                                                    <option value="Akwa Ibom">Akwa Ibom</option>
                                                    <option value="Anambra">Anambra</option>
                                                    <option value="Bauchi">Bauchi</option>
                                                    <option value="Bayelsa">Bayelsa</option>
                                                    <option value="Benue">Benue</option>
                                                    <option value="Borno">Borno</option>
                                                    <option value="Cross River">Cross River</option>
                                                    <option value="Delta">Delta</option>
                                                    <option value="Ebonyi">Ebonyi</option>
                                                    <option value="Edo">Edo</option>
                                                    <option value="Ekiti">Ekiti</option>
                                                    <option value="Enugu">Enugu</option>
                                                    <option value="Federal Capital Territory">Federal Capital Territory</option>
                                                    <option value="Gombe">Gombe</option>
                                                    <option value="Imo">Imo</option>
                                                    <option value="Jigawa">Jigawa</option>
                                                    <option value="Kebbi">Kebbi</option>
                                                    <option value="Kaduna">Kaduna</option>
                                                    <option value="Kano">Kano</option>
                                                    <option value="Kogi">Kogi</option>
                                                    <option value="Katsina">Katsina</option>
                                                    <option value="Kwara">Kwara</option>
                                                    <option value="Lagos">Lagos</option>
                                                    <option value="Nasarawa">Nasarawa</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Ogun">Ogun</option>
                                                    <option value="Ondo">Ondo</option>
                                                    <option value="Osun">Osun</option>
                                                    <option value="Oyo">Oyo</option>
                                                    <option value="Plateau">Plateau</option>
                                                    <option value="Rivers">Rivers</option>
                                                    <option value="Sokoto">Sokoto</option>
                                                    <option value="Taraba">Taraba</option>
                                                    <option value="Yobe">Yobe</option>
                                                    <option value="Zamfara">Zamfara</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="lga">LGA <span className="text-danger">*</span></label>
                                                <select name="lga" id="lga" className="form-control">
                                                    <option></option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-3"><label for="ward">Ward</label><input name="ward" type="text" className="form-control" id="ward" value="" /></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label for="nextOfKinName">Next of Kin Name <span className="text-danger">*</span></label><input type="text" name="nextOfKinName" className="form-control" id="nextOfKinName" value="" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="nextOfKinPhone">Next of Kin Phone <span className="text-danger">*</span></label><input type="text" name="nextOfKinPhone" className="form-control" id="nextOfKinPhone" value="" />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label for="nextOfKinRelationship">Next of Kin Relationship <span className="text-danger">*</span></label>
                                                <select name="nextOfKinRelationship" className="form-control" id="nextOfKinRelationship">
                                                    <option></option>
                                                    <option>Father</option>
                                                    <option>Mother</option>
                                                    <option>Husband</option>
                                                    <option>Wife</option>
                                                    <option>Brother</option>
                                                    <option>Sister</option>
                                                    <option>Son</option>
                                                    <option>Daughter</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3"><label for="zipCode">Zip</label><input name="zipCode" type="text" className="form-control" id="zipCode" value="" /></div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group"><label for="officeAddress">Office Address</label><textarea name="officeAddress" className="form-control" id="officeAddress" rows="3"></textarea></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row second_section">
                                            <div className="col-sm-6">
                                                <div className="profileimage"><i className="fa fa-user fa-8x" aria-hidden="true"></i></div>
                                            </div>
                                            <div className="col-sm-6 btn_section"><label for="files" className="selectimage">Upload Image</label><input name="avatarimage" id="files" type="file" accept="image/*" /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row"><button className="btn btn-success btn-block" type="submit">Register</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </section>

            {/* <section id="contact" className="contact">
                <div className="container">

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                        <i className="bx bx-map"></i>
                        <h3>Our Address</h3>
                        <p>Plot 606 Cadastral Zone,
                            Behind National Judicial Institute,
                            Abuja, Nigeria.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                    <div className="info-box  mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>
                                <div className="text-center">
                                    <button type="submit">New Patient</button>
                                </div>
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>
                                <div className="text-center">
                                    <button type="submit">Returning Patient</button>
                                </div>
                            </h3>
                        </div>
                    </div>

                    </div>

                   

                </div>
                </section> */}


            <Footer />
        </>

    )
}

export default Booking