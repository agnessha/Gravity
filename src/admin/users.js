import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField, SimpleForm, TextInput,Edit } from 'react-admin';
const UserList = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='username' />
            <EmailField source='email' />
            <TextField source='address.street' label='Address' />
            <TextField source='phone' />
            <UrlField source='website' />
            <TextField source='company.name' label='Company' />
        </Datagrid>
    </List>
);

const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='username' />
            <TextInput source='email' />
            <TextInput source='address.street' label='Address' />
            <TextInput source='phone' />
            <UrlField source='website' />
            <TextInput source='company.name' label='Company' />
        </SimpleForm>
    </Edit>
);

export default UserList;