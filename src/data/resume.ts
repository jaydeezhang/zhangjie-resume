import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: '张杰',
    role: '产品设计师',
    experienceYears: 5,
    avatarUrl: 'https://file.trae.ai/v1/user-file/e16f9202-b2da-4b71-9c32-e0c6533038a8.jpeg?signature=P25rU0J4a1V1V0Z0d2QybmZzZ04ycm9OQWdGbmQwc0Z6RE5hV3lQcEhBdz0%3D',
    about: [
      '两年的美国留学经历，在字节跳动（TikTok）长期处于英语工作环境，具备良好的英语听说读写能力。拥有一定的前端编程基础，对AI前沿技术领域充满兴趣，对通用AI产品，AI生图，AI编程，工作流知识库编排等产品有一定的使用经验和理解。作为产品设计师出身，在工作中注重细节与用户体验，善于总结、复盘和沉淀项目经验。',
      '擅长应对复杂业务系统的产品设计挑战，具备扎实的系统化思维能力与从用户视角出发的问题拆解能力。始终以数据与结果为导向，关注设计对业务指标的实际影响，推动设计价值可量化。性格外向，沟通风格开放直接，善于在跨职能团队中协调需求、凝聚共识，注重合作共赢并积极驱动项目高效落地。'
    ],
    contact: {
      email: 'jzjaydee@gmail.com',
      phone: '(+86) 152 0219 6502',
      wechat: 'jcc2195ny',
      linkedin: 'linkedin.com/in/jie-zhang-3a4a11175'
    }
  },
  education: [
    {
      school: 'Rochester institute of technology (NY, US)',
      degree: '视觉传达设计 - 纯艺术硕士MFA',
      period: '08/2018 - 05/2021'
    },
    {
      school: '南京农业大学 (江苏省，南京市)',
      degree: '机械设计制造及其自动化 - 工科学士BE',
      period: '09/2013 - 06/2017'
    }
  ],
  experience: [
    {
      company: '自由职业',
      role: '全栈产品经理 / 产品设计师',
      location: '远程',
      period: '2025/10 – 至今',
      projects: [
        {
          title: 'Nova Vacation Homes',
          content: '全栈产品经理+产品设计师，参与北美度假酒店管理软件AI设计流程搭建，酒店信息AI管理系统，维修服务AI工单系统。协助搭建AI辅助设计工作流程'
        },
        {
          title: 'Honda 设计咨询项目',
          content: '参与Honda下一代智能车机系统设计咨询工作，负责创新demo搭建和可用性测试开展工作'
        }
      ]
    },
    {
      company: '中国电子云',
      role: '资深大模型交互设计师',
      location: '北京',
      period: '2025/05 – 2025/10',
      projects: [
        {
          title: '大模型应用开发平台 产品设计负责人',
          content: '主导企业级大模型应用开发平台的产品设计，已完成1个大版本的设计工作。覆盖智能体开发，工作流开发，RAG 配置，知识库和插件管理等核心模块。搭建面向政企客户的多租户权限体系与任务审计系统，确保平台在合规和安全性方面可控可查。参与工作流程搭建，包括设计组件库，设计验收流程。'
        },
        {
          title: '采购管理AI Agent应用 产品设计负责人',
          content: '主导采购管理AI Agent应用的产品设计工作。智能体中包括合同管理，招投标，采购等几个核心模块，聚焦支持国央企客户的关键业务场景。作为产品设计负责人，定义 AI Agent 产品的设计范式，制定界面交互与视觉风格标准，推动智能体产品在复杂政企采购场景下的落地与可用性提升。'
        }
      ]
    },
    {
      company: 'TikTok/字节跳动',
      role: '产品设计师',
      location: '上海',
      period: '2022/01 – 2025/01',
      projects: [
        {
          title: '业务方向一：面向研发和算法工程师的内部工具系统',
          content: '• 审核特征数据平台Edison：0-1 参与的产品设计工作，补齐审核研发侧基础数据类基建。MUV: 109 MPV: 10221；已管理 12709 个特征；核心场景特征覆盖率为100%; 深度参与特征调用策略推荐模块的产品设计，较原方法有 10倍 以上的效率提升\n• 算法工具集Firefly：参与重点创新项目AI审核引擎的0-1的建设，深度研究Prompt Engineering技术在审核业务中的应用，NPS评分为37(预期30分)；参与Alice模块的建设基于Few-shot技术的半自动化的模型训练工具。通过设计手段提升产品的易用性和易学性以及模型训练效率，模型训练时间由14天→2天\n• Octopus平台：参与项目审核数据追踪2.0版本的设计工作，改善审核数据的易读性和易理解性，实现周 UV 600+，周 PV 10000+。新功能的使用比例超过 57.01%，帮助产品的NPS得分从30->63。'
        },
        {
          title: '业务方向二：TikTok审核数据平台产品设计工作',
          content: '• 审核类数据分析平台DataPower：协助数据分析师完成各类业务数据看板搭建，制定看板设计规范\n• 账号数据运营平台UOP：负责主要模块黑产账号分析处置工具，帮助改善网络社区生态环境\n• 指标自动归因分析系统：协助数据分析师提升归因分析的准确性和效率，分析师数据分析效率提高了 50%+，通过设计通用数据组件，提高了指标系统搭建效率，缩减 80% 左右开发时长。'
        },
        {
          title: '业务方向三：机器审核工具产品设计工作',
          content: '• 机器审核工具TikHawk：完成机器审核流程编辑工具的优化迭代设计工作；协同PM推动审核策略LOS上线单系统标准化交互方案确定，提升用户交互体验及满意度，满意度NPS评分 13→25\n• 机器审核数据查询工具HawkOps：负责审核数据查询和DAG视图等功能模块，整体满意度分数为：4.2分(满分5分)，有 87.5% 的用户认为新版更好用，界面设计平均分为 4.3，用户普遍反馈是清晰易懂。'
        },
        {
          title: '设计团队横向工作：TikTok B端业务数据可视化设计系统和前端组件库',
          content: '• 参与数据可视化图表的Figma UI设计资产库建设，制定数据可视化设计指南，撰写相关前端开发PRD，完成 10 个基本图表组件、17 种数据图表、1 个仪表盘Demo制作、1 个主题 json 文件\n• 调研技术方案和设计团队内部的技术支持，完成演示Demo的前端代码撰写工作，参与主题 json 文件编写\n• 完成组件库开源工作，撰写Markdown使用文档，对内覆盖到 60+ 设计师，100+ 前端开发人员，预计接入的内部平台超过 30 个，上线后NPM包的周下载量维持在 600-3000 之间。'
        }
      ]
    },
    {
      company: 'Baidu百度',
      role: '交互设计师 (实习+转正)',
      location: '北京',
      period: '2020/08 – 2022/01',
      projects: [
        {
          title: '手机百度APP视频流和信息流模块的功能迭代',
          content: '负责百度信息流产品设计，协助高级设计师参与了“视频流升级”重点项目，以及内容落地页，文生图，双列瀑布流等新形式的探索工作。积极发挥创新思维，撰写3份百度APP改版提案，创新思维受到肯定。'
        },
        {
          title: '百度PC网站改版设计',
          content: '独立负责百度网站信息流模块的改版设计工作，对新闻列表、图文逻辑页、视频视频落地页进行设计的优化和改造，让整个风格更加现代，提升PC官网的品质。'
        }
      ]
    }
  ],
  internships: [
    {
      company: 'YITU tech',
      role: '用户体验设计实习生',
      location: '上海，中国',
      period: '2019/05 – 2019/08',
      description: 'YITU 人工智能安防产品设计（政府公安场景使用）',
      projects: [
        {
          title: '项目内容',
          content: '参与了面向公安部门的人工智能安防产品的产品设计工作，包括大数据监控大屏，移动端的数据平台设计工作。可以及时发现城市安全隐患，识别潜在的城市风险事件。'
        }
      ]
    },
    {
      company: 'Rochester institute of technology',
      role: '研究生助教',
      location: '罗切斯特，纽约州',
      period: '2018/08 – 2019/05',
      projects: [
        {
          title: '职责内容',
          content: '协助老师完成教学任务的开展；在研讨课或小组讨论中，引导学生讨论问题，帮助他们理解课程内容；制作课程日历等教学物料'
        }
      ]
    }
  ],
  skills: [
    {
      title: '设计能力',
      icon: 'Palette',
      color: 'blue',
      items: ['3年+企业B端产品设计', '网页/移动APP设计', '有视觉设计功底和审美', '前端设计系统', '深度参与数据可视化体系设计', 'Midjourney/即梦等AI绘图软件', '动效设计']
    },
    {
      title: 'AI产品',
      icon: 'Cpu',
      color: 'orange',
      items: ['通用AI Agent结构化提问方法', 'Midjourney/即梦等AI绘图工具', 'Lovart AI设计Agent', 'Cursor/Trae等AI代码工具', 'Coze/Dify.AI大语言模型开发工具']
    },
    {
      title: '技术能力',
      icon: 'Code',
      color: 'green',
      items: ['HTML', 'CSS', 'JS', 'Semi design 设计系统', 'Arco design 设计系统', 'Figma 插件和小组件开发', 'Echarts/VisActor可视化前端框架', 'Markdown文档撰写']
    },
    {
      title: '产品能力',
      icon: 'LineChart',
      color: 'purple',
      items: ['业务洞察/需求洞察分析', '项目流程管理', '业务/用户调研', '竞品调研', '良好的沟通合作软技能']
    }
  ],
  patents: [
    'CN307430103S',
    'CN306647820S',
    'CN306893576S'
  ],
  awards: [
    {
      title: 'C2award',
      description: 'Best of Best in User Experience Design / UI & UX Design'
    },
    {
      title: 'Vega digital awards',
      description: 'Silver winner 银奖'
    },
    {
      title: 'NYX awards',
      description: 'Silver winner 银奖'
    }
  ],
  certificates: [
    '碳排放管理师（高级）',
    '能源管理师'
  ]
};
