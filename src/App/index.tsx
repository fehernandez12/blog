import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from '../Layout';
import { Article } from '../Article';
import { NotFound } from '../NotFound';
import { HomePage } from '../HomePage';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="container-fluid h-100">
          <Layout>
            <Routes>
              <Route path='/blog'>
                <Route path='/' element={<HomePage />} />
                <Route path='/articles'>
                  <Route path='/articles/:articleSlug' element={<Article />} />
                </Route>
                <Route path='/tags'>
                  <Route path='/tags/:tagSlug'></Route>
                </Route>
                <Route path='/categories'>
                  <Route path='/categories/:categorySlug'></Route>
                </Route>
                {/* <Route path='/archive' element={<Archive />} />
                <Route path='/search' element={<Search />} /> */}
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </Layout>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;