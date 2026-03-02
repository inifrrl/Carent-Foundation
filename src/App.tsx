import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import LoadingScreen from './components/LoadingScreen';
import './index.css'; // Import CSS dengan responsive styles

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen w-full bg-white">
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
