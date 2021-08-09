# Hlidac Statu Client

[![GitHub](https://img.shields.io/github/license/vladfrangu/hlidacstatu-client)](https://github.com/vladfrangu/hlidacstatu-client/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/hlidacstatu-client?color=crimson&logo=npm)](https://www.npmjs.com/package/hlidacstatu-client)
[![deno](https://img.shields.io/npm/v/hlidacstatu-client?color=blue&label=deno&logo=deno)](https://deno.land/x/discord_api_types)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&link=https://www.patreon.com/vladfrangu)](https://www.patreon.com/vladfrangu)
[![GitHub Sponsors](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Sponsor%20through%20GitHub&logo=github&colorB=F96854&link=https://github.com/sponsors/vladfrangu)](https://github.com/sponsors/vladfrangu)

Simple to use API client for [Hlidac Statu](https://www.hlidacstatu.cz/).

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install hlidacstatu-client
yarn add hlidacstatu-client
pnpm add hlidacstatu-client
```

### Usage

```js
const { V2 } = require('hlidacstatu-client');

const client = new V2.Client('api_token');

const result = await client.ping('Hello world!');
```

```ts
// TypeScript/ES Module support
import { V2 } from 'hlidacstatu-client';

const client = new V2.Client('api_token');

const result = await client.ping('Hello world!');
```
