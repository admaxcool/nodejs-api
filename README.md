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
  value: 'your value'
}
```

#### GET an item by [key]
`https://nodejs-api-myce.herokuapp.com/[key]`

#### GET an item by [key] and timestamp query string
`https://nodejs-api-myce.herokuapp.com/[key]?timestamp=[epoch_time_in_second]`

## Developers Guide
`npm version: 5.4.2`

`node version: 8.5.0`

`mongodb: mlab` at https://mlab.com

#### Getting Started
1. Create mongodb database
2. Create a `.env` file in root project folder
3. Add the following credential to the `.env` file

DB_URL=[YOUR_DB_URL]

DB_TEST_URL=[YOUR_TEST_DB_URL]

4. Run `npm install`

5. Run `npm start`

#### Test
Test framework: `mocha, chai, chai-http`

1. Run `npm test`
