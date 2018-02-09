# YangComponents

This is a prototype for a YANG configuration editor and viewer.

The design is to have a set of Angular Web Components represent the 4 main Data
Node types of YANG - Container, List, Leaf and Leaf-List for viewing and configuring
a YANG data model. This is extended by specific constrained input components for
particular leaf types - e.g. number with range and string with pattern - to give
a fully featured and scalable solution for editing data models.

The idea is that these componenets could be freely assembled in to a page to suit
the end users tastes, and that the whole UI would be driven off some Meta model
derived from YANG but in JSON format. Like "pyang -f jtox <yang files>" produces
but a whole lot more information. It's possible such a file could be produced on
the fly inside a system like onos-yang-tools also, and served up through
onos/restconf/meta


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
