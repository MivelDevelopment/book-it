# Booking app

This project is in progress. Stay tuned.

## Overview

The idea behind this project is to book a schedule, whether an interview, limo, make a dentist appointment.

### Idea

Idea behind this app is to build something like Calendly, but not to copy-paste it.  
In the end I want it to be flexible to fit specific client's needs, like I said - recruiter, dentist, photographers.

### Design

Visual representation is my own, which will be styled to completion after functionalities are done.  
On the other hand, there isn't much wiggle room to make a calendar.

### Features

#### Dashboard

For development purposes user dashboard is shown on above the calendar.  
When you make an appointment, it will be shown on the left-hand side of dashboard.  
Appointments are sorted in order from soonest to latest scheduled.  
When you click on the appointment, right side switches to show selected appointment's info.  
When you click on the same appointment again, right side switches to previous display.  
On the right-hand side of dashboard is mini-calendar.  
When you click on a date, left-hand side switches to show that date.  
On the left-hand side of dashboard is schedule machine.  
You should provide starting time (hours), ending time (hours), and interval in minutes.  
After you click the Set button, schedule is populated using the parameters you provided.  
Schedule is currently logged to the console.  
When you click on a mini-calendar date, user's (with the id=1) schedule gets fetched and logged to the console.  

##### Calendar

If you click a day from previous or next month, you will change the calendar to that month.  
If you click a date in the current month, a popup modal will appear for that date.  
If you click on a past date in the current month, no popup will appear.  
On the right-hand side of the popup modal you can select the time you want to make a schedule.  
On the left-hand side you enter your contact information.  
After you've filled required fields and picked a time, you can make an appointment.

I will update this section daily

## Technology

This app is made in React using functional components. 
For state management I am using React's Context API.  
Components are built using styled-components.  
Using json-server for storing data.  
Using Axios for data fetching.  
For link routing I'm using React Router 6.

This section will be updated when needed.

## Legal notice

Book It app is my personal project. You are free to use some/none of the code presented here as you see fit, without any legal consequences, but you can't use this project in it's entirety and present it as your own.


## Reach out

I have imagined this being a solo project, but if you want to colab, that could be fun too.  
That being said, don't hesitate to reach out.  

#### Changelog

Added user dashboard container 
