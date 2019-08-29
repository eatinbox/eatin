import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class MealType extends Component {
    constructor(props) {
        super (props)
    }

    state= {
        toggleFull: true
    }

    onPress1= () => {
        const newState= !this.state.toggleFull
        { this.state.toggleFull === true ? toggleFull = true : 
            (this.setState({ 
                toggleFull: newState,
            }))
        }
    }

    onPress2 = () => {
        const newState= !this.state.toggleFull
        { this.state.toggleFull === true ?  (this.setState({ 
            toggleFull: newState,
        })) : toggleFull = true
        }
    }

    render () {

        const {toggleFull} = this.state
        const backGF = toggleFull ? "black" : "white"
        const colH = toggleFull ? "black" : "white"
        const backGH = toggleFull ? "white" : "black"
        const colF = toggleFull ? "white" : "black"

        return (
            <View style= {{
                flexDirection: 'row',
                width: '60%',
                marginBottom: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                marginTop: 10
            }}
            >
                {/* <View style= {{
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000',
                }}
                >
                    
                    <Text>
                        FULL MEAL   
                    </Text> */}

                    <TouchableOpacity style= {{
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: backGF,
                    }}

                    onPress= {() => this.onPress1()}
                    >

                    <Text style= {{
                        color: colF
                    }}>
                        HALF MEAL   
                    </Text>

                    </TouchableOpacity>
                {/* </View> */}

                {/* <View style= {{
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                }}
                >

                    <Text>
                        HALF MEAL   
                    </Text> */}

                    <TouchableOpacity style= {{
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: backGH,
                    }}
                    onPress= {() => this.onPress2()}
                    >
                    <Text style= {{
                        color: colH
                    }}>
                        FULL MEAL   
                    </Text>

                    </TouchableOpacity>
                {/* </View> */}

            </View>
        );
    }
}