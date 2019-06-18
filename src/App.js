import React from 'react';
import { Admin, Resource  } from 'react-admin';
import Dashboard from './Dashboard';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource  />
    </Admin>
    );

export default App;
