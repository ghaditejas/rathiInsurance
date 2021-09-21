import { Assets, RedirectUrl } from "./app/lib/constants/assets";
import { faTimesCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export const HomePageData = {
  data: [
    {
      sliderImageUrl: Assets.BannerImage9,
      silderMobileImageUrl: Assets.Bannerimagemobile9,
      // textImage: Assets.CarouselText1,
      heading1: "WINNER OF THE AWARD ISPO",
      heading2: "BRANDNEW",
      heading3: "INNOVATION",
      videoLink: true,
    },
    {
      sliderImageUrl: Assets.BannerImage1,
      silderMobileImageUrl: Assets.Bannerimagemobile1,
      // textImage: Assets.CarouselText1,
      heading1: "DIFFERENT BODIES",
      heading2: "DIFFERENT GOALS",
      heading3: "DIFFERENT PROGRAMS",
    },
    {
      sliderImageUrl: Assets.BannerImage2,
      silderMobileImageUrl: Assets.Bannerimagemobile3,
      // textImage: Assets.CarouselText1,
      heading1: "BUILD PERFORMANCE",
      heading2: "PREVENT POST-TRAINING FATIGUE",
      heading3: "RECOVER DOWNTIME",
    },
    {
      sliderImageUrl: Assets.BannerImage7,
      silderMobileImageUrl: Assets.Bannerimagemobile7,
      // textImage: Assets.CarouselText1,
      heading1: "LONG-LASTING",
      heading2: "8-HOURS BATTERY LIFE",
      heading3: "WIRELESS",
    },
    {
      sliderImageUrl: Assets.BannerImage8,
      silderMobileImageUrl: Assets.Bannerimagemobile8,
      // textImage: Assets.CarouselText1,
      heading1: "USER-FRIENDLY",
      heading2: "SIMPLE TO OPERATE",
      heading3: "BLUETOOTH CONTROLLED",
    },
    {
      sliderImageUrl: Assets.BannerImage10,
      silderMobileImageUrl: Assets.Bannerimagemobile10,
      // textImage: Assets.CarouselText1,
      heading1: "DURABLE",
      heading2: "WASHABLE",
      heading3: "FLEXIBLE",
    },
  ],
  latesUpdate: [
    {
      imageUrl: Assets.mobileFiximagemale,
      mobileImageUrl: Assets.mobileFiximagemale,
      label: "Smart Shirt Kit",
      description: "See our best products in action",
      productNumber: "",
      // link: `${RedirectUrl}product/smart-shirt-kit-female/`,
      slug: "smartshirt-kit-male",
      for: "Male",
    },
    {
      imageUrl: Assets.mobileFiximagemale,
      mobileImageUrl: Assets.mobileFiximagemale,
      label: "Smart Shirt Kit",
      description: "See our best products in action",
      productNumber: "",
      // link: `${RedirectUrl}product/smart-shirt-kit-female/`,
      slug: "smartshirt-kit-male",
      for: "Male",
    },
    {
      imageUrl: Assets.mobileFiximagemale,
      mobileImageUrl: Assets.mobileFiximagemale,
      label: "Smart Shirt Kit",
      description: "See our best products in action",
      productNumber: "",
      // link: `${RedirectUrl}product/smart-shirt-kit-female/`,
      slug: "smartshirt-kit-male",
      for: "Male",
    },
  ],
  bottomSlider: [
    {
      label: "Innovative Union",
      link:
        "https://www.ispo.com/en/trends/wearable-technology-swiss-technology-and-swedish-performance-unite-major-smart-textile",
      description:
        "diPulse Technology collaborates with the best people in the market",
    },
    {
      label: "ISPO Brandnew 2019 winners",
      link:
        "https://www.ispo.com/en/markets/ispo-brandnew-2019-winners-pictures",
      description: "Our winning moments in pictures",
    },
    {
      label: "Rewards and Recognition",
      link:
        "https://www.modeintextile.fr/combinaison-connectee-de-dipulse-remporte-ispo-award/",
      description: "Our Innovative tech suit gets mentioned!",
    },
    {
      label: "ISPO 2019",
      link: "https://www.youtube.com/watch?v=bV2FHm6d2Qs",
      description: "Watch our winning moment!",
    },
  ],
};

export const FAQ = [
  {
    name: "Heart Rate Module",
    data: [
      {
        question:
          "Heart Rate status indicator is flashing in red, what is wrong?",
        answer:
          "The battery is too low. Please, recharge battery following the procedure described in the user manual provided with the device."
      },
      {
        question:
          "Heart Rate status indicator is quickly flashing in red, what is wrong?",
        answer:
          "The device has detected an internal malfunction. Please restart the device. If the problem persists, please contact us for assistance."
      },
      {
        question: "No Heart Rate is detected in the app, why?",
        answer:
          "The device is not properly connected to the magnetic snaps. Please remove and replace the device on the magnetic snaps and make sure that both snaps are well connected. If the problem persists, please contact us for assistance."
      }
    ]
  }, {
    name: "Stim module",
    data: [
      {
        question:
          "I pressed the power button and the device doesn’t turn on, why?",
        answer:
          "The battery is too low. Please, recharge battery following the procedure described in the user manual provided with the device."
      },
      {
        question:
          "Device is on but there I don’t feel any stimulation during the session, what is wrong?",
        answer:
          "The device might not be properly connected to the magnetic snaps. Please remove and replace the device on the magnetic snaps and make sure that both snaps are well connected. If the problem persists, please contact us for assistance."
      },
      {
        question:
          "Power button on the device flashes in orange, what should I do?",
        answer:
          "The device might not be properly connected to the magnetic snaps. Please remove and replace the device on the magnetic snaps and make sure that both snaps are well connected. If the problem persists, please contact us for assistance."
      },
      {
        question: "Power button is flashing in red, what is wrong?",
        answer:
          "The battery is too low. Please, recharge battery following the procedure described in the user manual provided with the device."
      },
      {
        question: "Power button is quickly flashing in red, what is wrong?",
        answer:
          "The device has detected an internal malfunction. Please restart the device. If the problem persists, please contact us for assistance."
      }
    ]
  }, {
    name: "Muscle stimulation",
    data: [
      {
        question:
          "I am using gel pads, why is the stimulation weak even though the intensity is high?",
        answer:
          "The gel pads although reusable may need replacing after multiple use or they may be  positioned incorrectly Turn the device off and reposition the gel pads  properly."
      },
      {
        question: "Stimulation is too uncomfortable, what should I do?",
        answer:
          "Please make sure the electrodes are well moistened. Turn the device off and reposition the electrodes properly. If stimulation is still uncomfortable, please decrease the intensity of the stimulation. During the stimulation your muscles contract and do the work. Please allow enough time for your muscle to rest between sessions."
      },
      {
        question: "My muscles are sore after the session, what should I do?	",
        answer:
          "During the stimulation your muscles contract and do the work. Please allow enough time for your muscle to rest between sessions."
      }
    ]
  }, {
    name: "diPulse mobile App",
    data: [
      {
        question:
          "I downloaded diPulse mobile app, but it doesn’t work properly, what should I do?	",
        answer:
          "Please follow these steps to resolve the issue:<ul><li>Please check if your phone model is supported. We are supporting only iPhone versions that are officially supported by Apple, currently that would be iPhone 6s or newer phone, running iOS 13 or later version. Phones running Anroid Pie or later version are also supported.</li><li>Please delete the app from the phone.</li><li>Install the latest version of the app from Apple App Store or Google Play Store</li><li>Please close all the other apps that are running in the background</li><li>Update your Stim and Heart Rate devices by tapping on Start &gt; Settings icon (cog icon in the top right corner) &gt; Update firmware</li><li>Download programs</li></ul>If the problem persists, please contact us for assistance.	"
      }
    ]
  }
];

export const AboutUs = {
  aboutUSDescription: `<h3 class="about-question">Who invented diPulse Smartskin technology?</h3>
  <p class="about-description1">With a goal to provide more than just performance enhancement,
   NMES Group and Far Eastern New Century teamed up to create the world’s first fully-integrated 
   sportswear -  diPulse’s Smartskin. Combining extensive experience in muscle stimulation, professional 
   training, textile science and engineering, the team has created a smartwear that is 
   non-invasive, totally wire-free, designed to minimise post-training fatigue and build performance.</p>
   <p class="about-description1 ">With technology, social media and smart devices becoming deeply integrated, 
   the end-user wants more than just performance enhancement. Here, diPulse make a difference,
   by offering a product that provides more than just statistics as an active sports aid to fitness training and development</p>
   <h3 class="about-question mt-4">How does diPulse Smartskin technology improve sport performance?</h3>
   <p class="about-description1">
   diPulse’s Smartskin allows you to start your workout proactively to build muscle endurance and strength, 
   shorten and improve cool down phase as well as to prevent training plateaus by activating up to two targeted
    muscle groups in Combined Muscle Training (CMT). The app helps you engage in all 
    stages workout, including the warm up. </p>
    <h3 class ="about-question mt-4">What are the benefits of our wearable technology?</h3>
    <p class ="about-description1">
    Our Smartskins:
    <ul class="ml-3 text-left list-style-green about-description1">
    <li>Can help you work out without worrying about cables</li>
    <li>Do not involve gel pads that need to replacing after a few uses and you don’t have to worry about the electrodes placement as these are positioned for you within the Smartskin</li>
    <li>Can be washed up to 100 times and have integrated electrodes which provide consistent deep muscle stimulation</li>
    <li>Is fully controllable via the app on your smartphone</li>
    </ul>
    </p> `,
};


export const AddressData = {
  headLabel: "Address",
  address: "NMES Group AB Roasjo by Kallang 1512 92, Svenljunga, Sweden",
  callLabel: "Call us",
  callValue: "(03) 5318 4272",
};

export const products = [
  {
    productImageURL: Assets.SmartKit,
    productCarouselImageURL: Assets.SmartKit,
    Name: "SMARTKITS",
    productSubHeading: "FULL BODY SMARTKITS",
    productLink: `${RedirectUrl}product-category/smart_kit/`,
    status: true,
  },
  {
    productImageURL: Assets.ProductActiveImage3,
    productCarouselImageURL: Assets.ProductCarouselImage3,
    Name: "SMARTSKIN",
    productSubHeading: "FULL BODY STIMULATOR",
    productLink: `${RedirectUrl}product-category/smart_skin/`,
    status: false,
  },
  {
    productImageURL: Assets.ProductActiveImage2,
    productCarouselImageURL: Assets.ProductCarouselImage2,
    Name: "ACCESSORIES",
    productSubHeading: "FULL BODY ACCESORIES",
    productLink: `${RedirectUrl}product-category/accessories/`,
    status: false,
  },

];

export const AccordianData = [
  // {
  //   id: "specification-id",
  //   title: "SPECIFICATIONS",
  //   content:
  //     "",
  // },
  {
    id: "review-id",
    title: "DESCRIPTION",
    content:
      "",
  },

  {
    id: "similar-products",
    title: "SIMILAR PRODUCTS",
    content: ""
  },
];

export const ProductDetails = {
  productImage: Assets.ProductImage3,
  productName: "SMARTSKINS",
  productTitle: "FULL BODY STIMULATOR",
  productDescription:
    "The SMARTSKIN (Compression based top and tights) features a metal-free dry electrode smart textile system, Lorem ipsum dolor demosit amet, consectetur adipisicing elit,",
};

export const productSpecifications = {
  color: "GREEN",
  category: "SMARTSKIN",
  size: "XL",
  shocks: "LOREIUM IPSUM",
  componentCost: "$354",
};
export const ProductShowCaseData = [
  {
    name: "ALL",
    qty: 9,
    product: [
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.SmartKit,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductCarouselImage3,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.SmartKit,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductCarouselImage2,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductCarouselImage2,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE1",
        price: "$ 349.00",
      },
    ],
  },
  {
    name: "ACCESORIES",
    qty: 5,
    product: [
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE2",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE2",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE2",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE2",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE2",
        price: "$ 349.00",
      },
    ],
  },
  {
    name: "SMARTKIT",
    qty: 3,
    product: [
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE3",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE3",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE3",
        price: "$ 349.00",
      },
    ],
  },
  {
    name: "SMARTSKIN",
    qty: 12,
    product: [
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage2,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage3,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
      {
        img: Assets.ProductActiveImage32,
        name: "STIM MODULE4",
        price: "$ 349.00",
      },
    ],
  },
];

export const productDetailsHotspotImage = [
  {
    xCoordinate: 15,
    yCoordiante: 30,
    imageUrl: faPlusCircle,
    productAttachment: "shoulder",
  },
  {
    xCoordinate: 50,
    yCoordiante: 28,
    imageUrl: faTimesCircle,
    productAttachment: "chest",
  },
  {
    xCoordinate: 50,
    yCoordiante: 60,
    imageUrl: faPlusCircle,
    productAttachment: "stomach",
  },
];

export const NewsData = [
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content:
      "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date(),
  },
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content:
      "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date("2020/4/20"),
  },
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content:
      "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date("2020/4/3"),
  },
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content:
      "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date("2020/2/28"),
  },
];

export const MobileAppDescription = {
  description: `Our wearables are smart. Pairing the Smartskins with our
  powerful smartphone diPulse app opens up a whole new world of
  possibilities. The app offers a diverse and flexible environment
  where you can select, download and engage in specific training
  programs to achieve your desired goals.`,
  playsStoreLink:
    "https://play.google.com/store/apps/details?id=com.nmesgroup.dipulse.tetra&hl=en_IN",
  appStoreLink: "https://apps.apple.com/in/app/dipulse/id1472064553",
};
export const NewsBlogDetail = {
  newsDetailDescription1: `<h3 class="about-question">Who invented diPulse Smartskin technology?</h3>
  <p class="about-description1">With a goal to provide more than just performance enhancement,
   NMES Group and Far Eastern New Century teamed up to create the world’s first fully-integrated 
   sportswear -  diPulse’s Smartskin. Combining extensive experience in muscle stimulation, professional 
   training, textile science and engineering,the team has created a smartwear that is 
   non-invasive, totally wire-free, designed to mininmize post-training fatigue and build performance.</p>
   <p class="about-description1 ">With technology, social media and smart devices becoming deeply integrated, 
   the end-user wants more than just performance enhancement. Here, diPulse intends to make a difference,
   by offering a product that provides more than just statistics as an active sports aid, 
   to fitness and training development.</p>
   <p class="about-description1 ">With technology, social media and smart devices becoming deeply integrated, 
   the end-user wants more than just performance enhancement. Here, diPulse intends to make a difference,
   by offering a product that provides more than just statistics as an active sports aid, 
   to fitness and training development.</p>`,
  flagImg: Assets.NewsDetailImage2,
  rightImg1: Assets.NewsDetailImage1,
  rightImg2: Assets.NewsDetailImage2,
  defaultBg: Assets.NewsDefaultBgImage,
};

export const PrivacyPolicyDetail = {
  privacyPolicyDescription: `<p>In order to know what Personal Data will be collected and used, you take note of the current Privacy Policy and accept it as-is.</p>
  <p>It is explicitly made reference to the defined terms in the Terms of Use, which are an integral part of this Privacy Policy</p>
  <h3><strong>Privacy Policy purpose</strong></h3>
  <p>The Privacy Policy details the conditions under which NMES can collect, process, use, store, save and erase Personal Data concerning a User.</p>
  <p>Falls outside of the scope of this Privacy Policy any processing of Personal Data related to the sale of Garments (e.g. payment details, delivery address, data relating to invoicing).</p>
  <h3><strong>Privacy Policy acceptance</strong></h3>
  <p>By using the App, you accept that the Data Controller collects, processes, stores, saves and erases your Personal Data, as defined by the present Privacy Policy.</p>
  <p>You
    acknowledge that you have read and understood the Privacy Policy and
    agree to be bound by it and to comply with all applicable laws and
    regulations.
  </p>
  <h3><strong>Privacy Policy modification</strong></h3>
  <p>The present Privacy Policy can be amended at any time. You will be informed of these changes by email and/or when you connect to the App and will have to accept them explicitly. In case of a refusal of the modifications, you will no longer be able to use the App.</p>
  <h3><strong>Data protection</strong></h3>
  <p>The process of your data, collected and processed by NMES, is subject to the European General Data Protection Regulation (GDPR).</p>
  <p>NMES
    respects the strict confidentiality of your data.
  </p>
  <p> Also reserved are the cases where the law requires the transmission to third-parties or that NMES considers in good faith that a disclosure of this information is necessary for the purposes of protecting our rights, your safety or that of others or to analyse fraud cases.</p>
  <h3><strong>Personal Data</strong></h3>
  <p>We
    mean by “Personal Data” any information relating to an identified
    or identifiable natural person according to art. 4 (1) GDPR (L 119 ;
    GDPR).
  </p>
  <p><br/>
    By using the App, you consent that NMES collects and processes your
    Personal Data:<br/>
    – name<br/>
    – profile photo<br/>
    – age<br/>
    – gender<br/>
    – country<br/>
    – telephone
    number<br/>
    – team<br/>
    – interests<br/>
    – goal<br/>
    – profession<br/>
    – a description of your activity on the
    App<br/>
    – other social media profiles (e.g. Instagram,
    Spotify)<br/>
    – location<br/>
    – heart rate during the use
    of Garments.<br/>
    – muscle usage
  </p>
  <p>When you access and/or use the App, the server automatically records details concerning your access and actions. This includes:</p>
  <p>–
    your type of device<br/>
    – your IP and IMEI address<br/>
    – the date
    and time of the connections<br/>
    – the place of connection<br/>
    –
    the links that you follow<br/>
    – the pages and the content that you
    consult and the duration of consultation.
  </p>
  <h3><strong>Data Controller</strong></h3>
  <p>The
    Data Controller is NMES. You can contact the Data Controller by using
    the following e-mail address:<br/>
    support@dipulse.com.
  </p>
  <h3><strong>Subcontractors and authorized partners</strong></h3>
  <p>All or part of your Personal Data can however be communicated to subcontractors and/or partners of  NMES to the extent that these entities offer services that help carrying out the activities of the App. It is provided that the transferred information, however, can only be processed and used in the strict context of the relationship with NMES.</p>
  <p>You explicitly accept that NMES may authorize the process and storage of some Personal Data to subcontractors and partners of NMES to the extent that these entities offer services that help carrying out the activities of the App. It is provided that the transferred Personal Data, however, can only be processed and used in the strict context of the relationship with NMES.  </p>
  <p>The
    subcontractors and/or partner of NMES are strictly bound by
    confidentiality obligations and comply with the Privacy Policy and
    all applicable laws and regulations.
  </p>
  <h3><strong>Use of your Personal Data</strong></h3>
  <p>You explicitly consent that NMES, as the Data Controller, uses your Personal Data to:</p>
  <p>– apply the Terms<br/> – detect and prevent abuses and ensure the security of the App<br/> – for marketing purposes (with your prior and explicit consent)<br/> – proceed, on request, with the erasing and/or rectification of your Personal Data<br/> – encourage connections within the diPulse Community<br/> – organise challenges and teams</p>
  <p>You agree that NMES or one of its subcontractors and/or partners collects, processes, stores, saves and erases your Personal Data, as defined by the present Privacy Policy, in accordance with the European General Data Protection Regulation (GDPR).</p>
  <p>NMES,
    its subcontractors and/or partners are subject to a strict duty of
    confidentiality. No Personal Data may be communicated to a
    third-party, except for subcontractors and/or partners, for any
    reason whatsoever, except with the prior express agreement of the
    User.
  </p>
  <h3><strong>Data storage and transfer of your Personal Data</strong></h3>
  <p>We process your Personal Data in different countries for the purposes set out in this Privacy Policy. When we transfer your Personal Data to other countries, we take adequate measures to ensure that all applicable laws and regulations are being followed.</p>
  <p>Your Personal Data will be stored by Amazon, who guarantees an adequate level of protection, in accordance with all applicable laws and regulations.</p>
  <h3><strong>Data security and retention</strong></h3>
  <p>The Data Controller take every reasonable step to ensure that your Personal Data is processed and stored in a safe and secure manner and takes all reasonable measures in accordance with all applicable laws and regulations, to prevent unauthorized access, disclosure, modification, leakage or unauthorized destruction of such data.</p>
  <p>Security technologies, rules and other procedures, as well as means to protect passwords respecting industry-standards are used to protect your Personal Data.</p>
  <p>In the event that Personal Data has been unduly accessed by an unauthorised person or if there is reason to believe that it has been, the Data Controller agrees to promptly report to the User by e-mail. You acknowledge, however, that the use of the Internet is by definition not secure and involves certain risks to Personal Data. It is your responsibility to make sure that the device you use is properly secured and protected against malicious software.</p>
  <p>You understand that if you don’t take the adequate security measures (including a secure web browser configuration and up-to-date anti-virus software) there is a risk that the data and passwords that you use to protect the access to your data could be disclosed to unauthorized third parties and/or that electronically transmitted data may be intercepted.</p>
  <p>You acknowledge that you are responsible for your own use of the App.</p>
  <h3><strong>User’s rights over his Personal Data</strong></h3>
  <p>Your Personal Data will only be processed for the purposes set out in our Privacy Policy, or any other further purposes notified to you before the processing begins.</p>
  <p>You have the right, at any time, to:</p>
  <p>– ask the Data Controller if he processes Personal Data about you<br/> – access your Personal Data collected by the Data Controller<br/> – receive a copy of your personal data processed by the Data Controller<br/> – ask the Data Controller to modify any incorrect Personal Data<br/> – have all your Personal Data deleted<br/> – withdraw your consent, at any time, concerning the processing of your Personal Data by the Data Controller<br/> – contact us to make a complaint, if you are concerned about a possible interference with your privacy or misuse of your Personal Data by us<br/> – file a complaint to the competent supervisory authority, if you consider that your rights have not been respected.</p>
  <p>You can also opt-out of marketing communications by</p>
  <p> – clicking on the “unsubscribe” link provided in each e-mail you might receive<br/> – changing preferences via your account or by contacting us.</p>
  <p>To make use of any of these rights, please contact NMES using the following e-mail address: <a href="mailto:support@dipulse.com">support@dipulse.com</a>.</p>
  <p>If you choose not to provide Personal Data when we ask you, this may limit the services that the App can offer you.</p>
  <h3><strong>Data portability</strong></h3>
  <p>The Data Controller guarantees you the portability of your Personal Data and agrees to transfer this data to any third-party service, in case of a written request from you, upon presentation of a copy of an official document proving your identity (identity card or passport).</p>
  <h3><strong>Third‑Party websites and Services</strong></h3>
  <p>The App may provide links to other third-party websites which are outside the control of NMES. NMES rejects all and any liability relating to the contents of such websites. NMES proposes said links by way of information only, the insertion of said links does not in any manner whatsoever imply that NMES approves of the contents thereof.</p>
  <p>The User can at any time reset their advertising ID from the Ads section of the Google Settings app on the android phone. From the same app the User can also opt-out of targeted advertising based on the advertising ID by setting the appropriate ad tracking preference.</p>
  <p>We strongly advise you to check the Privacy Policies of any website you visit before sharing any Personal Data.</p>
  <p>Visiting third-party websites is under the whole responsibility of the User, at his own risk and perils.</p>
  <h3><strong>Data retention time</strong></h3>
  <p>Unless the User explicitly asks us to erase his Personal Data, the Data will be stored for a period of 5 years from his last login in the App, after which it will be deleted.</p>
  <h3><strong>Data suppression and backup systems</strong></h3>
  <p>Personal Data may be retained and stored even after the closure of your Account or the App, at least temporarily, particularly in backup systems. You have the possibility, at any time, to ask the Data Controller to erase your Personal Data.</p>
  <p>However, in the event of a legal obligation of the Data Controller to retain such Personal Data, the latter may retain Personal Data after the closure of your Account or the App.</p>
  <h3><strong>Conformity with the laws and application of the laws</strong></h3>
  <p>In case of a legal obligation, the Data Controller collaborates with government and justice officials to enforce and comply with all applicable laws and regulations.</p>
  <p>In such case, Personal Data may be forwarded to government or justice officials if the Data Controller deems it necessary to comply with its legal obligations, to respond to lawsuits, to defend his rights, to protect public safety or any person, to prevent or preclude any activity that may be considered or is at risk of being unlawful or liable to prosecution.</p>
  <h3><strong>Applicable law and jurisdiction</strong></h3>
  <p>This Privacy Policy, as well as all matters arising out from or in connection with it (including claims or non-contractual disputes and their interpretation) will be subject to Swedish law, excluding conflict of law rules.</p>
  <p>All
    disputes claims or non-contractual disputes between you and the Data
    Controller regarding any matter relating to this Privacy Policy fall
    exclusively within the jurisdiction of Sweden, an appeal to the
    General Court being reserved.
  </p>`
};

export const TermsConditionsDetail = {
  termsConditionDescription: `<h3>1.<strong>Definitions</strong></h3>
  <p><strong>Account:</strong> a personal account registered within the App</p>
  <p><strong>App/diPulse: </strong> the smartphone application provided and operated by NMES GROUP AB and accessible from IOS and Android devices;</p>
  <p><strong>Community: </strong> other diPulse Users</p>
  <p><strong>Data Controller: </strong> a natural or legal person, which determines the purpose and means of the processing of Personal Data;</p>
  <p><strong>Data Processor: </strong> a natural or legal person, which processes Personal Data on behalf of the Data Controller;</p>
  <p><strong>Garments: </strong>any “diPulse” branded sports tech wear that can be connected with the App;</p>
  <p><strong>General Data Protection Regulation / GDPR: </strong>EU Regulation 2016/679 of 27 April 2016 (L 119);</p>
  <p><strong>Intellectual Property rights: </strong>these rights include copyrights, registered designs, design rights, database rights, trademarks, trade secrets, know how or any other kind of property rights or industrial rights whatsoever, whether registered or unregistered;</p>
  <p><strong>Menu:</strong> the menu in the App from which the User can manage their profile;</p>
  <p><strong>News:</strong> any news provided by diPulse relating to the App and/or diPulse products;</p>
  <p><strong>Notifications:</strong> any alerts which automatically appear on the User’s device relating to news or an App/diPulse feature;/p&gt;</p>
  <p><strong>Personal Data:</strong> any information relating to an identified or identifiable natural person according to article 4 § 1 GDPR;</p>
  <p><strong>Public Profile:</strong> the space dedicated to the User, relating to their activity;</p>
  <p><strong>Terms:</strong> these Terms of Use;</p>
  <p><strong>NMES Group AB/We/Us:</strong> NMES GROUP AB whose registered office is located at Roasjo By Kallang 1, 512 92 Svenljunga, Sweden;</p>
  <p><strong>User Environment:</strong> the App interface presented to the Users;</p>
  <p><strong>User(s):</strong> any person who uses the App.</p>
  <h3>2. <strong>General</strong></h3>
  <p>The Terms form a contract between the User and NMES GROUP AB setting out the rules for access and use of the App. You must be at least eighteen (18) years of age and be of legal age within your jurisdiction in order to agree to and which bind you to the Terms and to gain access to the App. If the Terms are not accepted then the User shall immediately abstain from accessing and/or using the App. By using the diPulse products and/or Garment and/or the diPulse App you acknowledge that you have read and understood the Terms and that you agree to be bound by them and to comply with all additional applicable laws and regulations.</p>
  <p>You confirm that you have the legal capacity to accept the Terms. If you do not accept the Terms, you shall immediately abstain from accessing and/or using the App. NMES GROUP AB reserves the right to amend the Terms at any time.</p>
  <p>In the event of an amendment to the Terms, the User shall be informed at the time the amendment becomes effective – by way of a message, a notification, or by e-mail. In the event of any amendment to the Terms, your consent to the changes will be requested when you consult the App. The continued use of the App after your explicit acceptance of the new terms of use means that you give your consent regarding the amendments.</p>
  <h3>3. <strong>App</strong></h3>
  <p><strong>3.1 Contact</strong></p>
  <p>The rights to the App are the property of NMES GROUP AB, whose registered office at Roasjo By Kallang 1, 512 92 Svenljunga, Sweden. NMES GROUP AB may be contacted at the following e-mail address: <a href="mailto:support@dipulse.com">support@dipulse.com</a></p>
  <p><strong>3.2 Accessibility</strong></p>
  <p>The App may be technically accessed by downloading it from the Apple App Store or the Google Play Store. NMES GROUP AB provides the App “as is”.</p>
  <h3>4. <strong>Purpose and general operation of the App</strong></h3>
  <p><strong>4.1 Purpose</strong></p>
  <p>The App grants the User access to the User Environment offering various functions relating to the products and/or Garments and the SmartStim Module(s). The App is made available to the User free of charge. However, any potential costs relating to data traffic, in particular when roaming, or related to the purchase of Garments and training modules, are to be solely borne by the User. The role of NMES GROUP AB is limited to making the App available to the Users. The User understands and accepts without reservation that the Personal Data and other information sent to the App via the User Environment are transferred to and processed by NMES GROUP AB, in accordance with the Privacy Policy. </p>
  <p><strong> 4.2 General operation</strong></p>
  <p>The User must first register their details within the App and validate the creation of their Account. Subsequently, the User may manage and amend their Public Profile. The User may add: name; profile photo; age; gender; country; telephone number; team; interests; profession; a description of their diPulse activity; connect with other third party social networks; location; and all future functions that NMES GROUP AB will develop. The User Environment allows, in particular, the User to: visualize and purchase training and performance programs; visualize and purchase products and/or Garments; obtain practical information regarding the products and/or Garments and training and performance programs; oversee heart rate and muscle usage during training and workouts; create training programs; create and receive challenges; manage their Public Profile; connect and communicate with the diPulse Community; view the Public Profile of other Users (if authorized by said Users); contact other Users (if authorized by said Users) or be contacted by them (if authorized by yourself); manage their contacts and team; overview their performance with a dashboard; join a virtual gym club; read the News provided by diPulse; read the Notifications and receive push information; browse diPulse links; manage their profile from the Menu. The User may, moreover, set the parameters for the following: </p>
  <p>– visibility or not of their Public Profile by other Users<br/>– authorization or refusal to be contacted by other Users<br/>– authorization or refusal of Notifications. The default setting of the Public Profile is open. This default setting is set up by NMES GROUP AB. The User may modify the default visibility settings for sharing his profile vis-à-vis the other Users at any given time;</p>
  <h3>5. <strong>Personal Account</strong></h3>
  <p>The electronic address provided by the User during the registration process shall be used by NMES GROUP AB in order to communicate with you. It is for the User to subsequently amend, if necessary, said electronic address from within the User Environment. Any electronic mail sent by NMES GROUP AB to this electronic address shall be deemed to have been validly received. A User may only have one Account and may not transfer it to a third-party under any circumstances whatsoever. If the User has been blocked by NMES GROUP AB or if their Account has been terminated, for any reason whatsoever, the User must not create another Account. The protection of the confidentiality of your password and of your Account is your responsibility alone and you are liable for all activities which may be related thereto. We deny all and any liability for any loss or damage, which may result from a failure on your part to keep both your Account and your password secure. We reserve the right to refuse access to your Account at any time, without prior warning and for any reason whatsoever. If you fail to meet the conditions regarding access to the App, you must immediately abstain from accessing the App. NMES GROUP AB is entitled to erase your Account at any time and to block your access to the App should it deem that your use of the App fails to comply with the Terms or the laws in force. </p>
  <h3><strong>6. User Undertakings</strong></h3>
  <p>By using or validating your registration on the App, you undertake: <br/><br/>(i) to provide NMES GROUP AB with correct, recent and full registration data;<br/>(ii) to not communicate your registration data to third parties;<br/>(iii) to ensure the confidentiality of your password and any information relating to the security of your Account;<br/>(iv) to keep the registration data on your Account up to date;<br/>(v) to abstain from publishing false, misleading or untrue information on or from the App; and<br/>(vi) to personally accept full liability for the use of your Account and the operations carried out thereon. <br/>NMES GROUP AB reserves the right to block or to cancel without prior warning those Accounts which are not confirmed, those which have been inactive for a sustained period of time, those which are deemed to be misleading or incorrect or those which are in breach of any of the afore mentioned User Undertakings.</p>
  <h3><strong>7. Services</strong></h3>
  <p>NMES GROUP AB provides the User with an App that allows the User to access the User Environment. The User understands and accepts without reservation that the Personal Data and other information which they submit to the App via the User Environment are transferred to and processed by NMES GROUP AB, in accordance with the rules set out in the Privacy Policy. NMES GROUP AB solely provides the User with a training, networking and purchasing platform, without itself being liable for the use thereof or of other Users. NMES GROUP AB provides the User with a selection of programs in different categories. These programs are pre-set with the most optimal and safe parameters which will not be accessible for the User to change. </p>
  <p>The attention of the User is specifically drawn to the fact that NMES GROUP AB does not intervene and undertakes no obligation or liability of any kind whatsoever, in particular in relation to: training programs created by other Users; challenges; the content of exchanges which may occur between the Users; the quality of the services provided via the App by NMES GROUP AB (including any potential defects of such services), whether online or offline.</p>
  <h3>8. <strong>Use of the App</strong></h3>
  <p>When using the App, you undertake not to carry out the following acts: usurp the identity of another or create a false identity; intimidate or harass another person or corporation; use or attempt to use the Account or Public Profile of another User; use the App and/or the contents thereof for a commercial purpose without the prior approval of NMES GROUP AB; reproduce the contents of the App without the right to do so, whether or not such reproduction is automatic; publish or broadcast spam, unsolicited or bulk e-mail, publicity, solicitations, chain mail or pyramid systems via the App; download, publish, transmit, broadcast or make available via the App any document containing information, viruses or other programming code, file or program intended to block, damage or limit the functions of the software, computing equipment, telecoms equipment or any other technology which may endanger the App, the interests or the property of the Users and/or NMES GROUP AB; export or re-export any App or tool developed by NMES GROUP AB of which it is the owner and/or in violation of the laws relating to the control of the export of data of the jurisdictions involved and in accordancewith the mentioned laws and regulations; copy, modify or distribute the rights and the contents of the App in any manner whatsoever; market any code, information or software originating from the App; download, publish, transmit, broadcast, store or make available to the public by any other means the Personal Data of the Users; gather or collect information regarding the Users, such as e-mail addresses, without their consent or use automatic scripts in order to collect information from the App or in order to interact with the latter; download, publish, transmit, broadcast, store or make available to the public by any other means on or via the App, any question, response, commentary, opinion analysis or recommendation which you are neither authorized nor entitled to provide; download, publish, transmit, broadcast, store or make publicly available via the App or by any other means content or information which NMES GROUP AB deem to be controversial, illegal,inappropriate or which prevents or limits the use of the App, or which may expose NMES GROUP AB and/or the Users to a loss or to any form of liability; download, publish, transmit, broadcast, store or make publicly available via the App or by any other means contents or information which may give rise to criminal liability, to encourage or provide instructions in order to carry out an act which could lead to criminal liability</p>
  <h3>9. <strong>Database hosting and location</strong></h3>
  <p>The App and the data are all locally stored on the User’s phone.</p>
  <h3><strong>10. Indemnity</strong></h3>
  <p>You undertake to fully indemnify and discharge NMES GROUP AB, including its agents, officers and employees, of all and any liability and any claims, expenses, proceedings, damage, and costs (including legal fees) resulting from a failure by you to comply with one or more of the obligations set out in these Terms.</p>
  <h3>11. <strong>Absence of guarantees</strong></h3>
  <p>Your access to and use of the App is at your own risk. The App and its contents are provided “as is” and according to availability.To the full extent permitted by the law, NMES GROUP AB specifically excludes any liability or guarantee of any kind whatsoever, whether express or implied, relating to the App. NMES GROUP AB cannot, in particular, guarantee an uninterrupted use of the App, that the latter shall be free of viruses, defaults or errors. The App may, in particular, be affected by temporary periods of unavailability. From time to time, NMES GROUP AB shall update the App, which could result in the App being unavailable for a certain period of time. NMES GROUP AB shall use its best efforts to ensure the reliable and continuous operation of the App but cannot guarantee that the App shall operate without interruption or without incident. NMES GROUP AB may, at its own initiative and without prior warning, modify, suspend or even shut down the App at any time, without any ensuing obligation to indemnify the User for any loss or damages, whether direct or indirect, resulting from the modification, suspension, or closure of the App. We cannot be held liable for damages or losses that you may suffer following any fault or break down of the App, following the suspension of your access, which shall include any damage directly or indirectly caused by a failed operation.You understand and accept that NMES GROUP AB shall in no manner be held liable for any illegal behavior by any Users occurring on or via the App, whether directly or indirectly. NMES GROUP AB gives no guarantee or makes no declaration according to which, in particular: <br/><br/>(i) the App and the contents thereof shall meet your needs or shall be correct; <br/>(ii) the App shall be available, without interruption, prompt, secure or error free; <br/>(iii) the results which may be obtained from the use of the App are correct or reliable; <br/>(iv) any error shall be corrected.<br/> Any document which is downloaded or obtained by use of or via the App is at your own discretion and risk, and you shall be solely liable for any damage caused to your IT system or for any data loss which may result from the downloading of such documents. Any information, whether in writing or oral, obtained by you from NMES GROUP AB or via the App or on the App shall not create a guarantee or any other obligation which has not been specifically set out in the Terms, and NMES GROUP AB specifically denies any liability whatsoever resulting from the trust placed in these elements by any User or by anyone whatsoever who could be informed of any part of the contents thereof. </p>
  <h3>12. <strong>Exclusion of liability in connection with health</strong></h3>
  <p>Any program and/or challenge which is downloaded or obtained by use of or via the App is at your own discretion and risk. DIPULSE HAS BEEN DEVELOPED TO SUPPORT AND FACILITATE SPORT AND FITNESS IN HEALTHY INDIVIDUALS AND IS NOT AT PRESENT A CLASSIFIED MEDICAL DEVICE. BEFORE USING THE APP, IN PARTICULAR ANY PROGRAM OR CHALLENGE ACCESSED VIA THE APP, WE STRONGLY ADVISE YOU TO CONTACT A DOCTOR TO CHECK YOUR MEDICAL CONDITION AND THE CONTENT OF ANY PROGRAM AND/OR CHALLENGE. YOU SHALL BE SOLELY LIABLE FOR ANY DAMAGE CAUSED TO YOUR HEALTH AND MUSCLES WHICH MAY RESULT FROM FOLLOWING THE PROGRAM OR CHALLENGE. The above proposed content is reserved for healthy Users. For your own safety and training objectives, the execution of diPulse CMT (Combined Muscle Training) should be adapted to your physical condition and training level. In any doubt we recommend you ask your professional coach, medical practitioner or consult our customer service for advice.</p>
  <h3>13. <strong>Privacy policy</strong></h3>
  <p>By validating your Account and by using the App, you accept that NMES GROUP AB may collect, process and use your Personal Data. The information so obtained by the App shall be solely used in compliance with the Privacy Policy, which is available on the App, the terms of which form an integral part of the Terms. </p>
  <h3>14. <strong>Links</strong></h3>
  <p>The App may provide links to other third-party websites which are outside the control of NMES GROUP AB. NMES GROUP AB rejects all and any liability relating to the contents of such websites. NMES GROUP AB proposes the links by way of information only, the insertion of any links does not in any manner whatsoever imply that NMES GROUP AB approves of the contents thereof. Visiting third-party websites is under your whole responsibility, at your own risk and perils.</p>
  <h3><strong>15.Brand names and trademarks</strong></h3>
  <p>Under no circumstances may you use the trademarks of NMES GROUP AB, which includes trademarks and domain names, in relation with any product or service in a manner that may result in confusion or give the impression that NMES GROUP AB approves the product or service in question. You may only use brand names if with the prior written authorization of NMES GROUP AB.</p>
  <h3><strong>16. Intellectual Property rights</strong></h3>
  <p>The Intellectual Property rights and any other kind of rights over the contents presented by the App (including inter alia, the software, graphics, images, videos, information as well as the selections and the layout thereof) remains the exclusive property of NMES GROUP AB regarding the content for which they are responsible. Logos, graphics, page headings, button icons, text and service names presented on the App form part of the NMES GROUP AB trademarks and are protected by the Intellectual Property rights belonging to NMES GROUP AB. This includes all rights over the software associated with the App. All Intellectual Property rights, which are not specifically granted and applying to the contents of the App, are the property of NMES GROUP AB including the contents which they have published on their respective portals. The domain name upon which the App is hosted is the exclusive property of NMES GROUP AB. Users are not authorized to use or adopt a similar name for their own use.</p>
  <h3><strong>17. Licences</strong></h3>
  <p>NMES GROUP AB grants the User a global license, which is free, limited, non-exclusive, non-transferable, which may not be the object of a sub-license, which may be revoked at any time, to use the App as is the case with the display of the contents of the App on their smartphone or tablet screens, subject to the condition that they comply with these Terms. Any other use is specifically prohibited unless with the prior written agreement of NMES GROUP AB. Users are authorized to use the App solely in accordance with any law which may apply to them. Users may only use the App legally, and any other illegal or inappropriate use is specifically prohibited. Any other use of the contents available on the App, including though not limited to, the distribution, reproduction, modification, broadcast, display, download, presentation or transmission of all or part of the App contents without the prior written authorization of NMES GROUP AB is strictly prohibited. The User grants NMES GROUP AB a license which is free, global, unlimited, non-exclusive, transferable, which may be the object of a sub-license, to use the contents of any kind, posted or otherwise, made available to NMES GROUP AB within the context of the use of the App. The User confirms that they own the copyright and image rights to the contents which they submit via the App.</p>
  <h3><strong>18. Termination</strong></h3>
  <p>NMES GROUP AB may block, close or suspend your Account, prohibit your use of or access to all or part of the App: <br/><br/>(i) if you are in breach of the Terms or any other rules governing the use of the App; <br/>(ii) if your behaviour may cause damage to NMES GROUP AB, the App, the Users, or third parties and give rise to the liability of NMES GROUP AB, the Users, or third parties, or; <br/>(iii) for any other grounds as defined by NMES GROUP AB and it alone.<br/> You may terminate your Account at any time by sending a notice of termination to NMES GROUP AB in accordance with the method set out in the App. NMES GROUP AB may at any time following the termination of your Account prohibit the access to, use of and participation in the App, as well as the contents thereof. Access, the ability to use and participate in the App by the User, including any content thereon, may be excluded by NMES GROUP AB at any time after the termination of his Account. At your specific request, upon the closure of your Account, NMES GROUP AB shall erase your Account. Equally, NMES GROUP AB may close the App at its sole discretion and without prior warning or compensation.</p>
  <h3><strong>19. Miscellaneous</strong></h3>
  <p>The Terms and the Privacy Policy form a whole and exclusive contract regarding the subject dealt with and replaces all and any other prior proposal and or agreement, whether in writing or oral, or by any other form of communication between yourself and NMES GROUP AB. If one of these provisions should be held to be null or inapplicable, the provision in question shall be amended in order to allow it to be applicable, the invalidity or inapplicability of said provision shall not affect the validity or applicability of the other provisions contained in the Terms. If one or other of the provisions of the Terms should be invalidated by a tribunal or competent authority, only the provision in question shall be limited, and the other provisions shall remain in force in their entirety. The failure of NMES GROUP AB to apply or exercise a right or a provision of the Terms does not constitute a waiver of said right or provision.</p>
  <h3><strong>20. Transfer</strong></h3>
  <p>The User may not transfer any of their rights and obligations resulting from the Terms without the prior written consent of NMES GROUP AB.</p>
  <h3><strong>21. Applicable law and forum</strong></h3>
  <p>The Terms are governed by Swedish law, excluding conflict of law rules. Any dispute resulting from the Terms, including disputes as to its validity as well as disputes relating to the use of the App as against NMES GROUP AB shall come under the jurisdiction of the Swedish courts of ordinary jurisdiction. </p>`
};

export const orderData = {
  "items": [{
    "name": "Dipulse Belt",
    "qtyOrdered": 5,
    "shippingAddress": "Varanasi",
    "date": new Date().toISOString().split('T')[0],
    "orderItemStatus": "Pending"
  }, {
    "name": "Dipulse Usb",
    "qtyOrdered": 15,
    "shippingAddress": "Mumbai",
    "date": new Date().toISOString().split('T')[0],
    "orderItemStatus": "Pending"
  }, {
    "name": "Dipulse Sensors",
    "qtyOrdered": 5,
    "shippingAddress": "amravati",
    "date": new Date("2020-08-24").toISOString().split('T')[0],
    "orderItemStatus": "Pending"
  }],
  "subTotal": "$450",
  "total": "$460"
};

export const languageDetails = [
  {
    lang: "English",
    langCode: "en",
    flag: Assets.EnglishFlag,
  },
  {
    lang: " Français",
    langCode: "fr",
    flag: Assets.FrenchFlag,
  },
  // {
  //   lang:'China',
  //   flag:Assets.ChinaFlag
  // },
  // {
  //   lang:'Sweden',
  //   flag:Assets.SwedenFlag
  // }
];
