import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      startups: "Startups",
      inventions: "Inventions",
      teaching: "Teaching & Seminars",
      publications: "Publications",
      civil: "Civil Activities",
      education: "Education"
    },
    hero: {
      name: "Saeid Sadat Madarshahi",
      role: "MBA, Civil Engineer & Facade Engineering Expert",
      tagline: "Bridging the gap between Engineering, Business, and Innovation.",
      downloadCv: "Download CV",
      printCv: "Print Full CV"
    },
    about: {
      title: "About Me",
      text: "I am an experienced Civil Engineer and Business Administrator specializing in Facade Engineering and Business Development. With a background ranging from project management in construction to developing high-tech solutions like BCI devices and energy-saving nano-coatings, I strive to integrate technical precision with strategic business vision. I have led major facade projects in Iran and contributed to academic research in Chaos Theory and Business."
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          company: "Ziggurat Sustainable Solutions",
          role: "Founder & CEO",
          period: "2023 - Present",
          description: [
            "Development of radiant energy-reducing nano-coatings.",
            "R&D in polyurethane coatings, application methods, and related technologies.",
            "Simulation and testing related to energy management fields."
          ]
        },
        {
          company: "AlumGlass Tehran (Specialized Facade Consultant)",
          role: "Vice Chairman of the Board - CTO",
          period: "2007 - Present",
          description: [
            "Shareholder, Member of the Board.",
            "Technology & Market Development Manager.",
            "Project Manager for Qom Hospital, Iran Mercantile Exchange, Golestan Towers, Jam Khalij Fars Tower, Alborz, etc."
          ]
        },
        {
          company: "Rajman Software Development Co.",
          role: "Marketing & Sales Consultant",
          period: "2005",
          description: [
            "Consultancy for IT market development.",
            "HR services and team building for J2EE development.",
            "Open source software marketing."
          ]
        },
        {
          company: "Pand Communication Co.",
          role: "IT Specialist & Project Manager",
          period: "2005 - 2006",
          description: [
            "Managed ITMP, ERP, CRM, and LMS projects.",
            "Sales Manager for IT Management projects (MIS).",
            "Contributed to localizing LMS for Iranian companies."
          ]
        },
        {
          company: "AlumGlass Co. Mashhad",
          role: "Civil Engineer & Project Manager",
          period: "1998 - 2003",
          description: [
            "Managed project teams for aluminum structures.",
            "Technical drafting and client presentations.",
            "Contributed to over 6 major projects."
          ]
        }
      ]
    },
    education: {
      title: "Academic Qualifications",
      items: [
        {
          degree: "Master of Business Administration (M.A.)",
          institution: "Sprott School of Business - Carleton University (Canada)",
          year: "2004 - 2006",
          link: "http://www.business.carleton.ca"
        },
        {
          degree: "B.Sc. Civil Engineering",
          institution: "Azad University of Mashhad",
          year: "1998 - 2003",
          link: "http://www.mshdiau.ac.ir"
        }
      ]
    },
    teaching: {
      title: "Teaching & Seminars",
      items: [
        {
          title: "FacadeForum01",
          year: "2018",
          role: "Founder & Organizer",
          type: "seminar",
          description: "Founded the Facade Forum as a space to share lived experiences of architects and facade engineering. The first event was held at Tehran Book Garden.",
          attendees: "200 Attendees",
          location: "Tehran Book Garden",
          videoEmbed: '<div id="34489607539"><script type="text/JavaScript" src="https://www.aparat.com/embed/u48rH?data[rnddiv]=34489607539&data[responsive]=yes&muted=true&titleShow=true"></script></div>',
          image: "pic/1030.jpg"
        },
        {
          title: "FacadeForum02",
          year: "2020",
          role: "Organizer",
          type: "seminar",
          description: "The second Facade Forum held as a live YouTube broadcast due to COVID-19 restrictions.",
          attendees: "+900 Live Viewers",
          location: "Online",
          videoEmbed: '<div id="41180009512"><script type="text/JavaScript" src="https://www.aparat.com/embed/69dYC?data[rnddiv]=41180009512&data[responsive]=yes"></script></div>',
          image: "pic/1031.jpg"
        },
        {
          title: "Facade Engineering Course for Architects",
          year: "2018",
          role: "Instructor",
          type: "course",
          description: "Comprehensive 40-hour syllabus delivered in-person and online for the first time.",
          location: "Hybrid",
          videoEmbed: '<div id="54869655916"><script type="text/JavaScript" src="https://www.aparat.com/embed/8kVa2?data[rnddiv]=54869655916&data[responsive]=yes&muted=true&titleShow=true"></script></div>',
          image: "pic/1032.jpg"
        },
        {
          title: "Advanced Facade Engineering Course",
          year: "2022",
          role: "Instructor",
          type: "course",
          description: "Updated syllabus utilizing experiences from previous courses, delivered entirely online.",
          location: "Online",
          link: "https://alumglass.com/courses/facade-engineering4architects/",
          image: "pic/1033.jpg"
        },
        {
          title: "Workshop on e-learning and IT infrastructure",
          year: "2006",
          role: "Instructor",
          type: "workshop",
          description: "A workshop on e-learning at the second conference of e-learning in Tehran, co-presented with Mr. Mehdi Feyzi.",
          location: "Tehran",
          image: "pic/1034.jpg"
        },
        {
          title: "Specialized Seminars",
          year: "Ongoing",
          role: "Speaker",
          type: "seminar",
          description: "Various seminars including 'Fire & Safety in Facades', 'Introduction to Facade Engineering', and 'Facade Engineering & Energy Saving'.",
          image: "pic/1035.jpg"
        }
      ]
    },
    projects: {
      title: "Selected Projects",
      items: [
         {
          title: "Fereshteh Pasargad Hotel",
          year: "2024",
          description: "Concrete facade mockup management.",
          link: "https://alumglass.com/portfolio/hotel-fereshte/",
          image: "pic/1003.jpg",
          videoEmbed: '<div id="97350041186"><script type="text/JavaScript" src="https://www.aparat.com/embed/nou4f21?data[rnddiv]=97350041186&data[responsive]=yes&muted=true&titleShow=true"></script></div>'
        },
        {
          title: "Golrang HQ Ventilation",
          year: "2016",
          description: "Implementation of Renson HealthBox and window ventilators for the first time in Iran to solve fresh air supply issues (Part 19 code) in the Golrang Central Office, reducing cooling load in moderate months.",
          image: "pic/1013.jpg"
        },
        {
          title: "Qom 1000-Bed Hospital",
          year: "2025 (Upcoming)",
          description: "Facade shell inspection project.",
          image: "pic/1002.jpg"
        },
        {
          title: "Iran Mercantile Exchange",
          year: "2023",
          description: "UHPC Concrete and Glass Facade.",
          image: "pic/1004.jpg"
        },
        {
          title: "Golestan Twin Towers",
          year: "2021",
          description: "Unitized facade production (Iranian Made).",
          link: "https://alumglass.com/portfolio/golestan-towers/#",
          image: "pic/1005.jpg"
        },
        {
          title: "Khalij Fars (Jam) Tower",
          year: "2019",
          description: "First Unitized Facade implementation in the region.",
          image: "pic/1006.jpg"
        },
        {
          title: "Mina Dome Planetarium",
          year: "2014",
          description: "Equipping and launching (Architecture, MEP, Software/Hardware).",
          link: "https://alumglass.com/portfolio/gonbad-mina-planetarium/",
          image: "pic/1007.jpg"
        },
        {
          title: "Tehran Book Garden",
          year: "2011",
          description: "Glass shells and facade engineering.",
          link: "https://alumglass.com/portfolio/book_garden/",
          image: "pic/1008.jpg"
        }
      ]
    },
    startups: {
      title: "Startups & Ventures",
      items: [
        {
          title: "Ziggurat Solutions",
          year: "Current Activity",
          description: "My new startup focused on energy management in building skins. Providing innovative solutions for sustainable building envelopes.",
          link: "https://zigguratsolutions.com/",
          image: "pic/1025.jpg",
          isHighlight: true
        },
        {
          title: "Dukan Diet App (Chaghari)",
          year: "2016-2019",
          description: "A health startup inspired by the Dukan Diet. Helped over 20,000 users manage their weight on iOS and Android.",
          image: "pic/1015.jpg"
        },
        {
          title: "Ziggurat Consulting Services",
          year: "2009",
          description: "Consulting services for amusement parks, originally started as an import business. Launched the Tehran Ice Skating Project.",
          image: "pic/1014.jpg"
        },
        {
          title: "Simorq Magazine",
          year: "2002",
          description: "A web-based professional anonymous magazine featuring distributed writers. Developed a custom web application for content submission and publishing. Won a logo design contest.",
          image: "pic/1016.jpg"
        },
        {
          title: "Pandamooz E-learning",
          year: "2005",
          description: "Localized the Moodle open-source LMS for Iranian users within 3 months and installed it for multiple customers.",
          image: "pic/1020.jpg"
        }
      ]
    },
    inventions: {
      title: "Inventions & Innovations",
      items: [
        {
          title: "Cyclic Facade Testing Device",
          year: "Innovation",
          description: "Device for fatigue testing of facade panels and concrete shells.",
          videoEmbed: '<div id="75480661990"><script type="text/JavaScript" src="https://www.aparat.com/embed/zorvfh6?data[rnddiv]=75480661990&data[responsive]=yes&muted=true&titleShow=true"></script></div>',
          images: ["pic/1010-1.jpg", "pic/1010-2.jpg"]
        },
        {
          title: "Parametric Facade Software",
          year: "2013",
          description: "Software to calibrate facade forms for energy, light, waste reduction, and structure. Developed a proof of concept using Rhino & Grasshopper to generate production files automatically.",
          images: ["pic/1017-1.jpg", "pic/1017-2.jpg"]
        },
        {
          title: "Eye Tracking for ALS",
          year: "2013",
          description: "Low-cost communication device for ALS patients using a hacked C920 camera, IR filters, and custom web software to allow computer control via eye movement. Replaced the earlier BCI approach.",
          images: ["pic/1012-1.jpg", "pic/1012-2.jpg"]
        },
        {
          title: "Facade Watertightness Tester",
          year: "Innovation",
          description: "A device for testing facade shells against water and air penetration.",
          link: "https://alumglass.com/services/facade-testing/",
          images: ["pic/1009-1.jpg", "pic/1009-2.jpg"]
        },
        {
          title: "Ziggurat Nano Coating",
          year: "Product",
          description: "Heat-reducing nano-coating for energy management in buildings.",
          link: "https://zigguratsolutions.com",
          images: ["pic/1011-1.jpg", "pic/1011-2.jpg"]
        }
      ]
    },
    publications: {
      title: "Publications & Articles",
      items: [
        {
          type: 'book',
          title: "Application of Chaos Theory in the Business World",
          publisher: "Amazon",
          link: "https://www.amazon.com/Application-Chaos-Theory-Business-World/dp/3843383340/",
          image: "pic/1040.jpg"
        },
        {
          type: 'paper',
          title: "Investigating Chaos in Tehran Stock Exchange Index",
          authors: "A Moeini, M Ahrari, SS Madarshahi",
          year: "2007",
          link: "https://d1wqtxts1xzle7.cloudfront.net/109518839/article_31005_6e51fd93a625455e4f212d02db23c33a-libre.pdf",
          image: "pic/1041.jpg"
        },
        {
          type: 'paper',
          title: "The Proto-Fuse Project: Mutation in unconscious data",
          description: "Methods to boost spatial creativity for architects.",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=p4zyhKEAAAAJ&citation_for_view=p4zyhKEAAAAJ:WF5omc3nYNoC",
          image: "pic/1042.jpg"
        },
        {
          type: 'article',
          title: "Natural Ventilation and Double-Skin Facades",
          publisher: "Virgool",
          link: "https://virgool.io/FacadeForum/ventilation-energysaving-gf5adklk2xn8",
          image: "pic/1043.jpg"
        },
        {
          type: 'article',
          title: "Impact of Ziggurat Nano-Coating on Energy Security",
          publisher: "Virgool",
          link: "https://virgool.io/@saeedsm/ziggurat-saving-dpwotgvca0ts",
          image: "pic/1044.jpg"
        },
        {
          type: 'article',
          title: "Solar Glasses: Light and Energy Management",
          publisher: "Virgool",
          link: "https://virgool.io/@saeedsm/coatedglassiniran-q2xlsxx42w7r",
          image: "pic/1045.jpg"
        }
      ]
    },
    civil: {
      title: "Civil & Social Activities",
      items: [
        {
          title: "Persian Bloggers Community",
          year: "2002",
          description: "Started a community for Mashhad bloggers, developed guides for Movable Type, and organized booths at ICT exhibitions to promote blogging.",
          image: "pic/1019.jpg"
        },
        {
          title: "72hours.ir",
          year: "2008",
          description: "Founded to educate citizens on survival during the first 72 hours after an earthquake or flood. Initially transferred to a medical company, recently reactivated for charity.",
          link: "http://72hours.ir",
          image: "pic/1046.jpg"
        },
        {
          title: "ALS Association Founder",
          year: "Ongoing",
          description: "Co-founder and board member of the ALS support association.",
          image: "pic/1047.jpg"
        },
        {
          title: "Facade Safety Advocate",
          year: "Ongoing",
          description: "Civil activist in the field of facade safety and energy consumption management.",
          image: "pic/1048.jpg"
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn Profile",
      aparatLabel: "Aparat Channel"
    }
  },
  fa: {
    nav: {
      home: "خانه",
      about: "درباره من",
      experience: "سوابق شغلی",
      projects: "پروژه‌ها",
      startups: "استارتاپ‌ها",
      inventions: "اختراعات",
      teaching: "تدریس و سمینار",
      publications: "انتشارات",
      civil: "فعالیت‌های مدنی",
      education: "تحصیلات"
    },
    hero: {
      name: "سعید سادات مادرشاهی",
      role: "MBA، مهندس عمران و متخصص مهندسی نما",
      tagline: "پلی میان مهندسی، تجارت و نوآوری",
      downloadCv: "دانلود رزومه",
      printCv: "پرینت رزومه کامل"
    },
    about: {
      title: "درباره من",
      text: "من یک مهندس عمران و مدیر بازرگانی با تجربه هستم که در زمینه مهندسی نما و توسعه کسب‌وکار تخصص دارم. با پیشینه‌ای از مدیریت پروژه در ساخت‌وساز تا توسعه راهکارهای های‌تک مانند دستگاه‌های BCI و نانوپوشش‌های صرفه‌جویی انرژی، تلاش می‌کنم دقت فنی را با بینش استراتژیک تجاری ادغام کنم. من پروژه‌های بزرگ نما در ایران را رهبری کرده‌ام و در تحقیقات دانشگاهی در زمینه تئوری آشوب و تجارت مشارکت داشته‌ام."
    },
    experience: {
      title: "سوابق شغلی",
      items: [
        {
          company: "راهکارهای پایدار زیگورات",
          role: "مدیر عامل و موسس",
          period: "۱۴۰۲ - تاکنون",
          description: [
            "توسعه نانو پوشش کاهنده انرژی تابشی.",
            "تحقیق و توسعه در حوزه پوشش های پلی اورتان، روش های اجرا و فناوری های مرتبط.",
            "شبیه سازی و آزمایش های مرتبط با حوزه مدیریت انرژی."
          ]
        },
        {
          company: "آلومینیوم شیشه تهران، مشاور تخصصی نما",
          role: "نایب رییس هیئت مدیره - CTO",
          period: "۱۳۸۶ - تاکنون",
          description: [
            "سهامدار، عضو هیئت مدیره",
            "مدیر فناوری و توسعه بازار",
            "مدیر پروژه بیمارستان قم، بورس کالا، برج های گلستان، جام خلیج فارس، البرز و ..."
          ]
        },
        {
          company: "شرکت توسعه نرم‌افزار راژمان",
          role: "مشاور بازاریابی و فروش",
          period: "۱۳۸۴",
          description: [
            "مشاوره برای توسعه بازار فناوری اطلاعات.",
            "خدمات منابع انسانی و تیم‌سازی برای توسعه J2EE.",
            "بازاریابی نرم‌افزارهای متن‌باز."
          ]
        },
        {
          company: "شرکت ارتباطات پند",
          role: "متخصص IT و مدیر پروژه",
          period: "۱۳۸۴ - ۱۳۸۵",
          description: [
            "مدیریت پروژه‌های ITMP، ERP، CRM و LMS.",
            "مدیر فروش پروژه‌های مدیریت فناوری اطلاعات (MIS).",
            "مشارکت در بومی‌سازی LMS برای شرکت‌های ایرانی."
          ]
        },
        {
          company: "آلوم‌گلس مشهد",
          role: "مهندس عمران و مدیر پروژه",
          period: "۱۳۷۷ - ۱۳۸۲",
          description: [
            "مدیریت تیم‌های پروژه برای سازه‌های آلومینیومی.",
            "طراحی فنی و ارائه به کارفرما.",
            "مشارکت در بیش از ۶ پروژه بزرگ."
          ]
        }
      ]
    },
    education: {
      title: "سوابق تحصیلی",
      items: [
        {
          degree: "کارشناسی ارشد مدیریت کسب‌وکار (MBA)",
          institution: "دانشکده بازرگانی Sprott - دانشگاه کارلتون (کانادا)",
          year: "۱۳۸۳ - ۱۳۸۵",
          link: "http://www.business.carleton.ca"
        },
        {
          degree: "کارشناسی مهندسی عمران",
          institution: "دانشگاه آزاد اسلامی مشهد",
          year: "۱۳۷۷ - ۱۳۸۲",
          link: "http://www.mshdiau.ac.ir"
        }
      ]
    },
    teaching: {
      title: "تدریس و سمینار",
      items: [
        {
          title: "نشست نما ۱ (FacadeForum01)",
          year: "۱۳۹۷",
          role: "موسس و برگزارکننده",
          type: "seminar",
          description: "تاسیس نشست نما به عنوان فضایی برای به اشتراک گذاشتن تجربیات زیسته معماران و مهندسی نما. اولین رویداد در باغ کتاب تهران برگزار شد.",
          attendees: "۲۰۰ شرکت‌کننده",
          location: "باغ کتاب تهران",
          videoEmbed: '<div id="34489607539"><script type="text/JavaScript" src="https://www.aparat.com/embed/u48rH?data[rnddiv]=34489607539&data[responsive]=yes&muted=true&titleShow=true"></script></div>',
          image: "pic/1030.jpg"
        },
        {
          title: "نشست نما ۲ (FacadeForum02)",
          year: "۱۳۹۹",
          role: "برگزارکننده",
          type: "seminar",
          description: "دومین نشست نما با توجه به محدودیت‌های کرونا بصورت پخش زنده در یوتیوب برگزار گردید.",
          attendees: "+۹۰۰ بازدیدکننده زنده",
          location: "آنلاین / یوتیوب",
          videoEmbed: '<div id="41180009512"><script type="text/JavaScript" src="https://www.aparat.com/embed/69dYC?data[rnddiv]=41180009512&data[responsive]=yes"></script></div>',
          image: "pic/1031.jpg"
        },
        {
          title: "دوره مهندسی نما برای معماران",
          year: "۱۳۹۷",
          role: "مدرس",
          type: "course",
          description: "برگزاری اولین دوره جامع مهندسی نما با ۴۰ ساعت سرفصل بصورت حضوری و آنلاین.",
          location: "ترکیبی",
          videoEmbed: '<div id="54869655916"><script type="text/JavaScript" src="https://www.aparat.com/embed/8kVa2?data[rnddiv]=54869655916&data[responsive]=yes&muted=true&titleShow=true"></script></div>',
          image: "pic/1032.jpg"
        },
        {
          title: "دوره پیشرفته مهندسی نما",
          year: "۱۴۰۱",
          role: "مدرس",
          type: "course",
          description: "برگزاری دوره با استفاده از تجربیات دوره قبلی و سرفصل‌های متعدد بصورت کاملا آنلاین.",
          location: "آنلاین",
          link: "https://alumglass.com/courses/facade-engineering4architects/",
          image: "pic/1033.jpg"
        },
        {
          title: "کارگاه یادگیری الکترونیکی",
          year: "۱۳۸۵",
          role: "مدرس",
          type: "workshop",
          description: "برگزاری کارگاه یادگیری الکترونیکی در دومین کنفرانس یادگیری الکترونیکی تهران به همراه آقای مهدی فیضی.",
          location: "تهران",
          image: "pic/1034.jpg"
        },
        {
          title: "سمینارهای تخصصی",
          year: "مستمر",
          role: "سخنران",
          type: "seminar",
          description: "سمینارهای حریق و ایمنی در نما، معرفی مهندسی نما و نقش مهندسی نما در صرفه‌جویی انرژی.",
          image: "pic/1035.jpg"
        }
      ]
    },
    projects: {
      title: "پروژه‌های منتخب",
      items: [
        {
          title: "تهویه دفتر مرکزی گلرنگ",
          year: "۱۳۹۵",
          description: "واردات ونتیلاتور و هلت باکس شرکت رنسون بلژیک برای اولین بار به ایران جهت رفع مشکل تامین هوای تازه (مبحث ۱۹) و کاهش بار سرمایشی در ماه‌های معتدل.",
          image: "pic/1013.jpg"
        },
        {
          title: "بیمارستان ۱۰۰۰ تختخوابی قم",
          year: "۱۴۰۴",
          description: "پروژه بازرسی پوسته نما.",
          image: "pic/1002.jpg"
        },
        {
          title: "هتل فرشته پاسارگاد",
          year: "۱۴۰۳",
          description: "مدیریت موکاپ نمای بتنی.",
          link: "https://alumglass.com/portfolio/hotel-fereshte/",
          image: "pic/1003.jpg"
        },
        {
          title: "بورس کالا",
          year: "۱۴۰۲",
          description: "نمای بتن UHPC و شیشه.",
          image: "pic/1004.jpg"
        },
        {
          title: "برج‌های دوقلو گلستان",
          year: "۱۴۰۰",
          description: "تولید نمای یونیتایز (ساخت ایران).",
          link: "https://alumglass.com/portfolio/golestan-towers/#",
          image: "pic/1005.jpg"
        },
        {
          title: "برج جام (خلیج فارس)",
          year: "۱۳۹۸",
          description: "اجرای نمای یونیتایز ایرانی برای اولین بار.",
          image: "pic/1006.jpg"
        },
        {
          title: "آسمان‌نمای گنبد مینا",
          year: "۱۳۹۳",
          description: "راه‌اندازی و تجهیز (معماری، برق، نرم‌افزار/سخت‌افزار).",
          link: "https://alumglass.com/portfolio/gonbad-mina-planetarium/",
          image: "pic/1007.jpg"
        },
        {
          title: "باغ کتاب تهران",
          year: "۱۳۹۰",
          description: "پوسته‌های شیشه‌ای و مهندسی نما.",
          link: "https://alumglass.com/portfolio/book_garden/",
          image: "pic/1008.jpg"
        }
      ]
    },
    startups: {
      title: "استارتاپ‌ها و سرمایه‌گذاری‌ها",
      items: [
        {
          title: "زیگورات سولوشنز (Ziggurat Solutions)",
          year: "فعالیت فعلی",
          description: "استارتاپ جدید من در حوزه مدیریت انرژی در پوسته ساختمان‌ها. ارائه راهکارهای نوآورانه برای پوسته‌های ساختمانی پایدار.",
          link: "https://zigguratsolutions.com/",
          image: "pic/1025.jpg",
          isHighlight: true
        },
        {
          title: "اپلیکیشن رژیم دوکان (چاقری)",
          year: "۱۳۹۵-۱۳۹۸",
          description: "استارتاپ حوزه سلامت با الهام از رژیم دوکان دایت. ارائه خدمات به بیش از ۲۰ هزار کاربر در iOS و اندروید برای مدیریت وزن.",
          image: "pic/1015.jpg"
        },
        {
          title: "خدمات مشاوره زیگورات (پروژه پاتیناژ تهران)",
          year: "۱۳۸۸",
          description: "تاسیس شرکت زیگورات برای واردات تجهیزات شهربازی و راه‌اندازی اولین پیست اسکیت یخ مصنوعی (Xtraice) در ایران. تجربه‌ای پرچالش با درس‌های بزرگ در مدیریت استارتاپ.",
          image: "pic/1014.jpg"
        },
        {
          title: "مجله اینترنتی سیمرغ",
          year: "۱۳۸۱",
          description: "راه‌اندازی مجله اینترنتی حرفه‌ای با نویسندگان توزیع شده جغرافیایی. توسعه نرم‌افزار تحت وب اختصاصی برای دریافت و انتشار مقالات.",
          image: "pic/1016.jpg"
        },
        {
          title: "پرتال آموزش الکترونیکی پندآموز",
          year: "۱۳۸۴",
          description: "بومی‌سازی سیستم مدیریت یادگیری مودل (Moodle) در ۳ ماه و نصب و راه‌اندازی برای مشتریان متعدد.",
          image: "pic/1020.jpg"
        }
      ]
    },
    inventions: {
      title: "اختراعات و نوآوری‌ها",
      items: [
        {
          title: "دستگاه تست سیکلیک نما",
          year: "نوآوری",
          description: "دستگاهی برای تست خستگی پنل‌های نما و پوسته‌های بتنی.",
          videoEmbed: '<div id="75480661990"><script type="text/JavaScript" src="https://www.aparat.com/embed/zorvfh6?data[rnddiv]=75480661990&data[responsive]=yes&muted=true&titleShow=true"></script></div>',
          images: ["pic/1010-1.jpg", "pic/1010-2.jpg"]
        },
        {
          title: "نرم‌افزار پارامتریک نما",
          year: "۱۳۹۲",
          description: "طراحی نرم‌افزاری برای کالیبره کردن فرم نما جهت بهینه‌سازی انرژی، نور و سازه. توسعه نسخه اثبات مفهوم (POC) با استفاده از راینو و گرس‌هاپر.",
          images: ["pic/1017-1.jpg", "pic/1017-2.jpg"]
        },
        {
          title: "ردیاب چشمی برای بیماران ALS",
          year: "۱۳۹۲",
          description: "ابزار ارتباطی کم‌هزینه برای بیماران ALS با استفاده از دوربین هک شده C920، فیلترهای مادون قرمز و نرم‌افزار تحت وب برای کنترل رایانه با حرکت چشم.",
          images: ["pic/1012-1.jpg", "pic/1012-2.jpg"]
        },
        {
          title: "دستگاه تست آب‌بندی و هوابندی نما",
          year: "نوآوری",
          description: "دستگاهی برای تست پوسته‌های نما در برابر نفوذ آب و هوا.",
          link: "https://alumglass.com/services/facade-testing/",
          images: ["pic/1009-1.jpg", "pic/1009-2.jpg"]
        },
        {
          title: "نانو پوشش زیگورات",
          year: "محصول",
          description: "پوشش نانو کاهنده گرما و مدیریت انرژی در ساختمان.",
          link: "https://zigguratsolutions.com",
          images: ["pic/1011-1.jpg", "pic/1011-2.jpg"]
        }
      ]
    },
    publications: {
      title: "مقالات و انتشارات",
      items: [
        {
          type: 'book',
          title: "کاربرد تئوری آشوب در دنیای تجارت",
          publisher: "آمازون",
          link: "https://www.amazon.com/Application-Chaos-Theory-Business-World/dp/3843383340/",
          image: "pic/1040.jpg"
        },
        {
          type: 'paper',
          title: "بررسی آشوب در شاخص بورس اوراق بهادار تهران",
          authors: "علی معینی، مهدیahrari، سعید مادرشاهی",
          year: "۱۳۸۶",
          link: "https://d1wqtxts1xzle7.cloudfront.net/109518839/article_31005_6e51fd93a625455e4f212d02db23c33a-libre.pdf",
          image: "pic/1041.jpg"
        },
        {
          type: 'paper',
          title: "پروژه پروتو-فیوز: جهش در داده‌های ناخودآگاه",
          description: "روش‌هایی برای ارتقای خلاقیت فضایی معماران.",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=p4zyhKEAAAAJ&citation_for_view=p4zyhKEAAAAJ:WF5omc3nYNoC",
          image: "pic/1042.jpg"
        },
        {
          type: 'article',
          title: "نقش تهویه طبیعی و نماهای دوپوسته در کاهش مصرف انرژی",
          publisher: "ویرگول",
          link: "https://virgool.io/FacadeForum/ventilation-energysaving-gf5adklk2xn8",
          image: "pic/1043.jpg"
        },
        {
          type: 'article',
          title: "ارزیابی تأثیر ملی نانوپوشش زیگورات بر امنیت انرژی",
          publisher: "ویرگول",
          link: "https://virgool.io/@saeedsm/ziggurat-saving-dpwotgvca0ts",
          image: "pic/1044.jpg"
        },
        {
          type: 'article',
          title: "شیشه‌های خورشیدی (سولار): مدیریت نور و انرژی",
          publisher: "ویرگول",
          link: "https://virgool.io/@saeedsm/coatedglassiniran-q2xlsxx42w7r",
          image: "pic/1045.jpg"
        }
      ]
    },
    civil: {
      title: "فعالیت‌های مدنی و اجتماعی",
      items: [
        {
          title: "جامعه وبلاگ‌نویسان فارسی",
          year: "۱۳۸۱",
          description: "راه‌اندازی لیستی از وبلاگ‌های مشهد، توسعه جامعه وبلاگ‌نویسی و راهنماهای Movable Type و حضور در نمایشگاه‌های ICT برای معرفی وبلاگ‌نویسی.",
          image: "pic/1019.jpg"
        },
        {
          title: "72hours.ir",
          year: "۱۳۸۷",
          description: "تاسیس سایت برای آموزش شهروندان جهت بقا در ۷۲ ساعت اول پس از زلزله یا سیل. انتقال پروژه به شرکت پزشکی و سپس فعالیت مجدد خیریه.",
          link: "http://72hours.ir",
          image: "pic/1046.jpg"
        },
        {
          title: "موسس انجمن ALS",
          year: "جاری",
          description: "عضو هیئت موسس و همکاری در تاسیس انجمن حمایت از بیماران ALS."
        },
        {
          title: "فعال ایمنی نما",
          year: "جاری",
          description: "فعال مدنی در حوزه ایمنی نما و مدیریت مصرف انرژی."
        }
      ]
    },
    contact: {
      title: "تماس با من",
      emailLabel: "ایمیل",
      linkedinLabel: "پروفایل لینکدین",
      aparatLabel: "کانال آپارات"
    }
  }
};