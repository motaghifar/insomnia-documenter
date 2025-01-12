![Insomnia Documenter](assets/logo.png)

Like [Postman Documenter](https://www.getpostman.com/api-documentation-generator) but for [Insomnia](https://insomnia.rest)! With this tool you can generate beautiful API documentation pages using your Insomnia export file.

**Demo: https://jozsefsallai.github.io/insomnia-documenter**

## Requirements
  * Node.js (8.x or higher is recommended)
  * An exported Insomnia workspace JSON (v4)

## Getting Started

Insomnia Documenter offers a CLI tool to make it super easy to set up a documentation page. You can use it in two ways.

### Using `npx`

```sh
npx insomnia-documenter --config /path/to/insomnia/config.json
```

### By installing the package globally

```sh
npm i -g insomnia-documenter
insomnia-documenter --config /path/to/insomnia/config.json
```

### Options

```
Options:
  -c, --config <location>  Location of the exported Insomnia JSON config.
  -l, --logo <location>    Project logo location (48x48px PNG).
  -o, --output <location>  Where to save the file (defaults to current working directory).
  -h, --help               output usage information
```

### Using a GitHub release

Alternatively, you can start using Insomnia Documenter by downloading a release archive from [GitHub](https://github.com/jozsefsallai/insomnia-documenter/releases) and adding your `insomnia.json` export file to the root directory of your site.

## Updating the API

Updating the API is super simple! Since Insomnia Documenter is a plug-and-play web app, you can just replace your `insomnia.json` with your new exported JSON file. Just make sure it's called `insomnia.json`.

The same actually applies to the logo as well (`logo.png`).

## Custom Root Paths

Maybe you want to document multiple APIs on the same domain? Perhaps you want to host your documentation page on GitHub pages? In this (any many other cases), you will need to specify what the root path is. To do this, you have to open `index.html` and replace the following line:

```html
<div id="app"></div>
```

with something like this:

```html
<div id="app" data-root="/path/to/docs"></div>
```

In this case, the app will pick up the `insomnia.json` file from the `/path/to/docs` directory. This gives you more flexibility over how you want to maintain your documentation page (for example, you can store the export file somewhere other than the root directory of the webpage). You should NOT put a trailing slash in the `data-root` property.

Please note that setting this attribute will not affect the favicon and the logo of the page. They will still be loaded from the same directory where `index.html` is.

## Running the Page Locally

Opening the `index.html` file will fail to load in 99.9% of cases because that's just how fetch works. To preview the page locally, you might want to use a tool such as [zeit/serve](https://github.com/zeit/serve):

```sh
npx serve
```

The page will be available at http://localhost:5000.

## Changelog

Please see the [Changelog document](https://github.com/jozsefsallai/insomnia-documenter/blob/master/CHANGELOG.md).

## Contribution

The CLI tool is a commander applet, while the frontend itself is a Svelte app. This project is still in beta, which means it has bugs and can be improved here and there. Contribution is most welcome :)

**Clone the repository:**

```sh
git clone git@github.com:jozsefsallai/insomnia-documenter.git
cd insomnia-documenter
```

**Install the dependencies:**

```sh
npm install
```

**Run a development build with hot reload:**

```sh
npm run dev
```

**Create a production build:**

```sh
npm run build
```

**Linting:**

```sh
npm run lint
```

**Testing:**
```sh
npm run test
```

## License

MIT.

*Note: this project is not affiliated with Insomnia.*
