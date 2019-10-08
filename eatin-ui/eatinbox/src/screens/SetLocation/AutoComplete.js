import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import axios from 'axios';
import {connect} from 'react-redux'

import SearchItem from './SearchItem'
import Header from './Header';
// import { key } from '../../../Utils/key'

const key = 'AIzaSyD3RbiDvZseLuj4MJICPVw5jsjr8LNpbzc'

export class AutoComplete extends Component {
    state = {
        input: '',
        predictions: [],
    }

    handleTextChange = (input) => {
        this.setState({input}, () => {
            let inputs = this.state.input.split(" ").join("+");
            this.makeQuery(inputs);
        })
    }

    makeQuery = async (input) => {
        console.log(this.props)

        const {data: {predictions}} = await axios.get(
            'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' 
            + input + '&location=' + this.props.lat + ',' + this.props.long 
            + '&radius=35000' + '&components=country:in&key=' + key)

        this.setState({predictions}, () => console.log(this.state.predictions));
    }

    fetchDetails = async (place_id) => {
        const res = await axios.get(
            'https://maps.googleapis.com/maps/api/place/details/json?place_id=' 
            + place_id.toString() + '&key=' + key)

        console.log(res);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    inputValue={this.state.input}
                    handleTextChange={this.handleTextChange}
                />
                {this.state.predictions.map((item) => {
                    return (
                        <SearchItem
                            key={item.id}
                            {...item}
                            fetchDetails={this.fetchDetails}
                        />
                    )
                })}
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        // borderWidth:1,
    },

    listCont: {
        width: '95%',
        // borderWidth:1,
    }
});

const mapStateToProps = ({locationReducer}) => {
    return {
        lat : locationReducer.region.latitude, 
        long: locationReducer.region.longitude,  
    }
}

export default connect(mapStateToProps)(AutoComplete)
