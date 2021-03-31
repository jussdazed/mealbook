import './App.css';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Switch} from "react-router-dom";
import MealDetails from "./components/MealDetails";
import MealsList from "./components/Category/MealsList";
import Categories from "./components/CategoriesPage/Categories";

function App() {
    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <Switch>
                <Route exact path='/' component={Categories}/>
                <Route path='/category/:name' component={MealsList}/>
                <Route path='/meal/:id' component={MealDetails}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;
