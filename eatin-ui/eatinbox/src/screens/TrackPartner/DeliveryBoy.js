import { 
Text,
View,
StyleSheet
} from 'react-native';
import React, {useContext} from 'react';


import ImageDetails from '../../reusables/Components/ImageDetails'
import SpaceBetweenColumns from '../../reusables/SpaceBetweenColumns';
import { GlobalContext } from '../../contexts/globalContext';
import RatingStar from '../../reusables/Components/RatingStar';

const DeliveryBoy = (props) => {
    const {fonts} = useContext(GlobalContext)

    return (
        <View style={styles.container}>
            <View style={styles.partnerCont}>
                <ImageDetails container={styles.detailCont}/>
                <RatingStar ratingCont={styles.ratinCont}/>
            </View>
            <SpaceBetweenColumns
                left="Expected Delivery Time"
                right="8:10 PM"
                leftStyle={fonts.heading}
                rightStyle={fonts.heading}
                container={styles.spaceCont}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '92%',
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#fff',
        padding: 8,
    },

    partnerCont:{
        width: '100%',
        flexDirection: 'row',
    },

    ratinCont: {
        // height: 20,
        alignSelf: 'flex-end',
    },

    detailCont: {
        width: '84%',
    },

    spaceCont: {
        marginTop: 24,
        marginBottom: 8,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    }
})

export default DeliveryBoy;