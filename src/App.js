import { Router } from '@reach/router';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';
import { ListPage } from './pages/ListPage';

function App() {
  return (
    <Router>
      <HomePage path='/'>Home</HomePage>
      <CompanyPage path='/company'>Next</CompanyPage>
      <ListPage path='/list'>Last</ListPage>
    </Router>
  );
}

export default App;
