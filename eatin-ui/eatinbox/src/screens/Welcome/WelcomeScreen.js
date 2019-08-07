import React from 'react'
import { 
View, 
Text, 
PanResponder,
Animated
} from 'react-native';
import Welcome from './Welcome';
import { fromLeft } from 'react-navigation-transitions';

class WelcomeScreen extends React.Component {
    constructor(props){
        super(props)

        // console.log(this.props.navigation.getParam('index'))
        
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove : (evt, gesture) => {},
            onPanResponderRelease: (evt, gesture) => {
                switch(this.state.index){
                    case 0:{
                        if(gesture.dx < -100) {
                            this.setState({
                                index: 1
                            }, () => {
                                this.props.navigation.push('Welcome', {
                                index: this.state.index
                            })})
                        }
                    
                        break;
                    }
                    
                    case 1:{
                        if(gesture.dx < -100) {
                            this.setState({
                                index: 2
                            }, () => this.props.navigation.push('Welcome', {
                                index: this.state.index
                            }))
                        }

                        else if(gesture.dx > 100){
                            this.setState({
                                index: 0
                            }, () => this.props.navigation.push('Welcome', {
                                index: this.state.index
                            }))
                        }

                        break;
                    }

                    case 2:{
                        if(gesture.dx > 100) {
                            this.setState({
                                index: 1
                            }, () => this.props.navigation.push('Welcome', {
                                index: this.state.index
                            }))
                        }

                     break;
                    }
                }
            }
        })

        if(!this.props.navigation.getParam('index')) {
            this.state = {
                panResponder,
                index:0,
            }
        }

        else{
            this.state = {
                panResponder,
                index: this.props.navigation.getParam('index')
            }
        }
    }

    render() {
        return (
            <View {...this.state.panResponder.panHandlers}>
                <Welcome
                    index={this.state.index}
                />
            </View>
        );
    }
}
 
export default WelcomeScreen