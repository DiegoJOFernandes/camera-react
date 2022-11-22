import React, { useState, useRef } from 'react';
import {WebView} from 'react-native-webview'

export default function Ia(){

  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);
  return(
    <WebView source={{ uri: 'https://magictrash.herokuapp.com/ia'}} style={{marginTop: 20}}>

    </WebView>
  );
}