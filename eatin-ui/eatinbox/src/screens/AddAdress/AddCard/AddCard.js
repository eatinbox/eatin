import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import axios from 'axios';
import { connect } from 'react-redux'
import globalContext from '../../../contexts/globalContext'
import {withNavigation} from 'react-navigation'

import InputBlock from './InputBlock'
import SearchItem from '../../../reusables/Components/SearchItem'
import * as actionsCreators from '../../../store/actions/userActions'

const key = 'AIzaSyD3RbiDvZseLuj4MJICPVw5jsjr8LNpbzc'

class AddCard extends Component {
    static contextType = globalContext

    state = {
        predictions: [],
        region_selected: false,
        searchMode: true,
        editable: true,
        result: {
            name: '',
            address: '',
            details: '',
            latitude: null,
            longitude: null,
            type: '1'
        }
    }

    handleTextChange = (name) => {
        this.setState({ result: {name} }, () => {
            let inputs = this.state.result.name.split(" ").join("+");
            this.makeQuery(inputs);
        })
    }

    makeQuery = async (input) => {

        // console.log(this.props.region)

        const { data: { predictions } } = await axios.get(
            'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='
            + input + '&location=' + this.props.region.latitude + ',' + this.props.region.longitude
            + '&radius=35000' + '&components=country:in&key=' + key)

        // console.log(predictions)

        this.setState({ predictions });
    }

    fetchDetails = async (place_id) => {
        const { data: { result } } = await axios.get(
            'https://maps.googleapis.com/maps/api/place/details/json?place_id='
            + place_id.toString() + '&key=' + key)

        this.setState({
            result: {
                ...this.state.result,
                person_info: this.props.user.person,
                name: result.name,
                address: result.formatted_address,
                latitude: Math.round(result.geometry.location.lat * 1000000) / 1000000,
                longitude: Math.round(result.geometry.location.lng * 1000000) / 1000000,
                type: "1",
            },
            editable: false,
            searchMode: false,
        })
    }

    saveAddress = () => {
        this.props.dispatch(actionsCreators.addAddress(this.state.result, this.props.user, true))
        this.props.navigation.navigate('MenuScreen')
    }

    goBack = () => {
        this.setState({
            region_selected: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.region !== this.props.region) {
            this.setState({
                region_selected: true
            })
        }
    }

    render() {
        const resultBox = this.state.searchMode ? (
            <View style={styles.resultsCont}> 
                {this.state.predictions.map((item) => {
                    return (
                        <SearchItem
                            key={item.id}
                            {...item}
                            fetchDetails={this.fetchDetails}
                            mainText={styles.mainText}
                            searchText={styles.searchText}
                        />
                    )
                })}   
            </View>) : null

        return (
            <View style={styles.container}>
                <InputBlock
                    autoFocus={true}
                    title="YOUR LOCATION"
                    handleTextChange={this.handleTextChange}
                    value={this.state.result.name}
                    placehold="Enter place"
                    editable={this.state.editable}
                    change
                />
                <InputBlock
                    title="COMPLETE ADDRESS"
                    value={this.state.result.address}
                    placeholder="Address"
                    editable={this.state.editable}
                    multiline={true}
                />
                <InputBlock
                    // autoFocus={true}
                    title="ADDTIONAL DETAILS"
                    value={this.state.additionDetails}
                    handleTextChange={(details) => this.setState({result: {
                        ...this.state.result,
                        details
                    }})}
                    placeholder="House no. /Flat no./ Floor/ Building"
                    multiline={true}
                    editable={true}

                />
                {resultBox}
                <TouchableOpacity style={styles.saveButt} onPress={this.saveAddress}>
                    <Text style={styles.saveText}>SAVE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 16,
        // borderWidth: 1,
        marginTop: 16,
        elevation: 3,
        backgroundColor: '#fff',
    },

    saveButt: {
        width: '86%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2699fb',
        marginTop: 16,
        borderRadius: 4,
    },

    saveText: {
        padding: 8,
        textAlign: 'center',
        fontSize: 9.5,
        color: '#fff',
        fontWeight: 'bold',
    },

    mainText: {
        fontSize: 8,
    },

    searchText: {
        fontSize: 10,
    },

    resultsCont: {
        backgroundColor: '#fff',
        zIndex: 5,
        width: '100%',
        position: 'absolute',
        top: 72,
        // borderWidth:1,
        elevation: 2,
    }
});

const mapStateToProps = ({userReducer, globalReducer }) => {
    return {
        region: userReducer.session_user.region,
        user: userReducer.session_user,
        nav: globalReducer._navigate,
    }
}

export default withNavigation(connect(mapStateToProps)(AddCard));
