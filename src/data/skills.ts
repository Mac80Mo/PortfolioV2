import { icons } from '../plugins/icons'

export interface SearchableSkill {
  id: string
  label: string
  keywords: string[]
  category: string
  icon: any
  color: string
}

export const searchableSkills: SearchableSkill[] = [
  // Programming Languages
  {
    id: 'python',
    label: 'Python',
    keywords: ['python', 'py', 'backend', 'scripting', 'ki', 'ai', 'machine learning'],
    category: 'Programmiersprachen',
    icon: icons.languagePython,
    color: 'blue'
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    keywords: ['javascript', 'js', 'ecmascript', 'es6', 'web', 'frontend', 'backend'],
    category: 'Programmiersprachen',
    icon: icons.languageJavascript,
    color: 'yellow'
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    keywords: ['typescript', 'ts', 'javascript', 'typed', 'frontend', 'backend'],
    category: 'Programmiersprachen',
    icon: icons.languageTypescript,
    color: 'blue'
  },
  {
    id: 'java',
    label: 'Java',
    keywords: ['java', 'jvm', 'backend', 'enterprise', 'oop'],
    category: 'Programmiersprachen',
    icon: icons.languageJava,
    color: 'red'
  },
  {
    id: 'php',
    label: 'PHP',
    keywords: ['php', 'backend', 'web', 'server', 'scripting'],
    category: 'Programmiersprachen',
    icon: icons.languagePhp,
    color: 'purple'
  },
  
  // Frontend Frameworks & Libraries
  {
    id: 'vue',
    label: 'Vue.js',
    keywords: ['vue', 'vue3', 'vuejs', 'frontend', 'framework', 'javascript', 'reactive'],
    category: 'Frontend',
    icon: icons.vuejs,
    color: 'green'
  },
  {
    id: 'vuetify',
    label: 'Vuetify',
    keywords: ['vuetify', 'vue', 'material', 'design', 'ui', 'components', 'framework'],
    category: 'Frontend',
    icon: icons.vuetify,
    color: 'primary'
  },
  {
    id: 'react',
    label: 'React',
    keywords: ['react', 'reactjs', 'frontend', 'framework', 'javascript', 'jsx', 'components'],
    category: 'Frontend',
    icon: icons.react,
    color: 'cyan'
  },
  {
    id: 'tkinter',
    label: 'Tkinter',
    keywords: ['tkinter', 'python', 'gui', 'desktop', 'ui', 'interface'],
    category: 'Frontend',
    icon: icons.applicationOutline,
    color: 'blue'
  },
  
  // Web Technologies
  {
    id: 'html',
    label: 'HTML5',
    keywords: ['html', 'html5', 'web', 'markup', 'frontend', 'webdesign'],
    category: 'Web',
    icon: icons.languageHtml5,
    color: 'orange'
  },
  {
    id: 'css',
    label: 'CSS3',
    keywords: ['css', 'css3', 'style', 'web', 'frontend', 'design', 'layout'],
    category: 'Web',
    icon: icons.languageCss3,
    color: 'blue'
  },
  {
    id: 'bootstrap',
    label: 'Bootstrap',
    keywords: ['bootstrap', 'css', 'framework', 'responsive', 'frontend', 'ui'],
    category: 'Web',
    icon: icons.bootstrap,
    color: 'purple'
  },
  
  // Backend & Server
  {
    id: 'nodejs',
    label: 'Node.js',
    keywords: ['node', 'nodejs', 'javascript', 'backend', 'server', 'runtime'],
    category: 'Backend',
    icon: icons.nodejs,
    color: 'green'
  },
  {
    id: 'express',
    label: 'Express.js',
    keywords: ['express', 'expressjs', 'node', 'backend', 'api', 'rest', 'javascript'],
    category: 'Backend',
    icon: icons.nodejs,
    color: 'grey'
  },
  {
    id: 'flask',
    label: 'Flask',
    keywords: ['flask', 'python', 'backend', 'micro', 'framework', 'web'],
    category: 'Backend',
    icon: icons.flask,
    color: 'blue'
  },
  
  // Databases
  {
    id: 'sql',
    label: 'SQL',
    keywords: ['sql', 'database', 'relational', 'query', 'datenbank'],
    category: 'Datenbanken',
    icon: icons.database,
    color: 'purple'
  },
  {
    id: 'mysql',
    label: 'MySQL',
    keywords: ['mysql', 'sql', 'database', 'relational', 'db', 'datenbank'],
    category: 'Datenbanken',
    icon: icons.database,
    color: 'blue'
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    keywords: ['postgresql', 'postgres', 'sql', 'database', 'relational', 'db'],
    category: 'Datenbanken',
    icon: icons.database,
    color: 'blue'
  },
  
  // Version Control & Tools
  {
    id: 'git',
    label: 'Git',
    keywords: ['git', 'version', 'control', 'vcs', 'github', 'gitlab', 'versionskontrolle'],
    category: 'Tools',
    icon: icons.git,
    color: 'orange'
  },
  {
    id: 'github',
    label: 'GitHub',
    keywords: ['github', 'git', 'repository', 'vcs', 'collaboration', 'version control'],
    category: 'Tools',
    icon: icons.github,
    color: 'grey'
  },
  {
    id: 'bitbucket',
    label: 'BitBucket',
    keywords: ['bitbucket', 'git', 'repository', 'vcs', 'atlassian', 'version control'],
    category: 'Tools',
    icon: icons.bitbucket,
    color: 'blue'
  },
  {
    id: 'jira',
    label: 'Jira',
    keywords: ['jira', 'project', 'management', 'agile', 'tracking', 'projektmanagement'],
    category: 'Tools',
    icon: icons.jira,
    color: 'blue'
  },
  {
    id: 'confluence',
    label: 'Confluence',
    keywords: ['confluence', 'documentation', 'wiki', 'collaboration', 'atlassian'],
    category: 'Tools',
    icon: icons.bookOpenPageVariant,
    color: 'blue'
  },
  {
    id: 'postman',
    label: 'Postman',
    keywords: ['postman', 'api', 'testing', 'rest', 'http', 'debugging'],
    category: 'Tools',
    icon: icons.api,
    color: 'orange'
  },
  {
    id: 'powershell',
    label: 'PowerShell',
    keywords: ['powershell', 'windows', 'scripting', 'automation', 'shell', 'cmd'],
    category: 'Tools',
    icon: icons.powershell,
    color: 'blue'
  },
  {
    id: 'cmd',
    label: 'Command Line',
    keywords: ['cmd', 'command line', 'terminal', 'shell', 'console', 'cli'],
    category: 'Tools',
    icon: icons.console,
    color: 'grey'
  },
  {
    id: 'vscode',
    label: 'Visual Studio Code',
    keywords: ['vscode', 'vs code', 'ide', 'editor', 'microsoft', 'coding'],
    category: 'IDEs',
    icon: icons.microsoftVisualStudioCode,
    color: 'blue'
  },
  {
    id: 'pycharm',
    label: 'PyCharm',
    keywords: ['pycharm', 'ide', 'python', 'jetbrains', 'editor'],
    category: 'IDEs',
    icon: icons.laptop,
    color: 'green'
  },
  {
    id: 'eclipse',
    label: 'Eclipse',
    keywords: ['eclipse', 'ide', 'java', 'editor', 'development'],
    category: 'IDEs',
    icon: icons.codeTags,
    color: 'purple'
  },
  {
    id: 'jetbrains',
    label: 'JetBrains IDEs',
    keywords: ['jetbrains', 'intellij', 'ide', 'pycharm', 'webstorm', 'editor'],
    category: 'IDEs',
    icon: icons.alphaJBox,
    color: 'blue'
  },
  
  // IoT & Hardware
  {
    id: 'arduino',
    label: 'Arduino',
    keywords: ['arduino', 'microcontroller', 'iot', 'embedded', 'hardware', 'mikrocontroller'],
    category: 'IoT',
    icon: icons.chip,
    color: 'teal'
  },
  
  // AI & Machine Learning
  {
    id: 'llm',
    label: 'Large Language Models',
    keywords: ['llm', 'gpt', 'ai', 'ki', 'openai', 'chatgpt', 'language model', 'open-source'],
    category: 'AI/ML',
    icon: icons.brain,
    color: 'purple'
  },
  {
    id: 'ollama',
    label: 'Ollama',
    keywords: ['ollama', 'llm', 'local', 'ai', 'open-source', 'models'],
    category: 'AI/ML',
    icon: icons.robot,
    color: 'green'
  },
  {
    id: 'llama',
    label: 'Llama',
    keywords: ['llama', 'llama2', 'llama3', 'meta', 'llm', 'ai', 'open-source'],
    category: 'AI/ML',
    icon: icons.robotOutline,
    color: 'blue'
  },
  {
    id: 'claude',
    label: 'Claude',
    keywords: ['claude', 'anthropic', 'ai', 'llm', 'chatbot', 'assistant'],
    category: 'AI/ML',
    icon: icons.brain,
    color: 'orange'
  },
  {
    id: 'qwen',
    label: 'Qwen',
    keywords: ['qwen', 'alibaba', 'llm', 'ai', 'chinese', 'model'],
    category: 'AI/ML',
    icon: icons.robot,
    color: 'red'
  },
  {
    id: 'huggingface',
    label: 'Hugging Face',
    keywords: ['huggingface', 'hf', 'ai', 'models', 'transformers', 'ml', 'hub'],
    category: 'AI/ML',
    icon: icons.emoticonHappyOutline,
    color: 'yellow'
  },
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    keywords: ['chatgpt', 'gpt', 'openai', 'ai', 'llm', 'chatbot', 'assistant'],
    category: 'AI/ML',
    icon: icons.robot,
    color: 'green'
  },
  {
    id: 'dolphin',
    label: 'Dolphin',
    keywords: ['dolphin', 'uncensored', 'llm', 'ai', 'unzensiert', 'open-source'],
    category: 'AI/ML',
    icon: icons.robotAngry,
    color: 'blue'
  },
  {
    id: 'nele',
    label: 'Nele.ai',
    keywords: ['nele', 'nele.ai', 'eu ai act', 'compliant', 'llm', 'ai', 'konform', 'europa'],
    category: 'AI/ML',
    icon: icons.shieldCheck,
    color: 'blue'
  },
  {
    id: 'langchain',
    label: 'LangChain',
    keywords: ['langchain', 'llm', 'ai', 'framework', 'python', 'javascript', 'agents'],
    category: 'AI/ML',
    icon: icons.linkVariant,
    color: 'green'
  },
  {
    id: 'tensorflow',
    label: 'TensorFlow',
    keywords: ['tensorflow', 'ai', 'ml', 'machine learning', 'deep learning', 'neural', 'google'],
    category: 'AI/ML',
    icon: icons.brain,
    color: 'orange'
  },
  {
    id: 'webui',
    label: 'WebUI',
    keywords: ['webui', 'llm', 'interface', 'ui', 'stable diffusion', 'ai'],
    category: 'AI/ML',
    icon: icons.web,
    color: 'purple'
  },
  
  // Modeling & Documentation
  {
    id: 'uml',
    label: 'UML',
    keywords: ['uml', 'unified modeling language', 'class diagram', 'modeling', 'software design'],
    category: 'Methodik',
    icon: icons.fileChart,
    color: 'purple'
  },
  {
    id: 'bpmn',
    label: 'BPMN',
    keywords: ['bpmn', 'business process', 'modeling', 'workflow', 'prozess'],
    category: 'Methodik',
    icon: icons.fileChart,
    color: 'purple'
  },
  
  // Agile & Project Management
  {
    id: 'scrum',
    label: 'Scrum',
    keywords: ['scrum', 'agile', 'methodology', 'sprint', 'project', 'exin'],
    category: 'Methodik',
    icon: icons.runFast,
    color: 'blue'
  },
  
  // Networking
  {
    id: 'ipv4',
    label: 'IPv4 Subnetting',
    keywords: ['ipv4', 'subnetting', 'network', 'netzwerk', 'ip', 'subnet'],
    category: 'Netzwerktechnik',
    icon: icons.ipNetwork,
    color: 'green'
  },
  {
    id: 'osi',
    label: 'OSI-Modell',
    keywords: ['osi', 'osi-modell', 'network', 'layers', 'netzwerktechnik', 'schichten'],
    category: 'Netzwerktechnik',
    icon: icons.layers,
    color: 'blue'
  },
  
  // Architecture & Design
  {
    id: 'software-architecture',
    label: 'Software Architecture',
    keywords: ['architecture', 'software', 'design', 'patterns', 'system design', 'architektur'],
    category: 'Architektur',
    icon: icons.floorPlan,
    color: 'grey'
  },
  {
    id: 'system-design',
    label: 'System Design',
    keywords: ['system design', 'scalable', 'backend', 'architecture', 'distributed'],
    category: 'Architektur',
    icon: icons.serverNetwork,
    color: 'green'
  },
  
  // Development Tools
  {
    id: 'browser-devtools',
    label: 'Browser Developer Tools',
    keywords: ['devtools', 'browser', 'debug', 'chrome', 'firefox', 'developer tools'],
    category: 'Tools',
    icon: icons.applicationBrackets,
    color: 'green'
  },
  {
    id: 'vite',
    label: 'Vite',
    keywords: ['vite', 'bundler', 'build', 'fast', 'vue', 'frontend'],
    category: 'Build Tools',
    icon: icons.flash,
    color: 'purple'
  },
  {
    id: 'joi',
    label: 'Joi Validation',
    keywords: ['joi', 'validation', 'schema', 'javascript', 'node', 'api'],
    category: 'Tools',
    icon: icons.checkCircle,
    color: 'green'
  },
  {
    id: 'n8n',
    label: 'n8n',
    keywords: ['n8n', 'workflow', 'automation', 'no-code', 'integration', 'zapier'],
    category: 'Tools',
    icon: icons.git,
    color: 'red'
  },
  
  // Virtualization & Containers
  {
    id: 'docker',
    label: 'Docker',
    keywords: ['docker', 'container', 'virtualization', 'deployment', 'devops'],
    category: 'DevOps',
    icon: icons.docker,
    color: 'blue'
  },
  {
    id: 'virtualbox',
    label: 'VirtualBox',
    keywords: ['virtualbox', 'vm', 'virtualization', 'oracle', 'virtual machine'],
    category: 'DevOps',
    icon: icons.desktopTower,
    color: 'blue'
  },
  
  // Operating Systems
  {
    id: 'windows10',
    label: 'Windows 10',
    keywords: ['windows', 'windows 10', 'microsoft', 'os', 'operating system'],
    category: 'Betriebssysteme',
    icon: icons.microsoftWindows,
    color: 'blue'
  },
  {
    id: 'windows11',
    label: 'Windows 11',
    keywords: ['windows', 'windows 11', 'microsoft', 'os', 'operating system'],
    category: 'Betriebssysteme',
    icon: icons.microsoftWindows,
    color: 'blue'
  },
  {
    id: 'ubuntu',
    label: 'Ubuntu',
    keywords: ['ubuntu', 'linux', 'os', 'operating system', 'debian', 'server'],
    category: 'Betriebssysteme',
    icon: icons.ubuntu,
    color: 'orange'
  },
  
  // Microsoft Office
  {
    id: 'word',
    label: 'Microsoft Word',
    keywords: ['word', 'microsoft', 'office', 'document', 'text', 'ms office'],
    category: 'Office',
    icon: icons.fileWord,
    color: 'blue'
  },
  {
    id: 'excel',
    label: 'Microsoft Excel',
    keywords: ['excel', 'microsoft', 'office', 'spreadsheet', 'data', 'ms office'],
    category: 'Office',
    icon: icons.fileExcel,
    color: 'green'
  },
  {
    id: 'powerpoint',
    label: 'Microsoft PowerPoint',
    keywords: ['powerpoint', 'microsoft', 'office', 'presentation', 'slides', 'ms office'],
    category: 'Office',
    icon: icons.filePowerpoint,
    color: 'orange'
  },
  {
    id: 'teams',
    label: 'Microsoft Teams',
    keywords: ['teams', 'microsoft', 'collaboration', 'chat', 'video', 'communication'],
    category: 'Office',
    icon: icons.microsoftTeams,
    color: 'purple'
  },
  {
    id: 'libreoffice',
    label: 'LibreOffice',
    keywords: ['libreoffice', 'office', 'linux', 'open-source', 'document', 'spreadsheet', 'presentation'],
    category: 'Office',
    icon: icons.fileDocumentMultiple,
    color: 'green'
  },
  
  // Design & Creative
  {
    id: 'adobe',
    label: 'Adobe Creative Suite',
    keywords: ['adobe', 'photoshop', 'illustrator', 'design', 'creative', 'suite'],
    category: 'Design',
    icon: icons.palette,
    color: 'red'
  },
  {
    id: 'figma',
    label: 'Figma',
    keywords: ['figma', 'design', 'ui', 'ux', 'prototype', 'web design', 'interface'],
    category: 'Design',
    icon: icons.palette,
    color: 'purple'
  }
]
