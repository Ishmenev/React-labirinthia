import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Options.module.scss';
import Level from '../Level/Level';
import Button from '../UI/Button/Button';
import store from '../../store';
import axios from "axios";
import {fetchDataSuccess} from '../../actions';
import {connect} from 'react-redux';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initStatus: false    }
  }

  componentDidMount() {

    const getMainData = async () => {
        try {
            const res = await axios.get("/api/main");
            // console.log(res, 'res')
            const data = res.data[0];
            this.props.fetchDataSuccess(data)


        } catch (err) {
            console.error(err.message);
        }
    };

    getMainData();
}



  btnClicked = () => {
    this.setState((state) => {
      return {
        initStatus: !state.initStatus
      }
    })
  }

  updateFilter(arr, params) {
    return arr.filter((item) => {
      if (params === 'all') {
        return item;
      } 
      return item.type === params;
    })
  }

  render() {

    let initStatus = this.state.initStatus;
    const getData = store.getState()
    const levels = getData.data.levels;
    const {filter} = this.props.match.params;

    let visibleLevels = this.updateFilter(levels, filter);
  
    const selectedLevels = visibleLevels.map((item) => {
      return (
        <Col key={item.id} md={6} lg={5} xl={4}>
          <div className={styles.options__item}>
            <Level description={item.description}
              number={item.id} />
          </div>
        </Col>
      )
    })

    const shownLevels = selectedLevels.slice(0, 6);
    const hiddenLevels = selectedLevels.slice(6)
    let addLevels = null;

    if (initStatus) {
      addLevels = hiddenLevels;
    } else {
      addLevels = null
    };
    

    return (
      <div className={styles.options}>
        <div className={styles.options__list}>
          <Row>
            {shownLevels}
            {addLevels}
          </Row>
        </div>
        <div onClick={this.btnClicked} className={styles.options__button}>
          <Button domType={'button'}>Еще уровни</Button>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Options)

