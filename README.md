# Ticket- Viewer

## Installation

Prerequisites : npm

>Create a new folder
>Navigate into the new folder
>Open your editor
>Open a cmd and:
>Clone the repository : git clone https://github.com/Panosmentz/ticket-viewer-zendesk.git
>OR extract ticket-viewer-zendesk-master.zip
>Install the dependencies:
>`npm install`

### Instructions

Run the app:
`npm start`

### Notes

The APP makes an API call with axios using a CORS bypass proxy(cors-anywhere) that I have deployed on heroku - `https://serene-gorge-83773.herokuapp.com/`
Since I am only using one dyno on Heroku(free plan) the app goes to sleep after 1 hour of inactivity causing the API call to have
a delay of 8-10 seconds if the app is asleep. After the first API call(Authenticate click), the app is "awake" with no additional delays.

## Screenshots

![LandingPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/landingpage.PNG)
![LandingPageError](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/landingpagerror.PNG)
![TicketsPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/ticketspage.PNG)
![TicketInfoPage](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/TicketInfoPage.PNG)
![ResponsiveLanding](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/mobilelandingpage.PNG)
![ResponsiveTicketInfo1](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/mobileticketinfo1.PNG)
![ResponsiveTicketInfo2](https://github.com/Panosmentz/Projects-Screenshots/blob/master/ticket-viewer%20-%20screenshots/mobileticketinfo2.PNG)
