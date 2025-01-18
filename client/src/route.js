import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  SearchResults,
  ServiceDirectory,
  FAQs,
  ContactUs,
} from "./pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={SearchResults} />
      <Route path="/services" component={ServiceDirectory} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/contact" component={ContactUs} />
    </Switch>
  </Router>
);

export default Routes;
