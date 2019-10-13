import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import axios from 'axios';
import { connect } from 'react-redux'

import InputBlock from './InputBlock'
import SearchItem from '../../../reusables/Components/SearchItem'
import * as actionsCreators from '../../../store/actions/userActions'

const key = 'AIzaSyD3RbiDvZseLuj4MJICPVw5jsjr8LNpbzc'

class AddCard extends Component {
    state = {
        input: '',
        completeInput: '',
        predictions: [],
        region_selected: false,
    }

    handleTextChange = (input) => {
        this.setState({ input }, () => {
            let inputs = this.state.input.split(" ").join("+");
            this.makeQuery(inputs);
        })
    }

    makeQuery = async (input) => {

        // console.log(this.props.region)

        const { data: { predictions } } = await axios.get(
            'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='
            + input + '&location=' + this.props.region.lat + ',' + this.props.region.long
            + '&radius=35000' + '&components=country:in&key=' + key)

        // console.log(predictions)

        this.setState({ predictions });
    }

    fetchDetails = async (place_id) => {
        const { data: { result } } = await axios.get(
            'https://maps.googleapis.com/maps/api/place/details/json?place_id='
            + place_id.toString() + '&key=' + key)

        const reg = {
            person_info: this.props.user.person,
            name: result.name,
            address: result.formatted_address,
            latitude: Math.round(result.geometry.location.lat * 1000000) / 1000000,
            longitude: Math.round(result.geometry.location.lng * 1000000) / 1000000,
            type: "1",
        }

        console.log(reg)

        this.props.dispatch(actionsCreators.addAddress(reg, this.props.user))
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
        return (
            <View style={styles.container}>
                <InputBlock
                    autoFocus={true}
                    title="YOUR LOCATION"
                    handleTextChange={this.handleTextChange}
                    value={this.state.input}
                    placehold="Enter place"
                />
                <InputBlock
                    title="COMPLETE ADDRESS"
                    value="Maza bayankar motha lavda"
                    value={this.state.completeInput}
                    placeholder="House no. /Flat no./ Floor/ Building"
                />
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
                </View>
                <TouchableOpacity style={styles.saveButt}>
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

const mapStateToProps = ({ locationReducer, userReducer }) => {
    return {
        region: locationReducer.region,
        user: userReducer.session_user,
    }
}

export default connect(mapStateToProps)(AddCard)
