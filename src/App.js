import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import Authen from './components/Authen/Authen';
import BackToTop from './components/BackToTop/BackToTop';
import Getapp from './components/Getapp/Getapp';





function App() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <Router>
            <div className="App" data-theme='light'>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={

                                    <Layout>
                                        <Page />
                                    </Layout>

                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <Authen />
            <BackToTop />
            <Getapp />
        </Router>
    );
}

export default App;
