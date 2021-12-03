import "./App.css";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import NewsContent from "./components/Newscontent/NewsContent";
import Layout from './components/layout/Layout'

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component /* history={props.history} */ {...props} />
        </Layout>
      )}
    />
  );
}

function App() {

  return (
    <div className="App">
      {/* <Layout/> */}
      <Router>        
        <Switch>
          <RouteWrapper 
            path="/" 
            component={NewsContent} 
            layout={Layout} 
            exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
