import "./App.css";
import { Redirect, Route, useParams } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import DetailsPage from "./Pages/DetailsPage";


import HomepageHOC from "./HOC/HomepageHOC";
import DetailsHOC from "./HOC/DetailsHOC";
function App() {
  const { type } = useParams();
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/colleges" />
      </Route>
      <HomepageHOC path="/colleges" exact component={Homepage} />
      

      <DetailsHOC path="/details" exact component={DetailsPage} />
    </div>
  );
}

export default App;
