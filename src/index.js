import React from 'react';
import injectSheet from 'react-jss';
import {
  AppBar,
  SideBar,
  ContentViewer
} from './components/components';

const style = {
  docViewer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  
  content: {
    display: 'flex',
    flex: 1
  },
  
  sideBar: {
    width: '300px'
  },
  
  viewer: {
    flex: 1
  }
};

const DocViewer = ({classes, children}) => (
  <div className="dr-docviewer">
    <AppBar />
    <div className="content">
      <SideBar />
      <ContentViewer />
    </div>
  </div>
);


export default injectSheet(style)(DocViewer);
