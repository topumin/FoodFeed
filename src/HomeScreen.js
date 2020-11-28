import React, { Component } from 'react';
import { Text, View, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';
import YoutubeScreen from './YoutubeScreen';

export class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            youtubes: [],
        }
    }

    componentDidMount(){
        this.feedYoutube();
    }

    feedYoutube(){
        const data = {username: 'admin', password: 'password', type: 'foods'}
        const url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
        axios.get(url, {params: data})
        .then(response=>{
            this.setState({youtubes: response.data.youtubes})
        })
        .catch(error=>{
            alert(JSON.stringify(error));
        })
    }

    onClickItem(item){
        alert(item.title);
    }

    renderItemList(item){
        return(
            <TouchableOpacity
                setOpacityTo={50} onPress={()=>this.onClickItem(item)}
            >
                <Card containerStyle={{flexDirection: 'column', borderRadius: 8, padding: 0 ,backgroundColor: '#fff', overflow: 'hidden', marginHorizontal: 30, marginBottom: 15}}>
                    <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
                        <Image 
                            source={{uri: item.avatar_image}}
                            style={{width: 45, height: 45, marginRight: 15, borderRadius: 26, marginTop: 10, marginLeft: 10}}
                        />

                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontWeight: 'bold',}}>{item.title}</Text>
                            <Text>{item.subtitle}</Text>
                        </View>

                    </View>
                    <Image 
                        source={{uri: item.youtube_image}}
                        style={{width: '100%', height: 180}}
                    />
                </Card>
            </TouchableOpacity>
        );
    }

    renderHeaderList(){
        return(
            <Image 
                source={require('./imgs/header_react_native.png')}
                style={
                    {
                       width: '100%',
                       height: 76,
                       marginVertical: 30,
                    }
                }
            />
        )
    }

    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1,}}>
                <ImageBackground
                    style={{ width: '100%', height: '100%', }}
                    source={require('./imgs/bg.png')}>
                    <FlatList
                        ListHeaderComponent={ this.renderHeaderList }
                        resizeMode='contain'
                        stlye={{marginTop: 40}}
                        //data={[1, 2, 3, 4]}
                        data={this.state.youtubes}
                        renderItem={ ({item}) => this.renderItemList(item) }
                    />
                </ImageBackground>
            </View>
        )
    }
}

export default HomePage;
