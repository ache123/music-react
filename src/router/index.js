import React from 'react';
import { Redirect } from 'react-router-dom';

const CHDiscover = React.lazy(() => import("@/pages/discover"));
const CHRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const CHSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const CHRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const CHDJRadio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const CHArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const CHAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));

const CHFriend = React.lazy(() => import("@/pages/friend"));
const CHMine = React.lazy(() => import("@/pages/mine"));


// import CHDiscover from '@/pages/discover'
// import CHRecommend from '@/pages/discover/c-pages/recommend'
// import CHSongs from '@/pages/discover/c-pages/songs'
// import CHRanking from '@/pages/discover/c-pages/ranking'
// import CHDJRadio from '@/pages/discover/c-pages/djradio'
// import CHArtist from '@/pages/discover/c-pages/artist'
// import CHAlbum from '@/pages/discover/c-pages/album'

// import CHFriend from '@/pages/friend'
// import CHMine from '@/pages/mine'


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