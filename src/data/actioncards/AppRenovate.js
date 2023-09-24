import BiotechIcon from '@mui/icons-material/Biotech';
//import AnalyzeIcon from '@mui/icons-material/Assessment'
import AnalyzeIcon from '@mui/icons-material/Topic'
import CameraIcon from "@mui/icons-material/Camera"
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SmsIcon from '@mui/icons-material/Sms';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CodeIcon from '@mui/icons-material/Code';
import QuizIcon from '@mui/icons-material/Quiz';
import BugReportIcon from '@mui/icons-material/BugReport';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TerminalIcon from '@mui/icons-material/Terminal';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RouteIcon from '@mui/icons-material/Route';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { blue } from '@mui/material/colors';


const buttonConfig = [
    { eid: 10, title: "Business Rules Analysis", icon: AnalyzeIcon, onClick: () => handleAlert()  },     
    { eid: 40, title: "Generate Natural Language", icon: SmsIcon, onClick: () => handleAlert() },
    { eid: 50, title: "Generate Agile Stories", icon: SupervisedUserCircleIcon, onClick: () => handleAlert() },        
    { eid: 60, title: "Generate Code", icon: CodeIcon, onClick: () => handleAlert() },
    { eid: 65, title: "Test Services", icon: BiotechIcon, onClick: () => handleAlert() },     
    { eid: 90, title: "Deploy Application", icon: CloudUploadIcon, onClick: () => handleAlert() },
  ];


const defaultContent = [
    {
        eid: 5,
        pre: [],
        eState: false,
        dState: false,
        isExecuting: false,
        isDisabled: true,
        name: 'Business Process Composition',
        description: 'Define the set of enterprise processes within which the applications operate',
        api: 'https://a80api.vercel.app/',
        image: <AccountTreeIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },
    {
        eid: 8,
        pre: [],
        eState: false,
        dState: false,
        isExecuting: false,
        isDisabled: true,
        name: 'Path analysis',
        description: 'Create a modernization roadmap through analysis of the application, including architecture, dataflows and dependencies.',
        api: 'https://a80api.vercel.app/',
        image: <RouteIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },
    {
        eid: 10,
        pre: [],
        eState: false,
        dState: false,
        isExecuting: false,
        isDisabled: false,
        name: 'Business Rule Analysis',
        description: 'Analyze program for size, complexity, architecture and business rule metrics, and extract all business rules',
        api: 'https://a80api.vercel.app/',
        image: <AnalyzeIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },  
    {
        eid: 30,
        pre: [],
        eState: false,
        dState: true,
        isExecuting: false,
        isDisabled: true,
        name: 'Application Architecture',
        description: 'Analysis of the app architecture providing scores and recommendations to enhance the business process and associated apps',
        api: 'https://a80api.vercel.app/',
        image: <WidgetsIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },
    {
        eid: 35,
        pre: [10],
        eState: false,
        dState: true,
        isExecuting: false,
        isDisabled: false,
        name: 'Data',
        description: 'Plan, profile, transform and migrate data stores to modern platforms',
        api: 'https://a80api.vercel.app/',
        image: <DataObjectIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },
    {
        eid: 40,
        pre: [10],
        eState: false,
        dState: true,
        isExecuting: false,
        isDisabled: false,
        name: 'Natural Language Processing',
        description: 'AI translation of the business rules to human consumable language, such as english',
        api: 'https://a80api.vercel.app/',
        image: <SmsIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },
    {
        eid: 50,
        pre: [10, 40],
        eState: false,
        dState: true,
        isExecuting: false,
        isDisabled: false,
        name: 'Agile Stories',
        description: 'AI generated set of user stories based on the extracted business rules and associated features for the application',
        api: 'https://a80api.vercel.app/',
        image: <SupervisedUserCircleIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
  
    },
    {
        eid: 60,
        pre: [10, 40, 50],
        eState: false,
        dState: true,
        isExecuting: false,
        isDisabled: false,
        name: 'Code Generation',
        description: 'AI generation of the application code based on the set of business rules',
        api: 'https://a80api.vercel.app/',
        image: <CodeIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },
    {
        eid: 65,
        pre: [10, 40, 50, 60],
        eState: false,
        dState: true,
        isExecuting: false,
        isDisabled: false,
        name: 'Test Services',
        description: 'A suite of AI guided test services to accelerate the development of stratgeies, scripts and data to validate the app.',
        api: 'https://a80api.vercel.app/',
        image: <AddTaskIcon style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    },    
    {
        eid: 90,
        pre: [10, 40, 50, 60, 65],
        eState: false,
        dState: true,
        isExecuting: false,
        isDisabled: false,
        name: 'Deployment',
        description: 'AI generated scripts for cloud deployment based on the selected platform and configurations',
        api: 'https://a80api.vercel.app/',
        image: <CloudUploadIcon  style={{ color: blue[500],  width: '100%', height: '100%' }}/>
    }
  ]

  export default defaultContent