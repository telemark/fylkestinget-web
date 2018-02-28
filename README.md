[![Build Status](https://travis-ci.org/telemark/fylkestinget-web.svg?branch=master)](https://travis-ci.org/telemark/fylkestinget-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/fylkestinget-web.svg)](https://greenkeeper.io/)

# fylkestinget-web

Forslagsløsning for fylkestinget

- [User guide](docs/userguide.md)

# S3 setup

You will need an S3 bucket on [AWS](https://aws.amazon.com) to persist [GUN](https://github.com/amark/gun) in production.

Follow [this guide](http://gun.js.org/docs/Using-Amazon-S3-for-Storage)

For development you can persist to file.

# Installation alternatives

## 1. Run on host

### Install

Nodejs >= 8.9.4 and npm must be installed.

```sh
git clone https://github.com/telemark/fylkestinget-web
cd fylkestinget-web
npm i
```

### Edit config

See [config.js](config.js)

```sh
vim config.js
```

### Start fylkestinget-web
```sh
npm start
```

## 2. Run from docker hub

### Edit config

See [production.env](production.env)

### Start fylkestinget-web

```sh
docker run -d \
  -p 80:3000 \
  -p 443:3000 \
  --env-file production.env \
  --name fylkestinget-web \
  telemark/fylkestinget-web
```

## 3. Deploy to [Now](https://zeit.co/now)

### Set secrets

For azure auth

```sh
now secrets add fylkestinget_moa_domain <your-configured-domain.com>
now secrets add fylkestinget_moa_tenant_id <your-tenant-id.onmicrosoft.com>
now secrets add fylkestinget_moa_client_id <your-client-id>
now secrets add fylkestinget_moa_client_secret <your-client-secret>
```

For S3

```sh
now secrets add fylkestinget_aws_access_key_id <your-access-key-id>
now secrets add fylkestinget_aws_secret_access_key <your-access-key>
now secrets add fylkestinget_aws_s3_bucket <your-bucket>
```

Deploy to now
```sh
wget https://raw.githubusercontent.com/telemark/fylkestinget-web/master/production.env
now -E production.env https://github.com/telemark/fylkestinget-web
now alias fylkestinget-web-example-ykaxwfgdoy.now.sh your-configured-domain.com
```

## Screenshot

![Screenshot](static/fylkestinget-preview.gif "Screenshot of fylkestinget")

## Related

- [micro-oidc-azure](https://github.com/telemark/micro-oidc-azure) Authenticate with Azure/Office 365
- [opengov-meetings](https://github.com/zrrrzzt/opengov-meetings) Parse agenda from opengov

## License

[MIT](LICENSE)

![Robohash image of fylkestinget-web](https://robots.kebabstudios.party/fylkestinget-web.png "Robohash image of fylkestinget-web")
