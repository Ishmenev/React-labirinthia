import React, {Component} from "react";
import Loader from "../components/Loader/Loader";
import MainPage from "../pages/MainPage";
import Page404 from "../pages/Page404";
import axios from "axios";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isFetching: true
        }
    }
    
    componentDidMount() {
        const getMainData = async () => {
            try {
                const res = await axios.get("/api/main");
                console.log(res, 'res');
                this.setState({
                    data: res.data[0],
                    isFetching: false
                })
            } catch (err) {
                console.error(err.message);
            }
        };
    
        getMainData();
    }
    
    render() {
        const {isFetching, data} = this.state;
        
        let content = <Loader/>;
        
        if (!isFetching) {
            if (data) {
                content = <MainPage data={data}/>
            } else {
                content = <Page404/>
            }
        }
        
        return (
            content
        )
    }
}