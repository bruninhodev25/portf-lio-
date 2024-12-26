export const projectsData = [
    {
        id: 1,
        name: 'Aplicativo financeiro com tecnologia de IA',
        description: "Eu e minha equipe construímos um aplicativo financeiro móvel baseado em IA. Desenvolvi API usando Express, Typescript, OpenAI, AWS e MongoDB. Utilizei OTP via AWS SES, Google e Facebook para o sistema de autenticação. Construímos assistentes de IA usando o modelo mais recente da OpenAI e treinamos usando nosso conjunto de dados. As mensagens de voz são convertidas em texto usando o AWS Transcribe. O aplicativo busca dados do Planilhas Google e gera um termo de compromisso em PDF, enviado via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Aplicativo de agência de viagens',
        description: 'Projetei e desenvolvi um aplicativo web full-stack para 2Expedition, uma agência de viagens na Armênia. Criei a UI usando NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor e React Slick. O aplicativo oferece suporte a vários idiomas e moedas. Desenvolvi a API usando NestJS, Typescript, MySQL, TypeORM, AWS e Nodemailer. Implantei o aplicativo front-end no AWS Amplify e o aplicativo back-end no AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'AImóveis com tecnologia de IA',
        description: 'Minha equipe construiu um aplicativo imobiliário baseado em IA usando Replicate API e OpenAI. Usamos Express, Typescript, OpenAI, Replicate, Stripe e Mongoose para desenvolver a API. Utilizamos NextJS, Formik, TailwindCSS e outras bibliotecas npm para a IU. Treinamos vários assistentes de IA usando o modelo GPT mais recente e API Replicate integrada para processamento de imagens. Adicionamos autenticação baseada em funções, planos de assinatura, agendamento de tarefas Cron e integração de pagamento com Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
    },
    {
        id: 4,
        name: 'Gestão de redação',
        description: "Minha equipe e eu desenvolvemos um aplicativo de painel de gerenciamento de jornais chamado Newsroom Management. Como desenvolvedor front-end, trabalhei na criação do dashboard usando NextJS, Material UI, Redux, Calendar e outras bibliotecas npm necessárias. Usamos React Redux para gerenciar o estado do aplicativo e React-hook-form e Sun Editor para lidar com formulários.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },