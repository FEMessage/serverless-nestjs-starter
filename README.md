# serverless-nestjs-starter

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/serverless-nestjs-starter/pulls)
Using [serverless](http://serverless.com/) + [nestjs](https://docs.nestjs.com/) + [postgres](https://www.postgresql.org/docs/10/) to build a backend app.

## Table of Contents

- [Install](#install)
- [Dev](#dev)
- [Deploy](#deploy)
- [Links](#links)
- [Contributors](#contributors)
- [License](#license)

## Install

```sh
sls create --template-url https://github.com/FEMessage/serverless-nestjs-starter.git 

# or
sls create --template-url https://github.com/FEMessage/serverless-nestjs-starter.git --path my-serverless-project
```

## Dev

```sh
cd api

yarn 

# setting env var: STAGE=dev and PG_CONNECT_STRING=your-connection
vi .env 

yarn dev
```

[⬆ Back to Top](#table-of-contents)

## Deploy

```sh
cd api

yarn build

# in project root dir
cd ..

sls deploy
```

[⬆ Back to Top](#table-of-contents)

## Links

- [docs](https://deepexi.yuque.com/docs/share/4689de51-05a8-477d-94ae-4cec4e6cc01a)


[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
