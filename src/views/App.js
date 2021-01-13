import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import ErrorBoundary from '../components/ErrorBoundary';

import NotFound from '../views/404';
import Homepage from '../views/Homepage';
import ArticleDetail from '../views/ArticleDetail';
import SectionNewsList from '../views/SectionNewsList';
import InfiniteScroll from '../components/InfiniteScroll';

import * as routes from '../config/routes';
import Bookmarks from './Bookmarks';

function App() {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path={routes.HOME} component={Homepage} />
            <Route exact path="/asdf" component={InfiniteScroll} />
            <Route exact path={routes.BOOKMARKS} component={Bookmarks} />
            <Route path={`${routes.ARTICLE_DETAIL}(.*)`} component={ArticleDetail} />
            <Route exact path={`/section/:sectionId(sport|culture|lifeandstyle)`} component={SectionNewsList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
