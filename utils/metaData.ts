import { ViewState } from "../types";

export interface MetaContent {
  title: string;
  description: string;
}

export const metaData: Record<string, Record<ViewState, MetaContent>> = {
  en: {
    [ViewState.LANDING]: {
      title: "CUBO Solar | SKYLVA x Sunparadise",
      description:
        "The fusion of aluminum and light. Discover the CUBO Solar patio cover, engineered by Sunparadise and powered by SKYLVA.",
    },
    [ViewState.B2B_CARPORTS]: {
      title: "Commercial Solar Carports | Energy Fleets & ROI | SKYLVA",
      description:
        "Transform parking assets into power plants. High-yield solar carports for SMEs with integrated EV charging and Dutch fiscal advantages (EIA/MIA).",
    },
    [ViewState.STRUCTURES]: {
      title: "The Collection | Aurora & Skylights | SKYLVA",
      description:
        "Discover the Aurora Pergola and C1 Carport. Modular architectural systems crafted from Nordic timber and recycled aluminum. Beauty that generates power.",
    },
    [ViewState.TECHNOLOGY]: {
      title: "Technology | Bifacial Glass & SkylvaOS | SKYLVA",
      description:
        "The science of silence. Our bifacial solar glass captures +30% more energy, managed by SkylvaOS neural networks for autonomous energy optimization.",
    },
    [ViewState.ATMOSPHERE]: {
      title: "Atmosphere | Biophilic Design & Light | SKYLVA",
      description:
        'Experience "Komorebi" - filtered light technology. We create microclimates that connect you to the sky while providing robust weather protection.',
    },
    [ViewState.SUSTAINABILITY]: {
      title: "Sustainability | Circular Materials | SKYLVA",
      description:
        "Net-positive by design. Constructed from 75% recycled Hydro CIRCAL aluminum and FSC-certified timber. Engineered for a 50-year circular lifespan.",
    },
    [ViewState.ABOUT]: {
      title: "About SKYLVA | Philosophy & Origin",
      description:
        "Where nature meets technology. Sky is the source; Sylva is the substance. Read our manifesto on integrating energy seamlessly into the built environment.",
    },
    [ViewState.CONTACT]: {
      title: "Contact SKYLVA | Design Your Energy Independence",
      description:
        "Start the conversation. Request a consultation for your bespoke solar structure or schedule a visit to our Hilversum studio.",
    },
    [ViewState.CAREERS]: {
      title: "Careers | Join the Energy Revolution | SKYLVA",
      description:
        "We are looking for architects, engineers, and visionaries. Work at the intersection of sustainable design and advanced robotics in the Netherlands.",
    },
    [ViewState.PRESS]: {
      title: "Press & Newsroom | SKYLVA",
      description:
        "Latest media features, press releases, and brand assets. As seen in Architectural Digest, Dezeen, and Wallpaper*.",
    },
    [ViewState.PRIVACY]: {
      title: "Privacy Policy | SKYLVA",
      description:
        "Transparency in how we handle your data. Our commitment to privacy, security, and GDPR compliance.",
    },
    [ViewState.CONFIGURATOR]: {
      title: "3D Studio | Design Your SKYLVA",
      description:
        "Interactive design tool. Customize your solar structure in 3D: select materials, dimensions, and see real-time energy yield estimations.",
    },
    [ViewState.SUNPARADISE_HANDOVER]: {
      title: "Design Confirmed | SKYLVA x SUNPARADISE",
      description:
        "Your CUBO Solar configuration has been received. SKYLVA and Sunparadise will now engineer your bespoke architectural energy solution.",
    },
    [ViewState.SUNPARADISE_LP]: {
      title: "Sunparadise x SKYLVA | CUBO Solar",
      description:
        "The fusion of aluminum and light. Discover the CUBO Solar patio cover, engineered by Sunparadise and powered by SKYLVA.",
    },
    [ViewState.AURORA_LP]: {
      title: "Aurora Edition | Nature Solar Architecture | SKYLVA",
      description:
        "The nature of energy. Explore the Aurora Solar Pergola, crafted from Nordic timber with integrated bifacial solar glass.",
    },
    [ViewState.WIZARD]: {
      title: "Product Wizard | Find Your SKYLVA",
      description:
        "Interactive guide to help you choose between our Aurora, Patio Cover, and Carport systems based on your needs.",
    },
  },
  nl: {
    [ViewState.LANDING]: {
      title: "CUBO Solar | SKYLVA x Sunparadise",
      description:
        "De fusie van aluminium en licht. Ontdek de CUBO Solar terrasoverkapping, ontwikkeld door Sunparadise en aangedreven door SKYLVA.",
    },
    [ViewState.B2B_CARPORTS]: {
      title: "Zakelijke Solar Carports | Fiscaal Voordeel & ROI | SKYLVA",
      description:
        "Zet parkeerruimte om in rendement. Hoogwaardige solar carports voor het MKB met geïntegreerd laden en maximaal fiscaal voordeel (EIA/MIA/VAMIL).",
    },
    [ViewState.STRUCTURES]: {
      title: "De Collectie | Aurora & C1 Carport | SKYLVA",
      description:
        "Ontdek de Aurora Pergola en C1 Carport. Modulaire architecturale systemen van Noords hout en gerecycled aluminium. Schoonheid die energie levert.",
    },
    [ViewState.TECHNOLOGY]: {
      title: "Technologie | Bifaciaal Glas & SkylvaOS | SKYLVA",
      description:
        "De wetenschap van stilte. Ons bifaciale zonneglas vangt 30% meer licht, aangestuurd door SkylvaOS neurale netwerken voor autonome energie-optimalisatie.",
    },
    [ViewState.ATMOSPHERE]: {
      title: "Atmosfeer | Biofiel Ontwerp & Licht | SKYLVA",
      description:
        'Ervaar "Komorebi" - gefilterd licht technologie. We creëren microklimaten die u verbinden met de lucht en tegelijkertijd robuuste bescherming bieden.',
    },
    [ViewState.SUSTAINABILITY]: {
      title: "Duurzaamheid | Circulaire Materialen | SKYLVA",
      description:
        "Netto-positief ontwerp. Gemaakt van 75% gerecycled Hydro CIRCAL aluminium en FSC-gecertificeerd hout. Ontworpen voor een levensduur van 50 jaar.",
    },
    [ViewState.ABOUT]: {
      title: "Over SKYLVA | Filosofie & Oorsprong",
      description:
        "Waar natuur en technologie samenkomen. Lees ons manifest over het naadloos integreren van energie in de gebouwde omgeving.",
    },
    [ViewState.CONTACT]: {
      title: "Contact | Ontwerp uw Energie-onafhankelijkheid | SKYLVA",
      description:
        "Start het gesprek. Vraag een consult aan voor uw maatwerk zonnestructuur of plan een bezoek aan onze studio in Hilversum.",
    },
    [ViewState.CAREERS]: {
      title: "Carrières | Werken bij SKYLVA",
      description:
        "Wij zoeken architecten en ingenieurs. Werk op het snijvlak van duurzaam design en geavanceerde technologie in Nederland.",
    },
    [ViewState.PRESS]: {
      title: "Pers & Nieuws | SKYLVA",
      description:
        "Laatste media-updates en persberichten. Zoals gezien in Architectural Digest, Dezeen en Wallpaper*.",
    },
    [ViewState.PRIVACY]: {
      title: "Privacybeleid | SKYLVA",
      description:
        "Transparantie in hoe wij uw gegevens verwerken. Onze toewijding aan privacy, veiligheid en AVG-naleving.",
    },
    [ViewState.CONFIGURATOR]: {
      title: "3D Studio | Configureer uw SKYLVA",
      description:
        "Interactieve ontwerptool. Pas uw zonnestructuur aan in 3D: kies materialen, afmetingen en bekijk realtime energieopbrengst.",
    },
    [ViewState.SUNPARADISE_HANDOVER]: {
      title: "Ontwerp Ontvangen | SKYLVA x SUNPARADISE",
      description:
        "Uw CUBO Solar configuratie is ontvangen. SKYLVA en Sunparadise engineeren nu uw maatwerk architecturale energieoplossing.",
    },
    [ViewState.SUNPARADISE_LP]: {
      title: "Sunparadise x SKYLVA | CUBO Solar",
      description:
        "De fusie van aluminium en licht. Ontdek de CUBO Solar terrasoverkapping, ontwikkeld door Sunparadise en aangedreven door SKYLVA.",
    },
    [ViewState.AURORA_LP]: {
      title: "Aurora Editie | Natuurlijke Zonne-Architectuur | SKYLVA",
      description:
        "De natuur van energie. Ontdek de Aurora Solar Pergola, vervaardigd uit Noords hout met geïntegreerd bifaciaal zonneglas.",
    },
    [ViewState.WIZARD]: {
      title: "Product Wizard | Vind Uw SKYLVA",
      description:
        "Interactieve gids om u te helpen kiezen tussen onze Aurora, Terrasoverkapping en Carport systemen op basis van uw wensen.",
    },
  },
  de: {
    [ViewState.LANDING]: {
      title: "CUBO Solar | SKYLVA x Sunparadise",
      description:
        "Die Fusion von Aluminium und Licht. Entdecken Sie die CUBO Solar Terrassenüberdachung, entwickelt von Sunparadise und angetrieben von SKYLVA.",
    },
    [ViewState.B2B_CARPORTS]: {
      title: "Gewerbliche Solar-Carports | Energieflotten & ROI | SKYLVA",
      description:
        "Verwandeln Sie Parkplätze in Kraftwerke. Hochleistungs-Solar-Carports für KMUs mit integriertem EV-Laden und intelligenter Amortisation.",
    },
    [ViewState.STRUCTURES]: {
      title: "Die Kollektion | Aurora & C1 Carport | SKYLVA",
      description:
        "Entdecken Sie die Aurora Pergola und den C1 Carport. Modulare architektonische Systeme aus nordischem Holz und recyceltem Aluminium.",
    },
    [ViewState.TECHNOLOGY]: {
      title: "Technologie | Bifaziales Glas & SkylvaOS | SKYLVA",
      description:
        "Die Wissenschaft der Stille. Unser bifaziales Solarglas fängt +30% mehr Energie ein, gesteuert durch SkylvaOS für autonome Energieoptimierung.",
    },
    [ViewState.ATMOSPHERE]: {
      title: "Atmosphäre | Biophiles Design | SKYLVA",
      description:
        'Erleben Sie "Komorebi" - gefilterte Lichttechnologie. Wir schaffen Mikroklimata, die Sie mit dem Himmel verbinden und gleichzeitig Schutz bieten.',
    },
    [ViewState.SUSTAINABILITY]: {
      title: "Nachhaltigkeit | Zirkuläre Materialien | SKYLVA",
      description:
        "Netto-positiv durch Design. Konstruiert aus 75% recyceltem Hydro CIRCAL Aluminium und FSC-zertifiziertem Holz. Lebensdauer von 50 Jahren.",
    },
    [ViewState.ABOUT]: {
      title: "Über SKYLVA | Philosophie & Ursprung",
      description:
        "Wo Natur auf Technologie trifft. Lesen Sie unser Manifest über die nahtlose Integration von Energie in die gebaute Umwelt.",
    },
    [ViewState.CONTACT]: {
      title: "Kontakt | Gestalten Sie Ihre Unabhängigkeit | SKYLVA",
      description:
        "Beginnen Sie das Gespräch. Fordern Sie eine Beratung für Ihre maßgeschneiderte Solarstruktur an oder besuchen Sie unser Studio.",
    },
    [ViewState.CAREERS]: {
      title: "Karriere | Arbeiten bei SKYLVA",
      description:
        "Wir suchen Architekten und Ingenieurs. Arbeiten Sie an der Schnittstelle von nachhaltigem Design und fortschrittlicher Technologie.",
    },
    [ViewState.PRESS]: {
      title: "Presse & Newsroom | SKYLVA",
      description:
        "Aktuelle Medienberichte und Pressemitteilungen. Bekannt aus Architectural Digest, Dezeen und Wallpaper*.",
    },
    [ViewState.PRIVACY]: {
      title: "Datenschutzrichtlinie | SKYLVA",
      description:
        "Transparenz im Umgang mit Ihren Daten. Unser Engagement für Privatsphäre, Sicherheit und DSGVO-Konformität.",
    },
    [ViewState.CONFIGURATOR]: {
      title: "3D Studio | Konfigurieren Sie Ihr SKYLVA",
      description:
        "Interaktives Design-Tool. Passen Sie Ihre Solarstruktur in 3D: Wählen Sie Materialien, Maße und sehen Sie die Energieerträge.",
    },
    [ViewState.SUNPARADISE_HANDOVER]: {
      title: "Design Bestätigt | SKYLVA x SUNPARADISE",
      description:
        "Ihre CUBO Solar Konfiguration ist eingegangen. SKYLVA und Sunparadise entwickeln nun Ihre maßgeschneiderte Energielösung.",
    },
    [ViewState.SUNPARADISE_LP]: {
      title: "Sunparadise x SKYLVA | CUBO Solar",
      description:
        "Die Fusion von Aluminium und Licht. Entdecken Sie die CUBO Solar Terrassenüberdachung, entwickelt von Sunparadise und angetrieben von SKYLVA.",
    },
    [ViewState.AURORA_LP]: {
      title: "Aurora Edition | Natürliche Solararchitektur | SKYLVA",
      description:
        "Die Natur der Energie. Entdecken Sie die Aurora Solar Pergola, gefertigt aus nordischem Holz mit integriertem bifazialem Solarglas.",
    },
    [ViewState.WIZARD]: {
      title: "Produkt-Assistent | Finden Sie Ihr SKYLVA",
      description:
        "Interaktiver Leitfaden zur Auswahl zwischen unseren Aurora, Terrassenüberdachung und Carport Systemen basierend auf Ihren Bedürfnissen.",
    },
  },
  fr: {
    [ViewState.LANDING]: {
      title: "CUBO Solaire | SKYLVA x Sunparadise",
      description:
        "La fusion de l'aluminium et de la lumière. Découvrez la couverture de terrasse CUBO Solaire, conçue par Sunparadise et propulsée par SKYLVA.",
    },
    [ViewState.B2B_CARPORTS]: {
      title:
        "Carports Solaires Commerciaux | Flottes Énergétiques & ROI | SKYLVA",
      description:
        "Transformez vos parkings en centrales électriques. Carports solaires à haut rendement pour PME avec charge VE intégrée et avantages fiscaux.",
    },
    [ViewState.STRUCTURES]: {
      title: "La Collection | Aurora & Puits de Lumière | SKYLVA",
      description:
        "Découvrez la Pergola Aurora et le Carport C1. Systèmes architecturaux modulaires en bois nordique et aluminium recyclé. La beauté qui génère de la puissance.",
    },
    [ViewState.TECHNOLOGY]: {
      title: "Technologie | Verre Bifacial & SkylvaOS | SKYLVA",
      description:
        "La science du silence. Notre verre solaire bifacial capture +30% d'énergie en plus, géré par les réseaux neuronaux SkylvaOS pour une optimisation énergétique autonome.",
    },
    [ViewState.ATMOSPHERE]: {
      title: "Atmosphère | Design Biophilique & Lumière | SKYLVA",
      description:
        'Découvrez "Komorebi" - technologie de lumière filtrée. Nous créons des microclimats qui vous connectent au ciel tout en offrant une protection robuste contre les intempéries.',
    },
    [ViewState.SUSTAINABILITY]: {
      title: "Durabilité | Matériaux Circulaires | SKYLVA",
      description:
        "Net-positif par conception. Construit à partir de 75% d'aluminium recyclé Hydro CIRCAL et de bois certifié FSC. Conçu pour une durée de vie circulaire de 50 ans.",
    },
    [ViewState.ABOUT]: {
      title: "À Propos de SKYLVA | Philosophie & Origine",
      description:
        "Où la nature rencontre la technologie. Sky est la source ; Sylva est la substance. Lisez notre manifeste sur l'intégration transparente de l'énergie dans l'environnement bâti.",
    },
    [ViewState.CONTACT]: {
      title: "Contact SKYLVA | Concevez Votre Indépendance Énergétique",
      description:
        "Commencez la conversation. Demandez une consultation pour votre structure solaire sur mesure ou planifiez une visite à notre studio de Hilversum.",
    },
    [ViewState.CAREERS]: {
      title: "Carrières | Rejoignez la Révolution Énergétique | SKYLVA",
      description:
        "Nous recherchons des architectes, des ingénieurs et des visionnaires. Travaillez à l'intersection du design durable et de la robotique avancée aux Pays-Bas.",
    },
    [ViewState.PRESS]: {
      title: "Presse & Salle de Presse | SKYLVA",
      description:
        "Dernières parutions médias, communiqués de presse et ressources de marque. Vu dans Architectural Digest, Dezeen et Wallpaper*.",
    },
    [ViewState.PRIVACY]: {
      title: "Politique de Confidentialité | SKYLVA",
      description:
        "Transparence dans la gestion de vos données. Notre engagement envers la confidentialité, la sécurité et la conformité RGPD.",
    },
    [ViewState.CONFIGURATOR]: {
      title: "Studio 3D | Concevez Votre SKYLVA",
      description:
        "Outil de conception interactif. Personnalisez votre structure solaire en 3D : choisissez les matériaux, les dimensions et voyez les estimations de rendement énergétique en temps réel.",
    },
    [ViewState.SUNPARADISE_HANDOVER]: {
      title: "Design Confirmé | SKYLVA x SUNPARADISE",
      description:
        "Votre configuration CUBO Solar a été reçue. SKYLVA et Sunparadise vont maintenant concevoir votre solution énergétique architecturale sur mesure.",
    },
    [ViewState.SUNPARADISE_LP]: {
      title: "Sunparadise x SKYLVA | CUBO Solaire",
      description:
        "La fusion de l'aluminium et de la lumière. Découvrez la couverture de terrasse CUBO Solaire, conçue par Sunparadise et propulsée par SKYLVA.",
    },
    [ViewState.AURORA_LP]: {
      title: "Édition Aurora | Architecture Solaire Naturelle | SKYLVA",
      description:
        "La nature de l'énergie. Découvrez la Pergola Solaire Aurora, fabriquée en bois nordique avec verre solaire bifacial intégré.",
    },
    [ViewState.WIZARD]: {
      title: "Assistant Produit | Trouvez Votre SKYLVA",
      description:
        "Guide interactif pour vous aider à choisir entre nos systèmes Aurora, Couverture de Patio et Carport en fonction de vos besoins.",
    },
  },
};
