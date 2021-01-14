<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="src/assets/images/defaultImage.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">The Peaks</h3>

  <p align="center">
    A web app build using React JS that display news from a British news media <a href="https://www.theguardian.com/international">The Guardian.</a>
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://the-thai-peaks.netlify.app/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>    
      <a href="#known-issues">Known Issues</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project fetch news from The Guardian newsportal through it's API and display news based on different categories. This is progressive web app (PWA) which you can install it in your laptop or mobile phone. It runs on offline mode as well so please be aware that if you are offline then you might see stale news (cached news since you were online last time).

### Features

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* News organized in separate category
* Display editor's choice news separately
* Ability to sort news newest first or oldest first
* Bookmark news
* Infinite scrolling
* Offline first
* Mobile friendly


<!-- GETTING STARTED -->
## Getting Started
This section is needed only if you want to deploy this app in local machine. (For developers)

### Prerequisites

Add The Guardian API's api key. 
* Copy ```.env.example``` file and paste it with new name ```.env```
* Add your actual api key. (If you do not have API key,[Get a free API Key from here](https://open-platform.theguardian.com/access/)

### Installation
In the project directory, you can run:
### `yarn`
Installs all the dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Known Issues
These are the known issues
* In smaller device, design is not upto the mark.
* Search article has not been implemented
* Top Stories (Editorial pick) doesn't get sorted by newest first or oldest first sorting as The Guardian API for editorial pick returns same response on both order by values.
* Card view bottom section (title and description) is not as per mockup. In mockup, title and description section has low opacity and overlay above the image.
* Sort by dropdown is not as per mockup design.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


