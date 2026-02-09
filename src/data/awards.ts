// Awards data

export interface Award {
    id: number;
    category: 'academic' | 'competition';
    year: string;
    name: {
        zh: string;
        en: string;
    };
    organization: {
        zh: string;
        en: string;
    };
    description?: {
        zh: string;
        en: string;
    };
    image?: string;
}

export const awards: Award[] = [
    {
        id: 1,
        category: 'academic',
        year: '2024',
        name: {
            zh: '优秀学生奖学金',
            en: 'Outstanding Student Scholarship',
        },
        organization: {
            zh: '上海交通大学',
            en: 'Shanghai Jiao Tong University',
        },
        description: {
            zh: '表彰学业成绩优异的学生',
            en: 'Awarded to students with excellent academic performance',
        },
        image: '/images/awards/scholarship.jpg',
    },
    {
        id: 2,
        category: 'competition',
        year: '2023',
        name: {
            zh: '机器人竞赛一等奖',
            en: 'First Prize in Robotics Competition',
        },
        organization: {
            zh: '中国机器人大赛',
            en: 'China Robotics Competition',
        },
        description: {
            zh: '团队项目获得机器人操作任务一等奖',
            en: 'Team project won first prize in robotic manipulation tasks',
        },
        image: '/images/awards/robotics-competition.jpg',
    },
    {
        id: 3,
        category: 'academic',
        year: '2023',
        name: {
            zh: '国家奖学金',
            en: 'National Scholarship',
        },
        organization: {
            zh: '中华人民共和国教育部',
            en: 'Ministry of Education of China',
        },
        description: {
            zh: '国家级最高荣誉奖学金',
            en: 'Highest honor scholarship at national level',
        },
        image: '/images/awards/national-scholarship.jpg',
    },
];

// Helper function to get awards by category
export function getAwardsByCategory(category: 'academic' | 'competition') {
    return awards.filter(award => award.category === category);
}

// Helper function to get selected awards for home page
export function getSelectedAwards(limit: number = 3) {
    return awards.slice(0, limit);
}
