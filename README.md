Medium Parser 
=============
[![npm version](https://badge.fury.io/js/medium-article-parser.svg)](https://badge.fury.io/js/medium-article-parser)[![Build Status](https://travis-ci.org/carlelieser/medium-article-parser.svg?branch=master)](https://travis-ci.org/carlelieser/medium-article-parser)

A small library that extracts Medium article content.

## Installation

    npm install medium-article-parser

## Usage

    let mediumParser = require('medium-article-parser');

    let url = 'https://medium.com/the-mission/use-einsteins-educational-philosophy-to-boost-your-learning-e07ea60a9146';

    mediumParser(url).then((result) => {
        //returns object with author, title, date, image url, and html content
    }, (error) => {
        //if given url is meant for Medium members only, it will return an error
    });
