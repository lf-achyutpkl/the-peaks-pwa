import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import ErrorBoundary from '../components/ErrorBoundary';

import Button from '../components/Button/Button';
import NavBar from '../components/NavBar';
import Homepage from '../views/Homepage';
import ArticleDetail from '../views/ArticleDetail';

import * as routes from '../config/routes';

function App() {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path={routes.HOME} component={Homepage} />
            <Route path={`${routes.ARTICLE_DETAIL}(.*)`} component={ArticleDetail} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
