"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Shield, AlertTriangle, Scale, Gavel } from "lucide-react"

export default function TermsPage() {
  const termsSections = [
    {
      id: "INTRODUCTION",
      title: "INTRODUCTION",
      icon: FileText,
      content: `By accessing or using viraag Services, on theviraag.com(the "Website"), the viraag mobile application (the
        "App"), or any other platforms or services viraag may offer (collectively, the "Service" or our "Services"), you
        agree to be bound by this Terms of Use Agreement (the “Terms” or “Agreement”), including our Privacy
        Policy, Cookie Policy, Guidelines, and Safety ,security Tips, so it is important that you read this
        Agreement and these policies and procedures carefully before you create an account.

        viraag may modify this Agreement from time to time and such modification shall be effective upon posting by
        theviraag.com site. You agree to be bound to all and any changes to Agreement when you use viraag Services after
        any such modified post. It is important that you review this Agreement regularly to ensure you are updated as to any
        changes.

        viraag reserves the right, at its sole discretion, to any access to the Website to any visitor, including, without limitation,
        any user that viraag determines has violated any aspect of these Terms of Use. viraag reserves the right, at its sole
        discretion, to obtain any other remedies available to it pursuant to any applicable laws and regulations or at equity as a
        result of your breach of these Terms of Use or any other act or omission by you that gives rise to a claim by viraag.`,
    },
    {
      id: "user-conduct",
      title: "ACCOUNT ELIGIBILITY; YOUR RESPONSIBILITIES:",
      icon: Users,
      content: `Before you create an account on viraag, make sure you are eligible to use our Services.
      By using our services, you represent that:
      1. You are at least 18 years old;
      2. You are legally qualified to enter a binding contract with viraag;
      3. You do not have more than one account on our Services
      4. You have not previously been removed from our Services by us, unless you have our express written permission
      to create a new account
      5. You have not been convicted of or pled no contest to a felony or indictable offense (or crime of similar
      severity), a sex crime, or any crime involving violence;
      If at any time you cease to meet these requirements, you must immediately delete your account.
      You agree to:
       Comply with these Terms, and check this page from time to time to ensure you are aware of any change;
       Comply with applicable laws, including without limitation, privacy, anti-spam, and regulatory requirements;
       Be respectful when communicating with any of our representatives servicing you;
       Review the Safety Tips;
       Use the latest version of the Website and/or App;
       Treat other users in a courteous and respectful manner, both on and off our Services;
       Review and comply with the Code of Conduct, as updated from time to time; and
      You agree that you will not:
       Misrepresent your identity, age, current or previous positions, qualifications, or affiliations with a person or
      entity;
       Use our Services for any harmful, illegal, or nefarious purpose;
       Harass, stalk, intimidate, be violent, defame, harm or otherwise mistreat any person;
       Post or share Prohibited Content (as below);
       Use the Services in a way that damages the Services or prevents their use by other users;
       Use our Services in a way to interfere with, disrupt or negatively affect the platform, the servers, or our
      Services’ networks;
       Solicit passwords for any purpose, or personal identifying information for commercial or unlawful purposes
      from other users or disseminate another person’s personal information without his or her permission;
       Solicit money or other items of value from another user;
       Use another user’s account;
       Use our Services in relation to fraud, a pyramid scheme, or other similar practice; or
       Violate the terms of the license granted to you by viraag (as per Section 6).
       Disclose private or proprietary information that you do not have the right to disclose;
       Copy, modify, transmit, distribute, or create any derivative works from, any Member Content or Our Content,
      or any copyrighted material, images, trademarks, trade names, service marks, or other intellectual property,
      content or proprietary information accessible through our Services without viraag’s prior written consent;
       Express or imply that any statements you make are endorsed by viraag;
       Upload viruses or other malicious code or otherwise compromise the security of our Services;
       Forge headers or otherwise manipulate identifiers to disguise the origin of any information transmitted to or
      through our Services;
       “Frame” or “mirror” any part of our Services without viraag’s prior written authorization;
       Use any robot, crawler, site search/retrieval application, proxy or other manual or automatic device, method or
      process to access, retrieve, index, “data mine,” or in any way reproduce or circumvent the navigational structure
      or presentation of our Services or its contents;
       Use meta tags or code or other devices containing any reference to viraag or the platform (or any trademark,
      trade name, service mark, logo or slogan of viraag) to direct any person to any other website for any purpose;
       Use, access, or publish the viraag application programming interface without our written consent;
       Modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any
      portion of our Services, or cause others to do so;
       Use or develop any third-party applications that interact with our Services or Member Content or information
      without our written consent;
       Probe, scan or test the vulnerability of our Services or any system or network; or
       Encourage, promote, or agree to engage in any activity that violates these Terms.
       Prohibited Content—viraag prohibits uploading or sharing content that:
       Is likely to be deemed offensive or to harass, upset, embarrass, alarm or annoy any other person;
       Is obscene, pornographic, violent or otherwise may offend human dignity, or contains nudity;
       Is abusive, insulting or threatening, discriminatory or that promotes or encourages racism, sexism, hatred or
      bigotry;
       Is defamatory, libelous, or untrue;
       Relates to commercial activities (including, without limitation, sales, competitions, promotions, and advertising,
      solicitation for services, links to other websites or premium line telephone numbers);
       Involves the transmission of “junk” mail or “spam”;
       Encourages or facilitates any illegal activity including, without limitation, terrorism, inciting racial hatred or the
      submission of which in itself constitutes committing a criminal offense;
       Contains any spyware, adware, viruses, corrupt files, worm programs or other malicious code designed to
      interrupt, damage or limit the functionality of or disrupt any software, hardware, telecommunications, networks,
      servers or other equipment, Trojan horse or any other material designed to damage, interfere with, wrongly
      intercept or expropriate any data or personal information whether from viraag or otherwise;
       Infringes upon any third party’s rights (including, without limitation, intellectual property rights and privacy
      rights);
       Was not written by you or was automatically generated, unless expressly authorized by viraag;
       Includes the image or likeness of another person without that person’s consent (or in the case of a minor, the
      minor’s parent or guardian), or is an image or likeness or a minor unaccompanied by the minor’s parent or
      guardian;
       Is inconsistent with the intended use of the Services; or
       May harm the reputation of viraag or its affiliates.
      The uploading or sharing of content that violates these terms (“Prohibited Content”) may result in the
      immediate suspension or termination of your account.`,
    },
    {
      id: "CONTENT",
      title: "CONTENT",
      icon: Shield,
      content: `While using our Services, you will have access to:
      1.content that you upload or provide while using our Services (“Your Content”);
      2. content that other users upload or provide while using our Services (“Member Content”); and
      3. content that viraag provides on and through our Services (“Our Content”).
      In this agreement, “content” includes, without limitation, all text, images, video, audio, or other material on
      our Services, including information on users’ profiles and in direct messages between users.

      3a. YOUR CONTENT
      You are the only responsible for Your Content. Don't share anything that you wouldn't want others to see, that
      would violate this Agreement, or that may expose you or us to legal liability.
      You are solely responsible and liable for Your Content, and, therefore, you agree to indemnify, defend, release,
      and hold us harmless from any claims made in connection with Your Content.
      You represent and warrant to us that the information you provide to us or any other user is accurate, including
      any information submitted through Facebook or other third-party sources (if applicable), and that you will update
      your account information as necessary to ensure its accuracy.
      The content included on your individual profile should be relevant to the intended use of our Services. You may
      not display any personal contact or banking information, whether in relation to you or any other person (for
      example, names, home addresses or postcodes, telephone numbers, email addresses, URLs, credit/debit card or
      other banking details). If you choose to reveal any personal information about yourself to other users, you do so
      at your own risk. We encourage you to use caution in disclosing any personal information online.
      Your individual profile will be visible to other people around the world, so be sure that you are comfortable
      sharing Your Content before you post. You acknowledge and agree that Your Content may be viewed by other
      users, and, notwithstanding these Terms, other users may share Your Content with third parties. By uploading
      Your Content, you represent and warrant to us that you have all necessary rights and licenses to do so and
      automatically grant us a license to use Your Content as provided under Section 7 below.
      You understand and agree that we may monitor or review Your Content, and we have the right to remove,
      delete, edit, limit, or block or prevent access to any of Your Content at any time in our sole discretion.
      Furthermore, you understand agree that we have no obligation to display or review Your Content.

      3b. MEMBER CONTENT
      Other users will also share content on our Services. Member Content belongs to the user who posted the content and is
      stored on our servers and displayed wherever necessary.
      You do not have any rights in relation to Member Content, and you may only use Member Content to the extent that
      your use is consistent with our Services’ purpose of allowing communicating with and meeting one another. You may
      not copy the Member Content or use Member Content for commercial purposes, to spam, to harass, or to make unlawful
      threats. We reserve the right to terminate your account if you misuse Member Content.

      3c. OUR CONTENT
      Any other text, content, graphics, user interfaces, trademarks, logos, sounds, artwork, images, and other intellectual
      property appearing on our Services is owned, controlled or licensed by us and protected by copyright, trademark and
      other intellectual property law rights. All rights, title, and interest in and to Our Content remain with us at all times.
      We grant you a limited license to access and use Our Content as provided under Section 6 below, and we reserve all
      other rights.
      `,
    },
    {
      id: "prohibited-activities",
      title: "INAPPROPRIATE CONTENT AND MISCONDUCT; REPORTING",
      icon: AlertTriangle,
      content: `viraag does not tolerate inappropriate content and behavior on our Services.
      We are committed to maintaining a positive and respectful platform, and we do not tolerate any inappropriate content or
      misconduct, whether on or off of the Services. We encourage you to report any inappropriate Member Content or
      misconduct by other users. You can report a user directly through the “Report User” link on a user’s profile. You may
      also contact viraag Customer Service via email: support@theviraag.com`,
    },
    {
      id: "intellectual-property",
      title: "PRIVACY",
      icon: Scale,
      content: `For information about how viraag.in and its affiliates collect, use, and share your personal data, please read our Privacy
      Policy. By using our Services, you agree that we may use your personal data in accordance with our Privacy Policy`,
    },
    {
      id: "limitation-liability",
      title: "RIGHTS YOU ARE GRANTED BY VIRAAG",
      icon: Gavel,
      content: `For as long as you comply with these Terms, viraag grants you a personal, worldwide, royalty-free, non-assignable, nonexclusive, revocable, and non-sublicensable license to access and use our Services for purposes as intended by viraag
      and permitted by these Terms and applicable laws.`,
    },
    {
      id: "limitation",
      title: "RIGHTS YOU GRANT VIRAAG",
      icon: Gavel,
      content: `By creating an account, you grant to viraag a worldwide, perpetual, transferable, sub-licensable, royalty-free right and
      license to host, store, use, copy, display, reproduce, adapt, edit, publish, translate, modify, and distribute Your Content,
      including any information you authorize us to access from Facebook or other third-party source (if applicable), in whole
      or in part, and in any format or medium currently known or developed in the future. viraag’s license to Your Content
      shall be non-exclusive, except that viraag’s license shall be exclusive with respect to derivative works created through
      use of our Services. For example, viraag would have an exclusive license to screenshots of our Services that include
      Your Content.

      In addition, so that viraag can prevent the use of Your Content outside of our Services, you authorize viraag to act on
      your behalf with respect to infringing uses of Your Content taken from our Services by other users or third parties. This
      expressly includes the authority, but not the obligation, to send notices pursuant to 17 U.S.C. § 512(c)(3) (i.e., DMCA
      Takedown Notices) on your behalf if Your Content is taken and used by third parties outside of our Services. viraag is
      not obligated to take any action with regard to use of Your Content by other users or third parties. viraag’s license to
      Your Content is subject to your rights under applicable law (for example, laws regarding personal data protection to the
      extent the content contains personal information as defined by those laws).

      In consideration for viraag allowing you to use our Services, you agree that we, our affiliates, and our third-party
      partners may place advertising on our Services. By submitting suggestions or feedback to viraag regarding our Services,
      you agree that viraag may use and share such feedback for any purpose without compensating you.

      You agree that viraag may access, preserve, and disclose your account information, including Your Content, if required
      to do so by law or upon a good faith belief that such access, preservation, or disclosure is reasonably necessary to:
      You agree that viraag may access, preserve, and disclose your account information, including Your Content, if required
      to do so by law or upon a good faith belief that such access, preservation, or disclosure is reasonably necessary to:
      (A) comply with legal process; (B) enforce these Terms; (C) respond to claims that any content violates the rights of
      third parties; (D) respond to your requests for customer service; or(E) protect the rights, property or personal safety of
      the Company or any other person.
      `,
    },
    {
      id: "limitation-liabilit",
      title: "PURCHASES AND AUTOMATICALLY RENEWING SUBSCRIPTIONS",
      icon: Gavel,
      content: `viraag may offer products and services for purchase through iTunes, Google Play or other external services authorized
      by viraag (each, an “External Service,” and any purchases made thereon, an “External Service Purchase”). viraag may
      also offer products and services for purchase via credit card or other payment processors on the Website or inside the
      App (“Internal Purchases”). If you purchase a subscription, it may automatically renew until you cancel, as further
      described below, or may not be automatically renewing. If you cancel your subscription, you will continue to have
      access to your subscription benefits until the end of your subscription period, at which point it will expire.
      Because our Services may be utilized without a subscription, canceling your subscription does not remove your profile
      from our Services. If you wish to fully terminate your membership, you must terminate your membership as set forth in
      Section 9.

      8a. EXTERNAL SERVICE PURCHASES AND SUBSCRIPTIONS
      When making a purchase on the Service, you may have the option to pay through an External Service, such as with your
      Apple ID or Google account (“your External Service Account”), and your External Service Account will be charged for
      the purchase in accordance with the terms disclosed to you at the time of purchase and the general terms applicable to
      your External Service Account. Some External Services may charge you sales tax, depending on where you live, which
      may change from time to time.

      If your External Service Purchase includes an automatically renewing subscription, your External Service Account will
      continue to be periodically charged for the subscription until you cancel. After your initial subscription commitment
      period, and again after any subsequent subscription period, the subscription will automatically continue for the price and
      time period you agreed to when subscribing.

      To cancel a subscription: If you do not want your subscription to renew automatically, or if you want to change or
      terminate your subscription, you must log in to your External Service Account and follow instructions to manage or
      cancel your subscription, even if you have otherwise deleted your account with us or if you have deleted the App from
      your device.

      For example, if you subscribed using your Apple ID, cancellation is handled by Apple, not viraag. To cancel a purchase
      made with your Apple ID, go to Settings > iTunes & App Stores > [click on your Apple ID] > View Apple ID >
      Subscriptions, then find your viraag subscription and follow the instructions to cancel. You can also request assistance
      at https://getsupport.apple.com.
      Similarly, if you subscribed on Google Play, cancellation is handled by Google. To cancel a purchase made through
      Google Play, launch the Google Play app on your mobile device and go to Menu > My Apps > Subscriptions, then find
      your viraag subscription and follow the instructions to cancel. You can also request assistance
      at https://play.google.com. If you cancel a subscription, you may continue to use the cancelled service until the end of
      your then-current subscription term. The subscription will not be renewed when your then-current term expires.
      If you initiate a chargeback or otherwise reverse a payment made with your External Service Account, viraag may
      terminate your account immediately in its sole discretion, on the basis that you have determined that you do not want a
      viraag subscription. In the event that your chargeback or other payment reversal is overturned, please contact Customer
      support. viraag will retain all funds charged to your External Service Account until you cancel your subscription
      through your External Service Account. Certain users may be entitled to request a refund. See Section 8d below for
      more information.

      8b. INTERNAL PURCHASES AND SUBSCRIPTIONS
      If you make an Internal Purchase, you agree to pay the prices displayed to you for the Services you’ve selected as well
      as any sales or similar taxes that may be imposed on your payments (and as may change from time to time), and you
      authorize viraag to charge the payment method you provide (your “Payment Method”). viraag may correct any billing
      errors or mistakes even if we have already requested or received payment. If you initiate a chargeback or otherwise
      reverse a payment made with your Payment Method, viraag may terminate your account immediately in its sole
      discretion, on the basis that you have determined that you do not want a viraag subscription. In the event that your
      chargeback or other payment reversal is overturned, please contact our Customer support.
      If your Internal Purchase includes an automatically renewing subscription, your Payment Method will continue to be
      periodically charged for the subscription until you cancel. After your initial subscription commitment period, and again
      after any subsequent subscription period, your subscription will automatically continue for the price and time period you
      agreed to when subscribing, until you cancel.
      To cancel a subscription, you can log in to the Website/App and go to the Settings page, and then click on “My Orders”,
      and follow the instructions to downgrade. If you cancel a subscription, you may continue to use the cancelled service
      until the end of your then-current subscription term. The subscription will not be renewed when your then-current term
      expires.
      You may edit your Payment Method information by using the Settings tool. If a payment is not successfully processed,
      due to expiration or otherwise, you remain responsible for any uncollected amounts and authorize us to continue billing
      the Payment Method, as it may be updated. This may result in a change to your payment billing dates.
      In addition, you authorize us to obtain updated or replacement expiration dates and card numbers for your credit or debit
      card as provided by your credit or debit card issuer. The terms of your payment will be based on your Payment Method
      and may be determined by agreements between you and the financial institution, credit card issuer, or other provider of
      your chosen Payment Method. Certain users may be entitled to request a refund. See Section 8d below for more
      information.

      8c. VIRTUAL/DIGITAL ITEMS
      From time to time, you may have the opportunity purchase a limited, personal, non-transferable, nonsublicensable, revocable license to use or access special limited-use features (“Virtual Item(s)” or “Digital Item(s))
      from viraag. You may only purchase Virtual Items from us or our authorized partners through our Services. Virtual
      Items represent a limited license right governed by this Agreement, and, except as otherwise prohibited by
      applicable law, no title or ownership in or to Virtual Items is being transferred or assigned to you. This Agreement
      should not be construed as a sale of any rights in Virtual Items.
      Any Virtual Item balance shown in your account does not constitute a real-world balance or reflect any stored
      value, but instead constitutes a measurement of the extent of your license. Virtual Items do not incur fees for nonuse; however, the license granted to you in Virtual Items will terminate in accordance with the terms of this
      Agreement, on the earlier of when viraag ceases providing our Services, or your account is otherwise closed or
      terminated.
      viraag, in its sole discretion, reserves the right to charge fees for the right to access or use Virtual Items and/or may
      distribute Virtual Items with or without charge. viraag may manage, regulate, control, edit, or eliminate Virtual
      Items at any time, including taking actions that may impact the perceived value or purchase price, if applicable, of
      any Virtual Items. viraag shall have no liability to you or any third party in the event that viraag exercises any such
      rights. The transfer of Virtual Items is prohibited, and you shall not sell, redeem, or otherwise transfer Virtual
      Items to any person or entity. Virtual Items may only be redeemed through our Services.
      ALL PURCHASES AND REDEMPTIONS OF VIRTUAL ITEMS MADE THROUGH OUR SERVICES ARE
      FINAL AND NON-REFUNDABLE. YOU ACKNOWLEDGE THAT VIRAAG IS NOT REQUIRED TO
      PROVIDE A REFUND FOR ANY REASON, AND THAT YOU WILL NOT RECEIVE MONEY OR OTHER
      COMPENSATION FOR UNUSED VIRTUAL ITEMS WHEN AN ACCOUNT IS CLOSED, WHETHER SUCH
      CLOSURE WAS VOLUNTARY OR INVOLUNTARY

      8d. REFUNDS
      The purchase and sale of the subscriptions is a completed transaction upon receipt of your payment. You can cancel the
      subscription within 3 working days upon payment to any of the services offered and receive a full refund into your bank
      account/credit card, provided you have not used the subscription in any manner after the payment. Use of the
      subscription or service means sending to or receiving from other members and any communication, viewing profiles of
      other members, or making changes to your profile or information on your account. If the subscription is used after
      payment, you will lose your refund/cancellation right. When you meet the criteria for refunds, refunds will be issued
      immediately from our end, however, some banks take 5-15 days to process the refund and reflect the same in your
      bank/card statement.
      Your ability to use any subscription is effective immediately once they are placed in your account. If you choose to not
      use the subscription to its fullest extent, and let subscription expire, you may do so. Any subscription shown in your
      account does not constitute a real-world balance or reflect any stored value, but instead only constitutes a measurement
      of the extent of your subscription. We may redeem any unused subscription for you promptly after their expiration date
      if we choose. If you delete your account, we are entitled to redeem all your unused subscription on the date of deletion.
      viraag may terminate your access to the website/app and/or your subscription for any reason which shall be effective
      upon sending notice of termination to you at the email address you provide at the time of registration or such other email
      address as you may later provide to viraag. If viraag terminates your account because of your breaching the Agreement,
      you will not be entitled to any refund of any subscription.`,
    },
    {
      id: "limitation-liabi",
      title: "ACCOUNT TERMINATION",
      icon: Gavel,
      content: `You can deactivate your account at any time by logging into the Website/App, going to “Settings”, and following the
      instructions to deactivate your account. However, you will need to cancel / manage any External Service Purchases
      through your External Service Account (e.g., iTunes, Google Play) to avoid additional billing.
      viraag reserves the right to investigate and, if appropriate, suspend or terminate your account without a refund if you
      have violated these Terms, misused our Services, or behaved in a way that viraag regards as inappropriate or unlawful,
      on or off our Services. We reserve the right to make use of any personal, technological, legal, or other means available
      to enforce the Terms, at any time without liability and without the obligation to give you prior notice, including, but not
      limited to, preventing you from accessing the Services.

      If your account is terminated by you or by viraag for any reason, these Terms continue and remain enforceable between
      you and viraag, and you will not be entitled to any refund for purchases made. Your information will be maintained
      and/or deleted in accordance with our Privacy Policy.
      `,
    },
    {
      id: "limitation-liay",
      title: "NO CRIMINAL BACKGROUND OR IDENTITY VERIFICATION CHECKS:",
      icon: Gavel,
      content: `YOU UNDERSTAND THAT VIRAAG DOES NOT CONDUCT CRIMINAL BACKGROUND OR
      IDENTITY VERIFICATION CHECKS ON ITS USERS OR OTHERWISE INQUIRE INTO THE
      BACKGROUND OF ITS USERS. VIRAAG MAKES NO REPRESENTATIONS OR WARRANTIES AS TO
      THE CONDUCT, IDENTITY, INTENTIONS, LEGITIMACY, OR VERACITY OF USERS. VIRAAG
      RESERVES THE RIGHT TO CONDUCT—AND YOU AUTHORIZE VIRAAG TO CONDUCT—ANY
      CRIMINAL BACKGROUND CHECK OR OTHER SCREENINGS AT ANY TIME USING AVAILABLE
      PUBLIC RECORDS, AND YOU AGREE THAT ANY INFORMATION YOU PROVIDE MAY BE USED
      FOR THAT PURPOSE. IF THE COMPANY DECIDES TO CONDUCT ANY SCREENING THROUGH A
      CONSUMER REPORTING AGENCY, YOU HEREBY AUTHORIZE THE COMPANY TO OBTAIN AND
      USE A CONSUMER REPORT ABOUT YOU TO DETERMINE YOUR ELIGIBILITY UNDER THESE
      TERMS.
      YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER USERS. ALWAYS USE YOUR BEST
      JUDGMENT AND TAKE APPROPRIATE SAFETY PRECAUTIONS WHEN COMMUNICATING WITH OR MEETING NEW
      PEOPLE. COMMUNICATIONS RECEIVED THROUGH THE SERVICE, INCLUDING AUTOMATIC NOTIFICATIONS SENT
      BY VIRAAG, MAY RESULT FROM USERS ENGAGING WITH THE SERVICE FOR IMPROPER PURPOSES, INCLUDING
      FRAUD, ABUSE, HARASSMENT, OR OTHER SUCH IMPROPER BEHAVIOR.
      Though viraag strives to encourage a respectful user experience, it is not responsible for the conduct of any user on or
      off the Service. You can follow our Security Tips You agree to use caution in all interactions with other users,
      particularly if you decide to communicate off the Service or meet in person.
      `,
    },
    {
      id: "DISCLAIMER:",
      title: "DISCLAIMER:",
      icon: Gavel,
      content: `VIRAAG PROVIDES OUR SERVICES ON AN “AS IS” AND “AS AVAILABLE” BASIS AND TO THE EXTENT
      PERMITTED BY APPLICABLE LAW, GRANTS NO WARRANTIES OF ANY KIND, WHETHER EXPRESS,
      IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO OUR SERVICES (INCLUDING ALL CONTENT
      CONTAINED THEREIN), INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF
      SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NONINFRINGEMENT. VIRAAG DOES NOT REPRESENT OR WARRANT THAT (A) OUR SERVICES WILL BE
      UNINTERRUPTED, SECURE, OR ERROR FREE, (B) ANY DEFECTS OR ERRORS IN OUR SERVICES WILL
      BE CORRECTED, OR (C) THAT ANY CONTENT OR INFORMATION YOU OBTAIN ON OR THROUGH OUR
      SERVICES WILL BE ACCURATE. FURTHERMORE, VIRAAG MAKES NO GUARANTEES AS TO THE NUMBER
      OF ACTIVE USERS AT ANY TIME; USERS’ ABILITY OR DESIRE TO COMMUNICATE WITH OR MEET YOU,
      OR THE ULTIMATE COMPATIBILITY WITH OR CONDUCT BY USERS YOU MEET THROUGH THE SERVICES.
      VIRAAG TAKES NO RESPONSIBILITY FOR ANY CONTENT THAT YOU OR ANOTHER USER OR THIRD
      PARTY POSTS, SENDS, OR RECEIVES THROUGH OUR SERVICES NOR DOES VIRAAG TAKE ANY
      RESPONSIBILITY FOR THE IDENTITY, INTENTIONS, LEGITIMACY, OR VERACITY OF ANY USERS WITH
      WHOM YOU MAY COMMUNICATION THROUGH VIRAAG. ANY MATERIAL DOWNLOADED OR OTHERWISE
      OBTAINED THROUGH THE USE OF OUR SERVICES IS ACCESSED AT YOUR OWN DISCRETION AND RISK.
      VIRAAG IS NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER HARDWARE, COMPUTER
      SOFTWARE, OR OTHER EQUIPMENT OR TECHNOLOGY INCLUDING, BUT WITHOUT LIMITATION, DAMAGE
      FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS, TAMPERING, FRAUD, ERROR, OMISSION,
      INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR NETWORK
      FAILURE, OR ANY OTHER TECHNICAL OR OTHER MALFUNCTION.`,
    },
    {
      id: "limitatio",
      title: "DIGITAL MILLENNIUM COPYRIGHT ACT",
      icon: Gavel,
      content: `viraag has adopted the following policy towards copyright infringement in accordance with the Digital Millennium
      Copyright Act (the “DMCA”). If you believe any Member Content or Our Content infringes upon your intellectual
      property rights, please submit a notification alleging such infringement (“DMCA Takedown Notice”) including the
      following:
      1. A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that
      is allegedly infringed;
      2. Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a
      single online site are covered by a single notification, a representative list of such works;
      3. Identification of the material claimed to be infringing or to be the subject of infringing activity and that is to be
      removed or access disabled and information reasonably sufficient to permit the service provider to locate the
      material;
      4. Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone
      number, and, if available, an electronic mail at which the complaining party may be contacted;
      5. A statement that you have a good faith belief that use of the material in the manner complained of is not
      authorized by the copyright owner, its agent, or the law; and
      6. A statement that, under penalty of perjury, the information in the notification is accurate and you are authorized to
      act on behalf of the owner of the exclusive right that is allegedly infringed.
       Any DMCA Takedown Notices should be sent to contact@theviraag.com.
      `,
    },
    {
      id: "limit-liability",
      title: "ADS AND THIRD-PARTY CONTENT",
      icon: Gavel,
      content: `You may see ads and third-party promotions on our Services. viraag does not endorse and isn’t responsible for
      your interactions with those products or services: Our Services may contain advertisements and promotions offered by
      third parties and links to other websites or resources. viraag may also provide non-commercial links or references to
      third parties within its content. viraag is not responsible for the availability (or lack of availability) of any external
      websites or resources or their content. Furthermore, viraag is not responsible for, and does not endorse, any products or
      services that may be offered by third-party websites or resources. If you choose to interact with the third parties made
      available through our Services, such party’s terms will govern their relationship with you. viraag is not responsible or
      liable for such third parties’ terms or actions.`,
    },
    {
      id: "limitatiliability",
      title: "LIMITATION OF LIABILITY",
      icon: Gavel,
      content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL VIRAAG, ITS AFFILIATES,
      EMPLOYEES, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY,
      INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING, WITHOUT LIMITATION, LOSS OF PROFITS, WHETHER
      INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
      RESULTING FROM: (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES, (II) THE
      CONDUCT OR CONTENT OF OTHER USERS OR THIRD PARTIES ON, THROUGH, OR FOLLOWING USE OF THE
      SERVICES; OR (III) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR CONTENT, EVEN IF VIRAAG HAS
      BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT WILL VIRAAG’S AGGREGATE LIABILITY TO
      YOU FOR ALL CLAIMS RELATING TO THE SERVICES EXCEED THE AMOUNT PAID, IF ANY, BY YOU TO VIRAAG FOR
      THE SERVICES WHILE YOU HAVE AN ACCOUNT.
      THE LIMITATION OF LIABILITY PROVISIONS SET FORTH IN THIS SECTION 14 SHALL APPLY EVEN IF YOUR
      REMEDIES UNDER THIS AGREEMENT FAIL WITH RESPECT TO THEIR ESSENTIAL PURPOSE.
      SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL
      OF THE EXCLUSIONS AND LIMITATIONS IN THIS SECTION MAY NOT APPLY TO YOU.`,
    },
    {
      id: "DISPUTE-RESOLUTION",
      title: "DISPUTE RESOLUTION",
      icon: Gavel,
      content: `The exclusive means of resolving any dispute or claim arising out of or relating to these Terms of Use (including any
        alleged breach thereof), the Service, or the Website shall be BINDING ARBITRATION administered under laws of
        India. You agree to the exclusive jurisdiction to the courts of Hyderabad, India.`,
    },
    {
      id: "INDEMNITY-BY-YOU",
      title: "INDEMNITY BY YOU",
      icon: Gavel,
      content: `You agree, to the extent permitted under applicable law, to indemnify, defend, and hold harmless viraag, our affiliates,
      and their and our respective officers, directors, agents, and employees from and against any and all complaints,
      demands, claims, damages, losses, costs, liabilities, and expenses, including attorney’s fees, due to, arising out of, or
      relating in any way to your access to or use of our Services, Your Content, Your conduct toward other users, or your
      breach of this Agreement`,
    },
    {
      id: "ACCEPTANCE-OF-TERMS",
      title: "ACCEPTANCE OF TERMS",
      icon: Gavel,
      content: `By using our Services, whether through a mobile device, mobile application, or computer, you agree to be bound by
      (a) these Terms, which we may amend from time to time,
      (b) our Privacy Policy and Cookie Policy,
      (c) any Additional Terms Upon Purchases, if any.
      If you do not accept and agree to be bound by all of the terms of this Agreement, please do not use our Services.
      All pronouns and any variations thereof shall be deemed to refer to the masculine, feminine, neuter, singular or plural as
      the identity of the entities or persons referred to any require. Any word both capitalized and un capitalized will be
      deemed to have the same meaning`,
    },
    {
      id: "ENTIRE-AGREEMENT",
      title: "ENTIRE AGREEMENT",
      icon: Gavel,
      content: `These Terms, with the Privacy Policy, Cookie Policy, guideline and any Additional Terms Upon Purchase, contain the
      entire agreement between you and viraag regarding the use of our Services. The Terms supersede all previous
      agreements, representations, and arrangements between us, written or oral. If any provision of these Terms is held
      invalid, illegal, or otherwise unenforceable, the remainder of the Terms shall continue in full force and effect. The
      failure of the Company to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such
      right or provision. You agree that your viraag account is non-transferable and all of your rights to your account and its
      content terminate upon your death, unless otherwise provided by law. Any rights and licenses granted hereunder, may
      not be transferred or assigned by you, but may be assigned by us without restriction. No agency, partnership, joint
      venture, fiduciary or other special relationship or employment is created as a result of these Terms, and you may not
      make any representations on behalf of or bind viraag in any manner`,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 animate-slide-in-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            Legal Agreement
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We viraag, are operated by Kranish Innovation Private Limited, for all users. As used in this Agreement,
the terms “viraag,” “us,” “we,” the “Company”, and “our” shall refer to Kranish Innovation Private
Limited, as appropriate and the terms “our services” shall refer to the services offered by viraag.com

          </p>
          <div className="text-sm text-muted-foreground">Last updated: August 17, 2025</div>
        </div>

        {/* Key Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">User Responsibilities</h3>
              <p className="text-muted-foreground text-sm">
                Be respectful, honest, and follow our community guidelines.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Safety First</h3>
              <p className="text-muted-foreground text-sm">
                We prioritize your safety with verification and reporting tools.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Fair Usage</h3>
              <p className="text-muted-foreground text-sm">Use our platform responsibly and respect others' rights.</p>
            </CardContent>
          </Card>
        </div>

        {/* Terms Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Terms and Conditions Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {termsSections.map((section) => (
                <AccordionItem key={section.id} value={section.id} className="border-border">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <section.icon className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line pt-4">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Questions About Our Terms?</h2>
          <p className="text-muted-foreground">
            Contact our legal team at{" "}
            <a href="mailto:legal@Viraag.com" className="text-primary hover:underline">
              legal@Viraag.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
