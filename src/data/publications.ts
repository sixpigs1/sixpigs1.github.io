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
        type: 'publication',
        tag: 'WAICA 2026',
        year: '2025',
        title: 'RoboFAC: A Comprehensive Framework for Robotic Failure Analysis and Correction',
        authors: 'Zewei Ye, Weifeng Lu, Minghao Ye, Tao Lin, Shuo Yang, Junchi Yan, Bo Zhao',
        status: 'WAIC Academic 2026',
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
    {
        id: 3,
        type: 'preprint',
        tag: 'Preprint 2026',
        year: '2026',
        title: 'Evo-Depth: A Lightweight Depth-Enhanced Vision-Language-Action Model',
        authors: 'Tao Lin, Yuxin Du, Jiting Liu, Nuobei Zhu, Yunhe Li, Yuqian Fu, Yinxinyu Chen, Hongyi Cai, Zewei Ye, Bing Cheng, Kai Ye, Yiran Mao, Yilei Zhong, MingKang Dong, Junchi Yan, Gen Li, Bo Zhao',
        status: 'Preprint, arXiv',
        abstract: 'Vision-Language-Action models have emerged as a promising paradigm for robotic manipulation by unifying perception, language grounding, and action generation. However, they often struggle in scenarios requiring precise spatial understanding, as current VLA models primarily rely on 2D visual representations that lack depth information and detailed spatial relationships. While recent approaches incorporate explicit 3D inputs such as depth maps or point clouds to address this issue, they often increase system complexity, require additional sensors, and remain vulnerable to sensing noise and reconstruction errors. Another line of work explores implicit 3D-aware spatial modeling directly from RGB observations without extra sensors, but it often relies on large geometry foundation models, resulting in higher training and deployment costs. To address these challenges, we propose Evo-Depth, a lightweight depth-enhanced VLA framework that enhances spatially grounded manipulation without relying on additional sensing hardware or compromising deployment efficiency. Evo-Depth employs a lightweight Implicit Depth Encoding Module to extract compact depth features from multi-view RGB images. These features are incorporated into vision-language representations through a Spatial Enhancement Module via depth-aware modulation, enabling efficient spatial-semantic enhancement. A Progressive Alignment Training strategy is further introduced to align the resulting depth-enhanced representations with downstream action learning. With only 0.9B parameters, Evo-Depth achieves superior performance across four simulation benchmarks. In real-world experiments, Evo-Depth attains the highest average success rate while also exhibiting the smallest model size, lowest GPU memory usage, and highest inference frequency among compared methods.',
        image: '/images/publications/evodepth0.png',
        paperLink: 'https://arxiv.org/abs/2605.14950',
        codeLink: 'https://github.com/MINT-SJTU/Evo-Depth',
    },
    {
        id: 4,
        type: 'preprint',
        tag: 'Preprint 2026',
        year: '2026',
        title: 'LA4VLA: Learning to Act without Seeing via Language-Action Pretraining',
        authors: 'Tao Lin, Yuxin Du, Yiran Mao, Zewei Ye, Yilei Zhong, Bing Cheng, Yiming Wang, Jiting Liu, Yang Tian, Junchi Yan, Feiran Wu, Zenan Meng, Hu Wei, Yuqian Fu, Gen Li, Bo Zhao',
        status: 'Preprint, arXiv',
        abstract: 'Vision-Language-Action (VLA) models are commonly pretrained on robot demonstrations by jointly mapping visual observations and language instructions to actions. However, dense visual-action supervision can dominate the comparatively sparse language-action signal. As a result, policies may rely on visual shortcuts rather than learn how language conditions action execution, making them sensitive to visual variations. To address this limitation, we propose LA4VLA, a language-action pretraining framework that enables policies to acquire language-conditioned action priors without visual observations. These priors capture reusable manipulation skills shared across tasks and scenes, reducing reliance on scene-specific visual cues. Specifically, LA4VLA decomposes expert demonstration trajectories into atomic action segments and pairs each segment with a corresponding low-level action description. This yields LA-33K, a dataset of 33K Language-Action (LA) episodes derived entirely from existing demonstrations without additional robot data collection. We further develop LA4VLA-1B, a lightweight 1B-parameter VLA model, and investigate three paradigms for incorporating language-action supervision into VLA learning: LA-only pretraining, sequential LA-to-VLA pretraining, and mixed LA-VLA pretraining. Across simulation and real-world tasks, LA-pretrained policies consistently outperform matched VLA-pretrained counterparts, while combining LA and VLA supervision leads to further gains. In particular, mixed LA-VLA pretraining improves the average success rate of LA4VLA-1B over the no-pretraining baseline by up to 17.8 and 45.0 percentage points in simulation and real-world tasks, respectively. These results establish LA4VLA as an effective and complementary pretraining strategy for building stronger and more robust VLA policies.',
        image: '/images/publications/la4vla0.png',
        paperLink: 'https://arxiv.org/abs/2606.27295',
        codeLink: 'https://github.com/MINT-SJTU/LA4VLA',
    },
];

// Helper function to get publications by type (sorted by id descending)
export function getPublicationsByType(type: 'preprint' | 'publication') {
    return publications
        .filter(pub => pub.type === type)
        .sort((a, b) => b.id - a.id);
}
