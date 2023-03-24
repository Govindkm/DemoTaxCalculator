## You

Hi I want to create yml workflow file to deploy my angular ui to ghpages.

## Genie

Hello! I can definitely help you with that. Here's an example workflow file you can use as a starting point:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # replace with your branch name

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'

      - name: Build Angular app
        run: |
          npm install
          ng build --prod --base-href=/your-repository-name/

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/your-repository-name/
```

Make sure you replace the `main` branch name with your own branch, and update the `base-href` flag in the `ng build` command to match your repository name. 

Also, note that this example uses the `peaceiris/actions-gh-pages` action to deploy the built app to Github Pages. This action requires a `GITHUB_TOKEN` secret to be set up in your repository's settings.

Let me know if you have any questions or if there's anything else I can help you with!