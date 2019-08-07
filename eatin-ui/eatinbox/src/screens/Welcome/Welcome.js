import React from 'react'
import {
Text,
View,
ImageBackground,
Dimensions,
StatusBar,
StyleSheet,
TouchableOpacity
} from 'react-native'
import Content from './Content/Content';
import Current from './Current/Current';
import {connect} from 'react-redux'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Welcome extends React.Component {

    render() {
        const item = this.props.contentArray[this.props.index]

        // console.log(item)

        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <ImageBackground source={item.url}
                    style={styles.image}>
                    
                    <Content
                        heading={item.heading}
                        content={item.content}
                    />
                    <View style={styles.bottomContainer}>
                        <View style={styles.currentContainer}> 
                            <Current/>
                            <Current/>
                            <Current/>
                        </View>
                    

                        <TouchableOpacity>
                            <View style={styles.skip}>
                                <Text style={styles.skipText}> SKIP </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    image: {
        width,
        height,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    bottomContainer: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 0,
        borderColor: '#fff',
        justifyContent: 'space-between',
        marginBottom: 32,
    },

    currentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },  
    

    skip:{
        width: 100,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#12f232',
        marginRight: 16,
    },

    skipText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 12,
        letterSpacing: 2,
    }
})

const mapStateToProps = (state) => {
    return{
        contentArray: state.contentArray
    }
}


export default connect(mapStateToProps)(Welcome);