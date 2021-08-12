import PageHeader from "./PageHeader";
import FavouriteImages from "./FavouriteImages";
import PageFooter from "./PageFooter";


function MainContent(): JSX.Element {
    return (
        <main>
            <PageHeader />
            <FavouriteImages />
            <PageFooter />
        </main>
    );
}
  
export default MainContent;