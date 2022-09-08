import React from 'react'
import {  Route } from "react-router-dom";

import DetailspageLayout from '../Layouts/DetailspageLayout';
function HomepageHOC({ component: Component,path ,...rest }) {
  return (
    <>
     
        <Route
          {...rest}
          path={path}
          component={(props) => (
            <DetailspageLayout {...props}>
              <Component {...props}/>
            </DetailspageLayout>
          )}
        />
      
    </>
  )
}

export default HomepageHOC