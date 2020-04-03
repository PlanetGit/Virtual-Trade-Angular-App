<h1 align="center">Virtual Trade Angular Bootstrap with Material Design</h1>

<p align="center">
  Built with <b>Angular 9, Bootstrap 4 and TypeScript</b>. CLI version available. Absolutely no jQuery.
</p>
<p align="center">
  All fully responsive. All compatible with different browsers.
</p>

# Other Technologies

[<img src="https://mdbootstrap.com/img/Marketing/general/logo/small/jquery.png"/>](https://mdbootstrap.com/docs/jquery/)[<img src="https://mdbootstrap.com/img/Marketing/general/logo/small/react.png"/>](https://mdbootstrap.com/docs/react/)[<img src="https://mdbootstrap.com/img/Marketing/general/logo/small/vue.png"/>](https://mdbootstrap.com/docs/vue/)

# Version

- Angular 9
- Angular CLI 9

# Quick start

- Clone following repo:
```javascript
git clone https://github.com/PlanetGit/Virtual-Trade-Angular-App.git .
```
note "." at the end. It will clone files directly into current folder.
- Run `npm i`
- Run `npm start`
- Voilà! Open browser and visit http://localhost:4200

## Demo application

Feel free to check our live example components: Just type `ng serve mdb-demo` in terminal!

Type one of the below commands to remove demo application from this project:
* npm `run remove-demo-unix` to remove demo application on UNIX based systems,
* npm `run remove-demo-windows` to remove demo application on Windows systems.

# Available commands

* npm run build:lib - building library,
* npm run pack - copying assets and packaging /dist directory into .tgz archive
* npm run version - adjusting src/package.json version from main package.json file,
* npm run compile - Executing above commands with correct sequence.

# Modules list

* ButtonsModule,
* CarouselModule,
* ChartsModule,
* CollapseModule,
* InputsModule,
* ModalModule,
* NavbarModule,
* PopoverModule,
* TooltipModule,
* WavesModule,
* MDBBootstrapModule - contains every MDB modules.

# How to install MDB via npm

- create new project `ng new project_name --style=scss`
- `npm i angular-bootstrap-md --save`
- to app.module.ts add
```javascript
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot()
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
});
```
- in angular.json change:

`"styleExt": "css"` to `"styleExt": "scss"`

rename /src/styles.css to styles.scss

- if you want to change styles in exisiting project you can use `ng config schematics.@schematics/angular:component.styleext scss`

- add below lines to angular.json:
```javascript
"styles": [
    "node_modules/font-awesome/scss/font-awesome.scss",
    "node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss",
    "node_modules/angular-bootstrap-md/assets/scss/mdb.scss",
    "src/styles.scss"
],
"scripts": [
  "node_modules/chart.js/dist/Chart.js",
  "node_modules/hammerjs/hammer.min.js"
],
```
- install external libs
```bash
npm install -–save chart.js@2.5.0 font-awesome hammerjs
```

### Run server

```bash
ng serve --open
```

# Highlights

**Bootstrap 4**
Up-to-date with the latest standards of Bootstrap 4 and all the best it has to offer.

**Angular CLI**
A command line interface handling all the tedious tasks for you out of the box.

**Detailed documentation**
Intuitive and user-friendly documentation, created with a copy-paste approach.

**No jQuery**
Writing you code with pure Angular is now quicker, easier, and cleaner.

**TypeScript**
Superset of JavaScript that compiles to clean JavaScript output.

**Angular 9**
Create smarter and faster Angular apps with the latest official Angular release.

**Cross-browser compatibility**
Works perfectly with Chrome, Firefox, IE, Safari, Opera and Microsoft Edge.

**Frequent updates**
Expect any bugs being fixed in a matter of days.

**Active community**
MDB is broadly used by professionals on multiple levels, who are ready to aid you.

**Modularity**
Use TypeScript modules to compile package adjusted yo your needs.

**Useful helpers**
Reduce the frequency of highly repetitive declarations in your CSS.

**Technical support**
Every day we help our users with their issues and problems.

**SASS files**
Thought-out .scss files come in a compile-ready form.

**Flexbox**
Full support of Flexbox layout system lets you forget about alignment issues.

### Support MDB developers

- Star our GitHub repo
- Create pull requests, submit bugs, suggest new features or documentation updates

A big ❤️ **thank you to all our users** ❤️ who are working with us to improve the software. We wouldn't be where we are without you.


