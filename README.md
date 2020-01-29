A web app to get all repositories from a Github user. Consumes Github GraphQL API.

## Pre-requisites
* `node` version >= 11
* `npm` version >= 6

## Deployment pre-requisites
* Have a `now` account
* `now-cli` version >= 16

## How to ...

* install: after cloning the project, open a new terminal `cd` in the newly created folder, and run `npm install`

* Launch (development mode) : in a terminal, launch `npm start`
* Launch (production mode) : `npm run prod`
* Format code (with Prettier): `npm run format`
* Deploy (to a branch, not to production): `npm run branch:deploy`
* Deploy (to production): `npm run prod:deploy`
* Test: `npm run test`

## Tech
* workflow: webpack
* deployement: Zeit Now
* UI: React
* Data: Apollo-boost
* Styles: Tailwind CSS, PostCSS, CSS Modules
* Format: Prettier
* Test: Jest
