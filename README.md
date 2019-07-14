
[![Netlify Status](https://api.netlify.com/api/v1/badges/f55b2966-4415-461a-ade7-57433d425af7/deploy-status)](https://app.netlify.com/sites/unruffled-benz-09d4d8/deploys)

# PortfoLiri

![reallyliri](https://i.imgur.com/rvGVCpp.png)

This is my public portfolio, available at:

[https://reallyliri.com](https://reallyliri.com)

## Source

The project is built using `reactjs`.

To run it locally, install dependencies: `yarn` then hit `yarn start`.

Site will be locally available at [http://localhost:3017](http://localhost:3017).

You can change the local port by editing `.env` config file.

To build the project run `yarn build`, output will be written to the local `build/` directory.

When pushing to `master` branch, the site is automatically built and published using [Netlify](https://www.netlify.com/).

## Configuration

Content is highly configurable.

Proficiencies are taken from static configuration at [proficiencies.js](./src/content/proficiencies.js).

Albums are taken from [jsonbin.io](https://jsonbin.io) hosted JSON, in the following schema:

```json
{
    "<album-name>": {
        "images": [
            {
                "width": x,
                "height": y,
                "src": "https://i.imgur.com/xxx.png"
            },
            ...
        ],
        "rowHeight": z,
        "preview": "https://i.imgur.com/xxx.png",
        "description": "<desc>"
        "title": "<title>"
    },
    ...
}
```

## License

The code is licensed under `MIT` and is free to use. However, all rights are reserved on the gallery content and any other non-code properties.
