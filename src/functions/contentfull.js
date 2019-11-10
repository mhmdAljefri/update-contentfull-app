import * as contentfull from 'contentful';

// here we can use client to fetch our Data
// first step replace <space_id> and <access_token> with id an Content Delivery API - access token from https://app.contentful.com > project > Settings > API Keys
const client = contentfull.createClient({
  space: '1942l0peu1zz',
  accessToken: 'KSqTeEfMMmpsz0d9IFmgMqg_XgUYfl79Qkkj6qMa4qs'
})

export default client

