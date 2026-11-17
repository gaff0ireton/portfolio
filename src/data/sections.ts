export const sections = {
    profile: {
        id: 'profile',
        title: 'Profile',
    },
    skills: {
        id: 'skills',
        title: 'Skills',
    },
    works: {
        id: 'works',
        title: 'Works',
    },
    contact: {
        id: 'contact',
        title: 'Contact',
    },
} as const;

export const sectionList = Object.values(sections);