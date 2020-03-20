import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import ImageItem from './ImageItem';
import { ceil } from 'react-native-reanimated';

const url = 'https://api.unsplash.com/photos/?client_id=i8K6SGtMsPnHviSk925U3kIMEbq03sTFWpnVdWHN22g';

class ListPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataImages: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        //fetch data
        // axios.get(url)
        //     .then(res => {
        //         console.log('Sukses get data')
        //         console.log(res);
        //         this.setState({ isLoading: false, dataImages: res.data })
        //     })
        //     .catch(err => console.log(err))

    }

    render() {
        return (
            <View style={{alignItems:"center"}}>
                {this.props.isLoading && (<ActivityIndicator size="large" color='#4c4c4c' />)}
                {!this.props.isLoading &&
                    <FlatList
                        data={this.props.dataImages}
                        numColumns={2}
                        keyExtractor={(item, index) =>
                            index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>this.props.onImageClick(item)}>
                            <ImageItem data={item}/>
                            </TouchableOpacity>
                        )}
                        ListEmptyComponent={<Text>No result found.. </Text>}
                        onEndReached={()=>this.props.onLoadMore()}
                        onEndReachedThreshold={0.9}
                    />
                }
            </View>
        );
    }
}

export default ListPhoto;