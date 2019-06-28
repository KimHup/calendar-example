import React from 'react';
import {NodeList, NodeCreate, NodeEdit, NodeShow} from './nodes'
import {Dashboard} from './Dashboard'
import jsonServerProvider from 'ra-data-json-server';
import {Admin, Resource, ListGuesser} from "react-admin";
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('https://my-json-server.typicode.com/msand/demo')}>
        <Resource
            name="nodes"
            list={NodeList}
            edit={NodeEdit}
            show={NodeShow}
            create={NodeCreate}
        />
    </Admin>
    );
export default App;
