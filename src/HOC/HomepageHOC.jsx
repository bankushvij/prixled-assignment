import React from 'react'
import {  Route } from "react-router-dom";

import HomepageLayout from '../Layouts/HomepageLayout';
function HomepageHOC({ component: Component,path ,...rest }) {
  return (
    <>
     
        <Route
          {...rest}
          path={path}
          component={(props) => (
            <HomepageLayout {...props}>
              <Component {...props}/>
            </HomepageLayout>
          )}
        />
      
    </>
  )
}

export default HomepageHOC
