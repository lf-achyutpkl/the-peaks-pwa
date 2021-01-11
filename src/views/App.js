import { QueryClient, QueryClientProvider } from 'react-query';

import ErrorBoundary from '../components/ErrorBoundary';

import Button from '../components/Button/Button';
import NavBar from '../components/NavBar';
import Homepage from '../views/Homepage';
import ArticleDetail from '../views/ArticleDetail';

function App() {
  const queryClient = new QueryClient();
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Homepage />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
