/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import ListPhoto from './component/ListPhoto';
import SearchBox from './component/SearchBox';
import axios from 'react-native-axios';

/*ada dua komponen smart komponen dan kontainer presentasi */

const fetchPhoto = (query, page) => {
  let url = (query != '')
    ? `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=i8K6SGtMsPnHviSk925U3kIMEbq03sTFWpnVdWHN22g`
    : `https://api.unsplash.com/photos/?page=${page}&client_id=i8K6SGtMsPnHviSk925U3kIMEbq03sTFWpnVdWHN22g`;

  return axios.get(url)

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataImages: [],
      isLoading: true,
      page: 1,
      query: '',
    };

  }

  doSearching = searchText => {
    this.setState({ isLoading: true, query: searchText, dataImages: [] });
    console.log('mencari foto :' + searchText);
    this.getData([],searchText);
  };

  getData = async (dataImages, query) => {
    let searchText = query;
    let page = this.state.page;
    let res = await fetchPhoto(searchText, page);
    console.log("data.. >>" + res);
    let data = [];
    if (searchText != '') {
      data = res.data.results;
    } else {
      data = res.data;
    }
    this.setState({
      isLoading: false,
      dataImages: [...dataImages, ...data],
    });
  }

  loadMore = () => {
    if (!this.state.isLoading) {
      this.setState({ page: this.state.page + 1 });
      this.getData(this.state.dataImages, this.state.query);
    }
  }
  componentDidMount() {
    this.getData([], '');
  };

  pindahHalaman = (item) => {
    this.props.navigation.navigate('detail', { item: item });
  }

  render() {
    return (
      <View>
        <SearchBox onSearching={(val) => this.doSearching(val)} />
        <ListPhoto
          dataImages={this.state.dataImages}
          isLoading={this.state.isLoading}
          onImageClick={(item) => this.pindahHalaman(item)}
          onLoadMore={() => this.loadMore()} />

      </View>
    );
  }
}

export default App;
