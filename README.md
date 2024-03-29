[![node >= 16.16.0](https://img.shields.io/badge/node-%3E%3D16.16.0-brightgreen)](https://nodejs.org/)
[![BSI CX >= 1.3.0](https://img.shields.io/badge/BSI%20CX-%3E%3D1.3.0-brightgreen)](https://www.bsi-software.com/cx)
[![Latest available version](https://img.shields.io/github/v/tag/bsi-software/bsi-cx-design-master-template-web?label=npm)](https://github.com/bsi-software/bsi-cx-design-master-template-web/releases)

[![Open GitHub issues](https://img.shields.io/github/issues/bsi-software/bsi-cx-design-master-template-web)](https://github.com/bsi-software/bsi-cx-design-master-template-web/issues)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/w/bsi-software/bsi-cx-design-master-template-web)](https://github.com/bsi-software/bsi-cx-design-master-template-web/commits)
[![GitHub last commit](https://img.shields.io/github/last-commit/bsi-software/bsi-cx-design-master-template-web)](https://github.com/bsi-software/bsi-cx-design-master-template-web/commits)
[![GitHub contributors](https://img.shields.io/github/contributors/bsi-software/bsi-cx-design-master-template-web)](https://github.com/bsi-software/bsi-cx-design-master-template-web/graphs/contributors)


# @bsi-cx/design-master-template-web

The [BSI CX](https://www.bsi-software.com/en/cx) master template for websites and landingpages. This repository serves as the foundation for creating new templates. You can fork this repository to create your own BSI CX design. 

This repository uses the [BSI CX design standard library](https://github.com/bsi-software/bsi-cx-design-standard-library-web) for content elements.

To build the design ZIP files, the [BSI CX design build](https://github.com/bsi-software/bsi-cx-design-build) based on webpack is used. Checkout
the [Wiki](https://github.com/bsi-software/bsi-cx-design-build/wiki) to get more information on the design build. 

To get more information on BSI CX designs, checkout our [online documentation](https://bsi-software.github.io/bsi-cx-docs/).

## Usage
If you just want to use the templates rather than customizing them, head over to the [Releases page](https://github.com/bsi-software/bsi-cx-design-master-template-web/releases). In the __assets__ section of each release, you will find a list of ready to use design ZIP files.


### Compatibility
The names of the ZIP files are structured as follows:
`master-template-cx-[version]-[designType]-....zip`

The `[designType]` can either be __landingpage__ or __website__. While uploading the design inside of CX, you will be asked to provide the matching type informatiion. 
Refer to the following compatibility matrix to choose the right template

| Design ZIP `[version]`  | Compatible BSI Release |
| ------------- | ------------- |
| 1.3  | Studio 1.2, CX 1.3, BSI 16.2, BSI 16.3 |
| 22.0  | BSI 22, BSI 23/1 |
| 23.2  | >= BSI 23/2 |

## Requirements

To use this package you have to fulfill the following requirements:

* [Node](https://nodejs.org/) >= 16.16.0
* [NPM](https://nodejs.org/) >= 8.11.0
* A code editor e.g. [Visual Studio Code](https://code.visualstudio.com/), [IntelliJ](https://www.jetbrains.com/idea/)
  or [Web Storm](https://www.jetbrains.com/webstorm/)
* To test your design, you need access to [BSI CX](https://www.bsi-software.com/cx)

## Setup

Fulfill the requirements, download or fork this repository and run the following command in your project folder (where the `package.json` is placed):

````shell script
npm install
````

Make sure you run `npm update` regularly (e.g. once a week).
To view the preview template locally, run the following command:

````shell script
npx webpack serve --config webpack.config.js --mode development --progress
````


## Issues

If you have any problems using this package or found a bug,
please [create a new issue](https://github.com/bsi-software/bsi-cx-design-master-template-web/issues) in this repository on GitHub.

## Contributing

If you like to contribute to this project, feel free to fork it and create a pull request.