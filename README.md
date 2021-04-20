## Conceptual layout

The layout includes:
- Background provided image with animated border on page load.
- Call to action text that overlays the image inside a container with a transparent background. The area is clickable link.
- Provided Chevron Icon.
- Color variables are configurable and updatable in real time.
- Responsive components developed with Sass and BEM conventions.
- Webpack has been used on this project with the task of starting a local server that watches the HTML, JS or SASS (CSS) files for any changes and rebuilds locally on save.
- Dropdown selections that change the border, CTA background and text.
- The colors and design were inspired by the image composition of the university building. 


### Directions:

1- Make sure to pull latest

* `git pull`

2- Before you can run the application, you need to install dependencies. Please access the folder where the project is located in your machine with the "cd " command and type:

* `npm install`

3- To run the development server and develop locally.

* `npm start`

> We will see our browser automatically loading up our page. If you now change any of the source files and save them, the web server will automatically reload after the code has been compiled.

4- To build the distribution assets

* `npm run build`


##### Additional Notes:

The development server by default is http://localhost:9000/ - This can be changed in the webpack.config.js