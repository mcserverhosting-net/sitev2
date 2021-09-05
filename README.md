## Setting Up a New Order

1. Create the client's folder and the order's folder:

```bash
mkdir client && cd client
mkdir order && cd order
```

2. Clone the repository and remove the `.git` folder:

```bash
git clone git@gitlab.com:woc-hugo/hugo-base-template.git
rm -rf hugo-base-template/.git/
```

3. Change the name of the project folder and the name of the theme folder:

```bash
mv hugo-base-template client-website
mv client-website/themes/hugo-base-theme client-website/themes/client-theme
```

4. Update the config.toml with the new name for the theme:

```toml
theme = "client-theme"
```

5. Create a new repository at GitLab for the new website:

(...)

6. Initialize a new repository, configure GitLab's remote and push the first commit:


7. Create a new website at Netlify from the repository:

(...)


## Before Submitting the Delivery

1. Make sute the website looks good and that everyting works both on Desktop and Mobile.

2. Make sure the website works on Brave, Chrome, Firefox, Android. If possible: Safari in MacOS and iPhone.

3. Make sure the website has a good score on Lighthouse Desktop and Mobile tests.

