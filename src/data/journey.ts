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
        year: '2023-12',
        name: 'Teaching Volunteer Program 湖南曹炎支教',
        description: '在寒假中前往湖南衡阳祁东县曹炎中学进行为其两周的支教，为孩子们带去科学技术和文化熏陶课程',
        images: ['/images/journey/teachingVolunteer/0.jpg', '/images/journey/teachingVolunteer/1.jpg', '/images/journey/teachingVolunteer/2.jpg', '/images/journey/teachingVolunteer/3.jpg', '/images/journey/teachingVolunteer/4.jpg', '/images/journey/teachingVolunteer/5.jpg', '/images/journey/teachingVolunteer/6.jpg', '/images/journey/teachingVolunteer/7.jpg', '/images/journey/teachingVolunteer/8.jpg', '/images/journey/teachingVolunteer/9.jpg', '/images/journey/teachingVolunteer/10.jpg', '/images/journey/teachingVolunteer/11.jpg', '/images/journey/teachingVolunteer/12.jpg'],
        expandedContent: '',
    },
    {
        id: 2,
        year: '2023 ~ 2024',
        name: 'SJTU Air Sports Club 上海交通大学航模队',
        description: '在上海交通大学航模队尤其是多旋翼组参与飞行器设计、制造和飞行测试，积累了丰富的实践经验并获得多项竞赛奖项',
        images: ['/images/journey/asc/0.jpg', '/images/journey/asc/1.jpg', '/images/journey/asc/2.jpg', '/images/journey/asc/3.jpg', '/images/journey/asc/4.jpg', '/images/journey/asc/5.png', '/images/journey/asc/6.jpg', '/images/journey/asc/7.jpg', '/images/journey/asc/8.jpg'],
        expandedContent: '',
    },
    {
        id: 3,
        year: '2024-09 ~ 2024-05',
        name: 'Teaching Assistant 课程助教',
        description: '担任 CHEM2100J(大学化学)和 CHEM2110J(大学化学实验)课程的助教，负责讲解 Recitation Class 批阅作业和考卷，主持实验考试，协助教授进行课程管理和学生辅导。',
        images: ['/images/journey/teachingAssistant/0.jpg', '/images/journey/teachingAssistant/1.jpg', '/images/journey/teachingAssistant/2.jpg', '/images/journey/teachingAssistant/3.jpg', '/images/journey/teachingAssistant/4.jpg'],
        expandedContent: '',
    },
    {
        id: 4,
        year: '2024 ~ 2026',
        name: 'Cycling Adventures around Shanghai 上海周边的自行车之旅',
        description: '从大二开始，用自行车探索上海周边的自然风光和人文景点，已经完成了多条路线，积累了丰富的骑行经验并拍摄照片记录旅程。',
        images: ['/images/journey/cycling/0.jpg', '/images/journey/cycling/1.jpg', '/images/journey/cycling/2.jpg', '/images/journey/cycling/3.jpg', '/images/journey/cycling/4.jpg', '/images/journey/cycling/5.jpg'],
        expandedContent: '',
    },
    {
        id: 5,
        year: '2025-04',
        name: 'Black Myth: Wukong Art Exhibition 黑神话：悟空艺术展',
        description: '参观黑神话：悟空艺术展，一个展示中国原创游戏艺术和文化的展览，深入了解了游戏开发背后的创意过程和中国传统文化元素的现代诠释。',
        images: ['/images/journey/wukong/0.jpg', '/images/journey/wukong/1.jpg', '/images/journey/wukong/2.jpg', '/images/journey/wukong/3.jpg', '/images/journey/wukong/4.jpg', '/images/journey/wukong/5.jpg', '/images/journey/wukong/6.jpg', '/images/journey/wukong/7.jpg', '/images/journey/wukong/8.jpg'],
        expandedContent: 'Listen closely, their complaints ride upon the wind. 你听，那风里传来的，都是求而不得的声音。',
    },
    {
        id: 6,
        year: '2026-12',
        name: 'Prof. Richard Sutton\'s Lecture at School of AI, SJTU',
        description: '强化学习领域的先驱 Richard Sutton 教授在上海交通大学人工智能学院的讲座，深入探讨了人工智能的发展趋势和挑战。',
        images: ['/images/journey/sutton/0.jpg', '/images/journey/sutton/1.jpg', '/images/journey/sutton/2.jpg'],
        expandedContent: '',
    },
];

export interface Reflection {
    id: number;
    date: string;
    title: string;
    content: string;
}

export const reflections: Reflection[] = [
    // {
    //     id: 1,
    //     date: '2024',
    //     title: 'Thoughts on Research and Engineering / 关于研究与工程的思考',
    //     content: 'Finding balance between academic research and engineering practice is an ongoing challenge. I believe that theoretical innovation needs to be combined with practical applications to truly advance technology. Through these years of experience, I have increasingly recognized the importance of interdisciplinary collaboration and hands-on experience. / 在学术研究和工程实践之间寻找平衡是一个持续的挑战。',
    // },
];

// Helper: sorted by id descending
export function getSortedJourneyExperiences() {
    return [...journeyExperiences].sort((a, b) => b.id - a.id);
}

export function getSortedReflections() {
    return [...reflections].sort((a, b) => b.id - a.id);
}
