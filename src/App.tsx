import { RouterProvider } from 'react-router-dom';
// import useAuth from './hooks/useAuth/index.js';
// import useError, { ErrorContextType } from "./hooks/useError";
// import useLoadingBar, { LoadingBarProgressContextType } from './hooks/useLoadingBar';
import router from './routes';

function App() {
  // const { user } = useAuth();
  // const { error, setError } = useError() as ErrorContextType;
  // const { barProgress, setLoadingBarProgress } = useLoadingBar() as LoadingBarProgressContextType;

  return (
    <>
      {/* {isLoading && <Spinner /> */}
      {/* {error &&
      <Alert titleClassName={'text-sm'} messageClassName={'text-sm'} type='error' title={error.name || 'Error'} message={error.message} onDismiss={()=> setError(null)}/>
      }
      <LoadingBar
        color={'#000000'}
        height={5}
        progress={progress}
        onLoaderFinished={() => setLoadingBarProgress(0)}
      /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
