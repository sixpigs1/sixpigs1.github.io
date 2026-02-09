// Journey / Explore data

export interface Experience {
    id: number;
    year: string;
    name: {
        zh: string;
        en: string;
    };
    description: {
        zh: string;
        en: string;
    };
    images?: string[];
    expandedContent?: {
        zh: string;
        en: string;
    };
}

export const journeyExperiences: Experience[] = [
    {
        id: 1,
        year: '2023',
        name: {
            zh: '学生社团活动',
            en: 'Student Club Activities',
        },
        description: {
            zh: '参与校园技术社团,组织技术讲座和工作坊',
            en: 'Participated in campus tech club, organized tech talks and workshops',
        },
        images: ['/images/journey/club1.jpg', '/images/journey/club2.jpg'],
        expandedContent: {
            zh: '在学生技术社团担任组织者,策划并执行了多场技术分享会,涵盖人工智能、机器人等主题。这段经历锻炼了我的组织能力和沟通技巧。',
            en: 'Served as an organizer in the student tech club, planned and executed multiple tech sharing sessions covering AI, robotics, and other topics. This experience enhanced my organizational and communication skills.',
        },
    },
    {
        id: 2,
        year: '2022',
        name: {
            zh: '支教活动',
            en: 'Teaching Volunteer Program',
        },
        description: {
            zh: '前往偏远地区参与支教,教授STEM课程',
            en: 'Volunteered in remote areas to teach STEM courses',
        },
        images: ['/images/journey/volunteer1.jpg'],
        expandedContent: {
            zh: '利用暑假时间前往偏远山区小学支教,为孩子们带去科学和技术启蒙课程。这段经历让我深刻认识到教育的重要性和技术的社会价值。',
            en: 'Used summer vacation to teach at a primary school in remote mountainous areas, bringing science and technology education to children. This experience deepened my understanding of the importance of education and the social value of technology.',
        },
    },
    {
        id: 3,
        year: '2021',
        name: {
            zh: '工程项目开发',
            en: 'Engineering Project Development',
        },
        description: {
            zh: '参与开源硬件项目,开发智能设备原型',
            en: 'Participated in open-source hardware project, developed smart device prototype',
        },
        images: ['/images/journey/project1.jpg', '/images/journey/project2.jpg'],
        expandedContent: {
            zh: '与团队成员合作开发了一款开源智能家居设备,从硬件设计到软件开发全程参与。项目在GitHub上获得了良好反响。',
            en: 'Collaborated with team members to develop an open-source smart home device, involved in the entire process from hardware design to software development. The project received positive feedback on GitHub.',
        },
    },
];

export interface Reflection {
    id: number;
    date: string;
    title: {
        zh: string;
        en: string;
    };
    content: {
        zh: string;
        en: string;
    };
}

export const reflections: Reflection[] = [
    {
        id: 1,
        date: '2024',
        title: {
            zh: '关于研究与工程的思考',
            en: 'Thoughts on Research and Engineering',
        },
        content: {
            zh: '在学术研究和工程实践之间寻找平衡是一个持续的挑战。我认为理论创新需要与实际应用相结合,才能真正推动技术进步。通过这些年的经历,我越来越认识到跨学科合作和实践经验的重要性。',
            en: 'Finding balance between academic research and engineering practice is an ongoing challenge. I believe that theoretical innovation needs to be combined with practical applications to truly advance technology. Through these years of experience, I have increasingly recognized the importance of interdisciplinary collaboration and hands-on experience.',
        },
    },
];
