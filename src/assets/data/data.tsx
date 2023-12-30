import Works from "../../screens/Home/page/screens/Works"
import Featured from "../../screens/Home/page/screens/Featured"
import Home from "../../screens/Home/page/screens/Home"
import Infomation from "../../screens/Home/page/screens/Infomation"
import LetTask from "../../screens/Home/page/screens/LetTask"
import IconFacebook from "../svg/IconFacebook"
import IconInstagram from "../svg/IconInstagram"
import IconLinkedin from "../svg/IconLinkedin"
import SelectedProjects from "../../screens/Home/page/screens/SelectedProjects"
import ImagePr01 from '../../assets/images/ImagePr01.png'
import ImagePr02 from '../../assets/images/ImagePr02.png'
import ImagePr03 from '../../assets/images/ImagePr03.png'
import ImagePr04 from '../../assets/images/ImagePr04.png'

// HEADER
export const dataHeader = [
    {
        id: 1,
        title: 'About',
    },
    {
        id: 2,
        title: 'Works',
    },
    {
        id: 3,
        title: 'Contact',
    }
]

//FOOTER
export const dataIntroduceYourself = [
    {
        id: 1,
        title: 'Nhiệt Tình',
    },
    {
        id: 2,
        title: 'Hòa Đồng',
    },
    {
        id: 3,
        title: 'Nhiệt Huyết',
    }
]

export const dataContact = [
    {
        id: 1,
        title: 'Q.Gò Vấp, TP.HCM',
    },
    {
        id: 2,
        title: 'vothanhnam18092001@gmail.com',
    },
    {
        id: 3,
        title: '0392525473',
    }
]

// Icon Profile
export const dataIconProfile = [
    {
        id: 1,
        icon: <IconFacebook />,
    },
    {
        id: 2,
        icon: <IconInstagram />,
    },
    {
        id: 3,
        icon: <IconLinkedin />,
    }
]

// HOME
export const dataHomePage = [
    {
        id: 1,
        title: 'page 1',
        page: <Home />
    },
    {
        id: 2,
        title: 'page 2',
        page: <Infomation />
    },
    {
        id: 3,
        title: 'page 3',
        page: <SelectedProjects />
    },
    {
        id: 4,
        title: 'page 4',
        page: <Works />
    },
    {
        id: 5,
        title: 'page 5',
        page: <Featured />
    },

    {
        id: 6,
        title: 'page 6',
        page: <LetTask />
    },
]

// Product
export const dataProduct = [
    {
        id: '1',
        img: ImagePr01,
        title: 'YarraLand Real Estate',
        content: 'Visit website',
    },
    {
        id: '2',
        img: ImagePr02,
        title: 'Uway Technology',
        content: 'Visit website',
    },
    {
        id: '3',
        img: ImagePr03,
        title: 'Vias Hotel Vung Tau',
        content: 'Visit website',
    },
    {
        id: '4',
        img: ImagePr04,
        title: 'HIIVE Binh Duong Hotel',
        content: 'Visit website',
    }
]

// Content
export const dataContent = [
    {
        id: 1,
        number: '01',
        title: 'Direction & Briefing',
        content: 'I believe that having a comprehensive grasp of the brief and client`s needs is crucial from the outset. This involves establishing project objectives and identifying the specific requirements, analyzing competitors and the target audience, and conducting research to determine the ideal blend of Typography, Color, Composition, & Brand elements. This process is essential for effectively addressing business challenges and determining the best design approach.'
    },
    {
        id: 2,
        number: '02',
        title: 'Design',
        content: 'Having established the desired mood and tone in the direction stage, my focus shifts to refining the design by experimenting with different variations. My aim is always to create a user experience that not only highlights the unique qualities of each project, but also feels sophisticated and user-friendly. To achieve this, I closely collaborate with clients and end-users to gather valuable feedback and insights to inform the design`s evolution.'
    },
    {
        id: 3,
        number: '03',
        title: 'Interaction',
        content: 'I believe interaction play a crucial role in providing the audience with an enjoyable and satisfying experience. A well-executed motion or microinteraction can elevate the user experience to new heights. I take great satisfaction in seeing people`s reactions of amazement and in watching them interact with my designs.'
    },
    {
        id: 4,
        number: '04',
        title: 'Development',
        content: 'Our developers will then take the approved design and turn it into functional software, using the latest technologies and industry best practices. Throughout this step, we`ll keep you updated on progress and make any necessary adjustments.'
    },
]