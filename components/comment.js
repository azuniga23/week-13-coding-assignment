import React from 'react';
import ReplyButton from './reply-button';
//import LikeButton from './like-button';

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
      return (
        <div className="card w-75">
            <div className="card-header bg-success text-white">
                Username
            </div>
            <div className="card-body">
                Password
            </div>
            <div className="card-footer">
                
                <ReplyButton />
            </div>
        </div>          
      );
      
    }
}

