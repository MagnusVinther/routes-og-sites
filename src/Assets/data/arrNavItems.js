import { Home } from '../../Components/Pages/Home/Home'
import { About } from '../../Components/Pages/About/About'
import { GoalList } from '../../Components/Pages/Goals/GoalList'
import { Gallery } from '../../Components/Gallery/Gallery'
import { GreetingWithFunction } from '../../Components/Pages/Formular/Formular'
import { PlusclickerFunc } from '../../Components/Pages/Plusclicker/Plusclicker'
import { Timer } from '../../Components/Timer/Timer'
import { GoalDetails } from '../../Components/Pages/Goals/GoalDetails'

const arrNavItems = [
    {
        title: 'Forside',
        path: '/',
        element: <Home />,
        display: true
        
    },
    {
        title: 'Om os',
        path: '/about',
        element: <About />,
        display: true
        
    },
    {
        title: 'Galleri',
        path: '/gallery',
        element: <Gallery />,
        display: true
        
    },
    {
        title: 'Formular',
        path: '/formular',
        element: <GreetingWithFunction />,
        display: true
        
    },
    {
        title: 'Plusclicker',
        path: '/plusclicker',
        element: <PlusclickerFunc />,
        display: true
        
    },
    {
        title: 'Timer',
        path: '/timer',
        element: <Timer />,
        display: true
        
    },
    {
        title: 'Verdensmål',
        path: '/goals',
        element: <GoalList />,
        display: true
        
    },
    {
        title: 'detaljer',
        path: '/goals/:goal_id',
        element: <GoalDetails />,
        display: false
        
    }
]

export default arrNavItems