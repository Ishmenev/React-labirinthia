import React from 'react';
import Intro from '../components/Intro/Intro';
import Indicators from '../components/Indicators/Indicators';
import Objects from '../components/Objects/Objects';
import Cover from '../components/Cover/Cover';
import Description from '../components/Description/Description';
import {Container} from 'reactstrap';

class CreateLevel extends React.Component {
    state = {
        step: 'first'
    };
    
    changeStep = (newStep) => {
        this.setState({
            step: newStep
        })
    };
    
    render() {
    
        let content = null;
        
        if (this.state.step === 'first') {
            content = <React.Fragment>
                <Indicators/>
                <Description/>
                <Cover changeStep={this.changeStep}/>
            </React.Fragment>
        }
        
        else if (this.state.step === 'second') {
            content = <React.Fragment>
                <Objects/>
            </React.Fragment>
        }
        
        
        return (
            <React.Fragment>
                <Intro introType={'local'} label='Создать уровень'/>
               <Container>
                   {content}
               </Container>
            </React.Fragment>
        
        )
    }
    
    
}

export default CreateLevel;