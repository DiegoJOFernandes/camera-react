import React, { useState, useRef } from 'react';
import {WebView} from 'react-native-webview'

export default function Site(){

  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);
  return(
    <WebView source={{ uri: 'https://greeneraps.herokuapp.com/'}} style={{marginTop: 20}}>

    </WebView>
  );
}