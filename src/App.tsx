import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;