import { Assets, RedirectUrl } from "./app/lib/constants/assets";

export const HomePageData = {
  data: [
    {
      sliderImageUrl: Assets.BannerImage9,
      silderMobileImageUrl: Assets.Bannerimagemobile9,
      // textImage: Assets.CarouselText1,
      heading1: 'GAGNANT DU PRIX ISPO',
      heading2: 'BRANDNEW',
      heading3: 'INNOVATION',
      videoLink: true,
    },
    {
      sliderImageUrl: Assets.BannerImage1,
      silderMobileImageUrl: Assets.Bannerimagemobile1,
      // textImage: Assets.CarouselText1,
      heading1: 'DES CORPS',
      heading2: 'DES OBJECTIFS',
      heading3: 'ET DES PROGRAMMES DIFFÉRENTS',
    },
    {
      sliderImageUrl: Assets.BannerImage2,
      silderMobileImageUrl: Assets.Bannerimagemobile3,
      // textImage: Assets.CarouselText1,
      heading1: 'OPTIMISEZ VOS PERFORMANCES',
      heading2: 'DIMINUEZ LA FATIGUE POST- ENTRAÎNEMENT',
      heading3: 'RÉDUISEZ VOTRE TEMPS DE RÉCUPERATION',
    },
    {
      sliderImageUrl: Assets.BannerImage7,
      silderMobileImageUrl: Assets.Bannerimagemobile7,
      // textImage: Assets.CarouselText1,
      heading1: 'DURABILITÉ',
      heading2: "AUTONOMIE DE BATTERIE JUSQU'A 8 HEURES",
      heading3: 'LE PLAISIR DU SANS FIL',
    },
    {
      sliderImageUrl: Assets.BannerImage8,
      silderMobileImageUrl: Assets.Bannerimagemobile8,
      // textImage: Assets.CarouselText1,
      heading1: 'ERGONOMIQUE',
      heading2: 'SIMPLE',
      heading3: 'CONTRÔLÉ VIA BLUETOOTH',
    },
    {
      sliderImageUrl: Assets.BannerImage10,
      silderMobileImageUrl: Assets.Bannerimagemobile10,
      // textImage: Assets.CarouselText1,
      heading1: 'DURABLE',
      heading2: 'LAVABLE',
      heading3: 'FLEXIBLE',
    },

  ],
  latesUpdate: [
    {
      imageUrl: Assets.mobileFiximagemale,
      mobileImageUrl: Assets.mobileFiximagemale,
      label: "Smart Shirt Kit",
      description: "Voir nos produits à l'action",
      // link: `${RedirectUrl}product/smart-shirt-kit-female/`,
      for: "Homme",
      productNumber: "",
      slug: "smartshirt-kit-male",
    },
    {
      imageUrl: Assets.mobileFiximagemale,
      mobileImageUrl: Assets.mobileFiximagemale,
      label: "Smart Shirt Kit",
      description: "Voir nos produits à l'action",
      // link: `${RedirectUrl}product/smart-shirt-kit-female/`,
      for: "Homme",
      productNumber: "",
      slug: "smartshirt-kit-male",
    },
    {
      imageUrl: Assets.mobileFiximagemale,
      mobileImageUrl: Assets.mobileFiximagemale,
      label: "Smart Shirt Kit",
      description: "Voir nos produits à l'action",
      // link: `${RedirectUrl}product/smart-shirt-kit-female/`,
      for: "Homme",
      productNumber: "",
      slug: "smartshirt-kit-male",
    }
  ],
  bottomSlider: [
    {
      label: "Collaboration innovante",
      link: 'https://www.ispo.com/en/trends/wearable-technology-swiss-technology-and-swedish-performance-unite-major-smart-textile',
      description: "diPulse collabore avec les professionnels les plus réputés du marché"
    },
    {
      label: "Lauréat de l'ISPO Brandnew Award 2019",
      link: 'https://www.ispo.com/en/markets/ispo-brandnew-2019-winners-pictures',
      description: "En images"
    },
    {
      label: "Nos prix et reconnaissances",
      link: 'https://www.modeintextile.fr/combinaison-connectee-de-dipulse-remporte-ispo-award/',
      description: "Références à nos produits"
    },
    {
      label: "ISPO 2019",
      link: 'https://www.youtube.com/watch?v=bV2FHm6d2Qs',
      description: "Regarder notre remise de prix!"
    }
  ]
};

export const FAQ = [
  {
    name: "Moniteur de fréquence cardiaque",
    data: [
      {
        question: "L'indicateur d'état de la fréquence cardiaque clignote en rouge, qu'est-ce qui ne va pas?",
        answer:
          "La batterie est faible. Veuillez recharger la batterie en suivant la procédure décrite dans le manuel d'utilisation fourni avec l'appareil."
      },
      {
        question: "L'indicateur d'état de la fréquence cardiaque clignote rapidement en rouge, qu'est-ce qui ne va pas ?",
        answer:
          "L'appareil a détecté un dysfonctionnement interne. Veuillez redémarrer l'appareil. Veuillez nous contacter si ce problème persiste."
      },
      {
        question: "Aucune fréquence cardiaque n'est détectée dans l'application, pourquoi ?",
        answer:
          "L'appareil n'est pas correctement connecté aux boutons-pressions magnétiques. Veuillez retirer et repositionner l'appareil sur les boutons-pressions magnétiques et vous assurer que les deux boutons-pressions sont bien connectés. Veuillez nous contacter si ce problème persiste."
      }
    ]
  }, {
    name: "Module de stimulation",
    data: [
      {
        question: "J'ai appuyé sur le bouton d'alimentation et l'appareil ne s'allume pas, pourquoi?",
        answer:
          "La batterie est trop faible. Veuillez recharger la batterie en suivant la procédure décrite dans le manuel d'utilisation fourni avec l'appareil."
      },
      {
        question:
          "L'appareil est allumé, mais je ne ressens pas de stimulation pendant la séance, qu'est-ce qui ne va pas ?",
        answer:
          "L'appareil n'est pas correctement connecté aux boutons-pressions magnétiques. Veuillez retirer et repositionner l'appareil sur les boutons-pressions magnétiques et vous assurer que les deux boutons-pressions sont bien connectés. Veuillez nous contacter si ce problème persiste."
      },
      {
        question: "Le bouton de mise en marche de l'appareil clignote en orange, que dois-je faire ?",
        answer:
          "L'appareil n'est pas correctement connecté aux boutons-pressions magnétiques. Veuillez retirer et repositionner l'appareil sur les boutons-pressions magnétiques et vous assurer que les deux boutons-pressions sont bien connectés. Veuillez nous contacter si ce problème persiste."
      },
      {
        question: "Le bouton de mise en marche clignote en rouge, qu'est-ce qui ne va pas ?",
        answer:
          "La batterie est faible. Veuillez recharger la batterie en suivant la procédure décrite dans le manuel d'utilisation fourni avec l'appareil."
      },
      {
        question: "Le bouton de mise en marche clignote rapidememt en rouge, qu'est-ce qui ne va pas ?",
        answer:
          "L'appareil a détecté un dysfonctionnement interne. Veuillez redémarrer l'appareil. Veuillez nous contacter si ce problème persiste."
      }
    ]
  }, {
    name: "Stimulation musculaire",
    data: [
      {
        question:
          "J'utilise les electrodes en gel, pourquoi la stimulation est-elle faible même si l'intensité est élevée ?",
        answer:
          "Les electrodes en gel, bien que réutilisables, doivent être remplacés après plusieurs utilisations. Elles peuvent être également mal positionnées. Veuillez éteindre l'appareil et repositionner les electrodes correctement."
      },
      {
        question: "La stimulation est trop inconfortable, que dois-je faire?",
        answer:
          "Veuillez vérifier que les électrodes sont bien humidifiées. Veuillez éteindre l'appareil et repositionner correctement les électrodes. Si la stimulation est toujours inconfortable, veuillez diminuer l'intensité de la stimulation. Pendant la séance vos muscles se contractent et travaillent. Veuillez laisser assez de temps pour que vos muscles puissent se reposer entre les séances."
      },
      {
        question: "Mes muscles sont endoloris après la séance, que dois-je faire?",
        answer:
          "Pendant la séance vos muscles contractent et travaillent. Veuillez laisser assez de temps pour que vos muscles puissent se reposer entre les séances."
      }
    ]
  }, {
    name: "L'application mobile diPulse",
    data: [
      {
        question:
          "J'ai téléchargé l'application DiPulse mais elle ne fonctionne pas correctement, que dois-je faire?",
        answer:
          "Veuillez suivre ces étapes afin de résoudre le problème:<ul><li>Veuillez vérifier que votre modèle de téléphone est pris en charge. Nous ne prenons en charge que les versions de l'iPhone qui sont officiellement prises en charge par Apple. En ce moment, il s'agit de l'iPhone 6 ou d'un téléphone plus récent, fonctionnant sous iOS 13 ou une version plus récente. Les téléphones exécutant Android Pie ou une version plus récente sont également pris en charge.</li><li>Veuillez suprimmer l'application de votre téléphone portable</li><li>Installez la version la plus récente de l'application depuis l'Apple App Store ou le Google Play Store</li><li>Veuillez fermer les applications fonctionant en arrière plan</li><li>Mettre à jour vos produits Stim & Heart Rate en cliquant sur l'icône Réglages, (roue crantée en haut à droite) puis Update firmware</li><li>Télécharger les programmes</li></ul>Veuillez nous contacter si ce problème persiste."
      }
    ]
  }
];

export const AboutUs = {
  aboutUSDescription: `<h3 class="about-question">Qui a inventé la téchnologie DiPulse smartskin?</h3>
  <p class="about-description1">Dans le but d'offrir plus qu'une simple amélioration des performances, le groupe NMES et Far Eastern New Century se sont associés pour créer le premier vêtement de sport entièrement intégré du monde: le diPulse Smartskin. Combinant une vaste expérience en stimulation musculaire, entraînement sportif professionnel, science et ingénierie textile, nous avons créé un vêtement intelligent non invasif, sans fil, conçu pour minimiser la fatigue post-entraînement et accroître les performances.</p>
   <p class="about-description1 ">Grâce à l'étroite combinaison de la téchnologie, des médias sociaux et des appareils intelligents, l'utilisateur s'attend à plus qu'une simple amélioration des ses performances. C'est là que diPulse fait la différence en proposant une solution ne se limitant pas aux statistiques mais offrant également une aide active pour l'entraînement sportif et la condition physique.</p>
   <h3 class="about-question mt-4">Comment la technologie diPulse Smartskin améliore-t-elle les performances sportives?</h3>
   <p class="about-description1">
   Le Smartskin de diPulse vous permet de commencer votre entraînement de manière proactive afin de développer l'endurance et la force musculaire, de raccourcir et d'améliorer la phase de récupération ainsi que d'éviter les plateaux d'entraînement en activant jusqu'à deux groupes musculaires ciblés dans le cadre de l'entraînement musculaire combiné (CMT). L'application vous aide pour toutes les étapes de l'entraînement, y compris l'échauffement.</p>
    <h3 class ="about-question mt-4">Quels sont les avantages de notre technologie?</h3>
    <p class ="about-description1">
    Nos Smartskins:
    <ul class="ml-3 text-left list-style-green about-description1">
    <li>Peuvent vous aider à s'entraîner sans câbles.</li>
    <li>Les Smartskins n'utilisent pas d'electrodes en gel qui doivent être remplacés après quelques utilisations et vous ne devez pas penser à bien positionner les electrodes car elles sont positionnése correctement dans nos accéssoires.</li>
    <li>Peuvent être laver jusqua 100 fois et possèdent des électrodes intégrées qui assurent une stimulation constante des muscles profonds.</li>
    <li>Complètement contrôlable via l'application sur votre téléphone portable.</li>
    </ul>
    </p> `
};

export const AddressData = {
  headLabel: "Address",
  address: "NMES Group AB Roasjo by Kallang 1512 92, Svenljunga, Sweden",
  callLabel: "Call us",
  callValue: "(03) 5318 4272"
};

export const products = [
  {
    productImageURL: Assets.ProductActiveImage3,
    productCarouselImageURL: Assets.ProductCarouselImage3,
    Name: "SMARTSKIN",
    productSubHeading: "SMARTKITS POUR CHAQUES PARTIES DU CORPS",
    productLink: `${RedirectUrl}product-category/smart_skin/`,
    status: false
  },
  {
    productImageURL: Assets.SmartKit,
    productCarouselImageURL: Assets.SmartKit,
    Name: "SMARTKITS",
    productSubHeading: "SMARTKITS POUR CHAQUES PARTIES DU CORPS",
    productLink: `${RedirectUrl}product-category/smart_kit/`,
    status: true
  },
  {
    productImageURL: Assets.ProductActiveImage2,
    productCarouselImageURL: Assets.ProductCarouselImage2,
    Name: "ACCESSORIES",
    productSubHeading: "SMARTKITS POUR CHAQUES PARTIES DU CORPS",
    productLink: `${RedirectUrl}product-category/accessories/`,
    status: false
  }
];


export const NewsData = [
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content: "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date()
  },
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content: "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date('2020/4/20')
  },
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content: "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date('2020/4/3')
  },
  {
    imageUrl: Assets.NewsImage1,
    heading: "I Pressed The Power Button And Device",
    content: "The battery is too low, please recharge the battery following the procedure described in the user manual provided with the..",
    date: new Date('2020/2/28')
  },
];

export const MobileAppDescription = {
  description: "Nos produits portables sont intelligents. Connecter les Smartskins avec notre application mobile diPulse ouvre de nouvelles possibilités. L'application offre un environment varié et flexible ou vous pouvez sélectionner, enregistrer et pratiquer des entraînements spécifiques pour atteindres vos objectifs souhaités.",
  playsStoreLink: 'https://play.google.com/store/apps/details?id=com.nmesgroup.dipulse.tetra&hl=en_IN',
  appStoreLink: 'https://apps.apple.com/in/app/dipulse/id1472064553',
}
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
  defaultBg: Assets.NewsDefaultBgImage

};
export const PrivacyPolicyDetail = {
  privacyPolicyDescription: `<p>Pour pouvoir savoir quelles données personnelles seront collectées et utilisées, consultez la politique de confidentialité actuelle, et acceptez-là telle quelle.</p>
  <p>Il y’a une référence explicite aux termes définis dans les Conditions d’Utilisation, qui sont une partie intégrale de la Politique de Confidentialité.</p>
  <h3><strong>But de la Politique de Confidentialité</strong></h3>
  <p>La Politique de Confidentialité précise les conditions selon lesquelles NMES GROUP AB peut récolter, traiter, utiliser, stocker, sauver et effacer les données personnelles concernant un Utilisateur.</p>
  <p>La Politique de Confidentialité n’inclut pas le traitement des données liées à la vente de Produits (par exemple les détails de paiement, adresse de livraison, données liées à la facturation).</p>
  <h3><strong>Politique de Confidentialité et Adhésion</strong></h3>
  <p>En utilisant l’application, vous acceptez que la collecte, le traitement, le stockage, la sauvegarde et l’effacement vos donnez personnelles, comme prédéfinit par la Politique de Confidentialité.</p>
  <p> Vous reconnaissez avoir lu et compris la Politique de Confidentialité et consentez d’y être lié et de vous plier à toutes les lois et régulations applicables.</p>
  <h3><strong>Modification de la Politique de Confidentialité</strong></h3>
  <p>La présente Politique de Confidentialité peut être modifiée en tout temps. Vous serez informés de ces changements par e-mail et/ou lors de votre connexion à l’Application et vous devrez alors les accepter explicitement. En cas de refus des modifications, vous ne serez plus capables d’utiliser l’App.</p>
  <h3><strong>Protection des données</strong></h3>
  <p>Le traitement de vos données, récoltées et traitées par NMES est sujet au Réglement général européen sur la protection des Données (GDPR).</p>
  <p>NMES respecte la stricte confidentialité de vos données.</p>
  <p> Sont également préservés les cas où la transmission de données à des tiers est exigée par la loi ou si NMES considère de bonne foi qu’une divulgation de ces informations est nécessaire afin de protéger nos droits, votre sécurité ou celle d’autrui ou pour analyser des cas de fraude.</p>
  <h3><strong>Données personnelles</strong></h3>
  <p>Nous entendons par “Données personnelles” toute information relative à une personne physique identifiée ou identifiable selon l’art. 4 (1) GDPR (L 119 ; GDPR).</p>
  <p><br/>
  En utilisant l’application, vous consentez à la collecte et au traitement de vos Données Personnelles par NMES:<br/>
    – nom<br/>
    – photo de profil<br/>
    – âge<br/>
    – sexe<br/>
    – pays<br/>
    – numéro de téléphone<br/>
    – équipe<br/>
    – intérêts<br/>
    – objectif<br/>
    – profession<br/>
    – une description de votre activité sur l’application <br/>
    – d’autres profils de réseaux sociaux (e.g. Instagram, Spotify)<br/>
    – location<br/>
    – fréquence cardiaque pendant l’utilisation du vêtement.<br/>
    – utilisation des muscles
  </p>
  <p>Lorsque vous accédez et/ou utilisez l’application, le serveur enregistre automatiquement les détails concernant votre accès et vos actions. Ceci comprend:</p>
  <p>–
  votre type d’appareil<br/>
    – vos adresse IP et IMEI<br/>
    – la date et l’heure des connections<br/>
    – le lieu des connections<br/>
    – les liens que vous suivez<br/>
    – les pages et le contenu que vous consultez et la durée de la consultation.
  </p>
  <h3><strong>Contrôle des Données</strong></h3>
  <p>Le Contrôle des Données est réalisé par NMES. Vous pouvez contacter NMES en utilisant l’adresse e-mail suivante : <br/>
    support@dipulse.com.
  </p>
  <h3><strong>Sous-traitants et partenaires autorisés</strong></h3>
  <p>Vos données personnelles peuvent cependant être communiquées à des sous-traitants et/ou partenaires de NMES dans la mesure où ces entités offrent des services aidant à effectuer les activités de l’Application.</p>
  <p>Il est assuré que les informations transferées ne peuvent être traitées ou utilisées que dans le contexte de la relation avec NMES. Vous acceptez explicitement que NMES puisse autoriser le traitement et stockage de certaines données personnelles aux sous-traitants et partenaires de NMES dans la mesure où ces entités offrent des services aidant à effectuer les activités de l’App.</p>
  <p>Il est assuré que les informations transferées ne peuvent être traitées ou utilisées uniquement dans le contexte de la relation avec NMES. Les sous-traitants et/ou partenaires de NMES sont liés strictement par des obligations de confidentialité et se plient à la Politique de Confidentialité et toute les lois et régulations en vigueur.</p>
  <h3><strong>Utilisation de vos Données Personnelles</strong></h3>
  <p>Vous consentez explicitement que NMES, en charge du Contrôle de vos Données, utilise vos données personnelles pour:</p>
  <p>– appliquer les Conditions<br/> – détecter et prévenir tout abus et assurer la sécurité de l’Application<br/> – pour des raisons marketing (avec votre consentement préalable et explicite)<br/> – procéder, sur demande, à la suppression ou rectification de vos données personnelles<br/> – encourager les connections au sein de la communauté diPulse<br/> – organiser les challenges et les équipes</p>
  <p>Vous donnez votre accord pour que NMES ou un de ses sous-traitants et/ou partenaires récolte, traite, stocke, sauve, efface vos données personnelles, comme défini par la présente Politique de Confidentialité, en accord avec le Réglement Européen sur la Protection des Données (GDPR).</p>
  <p>NMES,
  ses sous traitants et/ou partenaires sont sujets à un strict devoir de confidentalite. Aucune Donnée Personnelle ne peut être communiquée à un tiers parti, sauf pour les sous-traitants et partenaires, pour quelque raison qu’il soit, sauf avec l’accord préalable de l’Utilisateur.</p>
  <h3><strong>Sauvegarde des Données et Transfer des Données</strong></h3>
  <p>Nous traitons Vos Données dans des pays différents pour les raisons mentionnées dans notre Politique de Confidentialité. Quand nous transférons vos données personnelles vers d’autres pays, nous prenons les mesures adéquates pour s’assurer que toutes les lois et régulations en vigueur soient respectées.</p>
  <p>Vos données personnelles seront stockées par Amazon, qui guarantit un niveau de protection adéquat, en accord avec toutes les lois et régulations en vigueur.</p>
  <h3><strong>Sécurité et Conservation des Données. </strong></h3>
  <p>NMES GROUP AB prend toutes les mesures nécessaires pour assurer que vos Données Personnelles soient traitées et sauvegardées d’une manière sécurisée, et prend toutes les mesures raisonnables, en accord avec les lois et régulations en vigueur, afin de prévenir tout accès, divulgation, modification, ou fuite non autorisée, ou toute destruction non autorisée de ces données.</p>
  <p>Toute technologie, règle ou procédure de sécurité, ainsi que tout moyen respectant les standards industriels mis en place pour protéger les mots de passe sont utilisés pour protéger vos données personnelles.</p>
  <p>Dans le cas où une personne non autorisée aurait eu accès à vos données personnelles, ou s’il existe toute raison de croire que cette personne y ait eu accès, NMES s’engage à le reporter à l’Utilisateur. Vous reconnaissez cependant que l’utilisation d’internet est par définition non sécurisée et comporte certains risques concernant les données personnelles. Il en tient de votre responsabilité de vous assurer que votre appareil est sécurisé et protégé contre les logiciels malveillants.  </p>
  <p>Vous comprenez que si vous ne prenez pas les mesures de sécurités adéquates (comprenant un moteur de recherche sûr et un software anti-virus mis à jour) il y a un risque que les données et mots de passe que vous utilisez pour protéger votre accès puissent être divulgués par un tiers; et/ou que toute donnée transmise électroniquement puisse être interceptée.</p>
  <p>Vous reconnaissez que vous êtes responsables de votre propre usage de l’application.</p>
  <h3><strong>Les droits de l’Utilisateur sur les Données personnelles</strong></h3>
  <p>Vos données personnelles seront traitées dans le seul but mentionné dans notre “Politique de Confidentialité”, ou dans tout autre but qui vous a été notifié avant que le traitement commence.</p>
  <p>Vous avez le droit à tout moment de :</p>
  <p>– demander au Contrôleur de données s’il traite des données personnelles vous concernant
  <br/> – accéder à vos données personnelles collectées par le Contrôleur de données<br/> – recevoir une copie des vos données personnelles traitées par le Contrôleur de données<br/> –demander au Contrôleur de données de modifier toute donnée personnelle incorrecte<br/> – faire supprimer toutes vos données personnelles<br/> – révoquer votre consentement à tout moment concernant le traitement de vos données personnelles par le Contrôleur de données<br/> – nous contacter pour déposer une complainte, si vous êtes inquiets qu’il y aie une possible interférence avec votre confidentalité ou abus de vos données personnelles par nous<br/> – déposer une plainte à l’autorité de contrôle compétante si vous considérez que vos droits n’ont pas été respectés.</p>
  <p>Vous pouvez également désactiver les communications marketing en :</p>
  <p> – cliquant sur le lien “se désinscrire” fourni dans chaque email pouvant être reçu<br/> – modifiant les paramètres via votre compte ou en nous contactant.</p>
  <p>Pour disposer de ces droits, veuillez contacter NMES à l’adresse email suivante : <a href="mailto:support@dipulse.com">support@dipulse.com</a>.</p>
  <p>Si vous choisissez de ne pas fournir vos données personnelles quand nous le vous demandons, cela peut limiter les services offerts par l’App.</p>
  <h3><strong>Transférabilité de vos données</strong></h3>
  <p>Le Contrôleur de données vous garantit la transférabilité de vos données personnelles et s’engage à transférer ces données à tout autre service tiers, en cas de requête écrite de votre part sous la présentation d’une copie d’un document officiel prouvant votre identité (passeport ou carte d’identité).</p>
  <h3><strong>Site internet tiers et Services</strong></h3>
  <p>Cette Application peut fournir des liens menant à des sites internet tiers qui sont hors du contrôle de NMES GROUP AB. NMES GROUP AB rejette toute responsabilité liée au contenu des sites internet tiers. NMES GROUP AB propose ces liens comme un moyen d’information uniquement, l’insertion de ces liens n’implique aucunement que NMES approuve le contenu présent sur ces sites tiers.</p>
  <p>L’Utilisateur peut à tout moment réinitialiser son identifiant publicitaire depuis la sections Publicité de l’Application Réglages Google sur android. Depuis la même application, l’Utilisateur peut aussi se retirer de la publicité ciblée basée sur l’identifiant publicitaire en réglant les préférances de suivi publicitaire appropriées.</p>
  <p>Nous vous recommendons fortement de vérifier les Politiques de Confidentialité de tout autre site internet que vous visitez avant de partager quelque données personnelle.</p>
  <p>Visiter des sites internets tiers résulte de la tout responsabilité de l’Utilisateur, à ses propres risques et périls.</p>
  <h3><strong>Durée de Conservation des données</strong></h3>
  <p>A moins que l’Utilisateur nous demande de manière explicite d’effacer ses données personnelles, les données seront sauvegardées durant 5 ans à partir de sa dernière connexion à l’App, après laquelle elles seront supprimées.</p>
  <h3><strong>Suppression des Données et systèmes de sauvegarde</strong></h3>
  <p>Les données personnelles peuvent être retenues et stockées même après la résiliation de votre compte ou de l’App, du moins temporairement, et particulièrement dans des systèmes de sauvegarde. Vous avez la possibilité, à tout moment, de demander au Contrôleur des Données d’effacer vos données personnelles.</p>
  <p>Cependant, dans le cas d’une quelconque obligation légale du Contrôleur de données de retenir des données personnelles, ce dernier peut retenir des données personnelles même apprès la résiliation de votre compte ou de l’App. </p>
  <h3><strong>Comformité aux lois et applications des lois</strong></h3>
  <p>Dans le cas d’une obligation légale, le Contrôleur des Données collabore avec le gouvernement et les personnels de justice pour appliquer et se conformer à toutes lois et régulations applicables.</p>
  <p>Dans ces cas, des Données Personnelles peuvent être transmises au gouvernement ou aux personnels de justice si le Contrôleur des Données juge que c’est nécessaire pour pouvoir confirmer avec ses obligations légales, pour répondre aux poursuites, pour défendre leur droits, pour protéger la sécurité public ou une personne, pour éviter ou pour empêcher toute activité considérée illégale ou qui peut être l’objet de poursuite pénale.</p>
  <h3><strong>Loi applicable et juridiction</strong></h3>
  <p>Cette Politique de Confidentalité, ainsi que tout problème survenant de toute connexion à celle-ci (comprenant les revendications ou contestation non-contractuelle et leur interprétation) sera sujet à la loi Suédoise, excluant les conflits des lois.</p>
  <p>Toute contestation ou revendication non-contractuelle entre vous et le Contrôleur des données concernant quelque problème lié à la Politique de Confidentialité tombe exclusivement sous la juridiction de Suède, un appel à la Cour Générale étant reservé.</p>`
};
export const TermsConditionsDetail = {
  termsConditionDescription: `<h3>1.<strong>Définitions</strong></h3>
  <p><strong>Compte:</strong>  une compte personnel enregistré dans l’Application</p>
  <p><strong>App/diPulse: </strong>  L’Application de téléphone mobile fournie et exploitée par NMES GROUP AB et accessible par des appareils avec IOS Android</p>
  <p><strong>Communauté: </strong> autre utilisateurs de diPulse</p>
  <p><strong>Contrôleur des données: </strong> une personne physique ou morale qui détermine l’objectif et le moyen du traitement des données personnelles</p>
  <p><strong>Traitement des données: </strong> une personne physique ou morale qui traite les données personnelles au nom du contrôleur des données.</p>
  <p><strong>Vêtements: </strong>tout vêtement technique et sportif qui portent la marque ‘diPulse’ qui peuvent être connecté à l’Application.</p>
  <p><strong>Règlement Général sur la Protection des Données / RGPD: </strong>EU Regulation 2016/679 of 27 April 2016 (L 119);</p>
  <p><strong>Les droits de propriété intellectuelle: </strong>ces droits comprennent les droits d’auteur, les modèles enregistrés, le droit des modèles, le droit des bases de données, les marques de commerce, les secret commerciaux, le savoir-faire ou tout autre sorte de droits de propriété ou droits industriels, enregistré ou non enregistré.</p>
  <p><strong>Menu:</strong> le menu dans l’Application qui permet au utilisateurs de gérer leur profil;</p>
  <p><strong>Actualités:</strong> toutes nouvelles et informations fournies par diPulse relatives à l’Application et/ou les produits diPulse</p>
  <p><strong>Notifications:</strong> tout alerte qui apparaît automatiquement sur l’appareil de l’utilsateur relatif aux actualités ou Fonctionnalité diPulse/Application</p>
  <p><strong>Données personnelles:</strong> toute information concernant une personne physique identifiée ou identifiable selon l’article 4 § 1 GDPR;</p>
  <p><strong>Profil public:</strong> l’espace dédié à l’utilisateur, lié à leur activité.</p>
  <p><strong>Termes:</strong> ces termes d’usage;</p>
  <p><strong>NMES GROUP AB/NOUS/ON:</strong> NMES GROUP AB dont le siège social est situé à Roasjo By Kallang 1, 512 92, Svenljunga, Suède;</p>
  <p><strong>L’environnement de l’utilisateur:</strong> l’interface de l’Application présentée aux utilisateurs</p>
  <p><strong>Utilisateur:</strong> toute personne qui utilise l’Application.</p>
  <h3>2. <strong>Général</strong></h3>
  <p>Le termes forment un contrat entre l’utilisateur et NMES GROUP AB établissant les réglages pour l’accès et l’utilisation de l’Application. </p>
  <p>Vous devez être âgé d’au moins dix-huit (18) ans et au moins l’âge légal de la juridiction dans laquelle vous résidez pour pouvoir convenir et vous lier au Termes et pouvoir accéder à l’Application. Si les termes ne sont pas acceptés, l’utilisateur est abstenu immédiatement d’utiliser et/ou accéder à l’Application. En utilisant les produits et/ou les vêtements et/ou l’Application diPulse vous reconnaissez avoir lu et compris les termes et que vous êtes d’accord d’être lié par ces termes et que vous conformez à toutes les règlementations et à toutes les lois applicables.</p>
  <p>Vous confirmez que vous avez la capacité juridique d’accepter les Termes. Si vous n’acceptez pas les Termes, vous serez abstenu d’accéder et/ou d’utiliser l’Application. NMES GROUP AB se réserve le droit de modifier les conditions générales en tout temps. En cas d’une modification des termes, l’utilisateur sera informé dès que que la modification devient effective – sous forme de message, notification ou par e-mail. En cas d’une modification des Termes, votre consentement aux modifications sera demandé quand vous consulterez l’Application. L’utilisation après votre approbation explicite des nouvelles conditions d’utilisation signifie que vous donnez votre consentement envers les nouvelles modifications.</p>
  <h3>3. <strong>L’Application</strong></h3>
  <p><strong>3.1 Contact</strong></p>
  <p>Les droits légaux de l’Application mobile sont la propriété de NMES GROUP AB, dont le siège sociale est situé à Roasjo By Kallang, 1, 51292 Svenljunga, Suède. NMES GROUP AB peut être contacté à l’adresse e-mail suivante: <a href="mailto:support@dipulse.com">support@dipulse.com</a></p>
  <p><strong>3.2 Accessibilité</strong></p>
  <p>L’Application peut être téléchargée depuis l’ Apple App store ou le Google Play Store. NMES GROUP AB fourni l’Application ‘telle quelle’.</p>
  <h3>4. <strong>Objectif et fonctionnement général de l’Application</strong></h3>
  <p><strong>4.1 Objectif</strong></p>
  <p>L’application permet un accès à l’Environnement de l’utilisateur qui offre des fonctions relatives aux produits, Vêtements et SmartStim module(s). L’Application est mise à disposition de l’utilisateur gratuitement. Cependant, tous les frais liés au transfert de donnée en particulier en itinérance ou en relation avec l’achats de Vêtements et modules sont à la charge de l’Utilisateur. Le rôle de NMES GROUP AB se limite à rendre l’Application disponible aux Utilisateurs. L’Utilisateur comprend et accepte sans réserve que les données personnelles et toute autre information envoyées à l’Application via l’Environnement de l’Utilisateur peuvent être transférées et traitées par NMES GROUP AB, en accord avec la politique de confidentialité.</p>
  <p><strong> 4.2 Fonctionnement général de l’application</strong></p>
  <p>L’utilisateur doit en premier enregistrer ses informations dans l’Application et valider la création de son compte. Ensuite, l’Utilisateur peut gérer et modifier son Profil Public. L’Utilisateur peut ajouter les informations suivantes : nom; photo de profil; âge; sexe; pays; numéro de téléphone; équipe; intérêts; profession; une description de son activité diPulse; se connecter avec d’autre réseaux sociaux tiers; emplacement; et toutes fonctions que NMES GROUP AB développera dans l’avenir. L’environnement de l’utilisateur permet à l’utilisateur, de: visualiser et acheter des programmes d’entraînement; visualiser et acheter des produits et/ou Vêtements; d’obtenir des informations pratiques concernant les produits et/ou Vêtements; surveiller la fréquence cardiaque et l’activité des muscles pendant les entraînements; créer des programmes d’entraînement; créer et recevoir des challenges; gérer son Profil Public; se connecter et communiquer avec la Communauté diPulse; voir le Profil Public d’autres Utilisateurs (si les autres Utilisateurs le permettent); contacter d’autres utilisateurs (si les autres Utilisateurs le permettent); ou d’être contacter par d’autres Utilisateurs (si l’Utilisateur le permet); gérer ses contacts et ses équipes; réviser ses performances avec un tableau de bord; rejoindre un club de gym virtuelles; lire les Actualités fournies par diPulse; lire les Notifications et recevoir des informations; explorer des liens diPulse; gérer son profil depuis le Menu. L’utilisateur peut, de plus, fixer les paramètres suivants: </p>
  <p>–visibilité ou non de son Profil public aux autres Utilisateurs:<br/>– autorisation ou refus d’être contacter par d’autres Utilisateurs;<br/>– autorisation ou refus des Notifications. Le réglage du Profil Public par défaut est visible. Ce réglage par défaut est mis en place par NMES GROUP AB.L’utilisateur peut modifier les paramètres de visibilité de son profil à tout moment.</p>
  <h3>5. <strong>Compte personnel</strong></h3>
  <p>L’adresse électronique fournie par l’Utilisateur pendant le processus d’enregistrement sera utilisée par NMES GROUP AB pour communiquer avec lui. Il est de la responsabilité de l’Utilisateur de corriger, si nécessaire, l’adresse électronique depuis l’Environnement de l’Utilisateur. Tout courrier électronique envoyé par NMES GROUP AB à cette adresse électronique est présumé être correctement reçu. L’Utilisateur ne peut avoir qu’un seul compte et ne peut en aucun cas le transférer à une tierce personne. Si l’Utilisateur est bloqué par NMES GROUP AB ou si son Compte est fermé, pour n’importe quel motif, l’Utilisateur ne peut pas créer un autre Compte. La protection de la confidentialité et du mot de passe du Compte de l’Utilisateur pour toute activité est de la seule responsabilité de l’Utilisateur. NMES GROUP AB décline toute responsabilité en cas de perte ou dommage pouvant résulter d’une défaillance de l’Utilisateur à garder son Compte et son mot de passe en sécurité. NMES GROUP AB se réserve le droit de refuser à l’Utilisateur un accès à son compte en tout temps, sans avertissement préalable et sans aucune raison. Si l’Utilisateur ne respecte pas ces conditions concernant l’accès à l’Application, il sera immédiatement interdit d’accès à l’application. NMES GROUP AB est en droit d’effacer votre Compte et de bloquer votre accès à l’Application s’il est considéré que votre utilisation de l’Application ne se conforme pas avec les Conditions Générales ou la législation en vigueur.</p>
  <h3><strong>6. Les Obligations de L’Utilisateur</strong></h3>
  <p>En validant votre enregistrement dans l’Application vous vous engagez à: <br/><br/>(i) fournir à NMES GROUP AB des données d’enregistrement correctes, récentes et complètes;<br/>(ii) ne pas communiquer vos données d’enregistrement à des tiers;<br/>(iii) assurer la confidentialité de votre mot de passe et de toute information liée à la sécurité de votre Compte;<br/>(iv) assurer la mise en jour des données enregistrées dans votre Compte;<br/>(v) vous abstenir de publier toute information fausse, trompeuse ou incorrecte sur ou depuis l’Application; et<br/>(vi) accepter toute responsabilité concernant l’utilisation de votre Compte et les opérations qui y sont effectués. <br/>NMES GROUP AB se réserve le droit de bloquer ou d’annuler sans préavis les Comptes qui ne sont pas confirmés, ceux qui sont inactifs pendant un laps de temps prolongé, ceux qui sont jugés être trompeurs ou incorrects ou ceux qui sont en violation d’une ou plusieurs obligations de l’Utilisateur susmentionné.</p>
  <h3><strong>7. Services</strong></h3>
  <p>NMES GROUP AB fournit à l’Utilisateur une Application qui lui permet d’accéder à l’Environnement de l’Utilisateur. L’Utilisateur comprend et accepte sans réserve que les Données Personnelles et autres informations qu’il transfert à l’Application via l’Environnement de l’Utilisateur sont transférées et traitées par NMES GROUP AB, en accord avec les articles décrits dans le paragraphe Politiques de Confidentialité.</p>
  <p> NMES GROUP AB fournit uniquement à l’Utilisateur une plateforme d’entraînement, d’achats et de mise en réseau, sans être responsable de son utilisation faite par l’Utilisateur. NMES GROUP AB fournit à l’Utilisateur une sélection de programmes dans des catégories différentes. Ces programmes sont définis avec les paramètres les plus appropriés et sécurisés et ne sont pas accessibles ou modifiables par l’Utilisateur.</p>
  <p>L’Attention de l’Utilisateur est portée sur le fait que NMES GROUP AB n’intervient pas et n’assume aucune obligation ou responsabilité quelle qu’en soit la nature, en particulier en relation avec: des programmes d’entrainement crées par des autres Utilisateurs; les challenges; le contenu des échanges qui peuvent se produire entre utilisateurs; la qualité des services fournis via l’Application par NMES GROUP AB (y compris tout défaut potentiel de ces services), que ce soit hors ligne ou en ligne.</p>
  <h3>8. <strong>L’Utilisation de l’Application</strong></h3>
  <p>Quand vous utilisez l’Application, vous vous engagez ä de ne pas commettre les actes suivante: usurper l’identité d’autres personnes ou utiliser une fausse identité; intimider ou harceler d’autres personnes ou entreprises; utiliser ou tenter d’utiliser le Compte ou le Profil Public d’un autre Utilisateur; utiliser l’Application et/ou ses contenus dans un but commercial sans l’accord écrit préalable de NMES GROUP AB; reproduire les contenus de l’Application sans le droit de le faire, que cette reproduction soit automatique ou pas; publier ou transmettre du spam, e-mail non-sollicités ou en masse, publicités, sollicitations, systèmes de pyramide via l’Application; télécharger, publier, transmettre, partager ou rendre disponible via l’Application tout document contenant de l’information, des virus ou autre codes de programmation, programme ou fichier désigné à bloquer, endommager, ou limiter les fonctions du logiciel, de l’équipement informatique, l’équipement des télécommunications ou toute autre technologie qui peut compromettre l’Application, les intérêts ou la propriété des Utilisateurs et/ou NMES GROUP AB; exporter ou réexporter toute Applications ou outils développés par NMES GROUP AB qui l’appartient ou/et qui est en violation des lois liés au control de l’exportation des données des juridictions impliquées et en accord avec les lois et régulations mentionnées; copier, modifier ou distribuer les droits et les contenus de l’Application, de quelque manière que ce soit; publier et vendre tout code, information, ou logiciel provenant de l’Application; enregistrer, télécharger, publier, transmettre, mémoriser partager ou rendre disponible au public par tout autre moyen les Données Personnelles des Utilisateurs; recueillir ou rassembler des informations concernant des autres Utilisateurs, par exemple les adresses e-mail, sans leur consentement ou utiliser des scriptes automatiques pour recueillir de l’information de l’Application ou pour interagir avec cette dernière, télécharger, publier, transmettre, mémoriser, partager ou rendre disponible au public par toute autre moyen sur ou via l’Application, toutes questions, réponses, commentaires, opinion, analyse ou recommandation que vous n’êtes pas autorisé à fournir, télécharger, publier, transmettre, mémoriser, partager ou rendre disponible via l’Application, sous quelque forme que ce soit, contenus ou informations que NMES GROUP AB pourrait considérer comme controversé, illégal, inapproprié ou qui limite et/ou empêche l’utilisation de l’Application, ou qui expose NMES GROUP AB et/ou les Utilisateurs à toutes formes de pertes en responsabilités; télécharger, publier, transmettre, mémoriser, partager ou rendre disponible au public via l’Application ou par toutes autres moyens du contenu ou de l’information qui peut entraîner une responsabilité pénale, d’encourager ou fournir des instructions qui peuvent entraîner une responsabilité pénale.</p>
  <h3>9. <strong>Gestion et emplacement de la base de données</strong></h3>
  <p>L’Application et les données sont stockée sur le téléphone de l’utilisateur.</p>
  <h3><strong>10. Indemnisation</strong></h3>
  <p>Vous vous engagez à indemniser et à relever NMES GROUP AB, y compris tous ses agents, ses responsables et ses employés de toute responsabilité, demandes, dépenses, procédures, dommage et frais (inclus des frais juridiques) résultant d’une défaillance de votre part à vous conformer avec une ou plus des obligations contenues dans les Termes et Conditions Générales.</p>
  <h3>11. <strong>Absence de garantie:</strong></h3>
  <p>Votre accès à l’Application et votre utilisation de l’Application se fait à vos risques. L’Application et ses contenus sont fournis tels quels et selon la disponibilité. Dans toute la mesure permise par la loi, NMES GROUP AB rejette spécifiquement toute responsabilité ou garantie, de quelque sorte que ce soit, explicite ou implicite, relatifs à l’Application. NMES GROUP AB ne peut pas, en particulier, garantir une utilisation de l’Applications sans interruption, et que cette dernière sera exempte d’erreurs, de virus ou défauts. L’Application peut, en particulier, être affecté par des périodes temporaires d’indisponibilité. Périodiquement, NMES GROUP AB mettra à jour l’Application, qui pourra rendre l’Application indisponible pour une certaine période de temps. NMES GROUP AB fera tous les efforts pour assurer une utilisation de l’Application fiable et continue mais ne peut pas garantir une utilisation sans interruption et sans incident de l’Application. NMES GROUP AB peut, de sa propre initiative et sans préavis, modifier, suspendre, ou même arrêter complètement l’Application à tout moment, sans aucune obligation d’indemniser l’utilisateur pour toute perte ou dommages, directe ou indirecte, résultant de la modification, suspension ou arrêt de l’Application. Nous ne pouvons pas être tenu responsable pour les pertes ou dommages résultant de toute faute ou défaillance de l’Application, suivant la suspension de votre accès, ce qui comprend toute dommage crée directement ou indirectement par une opération ratée. Vous comprenez et acceptez que NMES GROUP AB ne peut pas être tenu responsable pour toute activité illégale entreprise par des utilisateurs, prenant place sur l’Application ou via l’Application, indirectement ou directement. NMES GROUP AB n’offre aucune garantie et ne s’engage aucunement à garantir que, en particulier :<br/><br/>(i) l’Application et ses contenus associés seront corrects et satisferont vos normes; <br/>(ii) l’Application sera disponible, sans aucune interruption, prompte, sécurisée, et sans erreur. <br/>(iii) les résultats qui pourront être obtenus en utilisant l’application seront fiables et correctes ; <br/>(iv) tout erreur sera corrigée.<br/> Tout document téléchargé ou obtenu en utilisant l’Application est à votre seule discrétion et risques, vous serez tenus responsables pour tout dommage fait à votre système IT ou pour toute perte des données qui pourra être le résultat du téléchargement de ces documents. Toute information, écrite ou orale, obtenue par l’Utilisateur provenant de NMES GROUP AB ou de l’Application ne crée aucune garantie ou obligation qui n’est pas clairement et spécifiquement décrite dans les Termes et Conditions Générales, NMES GROUP AB rejette toute responsabilité résultant de la confiance placée en ces éléments par tout utilisateur ou par toute personne qui peut être informée de toute partie de ceux-ci.</p>
  <h3>12. <strong>Exclusion de responsabilité en relation avec la santé</strong></h3>
  <p>Vos Données Personnelles seront uniquement traitées selon les indications décrites dans notre Politique de Confidentialité. Toute autre indication vous vous sera notifiée avant son activation. Tout programme et/ou challenge qui est téléchargé ou obtenu via ou par l’Application se fait à votre entière discrétion et à vos risques et périls. AVANT D’UTILISER L’APPLICATION, PLUS PARTICULIEREMENT TOUT PROGRAMME OU CHALLENGES ACCÉDÉ VIA L’APPLICATION, NOUS VOUS CONSEILLONS FORTEMENT DE CONTACTER VOTRE MÉDECIN ET DE VÉRIFIER VOTRE CONDITION MÉDICALE AINSI QUE LE CONTENU DE TOUT PROGRAMME ET/OU CHALLENGE. VOUS SEREZ TENUS ENTIÈREMENT RESPONSABLES POUR TOUT DOMMAGE SUR VOTRE SANTÉ ET CONDITION MUSCULAIRE QUI PEUT ETRE LE RESULTAT DES CHALLENGES OU PROGRAMMES. Le contenu proposé est réservé à des Utilisateurs en bonne santé. Pour votre propre sécurité et objectifs d’entraînement, l’exécution du programme diPulse CMT doit être adaptée à votre condition physique et capacités physiques. Si vous avez des doutes nous vous conseillons de demander à votre coach professionnel ou de consulter notre service client pour des conseils. </p>
  <h3>13. <strong>Politique de Confidentialité</strong></h3>
  <p>En validant votre compte et en utilisant l’Application, vous acceptez que NMES GROUP AB puisse récolter, traiter et utiliser des Données Personnelles vous concernant. Les informations obtenues par l’Application doivent être utilisées seulement en accord avec la Politique de Confidentialité, qui est disponible sur l’App, dont les termes forment une partie intégrale des Conditions Générales.  </p>
  <h3>14. <strong>Liens</strong></h3>
  <p>Cette Application peut contenir des liens dirigeant sur des sites internet tiers qui ne sont pas sous le contrôle de NMES. NMES rejette toute responsabilité concernant le contenu de ces sites. NMES propose ces liens comme moyens d’information uniquement, l’insertion de ces liens n’implique en aucune manière l’approbation par NMES du contenu présent sur ces sites. Visiter des sites internet tiers se fait sous votre entière responsabilité, à vos propres risques et périls.</p>
  <h3><strong>15.Marques et droits d’auteur</strong></h3>
  <p>En aucun cas vous ne pouvez-vous utiliser les droits d’auteur de NMES, ceci comprend les droits d’auteur et noms des domaines, en relation avec tout produit ou service d’une manière qui pourrait porter à confusion ou donner l’impression que NMES valide le produit ou le service en question. L’utilisation des noms de marques et droit d’auteur de NMES ne peut se faire qu’avec l’accord préalable de NMES.</p>
  <h3><strong>16. Droits de propriété intellectuelle</strong></h3>
  <p>Les droits de propriété intellectuelle et toute autre sorte de droits relatifs aux contenus présentes sur l’Application (comprenant entre autre, le logiciel, graphiques, images, vidéos, informations et aussi la sélection et la configuration de celui-ci) reste la propriété exclusive de NMES. Les logos, graphiques, titres de page, icônes des boutons, noms des textes et services présentés sur l’Application font partie de la marque de commerce NMES et sont protégés par les Droits de Propriété Intellectuelle appartenant à NMES. Ceci comprend les droits sur le logiciel associé avec l’Application. Tout droit de propriété intellectuelle qui n’est pas spécifiquement accordé et appliqué au contenu de l’Application est la propriété de NMES concernant les contenus qu’ils ont publié sur leur portail. Le nom de domaine sur laquelle l’Application est hébergé est la propriété exclusive de NMES. Les Utilisateurs ne sont pas autorisés à utiliser ou adopter un nom similaire pour leur propre usage.</p>
  <h3><strong>17. Licence</strong></h3>
  <p>NMES donne aux Utilisateurs une licence mondiale, gratuite, limitée, non exclusive, non transférable, ne pouvant faire l’objet d’une sous-licence, pouvant être révoquée en toute temps, pour l’utilisation de l’Application sur leur téléphone portable ou tablette, sujette à la bonne conformité aux Conditions Générales. Toute autre utilisation est spécifiquement interdite sans l’accord préalable écrit de NMES. Les Utilisateurs ne sont seulement autorisés à utiliser l’Application que conformément à toutes les législations s’appliquant à eux. Les Utilisateurs ne peuvent uniquement utiliser L’Application dans un cadre strictement légal. Toute autre activité illégale ou incorrecte est spécifiquement interdite. Toute autres utilisations des contenus offerts dans l’Application, incluant, sans toutefois s’y limiter, la distribution, reproduction, modification, émission, affichage, téléchargement, présentation ou transmission de toute ou partie des contenus de l’Application sans l’accord préalable écrit de NMES est strictement interdite. L’Utilisateur donne à NMES une licence gratuite, mondiale, illimitée, non exclusive, transférable, pouvant faire l’objet d’une sous-licence, d’utiliser les contenus de toute sorte, affiché ou autrement, mis à disposition de NMES dans le contexte de l’utilisation de l’Application. L’Utilisateur confirme que le droit d’auteur et les droits de l’image au contenu qu’il soumet via l’Application lui appartiennent.</p>
  <h3><strong>18. Résiliation</strong></h3>
  <p>NMES GROUP AB se réserve le droit de bloquer, fermer ou suspendre votre Compte, interdire votre utilisation de l’Application et votre accès à toute ou partie de l’Application: <br/><br/>(i) si vous êtes en violation des Conditions Générales ou autres indication relative à l’utilisation de l’Application; <br/>(ii) si votre comportement peut causer des dommages à NMES GROUP AB, à l’Application, aux Utilisateurs, ou a des tiers et pourrait engager la responsabilité de NMES GROUP AB, des Utilisateurs ou des tiers. or; <br/>(iii)Vous pouvez résilier votre Compte à tout moment en envoyant un avis de résiliation à NMES GROUP AB en accord avec la méthode établie dans l’Application. NMES GROUP AB peut à tout moment, suivant la résiliation de votre compte, interdire l’accès, l’utilisation et la participation dans l’Application, comprenant tout contenu associé. L’accès, la capacité d’utiliser et de participer dans l’Application par l’Utilisateur, comprenant tout contenu cité ci-dessus, peut être terminé par NMES GROUP AB à tout moment suivant la Résiliation du Compte. Sur demande spécifique, dès la fermeture du Compte, NMES GROUP AB peut effacer votre Compte. De plus, NMES GROUP AB peut bloquer l’Application à sa seule discrétion et sans préavis ni indemnité  </p>
  <h3><strong>19. Miscellaneous</strong></h3>
  <p>Les Conditions Générales et la Politique de Confidentialité forment un contrat complet et exclusif concernant le sujet traité et remplace toute autre proposition et/ou accord préalable, écrit ou oral, ou toute autre forme de communication entre vous et NMES GROUP AB. Si une de ces dispositions est considérée comme invalide ou inapplicable, la disposition en question sera modifiée pour permettre que la disposition soit applicable, l’invalidité ou l’inapplicabilité de cette disposition n’affecteras pas la validité ou l’applicabilité des autres dispositions contenues dans les conditions. Si une ou l’autre des dispositions des Conditions Générales serait invalidée par un tribunal ou une autorité compétente, seule la disposition en question serait limitée, et les autres dispositions resteraient en l’état. Le manquement de NMES GROUP AB d’appliquer ou d’exercer un droit ou une disposition des Conditions Générales ne constitue pas une renonciation à ce droit ou à cette disposition.  </p>
  <h3><strong>20. Transfert</strong></h3>
  <p>L’Utilisateur ne peut pas transférer ses droits et obligations resultants des Termes et Conditions Générales sans le consentement écrit préalable du NMES GROUP AB.</p>
  <h3><strong>21. Les lois et les forums</strong></h3>
  <p>Les Conditions Générales sont gouvérnées par la loi Suèdoise, excluant les règles de conflit de lois. Toute dispute résultant des Condition Générales, y compris des disputes concernant la validité et celles liées à l’utilisation de l’Application contre NMES GROUP AB font partie de la juridiction ordinaire de Suède.  </p>`
};

export const languageDetails = [
  {
    lang: 'English',
    langCode: 'en',
    flag: Assets.EnglishFlag
  },
  {
    lang: 'Français',
    langCode: 'fr',
    flag: Assets.FrenchFlag
  },
  // {
  //   lang:'China',
  //   flag:Assets.ChinaFlag
  // },
  // {
  //   lang:'Sweden',
  //   flag:Assets.SwedenFlag
  // }
]

