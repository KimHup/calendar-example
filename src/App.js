import React from 'react';
import { Admin, Resource  } from 'react-admin';
import Calendar from './Dashboard'
import jsonServerProvider from 'ra-data-json-server';
import restProvider from 'ra-data-simple-rest';
import {DemandList, DemandShow} from "./Demand";

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/msand/demo');
const App = () => (
    <Admin dashboard={Calendar} dataProvider={jsonServerProvider(  'https://my-json-server.typicode.com/msand/demo')}>
        <Resource
            GET_ONE
            name={"nodes"}
            list={DemandList}
            show={DemandShow}

        />
    </Admin>
    );

export default App;
