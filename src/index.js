import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AWS from 'aws-sdk';

const albumBucketName = 'reeallyliri-gallery';
AWS.config.region = 'us-east-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-2:bc816d11-678d-41e4-9451-2bae8f6df12f',
});
const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

ReactDOM.render(
  <App
    s3={s3}
  />,
  document.getElementById('root')
);
registerServiceWorker();
