# How to Build

Since the website follows the AMP guidelines, the stylesheets have to be built
and injected into the file (...). You can do these by running:

```bash
npm run theme:build
```

If you want to watch for changes in the SCSS files, you can run:

```bash
npm run theme:watch
```

You can also run `npm run` to view other scripts that are available. Other than
that, the Hugo build goes as usual. To build the website into the `public`
folder, just run:

```bash
hugo
```

And to run the site locally just run:

```bash
hugo server
```

# Snipcart

For Snipcart integration to work, you need to add your Snipcart Public API key
in the `config.toml`:

```toml
snipcartApiKey = "YOUR_SNIPCART_PUBLIC_KEY"
```

## Premade Plans

The product information for Premade Plans live in markdown files in the folder
`content/plans-premade/vps/` and `content/plans-premade/general/`. The first
folder is intended for the files that are to populate the first table in the
page, and the second folder is intended for the files that are to populate the
second table in the page. 

For a file to actually populate a table, you have to add the corresponding
category in the front matter of the file. For example:

```toml
category: "General"
```
