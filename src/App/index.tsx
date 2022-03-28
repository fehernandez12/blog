import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './App.scss';
import { Layout } from '../Layout';
import { Article } from '../Article';
import { NotFound } from '../NotFound';
import { HomePage } from '../HomePage';
import { TagList } from '../TagList';
import { ScrollTop } from '../ScrollTop';
import { CategoryList } from '../CategoryList';

function App() {
  
  return (
    <HashRouter basename='/'>
      <ScrollTop />
      <div className="container-fluid h-100">
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/articles'>
              <Route path='/articles/:articleSlug' element={<Article />} />
            </Route>
            <Route path='/tags'>
              <Route path='/tags/:tagSlug' element={<TagList />}></Route>
            </Route>
            <Route path='/categories'>
              <Route path='/categories/:categorySlug' element={<CategoryList />}></Route>
            </Route>
            {/* <Route path='/archive' element={<Archive />} />
            <Route path='/search' element={<Search />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;