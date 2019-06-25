import React from 'react';
import {NodeList} from './nodes'
import {Dashboard} from './Dashboard'
import jsonServerProvider from 'ra-data-json-server';
import {Admin, Resource, ListGuesser} from "react-admin";
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('https://my-json-server.typicode.com/msand/demo')}>
        <Resource  name="nodes" list={NodeList}/>
    </Admin>
    );
export default App;
