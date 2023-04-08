import Home from './components/home-content.component';
import Teams from './components/teams.component';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout.component';
import NoMatch from './components/Router/NoMatch';
import './index.scss';

import './App.scss';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              title={['Weed', <i className="bi bi-flower3" />, 'Gardens']}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
