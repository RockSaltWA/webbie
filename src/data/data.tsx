import {
    AcademicCapIcon,
    BuildingOffice2Icon,
    CalendarIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

// import InstagramIcon from '../components/Icon/InstagramIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import profilepic from '../images/profilepic.jpg';
import heroImage from '../images/SGLC.png';
import {
    About,
    ContactSection,
    ContactType,
    Hero,
    HomepageMeta,
    Social,
    TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'Jack Doughty | Data & AI Delivery Lead',
    description: 'Strategic Account Lead at micro1 with a Master’s in Applied Math from the University of Washington. I lead human-data, benchmark, and model-evaluation programs for frontier AI labs. Former Scale AI queue manager and Microsoft data analyst, targeting Technical Program Manager and ML-delivery roles.',
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Resume: 'resume',
    Stats: 'stats',
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
                I’m a Seattle-based <strong className="text-stone-100">Strategic Account Lead at micro1</strong>, where I own frontier AI lab accounts and lead the human-data and model-evaluation programs behind them. I hold a Master’s in Applied Math from the <strong className="text-stone-100">University of Washington</strong>, and I like turning messy research goals into datasets and deliveries that actually ship.
            </p>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                Before micro1 I ran GenAI data queues at Scale AI and drove product analytics at Microsoft. I’m always up for a strong <strong className="text-stone-100">Technical Program Manager</strong> or ML-delivery challenge, so let’s connect.
            </p>
        </>
    ),
    actions: [
        {
            href: `#${SectionId.Contact}`,
            text: 'Let’s Connect',
            primary: true,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `I’m an applied mathematician turned data and delivery lead. At micro1 I’ve gone from Human Data Manager to Strategic Account Lead in under a year, owning frontier AI lab accounts and the benchmark, evaluation, and audit work that keeps them shipping. Before that I managed GenAI data queues at Scale AI and built product analytics at Microsoft. I’m targeting Technical Program Manager and ML-delivery roles where rigor and speed both matter.`,
    aboutItems: [
        {label: 'Location', text: 'Seattle, WA', Icon: MapIcon},
        {label: 'Age', text: '25', Icon: CalendarIcon},
        {label: 'Nationality', text: 'Pacific Northwestern :)', Icon: FlagIcon},
        {label: 'Interests', text: 'AI Program Management, Data Analytics, Data Science', Icon: SparklesIcon},
        {label: 'Study', text: 'University of Washington, M.S. Applied & Computational Maths', Icon: AcademicCapIcon},
        {label: 'Work', text: 'micro1 | Strategic Account Lead', Icon: BuildingOffice2Icon},
    ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: '2023',
        location: 'University of Washington',
        title: 'Masters in Applied and Computational Mathematics',
        content: <p>Focused particularly on data science and analytics, along with data visualization</p>,
    },
    {
        date: '2022',
        location: 'College of Wooster',
        title: 'Applied Mathematics',
        content: <p>Picked up the fundamentals of machine learning and wrote a thesis on Optimizing Paths in a Weighted Plane</p>,
    },
];

export const experience: TimelineItem[] = [
    {
        date: 'Nov 2025 - Present',
        location: 'micro1',
        title: 'Strategic Account Lead',
        content: (
            <>
                <p>
                    Joined as a Human Data Manager and earned four promotions in eight months, moving through Human Data Lead, Associate Strategic Project Lead, and Strategic Project Lead to Strategic Account Lead.
                </p>
                <ul>
                    <li>Own strategic accounts end to end, from scoping and pricing through delivery, serving as the main point of contact for frontier AI labs buying human data and evaluation work.</li>
                    <li>Lead multi-workstream delivery across benchmark builds, model evaluations, and data audits, holding quality, timelines, and margins on track at the same time.</li>
                    <li>Built quality-control harnesses and audit pipelines that catch scoring and labeling defects before they reach the client, protecting delivery accuracy on high-stakes datasets.</li>
                    <li>Stood up the queue, staffing, and QA playbooks the human-data teams still run on, turning ad hoc processes into repeatable operations as headcount scaled.</li>
                    <li>Partner with client stakeholders on rubrics, edge cases, and roadmap, translating open-ended research goals into concrete task specs and acceptance criteria.</li>
                </ul>
            </>
        ),
    },
    {
        date: '2024 - 2025',
        location: 'Scale AI',
        title: 'GenAI Queue Manager - Applied Mathematics',
        content: (
            <>
                <p>
                    Provided leadership on $10M+ AI projects, delivering enterprise-grade datasets and pioneering benchmarks under high-stakes engagements.
                </p>
                <ul>
                    <li>Owned end-to-end queue management across concurrent data pipelines serving thousands of contributors while meeting aggressive SLAs.</li>
                    <li>Worked directly with Fortune 500 companies to design and facilitate the production of datasets.</li>
                    <li>Defined task specs, scoring rubrics, and QA workflows for complex math (algebra → calculus → probability/stats), ensuring rigor and consistency.</li>
                    <li>Helped lead ENIGMAEVAL, an innovative benchmark for evaluating long multimodal reasoning in state-of-the-art ML models, published on arXiv (hosted by Cornell University).</li>
                    <li>Built lightweight reporting to monitor throughput and quality; proactively unblocked pipeline issues and optimized staffing/priority.</li>
                    <li>Authored SOPs and ran live trainings/webinars to align global teams and lift first-pass acceptance.</li>
                    <li>Partnered with client stakeholders on edge cases and change requests; documented decisions and playbooks to reduce rework.</li>
                </ul>
            </>
        ),
    },
    {
        date: '2024 - 2024',
        location: 'Remotasks / Scale AI',
        title: 'Applied Mathematics Consultant',
        content: (
            <>
                <p>
                    Crafted high-quality mathematics datasets for model training and evaluation.
                </p>
                <ul>
                    <li>Wrote original, multi-step problems with fully worked solutions across calculus, linear algebra, probability, and discrete math.</li>
                    <li>Balanced difficulty and topic coverage; tagged metadata and validated correctness through self-checks and peer review.</li>
                    <li>Refined prompts and rubrics to remove ambiguity, improving clarity, solvability, and pedagogical value.</li>
                </ul>
            </>
        ),
    },
    {
        date: '2023 - 2024',
        location: 'Hanson Consulting Group / Microsoft',
        title: 'Data Analyst',
        content: (
            <>
                <p>
                    Supported a Microsoft Business Intelligence team with consumer platform analytics used in weekly business reviews and go-to-market decisions.
                </p>
                <ul>
                    <li>Built and maintained Power BI dashboards tracking acquisition, engagement, and monetization (DAU/MAU, retention cohorts, session length, conversion, upsell).</li>
                    <li>Owned product health readouts across the portfolio, turning telemetry into clear insights and next-step recommendations for PMs and marketing.</li>
                    <li>Analyzed user funnels across platforms, diagnosing shifts driven by product updates, features, and promotions, and flagged churn and reactivation drivers.</li>
                    <li>Partnered with data engineering and product to standardize metric definitions and QA data quality, cutting reporting inconsistencies across the portfolio.</li>
                    <li>Delivered ad hoc deep dives on merchandising and lifecycle experiments, informing prioritization of content placement and campaigns.</li>
                </ul>
            </>
        ),
    },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Let’s Build Something Great Together',
    description: 'I’m excited to discuss how my expertise in AI program management and data analytics can drive your next project. Reach out to explore opportunities or share ideas!',
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
    //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
