import { Article } from './Article/Article'
import { Blog } from './Blog/Blog'
import { BugBounty } from './BugBounty/BugBounty'
import { CybGuard } from './CybGuard/CybGuard'
import { CybSafe } from './CybSafe/CybSafe'
import { CybShield } from './CybShield/CybShield'
import { CybTrace } from './CybTrace/CybTrace'
import { CybWatch } from './CybWatch/CybWatch'
import { Cybnest } from './Cybnest/Cybnest'
import { Home } from './Home/Home'

export const pages = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
    withPreloader: true,
  },
  {
    title: 'Blog',
    path: '/blog',
    element: <Blog />,
    withPreloader: false,
  },
  {
    title: 'Blog',
    path: '/blog/:slug',
    element: <Article />,
    withPreloader: false,
  },
  {
    title: 'Cybnest',
    path: '/cybnest',
    element: <Cybnest />,
    withPreloader: false,
  },
  {
    title: 'Bug Bounty',
    path: '/bug-bounty',
    element: <BugBounty />,
    withPreloader: false,
  },
  {
    title: 'CybGuard',
    path: '/cybguard',
    element: <CybGuard />,
    withPreloader: false,
  },
  {
    title: 'CybTrace',
    path: '/cybtrace',
    element: <CybTrace />,
    withPreloader: false,
  },
  {
    title: 'CybWatch',
    path: '/cybwatch',
    element: <CybWatch />,
    withPreloader: false,
  },
  {
    title: 'CybSafe',
    path: '/cybsafe',
    element: <CybSafe />,
    withPreloader: false,
  },
  {
    title: 'CybShield',
    path: '/cybshield',
    element: <CybShield />,
    withPreloader: false,
  },
]
