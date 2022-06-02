// import { greet } from "./utils/greet";
import PageHeader from "./components/PageHeader";
import MainContent from "./components/MainContent";
import PageFooter from "./components/PageFooter";



function App(): JSX.Element {
  return (
  <>
    <PageHeader />
    <MainContent />
    <PageFooter />
  </>
  );
}

export default App;
