import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Backtop from "../Backtop";
import Download from "./Download";
import Footer from "./Footer";

export default function Terms() {

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
                                <h6><Link to='/'>Home</Link><i className="fas fa-chevron-right"></i><span className="active-nav">Terms & Conditions</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--terms & conditions Section--> */}
            <section id="privacyPolicy" class="section-wrapper-sm">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {/* <!--terms & conditions heading--> */}
                            <div className="privacyPolicyHead">
                                <h3>Terms & Conditions</h3>
                                <p>Welcome to AlaDeen Gold. This page tells you our Terms and Conditions which apply when you
                                    order any gold or silver items from our website or mobile application and related services.
                                </p>
                            </div>
                            {/* <!--terms & conditions body--> */}
                            <div class="privacyPolicyBody">
                                {/* <!--terms & conditions body content 1--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Interpretation</h5>
                                    <p>In this Agreement, unless otherwise expressly stated or if the context requires
                                        otherwise, the following terms shall have the meanings set out below:
                                    </p>
                                    <p>“Agreement” means these terms and conditions in accordance with Shariah Complaint,
                                        any account-opening documentation (including an electronic registration form you
                                        complete when applying for an AlaDeen Gold Account), and any other documents, terms,
                                        and conditions, or policies which AlaDeen Gold expressly states to form part of the
                                        agreement between you and us.
                                    </p>
                                    <p>“AlaDeen Gold Account” means the electronic record of:
                                        <ul>
                                            <li>Gold/silver that you own, identified by quantity and purity of the
                                                gold/silver, and delivered to us for storage in the Vault.
                                            </li>
                                            <li>Payments to and from us in relation to the purchases, sales, and
                                                withdrawals, and/or redemptions of gold/silver and any other transactions
                                                between you and us under this Agreement.
                                            </li>
                                            <li>The fees levied by us for services provided to you.</li>
                                        </ul>
                                    </p>
                                    <p>“Subscriber”, “you” or “your” means a person who has registered and has been
                                        accepted by us for an AlaDeen Gold Account on the AlaDeen Gold Mobile App, including
                                        satisfactorily completing the applicable verification requirements in accordance
                                        with this Agreement.
                                    </p>
                                    <p>“Force Majeure” means any circumstance, act, or event beyond our reasonable control,
                                        including (but not limited to) any:
                                        <ul>
                                            <li>Lockouts, strikes, or other industrial disputes (in each case, whether or
                                                not relating to our workforce and whether or not beyond our reasonable
                                                control).</li>
                                            <li>Changes to applicable laws, acts, or regulations of any governmental or
                                                supranational bodies or authorities.</li>
                                            <li>Breakdown, failure, malfunction, or hacking of telecommunications or
                                                computer services or systems (including the internet) including, without
                                                limitation, any third-party services or systems or acts of hackers.</li>
                                            <li>Unusual volatility in the market, hacking, Denial of Service (DoS) attack,
                                                deliberate market distortion or manipulation, and disruptions to trading or
                                                the trading price.</li>
                                            <li>Act of God, fire, an act of government or state, terrorist act, war, civil
                                                commotion, insurrection or embargo, earthquake, nuclear incident, floods,
                                                volcanic action.</li>
                                            <li>Inability to communicate with brokers or market makers for whatever reason
                                                or late or mistaken delivery or payment by any bank or counterparty.</li>
                                            <li>Prevention from or hindrance in obtaining any energy or other supplies; and
                                            </li>
                                            <li>Any other reason (whether or not similar in kind to any circumstance, act,
                                                or event described above).</li>
                                        </ul>
                                    </p>
                                    <p>“AlaDeen Gold”, “we”, “us”, “our”, and/or “company” means AlEbreiz Global Capital
                                        Berhad, a company incorporated in Malaysia with its registered address at Suite 12 & 13,
                                        Level 2, Resource Centre, Technology Park Malaysia, Bukit Jalil, Kuala Lumpur.</p>
                                    <p>“AlaDeen Gold Services” means any and/or all of the services provided to you through the
                                        AlaDeen Gold.</p>
                                    <p>“Password” means the string of at least eight (8) characters in length that you may use
                                        to access your AlaDeen Gold Account.</p>
                                    <p>“Privacy Notice” means the privacy notice of AlaDeen Gold (as amended from time to
                                        time).</p>
                                    <p>“Promotional Balances” means the balance in your AlaDeen Gold Account resulting from
                                        your participation in any AlaDeen Gold promotions, including campaigns and the use of
                                        promotional codes.</p>
                                    <p>“Vault” means the location where gold/silver is physically stored pursuant to an
                                        agreement entered into by or on behalf of AlaDeen Gold with a Vault Operator.</p>
                                    <p>“Vault Operators” means one or more service providers appointed by us (or our agent) in
                                        accordance with clause 8 to store gold/silver on behalf of our subscribers.</p>
                                </div>
                                {/* <!--terms & conditions body content 2--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Acceptance Of Agreement</h5>
                                    <p>This Agreement takes effect upon acceptance by the Subscriber of these terms and
                                        conditions in accordance with Shariah Complaint during the account opening process
                                        through the AlaDeen Gold Mobile App. The relationship between AlaDeen Gold and the
                                        Subscriber arising from or in connection with the Subscriber’s AlaDeen Gold Account
                                        shall be defined and governed by this Agreement.
                                    </p>
                                    <p>
                                        This Agreement applies to your AlaDeen Gold Account and your use of:
                                        <ul>
                                            <li>The AlaDeen Gold; and</li>
                                            <li>Any of the services provided to you by AlaDeen Gold.</li>
                                        </ul>
                                    </p>
                                    <p>By signing up to use the AlaDeen Gold Mobile App, you agree:
                                        <ul>
                                            <li>That this Agreement will document the contractual relationship between you and
                                                us.</li>
                                            <li>To be bound by the provisions of this Agreement.</li>
                                            <li>To comply with all relevant laws of any territory of which you are a citizen,
                                                national, or subject, and of any territory in which you are resident from time
                                                to time, and of any other territory from which you access the AlaDeen Gold, the
                                                laws of the countries in which the Vaults are located (where applicable), and
                                                including, without limitation, the laws of Malaysia and Singapore; and</li>
                                            <li>To authorize and allow AlaDeen Gold to disclose your personal information and
                                                documents to parties providing a loan, credit, and/or any other financial
                                                services to you.</li>
                                        </ul>
                                    </p>
                                    <p>You understand, acknowledge, and agree that:
                                        <ul>
                                            <li>The gold/silver recorded in your AlaDeen Gold Account is held by AlaDeen Gold as
                                                bailee and is stored in a Vault.</li>
                                            <li>If you register and hold an AlaDeen Gold Account, the transaction of buying and
                                                selling gold/silver is limited to a maximum of 1000g (per transaction). This
                                                limit may be varied from time to time at the discretion of AlaDeen Gold, without
                                                prior notice to you.</li>
                                            <li>Any money credited to your AlaDeen Gold Account is not a deposit with or loan to
                                                us; and/or your AlaDeen Gold Account is not a bank account under the Financial
                                                Services Act 2013 (as amended).</li>
                                            <li>Any money or gold/silver balance incorrectly credited to any of your AlaDeen
                                                Gold Accounts shall be subject to a clawback or recoupment policy currently in
                                                effect or as may be adopted by AlaDeen Gold. Such a decision is at the sole
                                                discretion of AlaDeen Gold.</li>
                                            <li>Any money standing to the credit of your AlaDeen Gold Account represents payment
                                                for gold/silver that you intend to purchase under this Agreement, and AlaDeen
                                                Gold is authorized without any further action required from you and without
                                                prior notice to you to convert such money to gold/silver, at a price and subject
                                                to fees determined under clauses 6 and 8, at any time and from time to time.
                                            </li>
                                            <li>Any money unutilized under clause 2.4 constitutes a noninterest bearing security
                                                deposit that is held by us as security against any breach of your obligations
                                                under this Agreement and may be applied by us towards the performance of any
                                                obligation you owe to us under this Agreement.</li>
                                            <li>There is no interest payable to you on any amount in your AlaDeen Gold Account
                                                in accordance with Shariah Complaint.</li>
                                            <li>The gold/silver in your AlaDeen Gold Account is insured under insurance policies
                                                arranged by the Vault Operators and are not insured by the Perbadanan Insurans
                                                Deposit Malaysia.</li>
                                            <li>You are only allowed one AlaDeen Gold Account per mobile phone and per mobile
                                                phone number, and it is your responsibility to retain control of your mobile
                                                number. If you change your phone number, you are required to change your phone
                                                number in your AlaDeen Gold Account.</li>
                                            <li>It is your responsibility to verify the email address and details of the person
                                                you are sending gold/silver to, and also to approve yourself as a gift contact
                                                via email.</li>
                                            <li>The AlaDeen Gold Account can be operated on most Android devices and iOS devices
                                                subject to any restrictions or settings applicable to the devices.</li>
                                            <li>Except as required by law, no person shall be recognized by AlaDeen Gold as
                                                holding any gold/silver under this Agreement upon any trust, whether, express,
                                                implied, or constructive, and AlaDeen Gold shall not be bound by or be compelled
                                                in any way to recognize (even when having notice thereof) any equitable,
                                                contingent, future, or partial interest in your AlaDeen Gold Account except an
                                                absolute right to the entirety of the AlaDeen Gold Account.</li>
                                        </ul>
                                    </p>
                                    <p>You acknowledge that the AlaDeen Gold Platform and the AlaDeen Gold Services do not
                                        constitute a “capital market service” under the Capital Markets and Services Act 2007
                                        (as amended), trading of, or an exchange in, securities, investment contracts or any
                                        document, instrument or writing commonly known as a “security” or “derivative”, at law
                                        or otherwise.</p>
                                    <p>You understand that you may only purchase or sell gold/silver through your AlaDeen Gold
                                        Account by way of:
                                        <ul>
                                            <li>Transfers to, or from, a personal bank account, in your own name which you have
                                                linked to your AlaDeen Gold Account; or</li>
                                            <li>Transfers from your BillPlz (Boost, Touch ‘n Go, PayPal) account linked to your
                                                AlaDeen Gold Account; or</li>
                                            <li>Physical withdrawals and/or redemptions of gold/silver as described in clause 9;
                                            </li>
                                        </ul>
                                    </p>
                                    <p>To be eligible to use the AlaDeen Gold services, you must be at least 18 years old or the
                                        applicable age of majority and contractual capacity if you reside in a jurisdiction
                                        where the age of majority or contractual capacity is above 18 years of age. By accessing
                                        or using the AlaDeen Gold Services, you represent and warrant that you are both over the
                                        age of 18 years old and of the applicable age of majority and contractual capacity in
                                        the jurisdiction in which you reside.</p>
                                </div>
                                {/* <!--terms & conditions body content 3--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Communications</h5>
                                    <ul>
                                        <li>Communications between you and AlaDeen Gold may be conducted by mail or by
                                            telephone,
                                            fax, online, or by other electronic means that we offer from time to time. Any
                                            instructions that you give to us in any such manner will have the same legal effect
                                            as
                                            if you gave them to us in traditional written form. You agree that all telephone
                                            calls
                                            and electronic communications may be recorded and kept by us as a record of your
                                            instructions.</li>
                                        <li>You are responsible for the accuracy of your instructions for all transactions in
                                            your
                                            AlaDeen Gold Account. Instructions once sent, in any form acceptable under the
                                            AlaDeen
                                            Gold Platform in relation to your AlaDeen Gold Account, are final and irrevocable.
                                            It is
                                            your responsibility to ensure that your personal information registered on the
                                            AlaDeen
                                            Gold Platform is accurate at all times.</li>
                                        <li>You agree to promptly review the transaction history and any account statements
                                            pertaining to your AlaDeen Gold Account that you receive to ensure that your
                                            instructions have been carried out and that there have been no unauthorized dealings
                                            in
                                            your AlaDeen Gold Account. You must inform us of any errors or omissions within
                                            seven
                                            (7) calendar days of the disputed transaction(s).</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 4--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Subscriber Due Diligence</h5>
                                    <ul>
                                        <li>You agree to provide AlaDeen Gold with such information as AlaDeen Gold may require
                                            or
                                            request, in its discretion, in relation to this Agreement and your relationship with
                                            AlaDeen Gold, including all necessary information to comply with all applicable laws
                                            and
                                            regulations, including all applicable anti-money laundering rules and regulations.
                                        </li>
                                        <li>You agree that AlaDeen Gold is entitled to perform a background check prior to
                                            approving
                                            your application to open an AlaDeen Gold Account or at any other time during the
                                            course
                                            of the relationship at our discretion. You further consent to AlaDeen Gold
                                            contacting
                                            credit bureau to obtain information about you for purposes of confirming your
                                            identity
                                            under applicable “know-your-customer” (“KYC”) rules. You understand that failure to
                                            provide any of the information we request from time to time under such rules may
                                            result
                                            in your AlaDeen Gold Account being frozen and/or terminated without any notice to
                                            you.
                                        </li>
                                        <li>You represent and warrant to us at all times that, to the best of your knowledge,
                                            any
                                            information provided to us by you is complete, accurate, and not misleading in any
                                            material respect, and you agree to notify us should such information change.
                                        </li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 5--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Security & Privacy</h5>
                                    <ul>
                                        <li>
                                            To protect your privacy and information about your AlaDeen Gold Account and to
                                            access your account, you must create a password when you open an AlaDeen Gold
                                            Account. Unless you enter the correct password upon logging in to your AlaDeen Gold
                                            Account, we are unable to take your instructions regarding your AlaDeen Gold
                                            Account. You are responsible for, and give us your authorization to carry out, all
                                            instructions given to us online where and when your correct password is entered to
                                            access your AlaDeen Gold Account. AlaDeen Gold will not be liable to you for any
                                            loss or claim arising out of our relying on oral or electronic instructions provided
                                            to us using your password.
                                        </li>
                                        <li>You accept that it is your responsibility to keep your password confidential. You
                                            alone are responsible for your Password security. When you give us instructions by
                                            cellular phone, email, or other non-secure methods, including instructions sent
                                            through the Mobile App, we cannot guarantee confidentiality because third parties
                                            can intercept those methods of communication. Suppose you suspect that any other
                                            person has become aware of your password. In that case, you must immediately notify
                                            us in writing by email, and you agree to cooperate with us in any subsequent
                                            investigation. Until you notify us, you will be liable for all transactions that are
                                            made using your password. In addition to Passwords, you may be required to adopt
                                            other security measures that we make available to protect the security of your
                                            information.</li>
                                        <li>You must exercise safe security practices when accessing and conducting electronic
                                            transactions. This includes signing out and closing any online electronic
                                            transaction services once all transactions have been completed, regardless of your
                                            method of accessing the AlaDeen Gold Platform. You must also maintain any security
                                            measures that we recommend relating to requirements for encryption technology, virus
                                            scanning, software, firewall systems, anti-spyware software, cybersecurity measures,
                                            and similar safeguards to maintain security for all electronic transaction
                                            activities.</li>
                                        <li>AlaDeen Gold does not store Passwords on the backend, only on the user’s phone;
                                            consequently, only one device can be used by a user for one account at any point in
                                            time.</li>
                                        <li>Every network communication with AlaDeen Gold servers is secured by the Transport
                                            Layer Security (“TLS”) protocol.</li>
                                        <li>AlaDeen Gold maintains the master copy of ownership records. Records relating to you
                                            and your AlaDeen Gold Account will only be modified upon the execution of your valid
                                            instructions, in accordance with the terms of this Agreement.</li>
                                        <li>On a regular and frequent basis, but no more frequently than daily, AlaDeen Gold
                                            will publish reconciled and anonymized subscriber-by-subscriber records of ownership
                                            of all the bullion in the vaults held by subscribers to both internal and
                                            independent external sources.</li>
                                        <li>On a regular and frequent basis, but no more frequently than daily, AlaDeen Gold
                                            will publish reconciled and anonymize subscriber-by-subscriber records of ownership
                                            of all the bullion in the vaults held by subscribers to both internal and
                                            independent external sources.</li>
                                        <li>AlaDeen Gold ensures that at least two widely separated data storage sites receive
                                            duplicates of the full AlaDeen Gold database.</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 6--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Price</h5>
                                    <ul>
                                        <li>You agree that the price for any purchase or sale of gold/silver for any transaction
                                            within your AlaDeen Gold Account will be based on the Best Bid or Offer (“BBO”) as
                                            calculated by our pricing engine. The pricing engine, among other things, collects
                                            and distributes real-time gold/silver prices from its bullion counterparties quoting
                                            bids and offers for the purchase or sale of physical gold/silver bullion from each
                                            respective Bullion Provider AlaDeen Gold transacts with. You accept that the BBO is
                                            determined at AlaDeen Gold’s sole and absolute discretion taking into account all
                                            factors it deems relevant, including without being limited to the prevailing world
                                            and local market conditions for gold/silver, the exchange rate between United States
                                            Dollar (or any other foreign currency adopted) and Ringgit Malaysia and the
                                            gold/silver fineness. Every gold/silver transaction in your AlaDeen Gold Account is
                                            executed at the BBO plus the current prevailing fee published on the AlaDeen Gold
                                            Platform.</li>
                                        <li>Physical deliveries of gold/silver are subject to a processing fee payable from your
                                            AlaDeen Gold Account. Taking possession of physical gold/silver will incur shipping
                                            and insurance surcharges which will be confirmed with you in advance. It is your
                                            responsibility to ensure that sufficient funds are available in your AlaDeen Gold
                                            Account at the effective time of any funds transfer or payment to satisfy in full
                                            any such funds transfer or payment. Requested transactions may not be processed if
                                            you do not have sufficient funds in your AlaDeen Gold Account.</li>
                                        <li>Storage fees will apply for gold/silver stored with the Vault Operators, at rates
                                            prescribed by AlaDeen Gold from time to time.</li>
                                        <li>You are entitled to a refund of any purchase made within seven (7) days but shall
                                            remain liable for any fluctuation in gold/silver prices and administrative fees.
                                        </li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 7--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Gold/Silver Quality, Purity & Auditing</h5>
                                    <ul>
                                        <li>AlaDeen Gold takes only assayed bullion bars as good delivery from recognized
                                            counterparts, bullion dealers, and bullion banks according to best industry
                                            practices that exist in the market.</li>
                                        <li>All physical gold/silver purchased by you will be stored at a Vault Operator upon
                                            purchasing the metal in your AlaDeen Gold Account.AlaDeen Gold confirms that it has
                                            obtained a representation from its gold/silver bullion counterparts that every
                                            gram of gold/silver purchased by AlaDeen Gold for AlaDeen Gold Accounts is a gram of
                                            the 99.99% pure gold/silver content (fine gold/silver) of a 99.5% (or greater)
                                            assayed bullion bar held in the relevant Vault.</li>
                                        <li></li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 8--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Storage & Insurance</h5>
                                    <ul>
                                        <li>You authorize us to arrange for the storage, transportation, and insurance of your
                                            gold/silver. We will hold your gold/silver as bailee and appoint Al-Ebreiz Global
                                            Capital Berhad (“AGCB”), the ultimate parent of AlaDeen Gold, or any of its
                                            affiliates (“AGCB”), as our agent, to enter into storage agreements with gold/silver
                                            vault operators selected by AlaDeen Gold in its sole discretion (a “Vault
                                            Operator”).</li>
                                        <li>All storage agreements with Vault Operators are entered into by <a rel="noreferrer"
                                            href="https://www.al-ebreizglobal.com/" target="_blank">AGCB</a>.</li>
                                        <li>Any storage agreement entered into by AGCB with a Vault Operator provides that
                                            gold/silver allocated under the storage agreement will be specifically identified
                                            and physically segregated at all times.</li>
                                        <li>You authorize us to act as bailee and provide instructions to the Vault Operator and
                                            insurance company in such capacity under the terms of the bailment.</li>
                                        <li>Notwithstanding any other term, neither AlaDeen Gold nor AGCB is responsible for the
                                            physical storage and safekeeping of your gold/silver bullion. That responsibility
                                            lies with the Vault Operator. Beyond committing to ensure adequate insurance is in
                                            place in relation thereto, as set forth in clause 8.6 below, neither AlaDeen Gold
                                            nor AGCB has any responsibility or liability relating to the storage of gold/silver.
                                        </li>
                                        <li>AlaDeen Gold will ensure your bullion is insured against theft and damage according
                                            to the accepted insurance standards of the bullion industry and at a cost that is
                                            included in the charge, you pay to AlaDeen Gold in respect of custody of your
                                            bullion.</li>
                                        <li>AlaDeen Gold confirms to you that, in each storage agreement, the Vault Operator
                                            agrees to provide AlaDeen Gold with documentary evidence of insurance.</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 9--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Fees and Limits</h5>
                                    <ul>
                                        <li>You may, by initiating a withdrawal and/or redemption request via the AlaDeen Gold
                                            Platform, together with such identifying information as requested by AlaDeen Gold
                                            and on behalf of the Vault Operator, at any time request physical delivery of your
                                            gold/silver to you, provided that you hold sufficient gold/silver (as specified in
                                            clause 9.2) and subject to the withdrawal and/or redemption limits described below.
                                        </li>
                                        <li>Physical withdrawals and/or redemptions of gold/silver are subject to a minimum
                                            quantity in the form of whole grammes when making a physical withdrawal and/or
                                            redemption request through the AlaDeen Gold. Physical withdrawals and/or redemptions
                                            of gold/silver may be subject to maximum daily withdrawal and/or redemption limits.
                                            You are responsible for the payment of any insurance, delivery, and transportation
                                            fees, which will be advised to you and agreed upon with you in advance.</li>
                                        <li>You may sell the gold/silver in your AlaDeen Gold Account by transferring funds to
                                            your AlaDeen Gold mobile wallet, which can then be transferred to your personal bank
                                            account. You may make a request to withdraw your funds in your AlaDeen Gold Account
                                            by upgrading/verifying your AlaDeen Gold Account. The gold/silver in your AlaDeen
                                            Gold Account will then be sold at the prevailing market price at the time of the
                                            withdrawal and/or redemption pursuant to clause 6. The transfer of funds between
                                            your AlaDeen Gold Account and your personal bank account may be subject to spending
                                            limits based on your gold/silver balance and the maximum daily allowance prescribed
                                            by our third-party banking operator.</li>
                                        <li>AlaDeen Gold reserves the right to reject any incoming or outgoing wire. Outgoing
                                            wire instructions may be rejected if the details provided are insufficient, the
                                            receiving institution cannot be identified, it is uneconomical to do so, the
                                            currency is not one of the currencies accepted by AlaDeen Gold from time to time, or
                                            if there are insufficient net funds in the AlaDeen Gold Account. Incoming wire
                                            transfers will be rejected if they are sent from a third party or from a bank in a
                                            country that AlaDeen Gold deems to pose a high risk.</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 10--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Promotional Balances</h5>
                                    <ul>
                                        <li>Promotional Balances are equal in value and redemption rights to traditional AlaDeen
                                            Gold balances in your AlaDeen Gold Account.</li>
                                        <li>AlaDeen Gold may disqualify an AlaDeen Gold Account holder from promotion and/or
                                            claim back Promotional Balances if it believes, in its absolute discretion, that
                                            their AlaDeen Gold Account or subsequent referred AlaDeen Gold Accounts have been
                                            set up to abuse the promotion or if you are otherwise in breach of this Agreement or
                                            the terms and conditions of the promotion. AlaDeen Gold reserves the right to
                                            suspend, modify or terminate a promotion at any time and without prior notice</li>
                                        <li>AlaDeen Gold reserves the right to validate referred AlaDeen Gold Accounts, which
                                            must meet the terms outlined in clause 2 and may withhold Promotional Balances for
                                            up to sixty (60) days.</li>
                                        <li>You agree not to send an AlaDeen Gold invitation template to anyone you do not have
                                            a personal relationship with. Sending your invitation to persons with whom you do
                                            not have a personal relationship will constitute spamming and may result in a
                                            suspension of your AlaDeen Gold Account.</li>
                                        <li>Employees of AlaDeen Gold and family members of employees are excluded from
                                            participating in any promotional exercises.</li>
                                        <li>Details of any promotional campaigns will be published on the AlaDeen Gold Platform,
                                            and we reserve the right to amend the details by updating the same on the AlaDeen
                                            Gold Platform.</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 11--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Consent</h5>
                                    <p>By consenting to this Privacy Policy, you are permitting us to process your Personal
                                        Information for the purposes identified.</p>
                                </div>
                                {/* <!--terms & conditions body content 12--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Limitation Of Liability: No Warranties</h5>
                                    <p>AlaDeen Gold, its agents, employees, or officers, shall under no circumstances be
                                        liable:</p>
                                    <ul>
                                        <li>to you, whether in contract, tort, breach of statutory duty, or otherwise, for any
                                            loss of profit, or any indirect or consequential loss arising under or in connection
                                            with this Agreement.</li>
                                        <li>For any special, general, direct, indirect, incidental, or consequential damages,
                                            even if we had been advised of the possibility thereof.</li>
                                        <li>For any fees, duties, taxes, or loss as a result of theft or any other loss of
                                            gold/silver after it has been removed from the Vault at your request for delivery or
                                            collection.</li>
                                        <li>For any damages resulting from the latent defect, loss of data, or loss of profits.
                                        </li>
                                        <li>For any damages resulting from any of your instructions not being sufficiently clear
                                            or any failure by you to provide correct or requested information.</li>
                                        <li>For any loss as a result of risks associated with online trading, including software
                                            and hardware failure latent defect, loss of data, delays, failure, errors,
                                            omissions, or losses of transmitted information or instructions, power outages,
                                            internet failure, hackers, denial of service (DoS) attacks, viruses, or other
                                            contaminating or destructive properties.</li>
                                        <li>For any penalties, fees, interest, costs, or damages imposed upon or incurred by you
                                            with respect to any transfers or payments, or for our inability to retrieve
                                            electronic payments from accounts held at financial institutions.</li>
                                    </ul>
                                    <ul>
                                        <p>AlaDeen Gold will not be in breach of this Agreement or otherwise liable for any loss
                                            suffered or incurred as a result of any delay in performance or any non-performance
                                            of any obligations under this Agreement (and, where relevant, the time for
                                            performance will be extended accordingly) if and to the extent that the delay or
                                            non-performance is owing to:</p>
                                        <li>Force Majeure; or</li>
                                        <li>Neglect, serious fault, or willful misconduct on the part of you, including any
                                            failure to keep your password secure and any failure to comply with this Agreement
                                            or associated policies.</li>
                                    </ul>
                                    <p>In the case of Force Majeure, we will use our reasonable endeavors to mitigate the effect
                                        of the Force Majeure and to carry out our obligations under this Agreement in any other
                                        reasonably practicable way. We will, as soon as reasonably practicable, notify you of
                                        the nature and extent of the circumstances giving rise to Force Majeure. If the Force
                                        Majeure in question prevails for a continuous period in excess of six (6) months after
                                        the date on which the Force Majeure begins, you shall be entitled to give notice to us
                                        to terminate this Agreement in accordance with clause 13.</p>
                                    <p>In the case of market distortion, volatile markets, systems (including third party
                                        systems upon which AlaDeen Gold is reliant) being hacked, and market disruption, AlaDeen
                                        Gold reserves the right to adjust an order if the metal and currency quotes received
                                        from AlaDeen Gold’s data source, when the order was placed, is found to be incorrect.
                                        AlaDeen Gold will contact you if an order needs to be adjusted due to incorrect market
                                        data, and you may cancel the order if you do not want to trade on the corrected market
                                        rate;</p>
                                    <p>Our total liability to you in respect of any losses arising under or in connection with
                                        this Agreement, whether in contract, tort (including negligence), breach of statutory
                                        duty, or otherwise, shall in no circumstances exceed the value of the AlaDeen Gold –
                                        Gold bar and/or Silver bar at the time of the alleged claim.</p>
                                    <p>Information sent over the internet may not be completely secure, and the Internet and
                                        related online systems may not function at all times. We are not responsible for any
                                        loss or damages you may incur if a third party obtains access to your confidential
                                        information transmitted over the internet or if you are temporarily unable to determine
                                        your balance on the AlaDeen Gold Platform.</p>
                                    <p>Suppose you grant express permission for a third party to connect to your AlaDeen Gold
                                        Account, either through the third party’s product or through the AlaDeen Gold Services.
                                        In that case, you acknowledge that granting permission to a third party to take specific
                                        actions on your behalf does not relieve you of any of your responsibilities under this
                                        Agreement. Further, you acknowledge and agree that you will not hold AGCB responsible
                                        for, and will indemnify AlaDeen Gold from, any liability arising from the actions or
                                        omissions of this third party in connection with the permissions you grant.</p>
                                    <p>AlaDeen Gold shall not be responsible for any loss or damages resulting from any failure
                                        on your part to conduct appropriate due diligence on parties with whom you choose to
                                        deal. You accept that you may make and receive payments from other AlaDeen Gold users
                                        and understand that AlaDeen Gold does not accept liability for the fraudulent or
                                        misleading actions of parties to whom you make and from whom you receive payments. It is
                                        your entire responsibility to conduct appropriate due diligence and your choice whether
                                        or not to make a payment or agree to receive a payment in return for goods or services.
                                    </p>
                                    <ul>
                                        <p>You will not be held responsible for any fraudulent transactions on your AlaDeen Gold
                                            Account directly resulting from:</p>
                                        <li>Fraudulent, or grossly negligent acts committed by us; or</li>
                                        <li>A breach of security of the AlaDeen Gold application except where such transactions
                                            resulted from the misuse of your password.</li>
                                    </ul>
                                    <p>TO THE FULLEST EXTENT PERMISSIBLE BY LAW, ALADEEN GOLD DISCLAIMS ALL WARRANTIES,
                                        EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
                                        FITNESS FOR ANY PARTICULAR PURPOSE.</p>
                                    <p>This clause 11 shall survive termination of the Agreement or closure of any AlaDeen Gold
                                        Account.</p>
                                </div>
                                {/* <!--terms & conditions body content 13--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Indemnity</h5>
                                    <ul>
                                        <p>Subject to clause 11 above, except to the extent that it results from AlaDeen Gold’s
                                            gross negligence or willful default or arises from any contravention or breach by
                                            AlaDeen Gold of any applicable law, you irrevocably and unconditionally agree to
                                            indemnify and keep AlaDeen Gold, and its directors, officers, employees, and agents
                                            indemnified against any loss, claim, damage, cost, or expense or any other liability
                                            whatsoever (including, without limitation, legal fees on a full indemnity basis and
                                            all taxes and other duties payable in connection therewith) which may be suffered:
                                        </p>
                                        <li>In connection with any service provided to you under this Agreement.</li>
                                        <li>As a result of your failure to comply with its obligations under this Agreement.
                                        </li>
                                        <li>In the enforcement of this Agreement; or</li>
                                        <li>In connection with any instruction given by you, any transaction effected for you,
                                            or any service provided to you, including any action properly taken by AlaDeen Gold
                                            or by its agents under this Agreement.</li>
                                    </ul>
                                    <p>The indemnity in this clause 12 shall continue notwithstanding the termination of this
                                        Agreement or closure of any AlaDeen Gold Account.</p>
                                </div>
                                {/* <!--terms & conditions body content 14--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Term & Termination</h5>
                                    <ul>
                                        <li>Subject to clause 13, this Agreement will remain in effect and will bind you and us
                                            until such time as your AlaDeen Gold Account is closed. We may, at our absolute
                                            discretion, close your AlaDeen Gold Account and terminate this Agreement by notice
                                            to you with immediate effect for any reason whatsoever, including any breach of this
                                            Agreement by you or if you become bankrupt. You may close your AlaDeen Gold Account
                                            and terminate this Agreement by giving written notice to us if your AlaDeen Gold
                                            Account has nil or zero balance.</li>
                                        <li>AlaDeen Gold reserves its right to immediately suspend or terminate your access to
                                            any or all of the AlaDeen Gold Services and/or deactivate or cancel your AlaDeen
                                            Gold Account if you are in default, including if AlaDeen Gold is required to do so
                                            by a valid subpoena, court order, or order from a regulatory authority, or otherwise
                                            required by law, your AlaDeen Gold Account is being misused or AlaDeen Gold suspects
                                            that it is being used in furtherance of illegal activity (with or without actual
                                            knowledge of the same), you take any action to circumvent AlaDeen Gold’s controls,
                                            including, but not limited to, opening multiple AlaDeen Gold Accounts or abusing
                                            promotions which AlaDeen Gold may offer from time to time, or if you are in breach
                                            of this Agreement.</li>
                                        <li>You will be permitted to transfer the balance in your AlaDeen Gold Account after
                                            ninety (90) days have elapsed following AlaDeen Gold Account deactivation or
                                            cancellation unless such transfer is prohibited by a valid subpoena court order,
                                            order from a regulatory authority, or otherwise prohibited by law. You are
                                            responsible for arranging the transfer by way of physical withdrawal and/or
                                            redemption of gold/silver or movement of funds to a bank account after your AlaDeen
                                            Gold Account deactivation or cancellation.</li>
                                        <li>You will not be charged for canceling your account and will only be required to pay
                                            for the AlaDeen Gold Services used subject to charges. If any transaction is in a
                                            pending state at the time your account is canceled or suspended, such transaction
                                            may be canceled and/or refunded as appropriate. You may not cancel your account to
                                            evade an investigation or avoid paying any amounts otherwise due to AlaDeen Gold.
                                        </li>
                                        <li>Upon suspension or cancellation of your account, you authorize AlaDeen Gold to
                                            cancel or suspend pending transactions and hold the funds associated with such
                                            transactions until AlaDeen Gold is certain that funding reversal windows are
                                            complete. In the event that AlaDeen Gold closes your account or terminates your
                                            access to the AlaDeen Gold application, or deactivates or cancels your account, you
                                            will remain liable for all amounts due hereunder.</li>
                                        <li>Any accrued rights, remedies, obligations, and liabilities of the parties as at
                                            termination shall not be affected, including the right to claim damages in respect
                                            of any breach of the Agreement which existed at or before the date of termination.
                                            Any clauses of this Agreement that expressly or by implication have effect after
                                            termination shall continue in full force and effect.</li>
                                        <li>In the event that a technical problem causes a system outage or account errors,
                                            AlaDeen Gold may temporarily suspend access to your AlaDeen Gold Account until the
                                            issue is resolved.</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 15--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Death Or Incapacity</h5>
                                    <ul>
                                        <li>Suppose you die or otherwise become incapacitated, and evidence of such is produced
                                            to us by your legal personal representative(s), which we deem to be sufficient in
                                            our absolute discretion. In that case, you authorize us to sell the gold/silver in
                                            your AlaDeen Gold Account at the prevailing market price and release the funds
                                            (after deducting all applicable fees and charges) to your legal personal
                                            representative. In such an event, your legal personal representative shall be the
                                            only person(s) recognized by AlaDeen Gold as having any title or legal rights to
                                            your AlaDeen Gold Account..</li>
                                        <li>Nothing in this Agreement shall release the estate of a deceased Subscriber from any
                                            liability in respect of the AlaDeen Gold Account</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 16--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Death Or Incapacity</h5>
                                    <ul>
                                        <li>Suppose you die or otherwise become incapacitated, and evidence of such is produced
                                            to us by your legal personal representative(s), which we deem to be sufficient in
                                            our absolute discretion. In that case, you authorize us to sell the gold/silver in
                                            your AlaDeen Gold Account at the prevailing market price and release the funds
                                            (after deducting all applicable fees and charges) to your legal personal
                                            representative. In such an event, your legal personal representative shall be the
                                            only person(s) recognized by AlaDeen Gold as having any title or legal rights to
                                            your AlaDeen Gold Account..</li>
                                        <li>Nothing in this Agreement shall release the estate of a deceased Subscriber from any
                                            liability in respect of the AlaDeen Gold Account</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 17--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Tax & Zakat</h5>
                                    <p>You are responsible for paying all local taxes, tariffs, and zakat that may be applicable
                                        to purchases, conversion, sale, or custody of gold/silver and any associated charges in
                                        accordance with Shariah.</p>
                                </div>
                                {/* <!--terms & conditions body content 18--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Intellectual Property & Confidentiality</h5>
                                    <ul>
                                        <li>You acknowledge that any and all intellectual property rights including, without
                                            limitation, the AlaDeen Gold trademark, any other trademarks, trade names,
                                            copyright, and other rights used or embodied within the AlaDeen Gold Platform are
                                            and will remain AlaDeen Gold’s sole property.</li>
                                        <li>All information and material which we supply to you, excluding your account balances
                                            and other information specific to your account, constitutes part of our confidential
                                            and proprietary information except for any such information or material in the
                                            public domain through no fault of yours. You may not reproduce, copy, or disclose
                                            such confidential and proprietary information without our prior written consent.
                                        </li>
                                        <li>You warrant that you will not, nor will you attempt to, tamper with, modify, reverse
                                            engineer, gain unauthorized access to, or in any way alter any of our software or
                                            the AlaDeen Gold application. You understand that we may close your account
                                            immediately and may take legal action against you if you breach or reasonably
                                            suspect that you may have breached this warranty.</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 19--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Intellectual Property & Confidentiality</h5>
                                    <ul>
                                        <li>You acknowledge that any and all intellectual property rights including, without
                                            limitation, the AlaDeen Gold trademark, any other trademarks, trade names,
                                            copyright, and other rights used or embodied within the AlaDeen Gold Platform are
                                            and will remain AlaDeen Gold’s sole property.</li>
                                        <li>All information and material which we supply to you, excluding your account balances
                                            and other information specific to your account, constitutes part of our confidential
                                            and proprietary information except for any such information or material in the
                                            public domain through no fault of yours. You may not reproduce, copy, or disclose
                                            such confidential and proprietary information without our prior written consent.
                                        </li>
                                        <li>You warrant that you will not, nor will you attempt to, tamper with, modify, reverse
                                            engineer, gain unauthorized access to, or in any way alter any of our software or
                                            the AlaDeen Gold application. You understand that we may close your account
                                            immediately and may take legal action against you if you breach or reasonably
                                            suspect that you may have breached this warranty.</li>
                                    </ul>
                                </div>
                                {/* <!--terms & conditions body content 20--> */}
                                <div className="privacyPolicyBodyBox">
                                    <h5 style={{ color: "#dd9933" }}>Miscellaneous</h5>
                                    <ul>
                                        <p>Assignment</p>
                                        <li>AlaDeen Gold may at any time assign, transfer, charge, subcontract, or deal in any other manner with all or any of its rights under this Agreement and may subcontract or delegate in any manner any or all of its obligations under this Agreement to any third party or agent.</li>
                                        <li>Without the prior written consent of AlaDeen Gold, you shall not assign, transfer, charge, subcontract, or deal in any other manner with all or any of its rights or obligations under this Agreement.</li>
                                    </ul>
                                    <ul>
                                        <p>Right of set-off</p>
                                        <li>You shall be under an obligation to pay all amounts due under this Agreement in full without any deduction or withholding except as required by law, and you shall not be entitled to assert any credit, set-off, or counterclaim against AlaDeen Gold in order to justify withholding or to dispute payment of any such amount in whole or in part.</li>
                                        <li>AlaDeen Gold may, without limiting its other rights or remedies, set off any amount owing to it (or to any of its affiliates) by you against any amount payable by AlaDeen Gold to you.</li>
                                    </ul>
                                    <ul>
                                        <p>Currency</p>
                                        <li>Any and all monetary amounts displayed in the AlaDeen Gold Platform are in the local currency selected by you.</li>
                                        <li>Currency conversions are performed from time to time.</li>
                                        <li>AlaDeen Gold itself does not charge currency conversion fees and shall not be liable for any fees, charges, or conversion rates on international transactions which may be charged by credit card issuers, financial institutions, or banks.</li>
                                    </ul>
                                    <ul>
                                        <p>Entire Agreement</p>
                                        <li>This Agreement constitutes the whole and only agreement between the parties relating to the subject matter of the Agreement. Each party to the Agreement acknowledges that, except in the case of fraud, in entering into this Agreement, it is not relying on any pre-contractual statement which is not repeated in this Agreement</li>
                                        <li>Except in the case of fraud by either party, no party shall have any right of action against the other party arising out of or in connection with any pre-contractual statement except to the extent that it is repeated in this Agreement.</li>
                                        <li>This Agreement applies to the exclusion of any other terms that you may seek to impose or incorporate or implied by trade, custom, practice, or course of dealing.</li>
                                    </ul>
                                    <ul>
                                        <p>Variation</p>
                                        <li>Except as set out in this Agreement, any variation, including the introduction of any additional terms and conditions, to the Agreement shall only be binding when agreed in writing and signed by an authorized signatory of AlaDeen Gold.</li>
                                        <li>We shall have the right, by notice in writing to you, to add to, alter, vary, supplement, or modify all or any parts of the Agreement at any time as we may consider necessary or desirable in order to reflect changes in the law, to meet regulatory requirements or to reflect new industry guidance and codes of practice or changes to our notices, policies, and operating procedures.</li>
                                        <li>We may vary or amend the terms or provisions of this Agreement (including those relating to fees) by giving you written notice of any variation or amendment, which notice is posted to your AlaDeen Gold Account or email address, shall be deemed to have been received by you on the day it was posted.</li>
                                        <li>You shall be deemed to have agreed to any variation or amendment of the terms or provisions of this Agreement if you continue to use our services after the date specified in the notice as the effective date of such variation or amendment. If you do not wish to be bound by any variation or amendment notified to you in accordance with this clause, you may terminate this Agreement and must notify us in writing without delay and, in relation to variation or amendment, before the expiry of the notice period.</li>
                                    </ul>
                                    <ul>
                                        <p>Severability</p>
                                        <li>In the event any provision (or part of any provision) of this Agreement shall for any reason be held by a court or any other competent authority to be invalid, illegal, or unenforceable, that provision, to the extent required, shall be deemed deleted and the remaining provisions shall remain valid and enforceable.</li>
                                    </ul>
                                    <ul>
                                        <p>Rights of third parties</p>
                                        <li>A person who is not a party to this Agreement shall not have any rights under or in connection with it.</li>
                                    </ul>
                                    <ul>
                                        <p>No agency or partnership</p>
                                        <li>Except as otherwise expressly provided for in this Agreement, nothing in this Agreement is intended to or shall be deemed to constitute a trust, partnership, or joint venture of any kind between any of the parties, nor constitute any party a fiduciary or agent of another party for any purpose. No party shall have the authority to act as an agent for or bind the other party in any way.</li>
                                    </ul>
                                    <ul>
                                        <p>Notices</p>
                                        <li>Any notice or other communication required to be given to a party under or in connection with this Agreement shall be in writing and shall be sent to the other party; such notice shall be deemed to have been duly received on the same day as it is sent.</li>
                                        <li>This clause shall not apply to the service of any proceedings or other documents in any legal action, which documents must be sent to AlaDeen Gold’s registered address, as published on the AlaDeen Gold application from time to time.</li>
                                    </ul>
                                    <ul>
                                        <p>No waiver</p>
                                        <li>A waiver of any right under this Agreement is only effective if it is in writing and shall not be deemed a waiver of any subsequent breach or default. No failure or delay by a party in exercising any right or remedy under the Agreement or by law shall constitute a waiver of that or any other right or remedy, nor preclude or restrict its further exercise. No single or partial exercise of such right or remedy shall preclude or restrict the further exercise of that or any other right or remedy.</li>
                                        <li>Unless specifically provided otherwise, rights arising under the Agreement are cumulative and do not exclude rights provided by law.</li>
                                    </ul>
                                    <ul>
                                        <p>Governing law</p>
                                        <li>This Agreement is governed by the laws of Malaysia applicable therein. In the event of a dispute but subject to clause 17.11(b) below, you agree that the courts of Malaysia will be competent to hear such dispute, and you agree to be bound by any judgment of that court.</li>
                                        <li>Any dispute, controversy, or claim arising out of or relating to this Agreement, or the breach, termination, or invalidity thereof, shall be decided by arbitration in accordance with the Rules for Arbitration of the Asian International Arbitration Centre. The number of arbitrators shall be three. The place of arbitration shall be Kuala Lumpur. The language used in the arbitration proceedings shall be English. Any award of the arbitrator(s) will be final and binding on each of the parties and may be entered as a judgment in any court of competent jurisdiction.</li>
                                    </ul>
                                    <ul>
                                        <p>Void where prohibited</p>
                                        <li>Although the AlaDeen Gold application is accessible worldwide, not all features, products, or services discussed, referenced, provided, or offered through or on the AlaDeen Gold application are available to all persons or in all geographic locations or appropriate or available for use outside of Malaysia. AlaDeen Gold reserves the right to limit, in its sole discretion, the provision and quantity of any feature, product, or service to any person or geographic area. Any offer for any feature, product, or service made on the AlaDeen Gold application is void where prohibited. If you choose to access the AlaDeen Gold application from outside Malaysia, you do so on your own initiative, and you are solely responsible for complying with applicable local laws. AlaDeen Gold is not responsible or liable for any legal action, loss, or damage arising from or in connection with any illegality or breach of law arising from you accessing or initiating a transaction on the AlaDeen Gold application outside Malaysia.</li>
                                    </ul>
                                    <ul>
                                        <p>Language</p>
                                        <li>The parties to this Agreement have requested that this Agreement and any related document be written in English.</li>
                                        <li>Notwithstanding any other provision of this Agreement, any translation of this Agreement is provided solely for your convenience. The meanings of terms, conditions, and representations herein are subject to definitions and interpretations in the English language. Any translation provided may not accurately represent the information in the original language of English.</li>
                                    </ul>
                                    <ul>
                                        <p>Stamp Duty</p>
                                        <li>The Subscriber shall bear the stamp duty for this Agreement.</li>
                                    </ul>
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