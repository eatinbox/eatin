import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import axios from 'axios';
import {connect} from 'react-redux'

import SearchPage from './SearchPage';
import LocationMap from './LocationMap';
import * as actionsCreators from '../../store/actions/locationActions' 

const key = 'AIzaSyD3RbiDvZseLuj4MJICPVw5jsjr8LNpbzc'

class AutoComplete extends Component {
    state = {
        input: '',
        predictions: [],
        region_selected: false,
    }

    handleTextChange = (input) => {
        this.setState({input}, () => {
            let inputs = this.state.input.split(" ").join("+");
            this.makeQuery(inputs);
        })
    }

    makeQuery = async (input) => {

        // console.log(this.props.region)

        const {data: {predictions}} = await axios.get(
            'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' 
            + input + '&location=' + this.props.region.lat + ',' + this.props.region.long 
            + '&radius=35000' + '&components=country:in&key=' + key)

        // console.log(predictions)

        this.setState({predictions});
    }

    fetchDetails = async (place_id) => {
        const {data: {result}} = await axios.get(
            'https://maps.googleapis.com/maps/api/place/details/json?place_id=' 
            + place_id.toString() + '&key=' + key)

        const reg = {
            name: result.name,
            addr: result.formatted_address,
            latitude: result.geometry.location.lat,
            longitude: result.geometry.location.lng,
        }

        this.props.dispatch(actionsCreators.setLocation(reg))
    }

    goBack = () => {
        this.setState({
            region_selected: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.region !== this.props.region ){
            this.setState({
                region_selected: true
            })
        }
    }

    render() {
        let view = (<SearchPage
                        input={this.state.input}
                        handleTextChange={this.handleTextChange}
                        fetchDetails={this.fetchDetails}
                        predictions={this.state.predictions}/>)

        if(this.state.region_selected)
            view = (<LocationMap 
                        region={this.props.region} 
                        goBack={this.goBack}
                        navigate={() => this.props.navigation.navigate('MenuScreen')}    
                        />)

        return (
            <React.Fragment>
                {view}
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        // borderWidth:1,
    },
});

const mapStateToProps = ({locationReducer}) => {
    return {
        region : locationReducer.region,
    }
}

export default connect(mapStateToProps)(AutoComplete)
