import CHDiscover from '@/pages/discover'
import CHRecommend from '@/pages/discover/c-pages/recommend'
import CHSongs from '@/pages/discover/c-pages/songs'
import CHRanking from '@/pages/discover/c-pages/ranking'
import CHDJRadio from '@/pages/discover/c-pages/djradio'
import CHArtist from '@/pages/discover/c-pages/artist'
import CHAlbum from '@/pages/discover/c-pages/album'

import CHFriend from '@/pages/friend'
import CHMine from '@/pages/mine'
import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: CHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: CHRecommend
      },
      {
        path: "/discover/ranking",
        component: CHRanking
      },
      {
        path: "/discover/songs",
        component: CHSongs
      },
      {
        path: "/discover/djradio",
        component: CHDJRadio
      },
      {
        path: "/discover/artist",
        component: CHArtist
      },
      {
        path: "/discover/album",
        component: CHAlbum
      },
    ]

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