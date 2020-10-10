# NgCouple

### Demo & Develope <a href="https://ngcouple-4ae2b.web.app/">View Demo</a>
1. Clone the repo `git clone https://github.com/talentedaamer/NgCouple.git`.
2. Run `npm install` to install the dependencies.
3. Run `ng serve -o --port=4455` or `npm start` to serve the application
4. Application will be served over `http://localhost:4455/`

## Creating Dashboard Page
1. Run `ng g c pages/test-page` to create a component in app/pages.
2. Make sure that it is added into the `declarations` array of `admin-layout.module.ts` file
    a. or run this command directly to do step 1 & 2 `ng g c pages/test-page --module=layouts/admin-layout`
3. Make sure to add a new route in `admin-layout.routing.ts` routing file.
4. Stop the application and serve again to see the changes.


### Screenshots
![Dashboard](https://raw.githubusercontent.com/talentedaamer/NgCouple/master/screenshots/NgCouple-01.png)
![Typography](https://raw.githubusercontent.com/talentedaamer/NgCouple/master/screenshots/NgCouple-02.png)
![Grids](https://raw.githubusercontent.com/talentedaamer/NgCouple/master/screenshots/NgCouple-03.png)
![Tables](https://raw.githubusercontent.com/talentedaamer/NgCouple/master/screenshots/NgCouple-04.png)
![Icons](https://raw.githubusercontent.com/talentedaamer/NgCouple/master/screenshots/NgCouple-05.png)
![Components](https://raw.githubusercontent.com/talentedaamer/NgCouple/master/screenshots/NgCouple-06.png)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
