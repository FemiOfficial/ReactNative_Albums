//import lbraries

import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
            <View style={viewStyle}>
              <Text style={textStyle}>{props.headerText}</Text>
            </View>
        );
};

const styles = {
    viewStyle:{
        backgroundColor: '#f2f3f2',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 25
    
        
    }
};
export default Header;