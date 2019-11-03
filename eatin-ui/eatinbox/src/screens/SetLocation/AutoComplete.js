import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import axios from 'axios';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import SearchPage from './SearchPage';
import LocationMap from './LocationMap';
import * as actionsCreators from '../../store/actions/userActions' 

const key = 'AIzaSyD3RbiDvZseLuj4MJICPVw5jsjr8LNpbzc'

class AutoComplete extends Component {
    state = {
        input: '',
        predictions: [],
        region_selected: false,
    }

    componentDidMount() {
        console.log("Holla huppa", this.props)
    }

    handleTextChange = (input) => {
        this.setState({input}, () => {
            let inputs = this.state.input.replace(" ", "+")
            this.makeQuery(inputs);
        })
    }

    makeQuery = async (input) => {

        // console.log(this.props.region)

        const {data: {predictions}} = await axios.get(
            'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' 
            + input + '&location=' + this.props.region.latitude + ',' + this.props.region.longitude 
            + '&radius=35000' + '&components=country:in&key=' + key)

        // console.log(predictions)

        this.setState({predictions});
    }

    fetchDetails = async (place_id) => {
        const {data: {result}} = await axios.get(
            'https://maps.googleapis.com/maps/api/place/details/json?place_id=' 
            + place_id.toString() + '&key=' + key)

        const reg =  {
            name: result.name,
            latitude: result.geometry.location.lat,
            longitude: result.geometry.location.lng,   
        }

        const session_user = {
            ...this.props.user,
            region : {...reg}
        }

        this.props.dispatch(actionsCreators.setSessionUserRegion(reg))
        await AsyncStorage.mergeItem('@session_user', JSON.stringify(session_user))

        
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

const mapStateToProps = ({userReducer}) => {
    return {
        user: userReducer.session_user,
        region: userReducer.session_user.region
    }
}

export default connect(mapStateToProps)(AutoComplete)
