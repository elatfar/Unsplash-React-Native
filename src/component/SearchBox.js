import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isSearching: false
        };
    }
    searchPhoto = () => {
        if (this.state.searchText.trim() != '') {
            this.setState({ isSearching: true });

        } else {
            this.setState({ isSearching: false });
        }
        this.props.onSearching(this.state.searchText);
    };

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.inputBox}
                    onEndEditing={() => this.searchPhoto()}
                    onChangeText={(val) => this.setState({ searchText: val })}
                    placeholder="Find beautiful photo.."
                />
                {this.state.isSearching && (
                    <Text style={{marginLeft:10,paddingBottom:5}}>
                        {'search for : ' + this.state.searchText}</Text>
                )}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        height: 90,
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 5,
        margin: 10,
        padding: 10,

    }
})

export default SearchBox;