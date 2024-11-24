import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    BuildingOffice2Icon,
    CalendarIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

// import InstagramIcon from '../components/Icon/InstagramIcon';
import DiscordIcon from '../components/Icon/DiscordIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import testimonialImage from '../images/BanishedKeep.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
//import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import heroImage from '../images/SGLC.png';
import {
    About,
    ContactSection,
    ContactType,
    Hero,
    HomepageMeta,
    PortfolioItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'Jack Doughty\'s personal website',
    description: "Looking for work!",
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Portfolio: 'portfolio',
    Resume: 'resume',
    Skills: 'skills',
    Stats: 'stats',
    Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: heroImage,
    name: `I'm Jack Doughty.`,
    description: (
        <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                I'm a Seattle based <strong className="text-stone-100">Data Scientist and Analyst</strong>, freshly graduated from <strong className="text-stone-100">University of Washington</strong> with a Master's Degree in Applied and Computational Mathematics!
            </p>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                In my free time, you can catch me playing <strong className="text-stone-100">competitive</strong> video games, organizing and <strong className="text-stone-100">streamhosting</strong> esports events,
                creating polls and data sets as a <strong className="text-stone-100">community manager</strong>, or cooking up some crazy food and drink! Some nice spray paint could not go amiss either :D
            </p>
        </>
    ),
    actions: [
        {
            href: '/assets/resume.pdf',
            text: 'Resume',
            primary: true,
            Icon: ArrowDownTrayIcon,
        },
        {
            href: `#${SectionId.Contact}`,
            text: 'Contact',
            primary: false,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `For as long as I can remember, math and analytics. Throughout the years I have picked up languages like Python, C++, and SQL to pursue a career in Data Science/Analytics/Statistics with machine learning.`,
    aboutItems: [
        {label: 'Location', text: 'Seattle, WA', Icon: MapIcon},
        {label: 'Age', text: '23', Icon: CalendarIcon},
        {label: 'Nationality', text: 'Pacific Northwestern :)', Icon: FlagIcon},
        {label: 'Interests', text: 'Data Science + Analytics', Icon: SparklesIcon},
        {label: 'Study', text: 'University of Washington, M.S.', Icon: AcademicCapIcon},
        {label: 'Work', text: 'Scale AI | Queue Manager', Icon: BuildingOffice2Icon},
    ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: 'Skills',
        skills: [
            {
                name: 'Mathematics',
                level: 9,
            },
            {
                name: 'Python',
                level: 7,
            },
            {
                name: 'SQL',
                level: 6,
            },
            {
                name: 'R',
                level: 4,
            },
        ],
    },
    {
        name: 'Data Visualization Software',
        skills: [
            {
                name: 'Tableau',
                level: 8,
            },
            {
                name: 'Excel',
                level: 6,
            },
            {
                name: 'D3.js',
                level: 3,
            },

        ],
    },
    {
        name: 'Mathematics',
        skills: [
            {
                name: 'Number Theory',
                level: 9,
            },
            {
                name: 'PDEs and ODEs',
                level: 7,
            },
            {
                name: 'Multivariate Calculus',
                level: 7,
            },
        ],
    },
    {
        name: 'Soft Skills',
        skills: [
            {
                name: 'Communication and Collaboration',
                level: 9,
            },
            {
                name: 'Logic and Decision Making',
                level: 9,
            },
            {
                name: 'Time Management',
                level: 7,
            },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Gimmick or Gameplay: Addressing the GP Mario Beach Problem',
        description: 'Using data analytics and polling metrics to vouch for the removal of GP Mario Beach from the pack.',
        url: 'https://rocksaltwa.com/assets/GPMarioBrief.pdf',
        image: porfolioImage1,
    },
    //{
    //    title: 'Project title 2',
    //    description: 'Give a short description of your project here.',
    //    url: 'https://timbaker.me',
    //    image: porfolioImage2,
    //},
    {
        title: 'Evolution of Multi-Platform Games',
        description: 'Visualization showcasing the proliferation of Multi-Platform games and their incredible success.',
        url: 'https://rocksaltwa.github.io/Evolution-of-Multi-Platform-Games/',
        image: porfolioImage3,
    },
    {
        title: 'CTGP Mid 2023 Poll Visualization',
        description: 'Poll results from the midterm MKW season visualized for future analysis',
        url: 'https://rocksaltwa.github.io/CTGP_Mid2023_Results/',
        image: porfolioImage4,
    },
    //{
    //    title: 'Project title 5',
    //    description: 'Give a short description of your project here.',
    //    url: 'https://timbaker.me',
    //    image: porfolioImage5,
    //},
    {
        title: 'Binomial Distribution Within Gameplay Behavior',
        description: 'Recognizing the probability and distribution of track picks and their impact on behavior in-game.',
        url: 'https://rocksaltwa.com/assets/BinomialDistribution.pdf',
        image: porfolioImage6,
    },
    //{
    //    title: 'Project title 7',
    //    description: 'Give a short description of your project here.',
    //    url: 'https://timbaker.me',
    //    image: porfolioImage7,
    //},
    {
        title: 'Optimizing Paths in a Weighted Plane',
        description: 'My undergraduate thesis where I analyze methodology to apply optimized weighted plates to optimized gaming strategy.',
        url: 'https://rocksaltwa.com/assets/Capstone_Project.pdf',
        image: porfolioImage8,
    },
    //{
    //    title: 'Project title 9',
    //    description: 'Give a short description of your project here.',
    //    url: 'https://timbaker.me',
    //    image: porfolioImage9,
    //},
    {
        title: 'Esport Earnings: Are All Games Created Equal?',
        description: 'A visualization displaying the earnings of Esports players all around the world.',
        url: 'https://rocksaltwa.github.io/A3_Esports.io/',
        image: porfolioImage10,
    },
    //{
    //    title: 'Project title 11',
    //    description: 'Give a short description of your project here.',
    //    url: 'https://timbaker.me',
    //    image: porfolioImage11,
    //},
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: 'August 2023',
        location: 'University of Washington',
        title: 'Masters in Applied and Computational Mathematics',
        content: <p>Focused particularly on data science and analytics, along with data visualization</p>,
    },
    {
        date: 'August 2022',
        location: 'College of Wooster',
        title: 'Applied Mathematics',
        content: <p>Picked up the fundamentals of machine learning and wrote a thesis on Optimizing Paths in a Weighted Plane</p>,
    },
];

export const experience: TimelineItem[] = [
    {
        date: 'May 2024 - Present',
        location: 'Scale AI',
        title: 'Gaming Data Analyst',
        content: (
            <p>
                Queue Managing involves overseeing a pipeline of sometimes thousands of contractors submitting their mathematical data to 
            </p>
        ),
    },
    {
        date: 'Jan 2023 - April 2024',
        location: 'Remotasks / Scale AI',
        title: 'Gaming Data Analyst',
        content: (
            <p>
                As a Gaming Data Analyst at Hanson Consulting Group, I specialize in dissecting complex datasets to uncover actionable insights within the PC and console gaming industry. My role encompasses a deep dive into gaming trends and player behaviors, utilizing advanced data analysis techniques to inform strategic decision-making. This dynamic position combines rigorous data management with practical gameplay analysis, positioning me as a key contributor to shaping business intelligence and market strategy for our clients.
            </p>
        ),
    },
    {
        date: 'August 2023 - December 2023',
        location: 'Hanson Consulting Group / Microsoft',
        title: 'Gaming Data Analyst',
        content: (
            <p>
                As a Gaming Data Analyst at Hanson Consulting Group, I specialize in dissecting complex datasets to uncover actionable insights within the PC and console gaming industry. My role encompasses a deep dive into gaming trends and player behaviors, utilizing advanced data analysis techniques to inform strategic decision-making. This dynamic position combines rigorous data management with practical gameplay analysis, positioning me as a key contributor to shaping business intelligence and market strategy for our clients.
            </p>
        ),
    },
    {
        date: 'November 2022 - August 2023',
        location: 'CTGP Revolution',
        title: 'Administrator of Analytics and Competitive Play',
        content: (
            <p>
                I moderate and organize events not only within the competitive community, but the greater community of over 10,000 monthly active players. Much of this involves feedback and polling from the scale of individuals to the whole community at large, and then pitching proposed changes to the CEO directly. I developed models and heuristics to help more analytically decide removal criteria for software. I also serve as a liaison between two diametrically opposed sections of the community, casual and competititve players. I have to settle significant disagreements both small and large, ranging from a frustrated player to threats of DMCA.
            </p>
        ),
    },
    {
        date: 'December 2020 - November 2022',
        location: 'CTGP Revolution',
        title: 'QA + Approval Analyst',
        content: (
            <p>
                I evaluated and helped provide critical feedback for developing software seeking inclusion in the game. Through bugtesting and playtesting, I managed to significantly assist in the creation of 7 tracks to the point of being a named contributor, with hundreds of others also receiving various feedback over my 2 years volunteering here.
            </p>
        ),
    },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
    imageSrc: testimonialImage,
    testimonials: [
        {
            name: 'Nathan Haulman',
            text: 'Jack\'s impact within CTGP cannot be understated. His exemplary communication and problem solving has lead to a marked improvement in public relations between the pack\'s administration and its playerbase. Furthermore, his experience in data collection and analysis has guided CTGP to make business decisions that best tailor the needs of its playerbase.',
            image: 'https://cdn.discordapp.com/attachments/719758392142463007/1138670628690460712/Nate.png',
        },
        //{
        //    name: 'Jane Doe',
        //    text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
        //    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
        //},
        //{
        //    name: 'Someone else',
        //    text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
        //    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        //},
    ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Get in touch!',
    description: 'I would love to answer any potential questions you have for me, feel free to reach out!',
    items: [
        {
            type: ContactType.Email,
            text: 'jdoughtyggwp@gmail.com',
            href: 'mailto:jdoughtyggwp@gmail.com',
        },
        {
            type: ContactType.Location,
            text: 'Seattle, Washington',
            href: 'https://www.google.com/maps/place/Seattle,+WA/@47.6130386,-122.4979445,12z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708!16zL20vMGQ5anI?entry=ttu',
        },
        {
            type: ContactType.Discord,
            text: 'rocksaltwa',
            href: 'https://www.discordapp.com/users/263514562064678914',
        },
        {
            type: ContactType.Github,
            text: 'rocksaltwa',
            href: 'https://github.com/RockSaltWA',
        },
    ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/RockSaltWA'},
    //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jack-doughty-894137266/'},
    //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
    {label: 'Discord', Icon: DiscordIcon, href: 'https://www.discordapp.com/users/263514562064678914'},
    //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
