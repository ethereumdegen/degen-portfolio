import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/Main";
 

import ContextLayout from "../layouts/Context";
import DocumentationLayout from "../layouts/Documentation";
 
 
import Welcome from '../views/welcome/Main'
    
import Blog from '../views/docs/blog.md'   
import Vibegraph from '../views/docs/vibegraph.md'   
 
import WebappDevops from '../views/docs/webapp-devops.md'

import ErrorPage from "../views/error-page/Main";

  
    
function Router() {
  const routes = [


     {
      element: <ContextLayout />,
      children: [


        {
          path: "/",
          element: <MainLayout />,
          children:  [ 
              {
                path:"/",
                element: <Welcome />, 
              },

              

            ]
          
        },

      

        {
          
          element: <DocumentationLayout />,
          children: [
            {
              path: "/blog",
              element: <Blog />,
            },
          
            {
              path: "/blog/vibegraph",
              element: <Vibegraph />,
            },

            {
              path: "/blog/webapp-devops",
              element: <WebappDevops />,
            },
        
          
          ],
        },

       
      
      
        {
          path: "/error-page",
          element: <ErrorPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },

    ] }
  ];

  return useRoutes(routes);
}

export default Router;
