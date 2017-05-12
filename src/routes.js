import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const Greeting = () => {
  return <div> Hey there </div>

};
const Content = () => {
  return <div> Content page</div>

};
const Question = () => {
  return <div> I wonder how the css comes in to thes </div>

};


export default (
  <Route path = "/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path = "greet" component={Greeting} />
    <Route path = "content" component={Content} />
    <Route path = "question" component={Question} />
    <Route path = "posts" component={PostsNew} />

 </Route>
);
