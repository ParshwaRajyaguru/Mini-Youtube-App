import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/searchbar';
import VideoList from './Components/videolist';
import VideoView from './Components/videoview';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


//Youtube API Key:  AIzaSyD62_BbzK9L1kOLIxsqPa4321thY7CrB8k
const YOUTUBE_API_KEY = 'AIzaSyD62_BbzK9L1kOLIxsqPa4321thY7CrB8k';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.newSearchResult('Mission Impossible 5');
    }

    newSearchResult(searchTerm) {
        YTSearch({key: YOUTUBE_API_KEY, term: searchTerm},
                (data) => {
                    this.setState(
                    {
                        videos: data,
                        selectedVideo: data[0]
                    } );
                }
         );
    }

    render() {
        const VideoSearch = _.debounce((searchTerm) => { this.newSearchResult(searchTerm) }, 500);

        return (
            <div>
                <div>
                    <h1 className="myStyle">MiniYoutubeApp</h1>
                </div>
                <SearchBar onSearchTermChange={VideoSearch}/>
                <VideoView video={this.state.selectedVideo} />

                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />

            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

