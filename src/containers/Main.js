import React, {Component} from 'react';
import Loader from '../components/Loader/Loader';
import MainPage from '../pages/MainPage';


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainData: true
        }
    }


    render() {
        let content = <Loader/>
        //mainData - данные с сервера, которые мы положили в стейт
        if (this.state.mainData) {
            content = <MainPage/>
        }
        
        return (
            content
        )
    }
}