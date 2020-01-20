import React, {Component} from "react";
import Loader from "../components/Loader/Loader";
import MainPage from "../pages/MainPage";
import Page404 from "../pages/Page404";
import axios from "axios";
import { connect } from 'react-redux';
import { fetchDataSuccess } from '../actions';


class Main extends Component {
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
                // console.log(res, 'res')
                const data = res.data[0];
                this.props.fetchDataSuccess(data)


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
                content = <MainPage/>
            } else {
                content = <Page404/>
            }
        }
        
        return (
            content
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataSuccess: (data) => {
            dispatch(fetchDataSuccess(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)