import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import CategoryDescription from "./CategoryDescription";
import Error from "./Error";


function App() {
    const headerData = [
        {'link': '/', 'text': 'Home'},
        {'link': '/about', 'text': 'About'},
        {'link': '/cat', 'text': 'Category'}
    ]
    const categoryData = [
        {'link': '/cat/notebook', 'text': 'Ноутбуки'},
        {'link': '/cat/monitor', 'text': 'Мониторы'},
        {'link': '/cat/cellphone', 'text': 'Мобильные телефоны'}
    ]
    return (
        <div className="App">
            <Router>
                <Header headerData={headerData} />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/cat"><Category categoryData={categoryData}/></Route>
                    <Route path="/cat/:catName" component={CategoryDescription}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
