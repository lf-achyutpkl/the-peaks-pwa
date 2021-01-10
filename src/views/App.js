import ErrorBoundary from '../components/ErrorBoundary';

import Button from '../components/Button/Button';
import NavBar from '../components/NavBar';
import Homepage from '../views/Homepage';
import ArticleDetail from '../views/ArticleDetail';

function App() {
  return (
    <ErrorBoundary>
      <ArticleDetail />
    </ErrorBoundary>
  );
}

export default App;
