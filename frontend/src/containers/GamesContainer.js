import React, {Component} from "react";
import Loader from "../components/Loader/Loader";
import Games from "../pages/Games";
import Page404 from "../pages/Page404";
import { connect } from 'react-redux';
import {getMainData} from '../actions/main';

class GamesContainer extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {    
        this.props.getMainData();
    }
    
    render() {
        const {isFetching, data} = this.props;
        
        let content = null;
    
        if (data) {
            content = <Games
                data={data}
            />
        }
        
        else if (isFetching) {
            content = <Loader/>;
        }
        
        else {
            content = <Page404/>;
        }
        
        
        return (
            content
        )        
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        data: state.main.data,
        isFetching: state.main.isFetching
    }
}

export default connect(mapStateToProps, {getMainData})(GamesContainer)