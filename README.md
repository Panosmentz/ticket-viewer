# Ticket Viewer
> This is a Ticket Management App using the [Zendesk API]( https://www.zendesk.co.uk/demo/?demoStep=personal).

## Table of contents
* [Overview](#overview)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Live-Demo](#live-demo)
* [Contact](#contact)

## Overview
> The APP makes an API call with axios using a CORS bypass proxy(cors-anywhere) that I have deployed on heroku - https://serene-gorge-83773.herokuapp.com/ in order to authenticate the user. After the user is authenticated, a list of available tickets is displayed with more details.
## Screenshots
![LandingPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/landingpage.PNG)
![LandingPageError](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/landingpagerror.PNG)
![TicketsPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/ticketspage.PNG)
![TicketInfoPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/TicketInfoPage.PNG)
![ResponsiveLanding](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/mobilelandingpage.PNG)
![ResponsiveTicketInfo1](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/mobileticketinfo1.PNG)
![ResponsiveTicketInfo2](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/mobileticketinfo2.PNG)
## Technologies
* ReactJS
* Material UI
* Axios
* React-toastify
* Enzyme

## Setup
Clone this repository or download .zip and open the folder in your editor.
>Open a cmd and install the dependencies on the root folder 
>`npm install`

**Zendesk API**
[Sign up and request an API key](https://www.zendesk.co.uk/demo/?demoStep=personal)
Edit StateContext.js with the correct domain from your API
Run `npm start`

## Contact
Created by [@Panagiotis Mentzelopoulos](https://determined-saha-b25d49.netlify.app/) - feel free to contact me!
