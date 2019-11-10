This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Add Data from Contentful

Contentful is headless cms working with RESTful APIs

#### RESTful APIs

  A RESTful API is an application program interface (API) that uses HTTP requests to **GET**, **PUT**, **POST** and **DELETE** `data`.

#### Install Contentful module

```bash
npm install contentful
```

_NOW we have **contentful** module in the `node_modules` so we can `import` it and use it to get data saved in contentful application_


#### Initilize Contentful

In the `functions\contentful.js` we will add code below from [example](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/):

```js:functions\contentful.js
  import * as contentfull from 'contentful';

  // here we can use client to fetch our Data
  // first step replace <space_id> and <access_token> with id an Content Delivery API - access token from https://app.contentful.com > project > Settings > API Keys
  const client = contentful.createClient({
    space: '<space_id>',
    accessToken: '<access_token>'
  })
  // It should Looks Like this
  // const client = contentful.createClient({
  //   space: '5q6t1aoaaa4',
  //   accessToken: '7_fdgmGGGGssfwCTER3vDxEWWewffdfgYdiH'
  // })
```

Congratulation **Contentfull** was initilized :tada:

#### Fetch all entires from contentful

Contentfull client hava multiple methods to fetch data from contentful server. And for example we want to list all entries here. To done with this we should use `getEntries` method from client object

```js:App.js
  client.getEntries()
    .then(function (entries) {
      // log the title for all the entries that have it
      entries.items.forEach(function (entry) {
        if (entry.fields.productName) {
          console.log(entry.fields.productName)
        }
      })
    })
```

**`getEntries`** method return a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) type response. The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

