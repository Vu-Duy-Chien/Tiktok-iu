import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Comments from '~/pages/Comments/Comments';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.comments, component: Comments, },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
