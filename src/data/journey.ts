// Journey / Explore data

export interface Experience {
    id: number;
    year: string;
    name: string;
    description: string;
    images?: string[];
    expandedContent?: string;
}

export const journeyExperiences: Experience[] = [
    {
        id: 1,
        year: '2023',
        name: 'Student Club Activities / 学生社团活动',
        description: 'Participated in campus tech club, organized tech talks and workshops. / 参与校园技术社团,组织技术讲座和工作坊',
        images: ['/images/journey/club1.jpg', '/images/journey/club2.jpg', '/images/journey/club3.jpg'],
        expandedContent: 'Served as an organizer in the student tech club, planned and executed multiple tech sharing sessions covering AI, robotics, and other topics. This experience enhanced my organizational and communication skills. / 在学生技术社团担任组织者,策划并执行了多场技术分享会,涵盖人工智能、机器人等主题。',
    },
    {
        id: 2,
        year: '2022',
        name: 'Teaching Volunteer Program / 支教活动',
        description: 'Volunteered in remote areas to teach STEM courses. / 前往偏远地区参与支教,教授STEM课程',
        images: ['/images/journey/volunteer1.jpg'],
        expandedContent: 'Used summer vacation to teach at a primary school in remote mountainous areas, bringing science and technology education to children. This experience deepened my understanding of the importance of education and the social value of technology. / 利用暑假时间前往偏远山区小学支教,为孩子们带去科学和技术启蒙课程。',
    },
    {
        id: 3,
        year: '2021',
        name: 'Engineering Project Development / 工程项目开发',
        description: 'Participated in open-source hardware project, developed smart device prototype. / 参与开源硬件项目,开发智能设备原型',
        images: ['/images/journey/project1.jpg', '/images/journey/project2.jpg'],
        expandedContent: 'Collaborated with team members to develop an open-source smart home device, involved in the entire process from hardware design to software development. The project received positive feedback on GitHub. / 与团队成员合作开发了一款开源智能家居设备,从硬件设计到软件开发全程参与。',
    },
];

export interface Reflection {
    id: number;
    date: string;
    title: string;
    content: string;
}

export const reflections: Reflection[] = [
    {
        id: 1,
        date: '2024',
        title: 'Thoughts on Research and Engineering / 关于研究与工程的思考',
        content: 'Finding balance between academic research and engineering practice is an ongoing challenge. I believe that theoretical innovation needs to be combined with practical applications to truly advance technology. Through these years of experience, I have increasingly recognized the importance of interdisciplinary collaboration and hands-on experience. / 在学术研究和工程实践之间寻找平衡是一个持续的挑战。',
    },
];
