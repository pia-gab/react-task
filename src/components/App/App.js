import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import {BrowserRouter, Route} from 'react-router-dom';
import List from '../List/ListContainer';
import {AnimatedSwitch} from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/list/:id" component={List} />	
        <Route exact path="/search/:id" component={SearchResults} />
    
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>

);

export default App;