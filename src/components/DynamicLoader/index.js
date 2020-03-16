import 'babel-polyfill';
import React, { Component } from 'react';
import Loadable from 'react-loadable';

const available = ['OnlineAudio'];

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LoadableAnotherComponent = Loadable({
  loader: () => import('../OnlineAudio/audioItem'),
  loading: MyLoadingComponent
});

class DynamicLoader extends Component {
    state = { modules: [], active: [] };

    render() {
        return <LoadableAnotherComponent />
    }
}

export default DynamicLoader;
