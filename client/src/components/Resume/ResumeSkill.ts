
export const resumeBullets = [
    { label: '학력', logoSrc: 'education.svg' },
    { label: '경력', logoSrc: 'work-history.svg' },
    { label: '스킬', logoSrc: 'programming-skills.svg' },
    // { label: 'Application Skills', logoSrc: 'programming-skills.svg' },
    { label: '프로젝트', logoSrc: 'projects.svg' },
    
  ]

export const programmingSkillsDetails = [
    { skill: "javaScript", ratingPercentage: 60 },
    { skill: "ReactJS", ratingPercentage: 60 },
    { skill: "VueJS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "Mongo DB", ratingPercentage: 65 },
    { skill: "SQL Server(MSSQL)", ratingPercentage: 55 },
    { skill: "C# (WPF,WINFORM)", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 50 },
    { skill: "CSS", ratingPercentage: 40 },
    
];

export const projectDetails = [
    {
        title:'Portfolio Website',
        duration: { fromDate: "2022.03", toDate: "2022.03" },
        description:
        "개인 포트폴리오 웹사이트 입니다. 자기소개 및 스킬, 프로젝트를 소개합니다.",
        subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
        title:'Bolierplate_React',
        duration: { fromDate: "2022.02", toDate: "2022.02" },
        description:
        "소셜 로그인, 닉네임설정, 마이페이지등 개인 프로젝트에 기능을 재사용하기위한 보일러플레이트 입니다.",
        subHeading: "Technologies Used: React JS, NodeJS Express, MongoDB",
    },
    {
        title:'Movie Search WebSite',
        duration: { fromDate: "2022.02", toDate: "2022.02" },
        description:
        "oMDb api를 사용하여 영화 데이터를 요청하고 구성된 레이아웃에 출력하는 프로젝트입니다.",
        subHeading: "Technologies Used: VueJS ,OMDb API ",
    },
    {
        title:'Blind Clone Website',
        duration: { fromDate: "2022.01", toDate: "2022.02" },
        description:
        "Blind Website clone 프로젝트입니다. ",
        subHeading: "Technologies Used: VueJS , NuxtJs, NodeJS Express, MongoDB",
    }
]