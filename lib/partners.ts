export interface Partner {
    name: string;
    image: string;
    link: string | null;
    category: 'Digital Display Locations' | 'On-Air Advertisers' | 'Past and Current Partners';
}

export const PARTNERS: Partner[] = [
    // Digital Display Locations
    {
        name: "Apna Bazar",
        image: "/images/partners/Apna Bazar.jpg",
        link: "https://www.google.com/maps/place/Apna+Bazar/@35.8215116,-78.8498037,17z/data=!3m2!4b1!5s0x89acedfad28d092b:0x9cd7b9b42ca9aeb7!4m6!3m5!1s0x89acede52c518bb3:0xa96b25e079009da3!8m2!3d35.8215116!4d-78.8498037!16s%2Fg%2F1v0llndv?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
        category: 'Digital Display Locations'
    },
    {
        name: "Spices Hut (Cary)",
        image: "/images/partners/Spices Hut.jpg",
        link: "https://www.google.com/maps/place/Spices+Hut+Cary/@35.8231244,-78.9015943,17z/data=!4m6!3m5!1s0x89aced6945914bb1:0x996dfcd9d2b014b9!8m2!3d35.8231244!4d-78.9015943!16s%2Fg%2F11ql_0rkkz?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=95fd3eac-2418-4e89-99fc-eb9b2f192f86",
        category: 'Digital Display Locations'
    },
    {
        name: "Sangam Mart",
        image: "/images/partners/Sangam Mart.jpg",
        link: "https://www.google.com/maps/place/Sangam+Mart/@35.832811,-78.8296693,17z/data=!3m1!4b1!4m6!3m5!1s0x89acf1f9e5de33d7:0x59c8fad5ce77f2bd!8m2!3d35.832811!4d-78.8270944!16s%2Fg%2F1tghd__1?entry=tts&g_ep=EgoyMDI1MDgwNi4wIPu8ASoASAFQAw%3D%3D&skid=a0873c23-08fe-4a89-b0a7-6aa50c74895f",
        category: 'Digital Display Locations'
    },
    {
        name: "Bombay Central",
        image: "/images/partners/Bombay Central.jpg",
        link: "https://www.google.com/maps/place/Bombay+Central+%7C+Grocery+%C2%B7+Caf%C3%A9+%C2%B7+Halal+Meat/@35.85583,-78.8459306,17z/data=!3m1!4b1!4m6!3m5!1s0x89acefc23ee7f66f:0x4737bd0e3ea5f823!8m2!3d35.8558301!4d-78.8410597!16s%2Fg%2F11rb4j6qv7?entry=tts&g_ep=EgoyMDI1MDgwNi4wIPu8ASoASAFQAw%3D%3D&skid=97b72900-0436-468f-a8c7-43971c29c76f",
        category: 'Digital Display Locations'
    },

    // On-Air Advertisers
    { name: "Autopark Honda", image: "/images/partners/Autopark Honda.jpg", link: "https://www.autoparkhonda.com/", category: 'On-Air Advertisers' },
    { name: "BMW", image: "/images/partners/BMW.jpg", link: "https://www.bmwofraleigh.com/", category: 'On-Air Advertisers' },
    { name: "Empowerly", image: "/images/partners/Empowerly.jpg", link: "https://start.empowerly.com/radio-nyra", category: 'On-Air Advertisers' },
    { name: "Khanna and Sons Jewelers", image: "/images/partners/Khanna and Sons Jewelers.jpg", link: "https://khannasonsjewelers.com/", category: 'On-Air Advertisers' },
    { name: "LeithCars", image: "/images/partners/LeithCars.jpg", link: "https://www.leithcars.com/", category: 'On-Air Advertisers' },
    { name: "Raj Jewels", image: "/images/partners/Raj Jewels.jpg", link: "https://www.rajjewels.com/", category: 'On-Air Advertisers' },
    { name: "Rajmudi Organics", image: "/images/partners/Rajmudi Organics.jpg", link: "https://rajamudi.com/", category: 'On-Air Advertisers' },
    { name: "Sip N Spices", image: "/images/partners/sip-n-spices-logo.png", link: "https://sipnspices.com/", category: 'On-Air Advertisers' },
    { name: "Soul Flavorscape of India", image: "/images/partners/Soul Flavorscape of India.jpg", link: "https://www.soulflavorscapeofindia.com/", category: 'On-Air Advertisers' },
    { name: "Steve Rao For Wake County Commissioner", image: "/images/partners/Steve Rao For Wake County Commissioner.jpg", link: "https://www.steveraoforwake.com/", category: 'On-Air Advertisers' },
    { name: "Vault Games Studios", image: "/images/partners/Vault Games Studios.jpg", link: "https://vaultgamesstudio.com/", category: 'On-Air Advertisers' },
    { name: "Woodplay of NC", image: "/images/partners/Woodplay of NC.jpg", link: "https://www.woodplaync.com/", category: 'On-Air Advertisers' },

    // Past and Current Partners
    { name: "Jaguar", image: "/images/partners/Jaguar.jpg", link: "https://www.jaguar.com/en-xi/jdx/market-selector.html", category: 'Past and Current Partners' },
    { name: "Disney+", image: "/images/partners/Disney+.jpg", link: "https://www.hotstar.com/in", category: 'Past and Current Partners' },
    { name: "United Community Bank", image: "/images/partners/united-community-bank.jpg", link: "https://www.ucbi.com/", category: 'Past and Current Partners' },
    { name: "Academy of Hope", image: "/images/partners/aohdc.jpg", link: "https://aohdc.org/", category: 'Past and Current Partners' },
    { name: "Hendrick Subaru", image: "/images/partners/hendrick.jpg", link: "https://www.subarusouthpoint.com/", category: 'Past and Current Partners' },
    { name: "Minor League Cricket", image: "/images/partners/minor-league-cricket.jpg", link: "https://minorleaguecricket.com/", category: 'Past and Current Partners' },
    { name: "Major League Cricket", image: "/images/partners/major-league-cricket.jpg", link: "https://www.majorleaguecricket.com/", category: 'Past and Current Partners' },
    { name: "UNC Health", image: "/images/partners/unc-health.jpg", link: "https://www.unchealth.org/home", category: 'Past and Current Partners' },
    { name: "Allstate", image: "/images/partners/Allstate.jpg", link: "https://www.allstate.com/", category: 'Past and Current Partners' },
    { name: "The Crossings at Alexander Place Apartments", image: "/images/partners/the-crossings.jpg", link: "https://www.thecrossingsatap.com/", category: 'Past and Current Partners' },
    { name: "Cortland", image: "/images/partners/Cortland.jpg", link: "https://cortland.com/", category: 'Past and Current Partners' },
    { name: "Urban Desi", image: "/images/partners/urban-desi.jpg", link: "https://www.instagram.com/urbandesiusa/", category: 'Past and Current Partners' },
    { name: "Angadi Grocery and Foodtruck", image: "/images/partners/angadi.jpg", link: "https://www.instagram.com/angadiapex/?hl=en", category: 'Past and Current Partners' },
    { name: "City of Morrisville", image: "/images/partners/City of Morrisville.jpg", link: "https://www.morrisvillenc.gov/Home", category: 'Past and Current Partners' },
    { name: "City of Apex", image: "/images/partners/apex.jpg", link: "https://exploreapexnc.com/", category: 'Past and Current Partners' },
    { name: "Maria Parham Health", image: "/images/partners/Maria Parham Health.jpg", link: "https://www.mariaparham.com/", category: 'Past and Current Partners' },
    { name: "HSNC", image: "/images/partners/HSNC.jpg", link: "https://hsnctemple.org/", category: 'Past and Current Partners' },
    { name: "Mercedes-Benz", image: "/images/partners/Mercedes-Benz.jpg", link: "https://www.mercedesbenzraleigh.com/", category: 'Past and Current Partners' },
    { name: "Fusion Nine", image: "/images/partners/fusion-nine.jpg", link: "http://fusionninenc.com/", category: 'Past and Current Partners' },
    { name: "Amrut", image: "/images/partners/Amrut.jpg", link: "https://amrutnc.com/", category: 'Past and Current Partners' },
    { name: "Tanishq USA", image: "/images/partners/tanishq.jpg", link: "https://www.tanishq.com/trunk-show-raleigh.html", category: 'Past and Current Partners' },
    { name: "ZEE5", image: "/images/partners/ZEE5.jpg", link: "https://www.zee5.com/", category: 'Past and Current Partners' },
    { name: "Indian Association of Fuquay-Varina", image: "/images/partners/indian-association-of-fuquay-varina.jpg", link: "https://www.iafvnc.org/", category: 'Past and Current Partners' },
    { name: "Janaprerana", image: "/images/partners/jana-prerana.jpg", link: "https://janaprerana.org/", category: 'Past and Current Partners' },
    { name: "Publix", image: "/images/partners/Publix.jpg", link: "https://www.publix.com", category: 'Past and Current Partners' },
    { name: "NCAAT", image: "/images/partners/nc-asian-american-together.jpg", link: "https://ncaat.org/", category: 'Past and Current Partners' },
    { name: "A.R. Rahman – The Wonderment Tour", image: "/images/partners/A.R. Rahman – The Wonderment Tour.jpg", link: "https://kashpatelproductions.com/event/ar-rahman-the-wonderment-tour-2025/", category: 'Past and Current Partners' },
    { name: "Shaan – Infinity Tour", image: "/images/partners/Shaan – Infinity Tour.jpg", link: "https://www.facebook.com/events/1038599181574685/?ref_source=newsfeed&ref_mechanism=feed_attachment", category: 'Past and Current Partners' },
    { name: "Aventon Cary", image: "/images/partners/avention-cary.jpg", link: "https://aventoncary.com/?utm_knock=gp&gad_campaignid=22715861932", category: 'Past and Current Partners' },
    { name: "HumSub", image: "/images/partners/hum-sub.jpg", link: "https://www.facebook.com/humsubinc/", category: 'Past and Current Partners' },
    { name: "Sankara Eye Foundation", image: "/images/partners/sankara-eye.jpg", link: "https://give.giftofvision.org/campaign/757230/donate?c_src=", category: 'Past and Current Partners' },
    { name: "Humera Jumani", image: "/images/partners/Humera Jumani.jpg", link: null, category: 'Past and Current Partners' },
    { name: "Morrisville Mayor TJ Cawley", image: "/images/partners/tj-cawley.jpg", link: "https://mayortj.com/lander?oref=https%3A%2F%2Fnyraradio.com/", category: 'Past and Current Partners' },
    { name: "Rachabanda", image: "/images/partners/Rachabanda.jpeg", link: null, category: 'Past and Current Partners' }
];


