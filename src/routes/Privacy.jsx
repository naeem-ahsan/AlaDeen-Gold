import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Download from "./Download";
import Footer from "./Footer";
import Backtop from "../Backtop";


export default function Privacy() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    return (
        <>
            {/* <!--breadcrumbs Section--> */}
            <section id="breadcrumb" className="section-wrapper-sm">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align">
                            <div className="breadcrumb-img">
                                <img src="/img/Logo-AlaDeen -01.png" className="responsive-img"
                                    alt="AlaDeen Gold Wallet Logo" />
                            </div>
                        </div>
                        {/* <!--back to home--> */}
                        <div className="col s12 center-align">
                            <div className="breadcrumb-nav">
                                <h6><Link to='/'>Home</Link><i className="fas fa-chevron-right"></i><span
                                    className="active-nav">Privacy Policy</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--breadcrumbs Section Ends--> */}

            {/* <!--privacy policy Section--> */}
            <section id="privacyPolicy" className="section-wrapper-sm">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {/* <!--privacy policy heading--> */}
                            <div className="privacyPolicyHead">
                                <h3>Privacy Policy</h3>
                                <p>Welcome to AlaDeen Gold. This page tells you our Privacy Policies which apply when you buy
                                    and sell any gold or silver items from our website or mobile application and related
                                    services.</p>
                            </div>
                            {/* <!--privacy policy body--> */}
                            <div className="privacyPolicyBody">
                                {/* <!--privacy policy body content 1--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Personal Data Protection and Privacy Policy</h5>
                                    <p>AlaDeen Gold (hereinafter referred to as “AlaDeen Gold”, “we”, “us”, “our”, and/or
                                        “company”) respects the privacy of its subscribers with regards to personal data.</p>
                                    <p>This Privacy Policy is issued in accordance with the Personal Data Protection Act 2010
                                        (“Act”) to enable you to understand the following:</p>
                                    <ul>
                                        <li>What kind of Personal Information* AlaDeen Gold collects and the ways of collecting
                                            it</li>
                                        <li>How AlaDeen Gold uses your Personal Information</li>
                                        <li>The parties that AlaDeen Gold discloses or may disclose your Personal Information to
                                        </li>
                                        <li>The choices that AlaDeen Gold offers, including how to access and update Personal
                                            Information</li>
                                    </ul>
                                    <p><span style={{ color: "red" }}>*Note:</span> “Personal Information” in this Privacy Policy
                                        refers to any information which relates directly or indirectly to you and/or your
                                        transactions with us. Also, please note that this Privacy Policy is applicable only if
                                        you are an individual</p>
                                </div>
                                {/* <!--privacy policy body content 2--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Types of Personal Information which we collect and source of
                                        information</h5>
                                    <p>The types of Personal Information which we collect includes but is not limited to data
                                        and
                                        information pertaining to yourself such as your name, address, email address (or other
                                        contact information), age, gender, race, National Registration Identification Card
                                        (“NRIC”) number, financial information such as your bank balance, bank transactions,
                                        assets, liabilities, and income as well as credit facilities and records with other
                                        financial service providers. The information serves to establish your identity,
                                        background, financial standing, and creditworthiness, as well as the suitability of the
                                        products and services offered by AlaDeen Gold and our business partners, if applicable.
                                    </p>
                                </div>
                                {/* <!--privacy policy body content 3--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>We may obtain this information from yourself and a variety of
                                        sources, including but not limited to:</h5>
                                    <ul>
                                        <li>Through your relationship with us, for example, the information provided by you in
                                            application forms, when using our products or services, when taking part in
                                            subscriber surveys, competitions, and promotions, and during financial reviews.</li>
                                        <li>Through your verbal, written, and email communications with us and/or our authorized
                                            agents.</li>
                                        <li>From an analysis of the way you use and manage your account with us, from the
                                            transactions you make and from the payments which are made to your account.</li>
                                        <li>From third parties such as employers, credit reference information providers,
                                            government/statutory agencies; and/or</li>
                                        <li>From such other sources in respect of which you have given your consent to disclose
                                            information relating to you and/or where not otherwise restricted</li>
                                    </ul>
                                </div>
                                {/* <!--privacy policy body content 4--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>How we use your Personal Information</h5>
                                    <p>AlaDeen Gold collects, uses, and/or processes your personal data for the following
                                        purposes:</p>
                                    <ul>
                                        <li>To process application for products offered by AlaDeen Gold and/or its business
                                            partners and/or services which you had subscribed for.</li>
                                        <li>To notify you about important changes/ developments to the product/service features.
                                        </li>
                                        <li>To assess/verify your creditworthiness.</li>
                                        <li>To communicate with you, including responding to your inquiries and/or complaints
                                            and resolving disputes.</li>
                                        <li>For the purposes of strategic alliances, crossselling, marketing, and promotions; by
                                            other units/department/ entities within AlaDeen Gold, our agents, and third parties.
                                        </li>
                                        <li>To comply with regulatory requirements and provide assistance to law enforcement
                                            agencies.</li>
                                        <li>To research and develop products and/or services.</li>
                                        <li>“WAKIL” is an agent.</li>
                                        <li>To administer and/or manage products and services to you, including collecting debts
                                            and enforcement of our rights and obligations.</li>
                                        <li>To improve and develop our services and quality assurance to you.</li>
                                        <li>To prevent, detect or prosecute cases of fraud/ crime and comply with legal and
                                            regulatory obligations.</li>
                                        <li>For legal purposes (including but not limited to obtaining legal advice and dispute
                                            resolution).</li>
                                        <li>To maintain your credit history for present and future reference (if deemed
                                            necessary), and</li>
                                        <li>To protect AlaDeen Gold’s interests and other related purposes.</li>
                                    </ul>
                                </div>
                                {/* <!--privacy policy body content 5--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Disclosure of your Personal Information</h5>
                                    <p>While AlaDeen Gold treats your Personal Information as private and confidential, the
                                        Personal Information may be disclosed, disseminated, and/or transferred to the
                                        following:</p>
                                    <ul>
                                        <li>Entities and business units within the AlaDeen Gold Group in and outside Malaysia,
                                            for the purposes of providing subscribers with the latest marketing and promotional
                                            offers which may be of interest to subscribers.</li>
                                        <li>Licensees, business partners, and third-party service providers.</li>
                                        <li>Professional advisors including consultants, lawyers, accountants, auditors,
                                            bankers, rating agencies, trustees, insurers, auctioneers, and brokers on a
                                            need-to-know basis for the purposes of providing their services/advices to us.</li>
                                        <li>Credit bureaus, CTOS, debt-collection agencies, and/or other parties who assist with
                                            debtrecovery functions.</li>
                                        <li>Agent or contractors acting on our behalf or appointed by us to act on our behalf.
                                        </li>
                                        <li>Regulatory, government bodies or other authorities if required or authorized to do
                                            so to discharge any regulatory function under any law or in relation to any order or
                                            judgment of a court.</li>
                                        <li>Any relevant institution/party to facilitate your request/dealings in respect of the
                                            credit facilities, accounts, products, and/or services obtained from AlaDeen Gold.
                                        </li>
                                        <li>Any parties authorized by you.</li>
                                        <li>Any person or corporation to whom AlaDeen Gold may transfer or propose to transfer
                                            any part of its interests, obligations, business, and/or operations; and</li>
                                        <li>Subject at all times to any laws (including regulations, guidelines, and/or
                                            obligations) applicable to AlaDeen Gold and further subject to your rights as stated
                                            in this Privacy Policy.</li>
                                    </ul>
                                </div>
                                {/* <!--privacy policy body content 6--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Security measures adopted to protect Personal Information</h5>
                                    <ul>
                                        <li>The security of your Personal Information is our priority. AlaDeen Gold keeps,
                                            protects, and processes your Personal Information in a secure manner by taking
                                            reasonable measures in maintaining physical, electronic, and procedural safeguards
                                            in compliance with applicable regulations.</li>
                                        <li>We ensure that access of AlaDeen Gold employees to the Personal Information which
                                            you have provided to us is limited to authorized employees who are trained in
                                            handling your information. This authorized personnel is required to ensure the
                                            confidentiality of your information and to respect your privacy at all times.</li>
                                    </ul>
                                </div>
                                {/* <!--privacy policy body content 7--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Retention of your Personal Information</h5>
                                    <p>AlaDeen Gold will retain your Personal Information in compliance with this Privacy Policy
                                        and/or the terms and conditions of your agreement(s) with AlaDeen Gold for the duration
                                        of your relationship with us, for such period as may be necessary to protect the
                                        interests of AlaDeen Gold and/or its subscribers as may be deemed necessary, where
                                        otherwise required by the law and where required based on AlaDeen Gold’s relevant
                                        policies.</p>
                                </div>
                                {/* <!--privacy policy body content 8--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Your choice to supply Personal Information</h5>
                                    <p>In order to process your application for products or services offered by AlaDeen Gold and
                                        comply with the relevant laws and regulations applicable to AlaDeen Gold, AlaDeen Gold
                                        requires you to provide your Personal Information as indicated in the application or
                                        service request forms. By choosing to utilize our products and services, you choose to
                                        provide your Personal Information to us. Should you decline to provide such Personal
                                        Information, we may not be able to communicate with you, process your
                                        application/request or provide you with our products or services.</p>
                                </div>
                                {/* <!--privacy policy body content 9--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Your rights to Personal Information</h5>
                                    <ul>
                                        <li>Keeping your data and information accurate and updated is very important to us. You
                                            are responsible for ensuring that the Personal Information which you provide to us
                                            is accurate, complete, and not misleading and that such Personal Information is kept
                                            up to date.</li>
                                        <li>You have the right to request access to your Personal Information and to request for
                                            amendment and correction of your Personal Information by contacting us through the
                                            channels stated in this Privacy Policy if you have reason(s) to believe that your
                                            records with us are inaccurate, incomplete, or not updated.</li>
                                        <li>We will use reasonable efforts to comply with your request to access or correct your
                                            Personal Information subject to due verification and further communication with you.
                                            Please note that AlaDeen Gold may have to withhold access to your Personal
                                            Information in certain situations. For example, when we are unable to confirm your
                                            identity or where information requested is of a confidential commercial nature or in
                                            the event we receive repeated requests for the same information. Nevertheless, we
                                            will notify you of the reasons for not being able to accede to your request.</li>
                                        <li>Please also note that AlaDeen Gold may use its discretion in allowing the
                                            corrections requested and/or may require further documentary evidence of the new
                                            information to avoid fraud and inaccuracy.</li>
                                    </ul>
                                </div>
                                {/* <!--privacy policy body content 10--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Choices relating to the use of your Personal Information</h5>
                                    <p>Subject to the contractual rights and obligations of AlaDeen Gold under relevant laws and
                                        regulations, you may exercise your choice in respect of the disclosure, retention, and
                                        correction, and use of your Personal Information.</p>
                                </div>
                                {/* <!--privacy policy body content 11--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Consent</h5>
                                    <p>By consenting to this Privacy Policy, you are permitting us to process your Personal
                                        Information for the purposes identified.</p>
                                </div>
                                {/* <!--privacy policy body content 12--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Marketing</h5>
                                    <ul>
                                        <li>By consenting to this Privacy Policy, you are permitting us to process your Personal
                                            Information for the purposes identified.</li>
                                        <li>Marketing emails and communications we send you may be tailored based on your
                                            interactions with our websites, products, and services. Suppose you do not want us
                                            to collect information from the emails or other communications or do not wish to
                                            receive marketing emails from us anymore. In that case, you can unsubscribe at any
                                            time by clicking on the unsubscribe link within each email or by emailing us at
                                            <a href="mailto:Admin@Al-EbreizGlobal.com">Admin@Al-EbreizGlobal.com</a>. Marketing
                                            communications shall cease within 30 days from
                                            the date of your notification to us.</li>
                                    </ul>
                                </div>
                                {/* <!--privacy policy body content 13--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Revisions to the Privacy Policy</h5>
                                    <p>AlaDeen Gold reserves the right to amend, modify or update this Privacy Policy from time
                                        to time. Any updated version of this Privacy Policy is available on our mobile
                                        applications. By continuing to use AlaDeen Gold’s services following any amendment,
                                        modification, or update to this Privacy Policy shall signify your acceptance of such
                                        amendment, modification, or update.</p>
                                </div>
                                {/* <!--privacy policy body content 14--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Contacting AlaDeen Gold on your Personal Information and this
                                        Privacy Policy</h5>
                                    <p>Should you wish to request access to your Personal Information, request for amendment and
                                        correction of such Personal Information, or provide any feedback to AlaDeen Goldin
                                        relation to this Privacy Policy, you may contact our Data Privacy Officer as follows:
                                        <br />
                                        Corporate Email Address: <a
                                            href="mailto:Info@Al-EbreizGlobal.com">Info@Al-EbreizGlobal.com</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Download-Section */}
            <Download />
            {/* Footer-Section */}
            <Footer />
            {/* BackToTop */}
            <Backtop />
        </>
    );
}