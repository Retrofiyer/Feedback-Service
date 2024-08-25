<div>
    <h1>Feedback Microservice</h1>
</div>

## About The Project

The Feedback Microservice is designed to collect and manage user feedback on products or services. It provides a simple RESTful API to submit, retrieve, and manage feedback entries. This microservice is built using Node.js and MongoDB, making it easy to integrate with other applications and services.

## Table of Contents

<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#running-the-service">Running the service</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
 </ol>

## Overview

The Feedback Microservice is a lightweight Node.js application that provides endpoints to collect and retrieve user feedback. It supports operations like submitting new feedback, retrieving all feedback, and fetching specific feedback by ID. The service is backed by MongoDB for data storage and is designed with simplicity and performance in mind.

## Features

<div>
  <ul>
      <li> <b>Submit Feedback:</b> Send user feedback with details like user name and message.</li>
      <li> <b>Retrieve Feedback:</b> Fetch all stored feedback or a specific feedback entry by its ID.</li>
      <li> <b>Simple RESTful API:</b> Easily integrate with other applications using standard HTTP methods.</li>
  </ul>
</div>


## Built With

[![Node.js][nodejs.com]][nodejs-url]
[![Docker][docker.com]][docker-url]

<!-- GETTING STARTED -->
## Getting Started

## Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

- **Node.js 20 or higher** - [Download Node](https://nodejs.org/en/download/package-manager)
-**MongoDB** - [Download MongoDB](https://www.mongodb.com/try/download/community)

If you don't have any of these tools installed, follow the provided links to install them.


## Installation

1.- Clone the repository
   ```sh
   git clone https://github.com/Retrofiyer/Feedback-Service.git
   cd Feedback-Service
   ```
2.- Build project using node.js
 ```sh
   npm install
   ```

## Configuration

First create a file with the name `.env` in the root project.

Using Windows:

```sh
    echo > .env
   ```

Using Linux:

```sh
    touch .env
   ```

The configuration for the Exchange Service is located in `.env`. Below is an example configuration:

 ```sh
    MONGO_URI=Your-mongo-URL
    MONGO_DB=DB_NAME_YOUR_MONGO
    PORT=8105
   ```

## Running the service

  ```sh
    npm start
   ```

## Contributing

I would like you to contribute to this project. Whether it's fixing a bug, adding a new feature or improving the documentation, your help is always welcome. Please email me at `sebitas5225@gmail.com` with all the details for improvement.

<!-- LINKS & IMAGES -->

[docker.com]: https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[nodejs.com]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/
[swagger.com]: https://img.shields.io/badge/Swagger-black?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
