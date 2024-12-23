export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'DS logo'
    },
    title: 'David Slezak',
    description: 'Personal website and blog by David Slezak',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'David Slezak - Personal website and blog created with Ovidius - Astro.js and Tailwind CSS theme'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        // {
        //     text: 'Gallery', 
        //     href: '/gallery'
        // },        
        // {
        //     text: 'Playground', 
        //     href: '/playground'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Download Theme',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        // }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        // {
        //     text: 'Download Theme',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        // }
    ],
    socialLinks: [
        // {
        //     text: 'Go to GitHub repo',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme',
        //     icon: 'github'
        // },
        {
            text: 'Follow on LinkedIn',
            href: 'https://www.linkedin.com/in/david-slezak-sk/',
            icon: 'linkedin'
        },
        // {
        //     text: 'Follow on X',
        //     href: 'https://twitter.com/justgoodui',
        //     icon: 'x-twitter'
        // }
    ],
    hero: {
        title: 'Exploring Quality and Creativity',
        text: "Hi, I'm David Slezak - a QA Engineer with a passion for automation, especially Playwright. \n Welcome to my personal space where testing meets creativity!",
        avatar: {
            src: '/avatar.jpg',
            alt: 'David Slezak'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    },
    // subscribe: {
    //     title: 'Subscribe to Ovidius Newsletter',
    //     text: 'One update per week. All the latest news directly in your inbox.',
    //     formUrl: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0'
    // },
    postsPerPage: 5
};

export default siteConfig;
