import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ImageItem extends React.Component {

    render() {


        return (
            <View style={style.imageContainer}>
                <Image
                    style={{ flex: 1, width: 150, resizeMode: 'cover' }}
                    source={{ uri: this.props.data.urls.thumb }}
                />
                <Text style={style.captionText}>{this.props.data.user.username}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        height:200,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    captionText: {
        alignItems: 'center',

    }
})

export default ImageItem;