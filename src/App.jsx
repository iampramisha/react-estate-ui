import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import ListPage from './routes/listPage/listPage'
import Homepage from './routes/homePage/Homepage'
import SinglePage from './routes/singlePage/singlePage'

import './routes/homePage/homePage.scss'
import Layout from './routes/layout/layout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Homepage /> },
        { path: 'list', element: <ListPage /> },
        { path: ':id', element: <SinglePage /> },
      ],
    },
  ]);
  return (
    <>
<RouterProvider router={router}/>

</>
  )
}

export default App