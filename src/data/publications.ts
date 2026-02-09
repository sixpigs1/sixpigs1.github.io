// Publications and preprints data

export interface Publication {
    id: number;
    type: 'preprint' | 'publication';
    year: string;
    title: string;
    authors: string;
    venue?: string;
    status: {
        zh: string;
        en: string;
    };
    abstract: {
        zh: string;
        en: string;
    };
    image?: string;
    paperLink?: string;
    codeLink?: string;
    projectLink?: string;
}

export const publications: Publication[] = [
    {
        id: 1,
        type: 'preprint',
        year: '2024',
        title: 'Sample Paper Title: Vision-Language-Action Models for Robotic Manipulation',
        authors: 'Zewei Ye, Author B, Author C',
        status: {
            zh: '预印本 — arXiv',
            en: 'Preprint — arXiv',
        },
        abstract: {
            zh: '这是一篇关于视觉-语言-动作模型用于机器人操作的示例论文。我们提出了一种新的方法来整合视觉、语言和动作信息,以改进机器人在复杂环境中的操作能力。实验结果表明我们的方法在多个基准测试中取得了显著的性能提升。',
            en: 'This is a sample paper about Vision-Language-Action models for robotic manipulation. We propose a novel approach to integrate visual, linguistic, and action information to improve robot manipulation capabilities in complex environments. Experimental results demonstrate significant performance improvements on multiple benchmarks.',
        },
        image: '/images/publications/sample1.jpg',
        paperLink: 'https://arxiv.org/abs/placeholder',
        codeLink: 'https://github.com/sixpigs1/sample-project',
    },
    {
        id: 2,
        type: 'publication',
        year: '2023',
        title: 'Another Sample: Learning from Demonstrations for Robotic Tasks',
        authors: 'Author A, Zewei Ye, Author C, Author D',
        venue: 'ICRA 2023',
        status: {
            zh: '已发表 — ICRA 2023',
            en: 'Published — ICRA 2023',
        },
        abstract: {
            zh: '这是另一篇示例论文,研究从演示中学习机器人任务。我们开发了一个框架,使机器人能够通过观察人类演示来学习新技能。该方法在各种操作任务中表现出良好的泛化能力。',
            en: 'This is another sample paper on learning robotic tasks from demonstrations. We develop a framework that enables robots to learn new skills by observing human demonstrations. The approach shows good generalization across various manipulation tasks.',
        },
        image: '/images/publications/sample2.jpg',
        paperLink: 'https://example.com/paper',
        codeLink: 'https://github.com/sixpigs1/sample-project2',
    },
];

// Helper function to get publications by type
export function getPublicationsByType(type: 'preprint' | 'publication') {
    return publications.filter(pub => pub.type === type);
}

// Helper function to get recent publications for home page
export function getRecentPublications(limit: number = 3) {
    return publications.slice(0, limit);
}
