import CHDiscover from '@/pages/discover'
import CHFriend from '@/pages/friend'
import CHMine from '@/pages/mine'

const routes = [
  {
    path: "/",
    exact: true,
    component: CHDiscover
  },
  {
    path: "/mine",
    component: CHMine
  },
  {
    path: "/friend",
    component: CHFriend
  },
  
];

export default routes;