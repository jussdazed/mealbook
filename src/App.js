import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router-dom";
import MealDetails from "./page/MealDetails";
import MealsList from "./page/Category/MealsList";
import Categories from "./page/CategoriesPage/Categories";
import SearchResult from "./page/Search/SearchResult";

function App() {
    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <Switch>
                <Route exact path='/mealbook/' component={Categories}/>
                <Route path='/category/:name' component={MealsList}/>
                <Route path='/meal/:id' component={MealDetails}/>
                <Route path='/search/:name' component={SearchResult}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
