import React from 'react';
import { Text, Image, View, StyleSheet, ActivityIndicator } from 'react-native';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
        };
    }


    componentDidMount() {
        const navigation = this.props.navigation;
        const item = navigation.getParam('item', null);
        if (item) {
            this.setState({ item: item });
        }
    }

    render() {
        return (
            <View>
                {this.state.item &&
                    <View style={{ flex: 1 }}>
                        <View style={style.imageContainer}>
                            <Image
                                style={style.gambar}
                                source={{ uri: this.state.item.urls.regular }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={style.imageProfile}
                                source={{ uri: this.state.item.user.profile_image.small }}
                            />
                            <Text style={style.txtUser}>
                                {'@' + this.state.item.user.username}
                            </Text>
                            <Text style={style.likes}>
                                {this.state.item.likes}
                            </Text>
                        </View>
                        <Text>{this.state.item.description | this.state.item.alt_description}</Text>

                    </View>
                }

            </View>
        );
    }

}

const style = StyleSheet.create({
    imageContainer: {
        height: 450,
        margin: 10,
        backgroundColor: '#c4c4c4',
        borderRadius: 15,
    },
    gambar: {
        flex: 1,
        borderRadius: 15,
        height: 300,
    },
    imageProfile: {
        borderRadius: 20,
        width: 40,
        height: 40,
        margin: 10,
    },
    txtUser: {
        flex: 1,
        textAlignVertical: 'center',
    },
    likes: {
        textAlignVertical: 'center',
        flex: 1,
    }
})

export default Detail;