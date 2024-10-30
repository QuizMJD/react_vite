
import"./components/todo/todo.css"
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from "./assets/react.svg"
import {useState} from "react";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import {Outlet} from "react-router-dom";


const App = () => {


    return (

        <>
            <Header/>

            <Outlet/>
            <Footer/>
        </>

    )
}

export default App;
