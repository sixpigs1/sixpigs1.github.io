// Awards data

export interface Award {
    id: number;
    category: 'academic' | 'competition';
    year: string;
    name: string;               // 学术奖项：奖项全名；竞赛奖项：比赛名称
    level?: string;             // 竞赛奖项：奖项等级，如"全国一等奖"
    organization?: string;
    description?: string;
    image?: string;
}

export const awards: Award[] = [
    {
        id: 1,
        category: 'competition',
        year: '2024-08',
        name: 'China Robotics and Artificial Intelligence Competition (中国机器人及人工智能大赛)',
        level: 'National First Prize (全国一等奖)',
        organization: '中国机器人及人工智能大赛组委会',
        image: '/images/awards/craic.png',
    },
    {
        id: 2,
        category: 'competition',
        year: '2024-08',
        name: 'China University Aircraft Design Competition (中国大学生飞行器创新设计大赛)',
        level: 'Provincial First Prize (东部赛区一等奖)',
        organization: '中国航空学会',
        image: '/images/awards/cuadc.png',
    },
    {
        id: 3,
        category: 'academic',
        year: '2024-12',
        name: 'John Wu & Jane Sun Sunshine Scholarship (吴炯孙洁阳光奖学金)',
        organization: 'UM-SJTU Joint Institute, Shanghai Jiao Tong University (上海交通大学密西根学院)',
        image: '/images/awards/WJSJSun.png',
    },
    {
        id: 4,
        category: 'academic',
        year: '2024-12',
        name: 'Huatai Securities Technology Scholarship (华泰证券科技奖学金)',
        organization: 'Shanghai Jiao Tong University (上海交通大学)',
        image: '/images/awards/HuaTai.png',
    },
    {
        id: 5,
        category: 'academic',
        year: '2024-12',
        name: 'SJTU 2024 Undergraduate Merit Scholarship Grade B (上海交通大学 2023-2024 学年本科生B等优秀奖学金)',
        organization: 'Shanghai Jiao Tong University (上海交通大学)',
        image: '/images/awards/ExB2024.png',
    },
    {
        id: 6,
        category: 'competition',
        year: '2024-12',
        name: 'China University Mathematical Contest in Modeling (中国大学生数学建模竞赛)',
        level: 'Provincial Second Prize (上海市二等奖)',
        organization: '上海市工业与应用数学学会',
        image: '/images/awards/cumcm.png',
    },
    {
        id: 7,
        category: 'competition',
        year: '2025-05',
        name: 'Interdisciplinary Contest in Modeling (数模美赛)',
        level: 'Meritorious Winner',
        organization: 'Consortium for Mathematics and its Applications (COMAP)',
        image: '/images/awards/icm.png',
    },
    {
        id: 8,
        category: 'academic',
        year: '2025-12',
        name: 'Sam & Daisy Wu Scholarship (吴贤铭崔德娴奖学金)',
        organization: 'Global College, Shanghai Jiao Tong University (上海交通大学浦江国际学院)',
        image: '/images/awards/SDW.jpg',
    },
    {
        id: 9,
        category: 'academic',
        year: '2025-12',
        name: 'Yan Bao Scholarship (燕宝奖学金)',
        organization: 'SJTU (上海交通大学)，宁夏燕宝基金会',
        image: '/images/awards/YanBao.jpg',
    },
    {
        id: 10,
        category: 'academic',
        year: '2025-12',
        name: 'SJTU 2025 Undergraduate Merit Scholarship Grade B (上海交通大学 2023-2024 学年本科生B等优秀奖学金)',
        organization: 'Shanghai Jiao Tong University (上海交通大学)',
        image: '/images/awards/ExB2025.jpg',
    },
];

// Helper function to get awards by category (sorted by id descending)
export function getAwardsByCategory(category: 'academic' | 'competition') {
    return awards
        .filter(award => award.category === category)
        .sort((a, b) => b.id - a.id);
}
