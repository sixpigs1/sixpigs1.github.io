// Awards data

export interface Award {
    id: number;
    category: 'academic' | 'competition';
    year: string;
    name: string; // combined
    organization?: string; // combined
    description?: string; // combined
    image?: string;
}

export const awards: Award[] = [
    {
        id: 1,
        category: 'competition',
        year: '2022',
        name: '第39届全国中学生物理竞赛浙江省二等奖',
        organization: '浙江省物理学会',
        image: '',
    },
    {
        id: 2,
        category: 'competition',
        year: '2024',
        name: '中国大学生机器人及人工智能大赛全国一等奖',
        organization: '',
        image: '/images/awards/robotics-competition.jpg',
    },
    {
        id: 3,
        category: 'competition',
        year: '2024',
        name: '中国大学生飞行器创新设计大赛东部赛区一等奖',
        organization: '',
        image: '/images/awards/national-scholarship.jpg',
    },
    {
        id: 4,
        category: 'academic',
        year: '2024',
        name: '吴炯孙洁阳光奖学金',
        organization: '',
        image: '/images/awards/national-scholarship.jpg',
    },
    {
        id: 5,
        category: 'academic',
        year: '2024',
        name: '华泰证券科技奖学金',
        organization: '上海交通大学',
        image: '/images/awards/national-scholarship.jpg',
    },
    {
        id: 6,
        category: 'competition',
        year: '2024',
        name: '"高教社杯"中国大学生数学建模竞赛上海市二等奖',
        organization: '',
        image: '/images/awards/national-scholarship.jpg',
    },
    {
        id: 7,
        category: 'competition',
        year: '2025',
        name: '数模美赛M奖',
        organization: '',
        image: '/images/awards/national-scholarship.jpg',
    },
    {
        id: 8,
        category: 'academic',
        year: '2025',
        name: '吴贤铭崔德娴奖学金',
        organization: '上海交通大学浦江国际学院',
        image: '/images/awards/national-scholarship.jpg',
    },
    {
        id: 9,
        category: 'academic',
        year: '2025',
        name: '燕宝奖学金',
        organization: '上海交通大学，宁夏燕宝基金会',
        image: '/images/awards/national-scholarship.jpg',
    },
    {
        id: 10,
        category: 'academic',
        year: '2025',
        name: '上海交通大学优秀学生奖学金B等',
        organization: '上海交通大学',
        image: '/images/awards/national-scholarship.jpg',
    },
];

// Helper function to get awards by category (sorted by id descending)
export function getAwardsByCategory(category: 'academic' | 'competition') {
    return awards
        .filter(award => award.category === category)
        .sort((a, b) => b.id - a.id);
}

// Helper function to get selected awards for home page (sorted by id descending)
export function getSelectedAwards(limit: number = 3) {
    return [...awards]
        .sort((a, b) => b.id - a.id)
        .slice(0, limit);
}
