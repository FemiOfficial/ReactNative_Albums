import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, 
            headerContentStyle, 
            thumbnailContainerStyle,
            textTitleStyle,
            artWorkImageStyle } = styles;

    return (
        <Card>
            <CardSection>
              <View style={thumbnailContainerStyle}>
                  <Image 
                  style={thumbnailStyle} 
                  source={{ uri: thumbnail_image }} 
                  />
              </View>
              <View style={headerContentStyle}>
                  <Text style={textTitleStyle}>{ title }</Text>
                  <Text>{ artist}</Text>
              </View>
            </CardSection>

            <CardSection>
                <Image style={ artWorkImageStyle } source={{ uri: image }} />
            </CardSection> 

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>     
        </Card>
    );
};


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textTitleStyle: {
        fontSize: 22,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        padding: 5
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    artWorkImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
   

};
export default AlbumDetail;
