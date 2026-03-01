// Projects data

export interface Project {
    id: number;
    date: string;           // e.g. "2025-03", "2024"
    title: string;
    briefDescription: string;   // shown on homepage
    // description supports:
    //   \n            → line break
    //   [text](url)   → clickable link  e.g. [GitHub](https://github.com/...)
    description: string;
    image?: string;
    projectLink?: string;       // main project page link (shown on homepage as [Page])
}

export const projects: Project[] = [
    {
        id: 1,
        date: '2024-05 ~ 2025-05',
        title: 'Design of Multirotor UAV with Intelligent Path Planning and High-Precision Payload Delivery',
        briefDescription: 'Undergraduate Innovation and Entrepreneurship Program. We developed a modular multirotor UAV system with a unified architecture that enables task and environment adaptation through rapid module replacement without redesigning the core platform.',
        description: 'This project was conducted under the Undergraduate Innovation and Entrepreneurship Program, focusing on the design of a multirotor UAV system with intelligent path planning and high-precision payload delivery capabilities. We proposed a unified system architecture that allows both indoor and outdoor deployment without modifying the core design. By replacing task-specific modules, the platform can adapt to different operational scenarios while maintaining structural and control consistency. \n Two UAV variants derived from this system—designed for indoor and outdoor competitions respectively—won National First Prize and East China Regional First Prize in two separate competitions. Detailed award information is available on the Awards page. \n 本项目为大学生创新创业项目，围绕"智能路径规划与高精度载荷投放的多旋翼无人飞行器设计"展开。我们提出了一种统一架构的多旋翼无人机系统设计方案，在不改变核心结构与控制框架的前提下，通过更换任务相关模块，实现室内与室外不同环境下的任务适配能力。\n 基于该统一平台，我们分别设计了室内与室外两款无人机，分别在两项不同赛事中获得全国一等奖与东部赛区一等奖。具体奖项信息详见 Awards 页面。',
        image: '/images/projects/dachuang.jpg',
        projectLink: '',
    },
    {
        id: 2,
        date: '2025-12 ~ Present',
        title: 'VLA Benchmarks Leaderboard Webpage',
        briefDescription: 'A continuously updated leaderboard website aggregating benchmark results from VLA research papers to facilitate transparent comparison and accelerate progress in vision-language-action models.',
        description: 'The VLA Benchmarks Leaderboard is a curated platform that aggregates evaluation results from widely used benchmarks reported in vision-language-action (VLA) research papers. We systematically collect performance metrics from published work and organize them into a unified and searchable website, enabling researchers to quickly compare models across different tasks and evaluation settings.\n The platform also provides direct links to original papers and open-source repositories, aiming to serve as an entry point for tracking the latest developments in the VLA field. The leaderboard is continuously updated to reflect newly released models and results.\n Project page: [https://sota.evomind-tech.com/](https://sota.evomind-tech.com/) \n VLA Benchmarks Leaderboard 是一个汇总视觉-语言-动作（VLA）领域常用基准测试结果的平台。我们系统整理了相关论文中报告的评测指标，并构建了统一、可检索的网站，帮助研究者快速比较不同模型在各类任务上的表现。\n平台同时提供论文与开源仓库的直达链接，旨在成为快速了解 VLA 领域最新进展的入口，并促进社区交流与技术演进。该页面仍在持续更新中。\n项目主页：[https://sota.evomind-tech.com/](https://sota.evomind-tech.com/)',
        image: '/images/projects/vlaLeaderboard.jpg',
        projectLink: 'https://sota.evomind-tech.com/',
    },
];

// Sorted by id descending
export function getSortedProjects() {
    return [...projects].sort((a, b) => b.id - a.id);
}
