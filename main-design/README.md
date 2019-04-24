### Tsuoq.com

### Table of Contents
<a name="table-of-contents"></a>
  1. [Used Technologies](#used-technology)
  1. [Setup](#Local-Setup)
  1. [Scripts](#Available-scripts)
  1. [Folder Structure](#folder-structure)
  1. [License](#License)


### Used Technologies
<a name="used-technology"></a>
* `Bootstrap 4` (rtl & ltr)
* `FontAwesome`
* `SASS`
* `PUG`
* `ECS6`
* `Gulp`
* list of `gulp` tasks such as gulp-sass, gulp-pug, gulp-cssmin, gulp-uglify, gulp-autoprefixer, gulp-concat, and more.
* `JQuery`
* `animated.css`
* `Swiper.js`

**[⬆ back to top](#table-of-contents)**


### Local Setup
<a name="Local-Setup"></a>
* Clone the repository locally.
* If you don't have Node installed, [install it](https://nodejs.org/en/download/).
* In a console window, navigate to the repository directory and install the dependencies with `npm install`.
* In your console window, execute `npm start` to launch the application.  It will be viewable in your browser at [http://localhost:3000/](http://localhost:3000/).

**[⬆ back to top](#table-of-contents)**


### Available scripts
<a name="Available-scripts"></a>
+ `npm start` - run npm build:dev command.
+ `npm run build:dev` - run gulp for development mode, This enable some functionality belongs to development only, such as sourcemap files.
+ `npm run build:prod` - run gulp for production mode, This uglify scripts files and minify style files.
+ `npm run clean` - clean build folder.

**[⬆ back to top](#table-of-contents)**

### Folder structure
<a name="folder-structure"></a>

	.
	├── build/                   				# Compiled files (alternatively `dist`).
	├── node_modules/            				# Defines what libraries will be installed into `node_modules` when you run npm install.
	├── src/                     				# Source files (alternatively `lib` or `app`).
	│   ├── fonts/               				# Fonts folder.
	│   ├── images/	            				# Images folder.
	│   ├── sass/                				# Style folder using `SASS`.
	│   │  ├── partials/         				# `SASS`s partials and component folder.
	│   │  ├── helpers/         				# `SASS` helper files.
	│   │  ├── pages/         					# `SASS` files for each page of the application.
	│   │  ├── components/         				# `SASS` reusable components files.
	│   │  ├── libs/         				    # list of liberaries sourse files, such as bootstrap, swiper, fontawesome and material icons.
	│   │  ├── _cusrom_style                    # this file meant to exist for overwriting purpose..
    │   │  └── style				            # style root file, importing all style assets.
	│   ├── scripts/             				# Javascript folder using `ECS6`
	│   ├── videos/              				# Videos folder
	│   └── views/               				# `Pug` folder, that compiled to `html`.
	│      ├── partials/         				# `pug`s partials and component folder.
	│      ├── mixins/         					# some of `pugs` usefull mixins.
	│      ├── sections/         				# container for website's sections.
	│      ├── layouts/ 		        		# layouts folder for all pug files.
	│      └── index.pug         				# Entry pug file that compiled into `index.html` file.
	├── gulpfile.js             				# `Gulp` file, starter file of this boilerplate.
	├── README.md								# Github README.md file.
	└── LICENSE

**[⬆ back to top](#table-of-contents)**


### License
<a name="License"></a>
(The MIT License)

Copyright (c) Mohamed Ashraf

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**
