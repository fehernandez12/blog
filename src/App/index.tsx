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
              <Route path='/blog' element={<HomePage />} />
              <Route path='/blog/articles'>
                <Route path='/blog/articles/:articleSlug' element={<Article />} />
              </Route>
              <Route path='/blog/tags'>
                <Route path='/blog/tags/:tagSlug'></Route>
              </Route>
              <Route path='/blog/categories'>
                <Route path='/blog/categories/:categorySlug'></Route>
              </Route>
              {/* <Route path='/blog/archive' element={<Archive />} />
              <Route path='/blog/search' element={<Search />} /> */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;