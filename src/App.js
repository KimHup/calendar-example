import React from 'react';

import {Dashboard} from './Dashboard'
import jsonServerProvider from 'ra-data-json-server';
import {Admin, Resource, ListGuesser} from "react-admin";
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('https://my-json-server.typicode.com/msand/demo')}>
        <Resource  name="nodes" list={ListGuesser}/>
    </Admin>
    );

export default App;
