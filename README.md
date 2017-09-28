## Introduction
Simple nodejs api that can perform the following tasks:

1. Accept a key(string) and value(some json blob/string) {"key" : "value"} and store them. If an existing key is sent, the value should be updated

2. Accept a key and return the corresponding latest value

3. When given a key AND a timestamp (as query string), return whatever the value of the key at the time was.

4. List all items.

## Users Guide
End Point: `https://nodejs-api-myce.herokuapp.com/`

#### GET all the items
https://nodejs-api-myce.herokuapp.com/items

#### POST an item
`https://nodejs-api-myce.herokuapp.com/items`
body:
```
{
  key: 'your key',
  value: 'your value',
  timestamp: default to current time in epoch seconds format
}
```

#### GET an item by [key]
`https://nodejs-api-myce.herokuapp.com/[key]`

#### GET an item by [key] and timestamp query string
`https://nodejs-api-myce.herokuapp.com/[key]?timestamp=[epoch time in second]`

## Developers Guide
`npm version: 5.4.2`

`node version: 8.5.0`

#### Getting Started
1. Create mlab database at https://mlab.com/
2. Create a `user` and `password` for the database
3. Create a `.env` file in root project folder
4. Add the following credential into the `.env` file

DBUSER=[YOUR_DB_USERNAME]

DBPASSWORD=[YOUR_DB_PASSWORD]

5. Run `npm install`

6. Run `npm start`
