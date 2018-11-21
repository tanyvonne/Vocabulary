/*
   Root, Router 配置
*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './../App';

// import Test from './../containers/Test';
import Home from '../containers/home';
import List from '../containers/list';
import Operate from '../containers/operate';
// import Message from './../containers/Message';

const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/home" component={Home} />
                     <Route path="/list" component={List} />
                     <Route path="/operate" component={Operate} />
                     {
                    //
                    //  <Route path="/message/:id" component={Message} />
                    //   {/*路由不正确时，默认跳回home页面*/}
                    //  <Route render={() => <Redirect to="/" />} />
                   }
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);

export default Root;
