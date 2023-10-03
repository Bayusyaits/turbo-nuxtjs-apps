project: pba nuxt templates

# Specify the type of commit:

> feat: The new feature you're adding to a particular application
> fix: A bug fix
> style: Feature and updates related to styling
> perf: A performance-enhancing tweak to the code
> revert: Reverts a previous commit
> initial: Initial Commit
> refactor: Refactoring a specific section of the codebase
> test: Everything related to testing
> docs: Everything related to documentation
> chore: Regular code maintenance.[ You can also use emojis to represent commit types]

```bash
# example message TASK-123 #time 2d 5h #comment Task completed ahead of schedule
$ git commit -m "TASK-123 #time 2d 5h #comment chore: update pnpm dependency to the latest"
```

# The git config core.autocrlf command is used to change how Git handles line endings. It takes a single argument.

```bash
git config --global core.autocrlf input
```

## Prepare Run Local

```bash

# copy file .env
$ cp .env.example .env

```
# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Env File

Make sure to rename the file file `.env.example` to `.env`

## Development Server
# Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## E2E Tests

# Run the end-to-end tests

```bash
pnpm run test:e2e
```

# Open auto-generate test tool

```bash
pnpm run test:e2e:mobile
```

or

```bash
pnpm run test:e2e:desktop
```

## Production

# Build the application for production:

```bash
pnpm run build
```

# Locally preview production build:

```bash
pnpm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


## Add this to your vs code settings.json:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "terminal.integrated.defaultProfile.osx": "bash",
  "security.workspace.trust.untrustedFiles": "open",
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnPaste": false, // required
  "editor.formatOnType": false, // required
  "editor.formatOnSave": true, // optional
  "editor.formatOnSaveMode": "file", // required to format on save
  "files.autoSave": "onFocusChange", // optional but recommended
  "vs-code-prettier-eslint.prettierLast": false // set as "true" to run 'prettier' last not first
}
```

## **Semantic Versioning**

> v{major}.{minor}.{patch}-{build_number}

- **major** → when doing a major refactor / making incompatible functionality changes.
- **minor** → when adding functionality / new features in a backward compatible manner.
- **patch** → when making backward compatible bug fixes.

## Prepare Deploy to AWS

```bash
# make sure before deploy, implement standarization code, no error when build and test
$ pnpm run lint:fix
# checkout to branch staging/aws
$ git checkout staging/aws
$ git fetch --all
$ git merge current sprint/sprint-xx
# before commit update version package.json run this script
# make sure not any changes in file
$ pnpm version patch
$ git add .
# if any changes in file
$ git commit -m "message"

$ git tag <commit_sha> -m "v{current-tag}"

# if any changes in file
$ git push origin staging/aws

$ git push origin {tag}

```

