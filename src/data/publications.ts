// Publications and preprints data

export interface Publication {
    id: number;
    type: 'preprint' | 'publication';
    tag: string;
    year: string;
    title: string;
    authors: string;
    venue?: string;
    status?: string; // combined status/content
    abstract?: string; // combined abstract
    image?: string;
    paperLink?: string;
    codeLink?: string;
    projectLink?: string;
}

export const publications: Publication[] = [
    {
        id: 1,
        type: 'preprint',
        tag: 'Preprint 2025',
        year: '2025',
        title: 'RoboFAC: A Comprehensive Framework for Robotic Failure Analysis and Correction',
        authors: 'Weifeng Lu*, Minghao Ye*, Zewei Ye*, Ruihan Tao, Shuo Yang, Bo Zhao; * Equal Contribution',
        status: 'Preprint, arXiv',
        abstract: 'Vision-Language-Action (VLA) models have recently advanced robotic manipulation by translating natural-language instructions and image information into sequential control actions. However, these models often underperform in open-world scenarios, as they are predominantly trained on successful expert demonstrations and exhibit a limited capacity for failure recovery. In this work, we present a Robotic Failure Analysis and Correction (RoboFAC) framework to address this issue. Firstly, we construct RoboFAC dataset comprising 9,440 erroneous manipulation trajectories and 78,623 QA pairs across 16 diverse tasks and 53 scenes in both simulation and real-world environments. Leveraging our dataset, we develop RoboFAC model, which is capable of Task Understanding, Failure Analysis and Failure Correction. Experimental results demonstrate that the RoboFAC model outperforms GPT-4o by 34.1% on our evaluation benchmark. Furthermore, we integrate the RoboFAC model into a real-world VLA control pipeline as an external supervision providing correction instructions, yielding a 29.1% relative improvement on average on four real-world tasks. The results show that our RoboFAC framework effectively handles robotic failures and assists the VLA model in recovering from failures.',
        image: '/images/publications/robofac0.png',
        paperLink: 'https://arxiv.org/abs/2505.12224',
        codeLink: 'https://github.com/MINT-SJTU/RoboFAC',
    },
    {
        id: 2,
        type: 'preprint',
        tag: 'Preprint 2025',
        year: '2025',
        title: 'U-ARM : Ultra low-cost general teleoperation interface for robot manipulation',
        authors: 'Yanwen Zou, Zhaoye Zhou, Chenyang Shi, Zewei Ye, Junda Huang, Yan Ding, Bo Zhao',
        status: 'Preprint, arXiv',
        abstract: 'We propose U-Arm, a low-cost and rapidly adaptable leader-follower teleoperation framework designed to interface with most of commercially available robotic arms. Our system supports teleoperation through three structurally distinct 3D-printed leader arms that share consistent control logic, enabling seamless compatibility with diverse commercial robot configurations. Compared with previous open-source leader-follower interfaces, we further optimized both the mechanical design and servo selection, achieving a bill of materials (BOM) cost of only $50.5 for the 6-DoF leader arm and $56.8 for the 7-DoF version. To enhance usability, we mitigate the common challenge in controlling redundant degrees of freedom by engineering methods mechanical and control optimizations. Experimental results demonstrate that U-Arm achieves 39% higher data collection efficiency and comparable task success rates across multiple manipulation scenarios compared with Joycon, another low-cost teleoperation interface. We have open-sourced all CAD models of three configs and also provided simulation support for validating teleoperation workflows. We also open-sourced real-world manipulation data collected with U-Arm.',
        image: '/images/publications/uarm0.png',
        paperLink: 'https://arxiv.org/abs/2509.02437',
        codeLink: 'https://github.com/MINT-SJTU/LeRobot-Anything-U-Arm',
    },
];

// Helper function to get publications by type (sorted by id descending)
export function getPublicationsByType(type: 'preprint' | 'publication') {
    return publications
        .filter(pub => pub.type === type)
        .sort((a, b) => b.id - a.id);
}
