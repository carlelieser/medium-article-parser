`use strict`;

var request = require('request');
var cheerio = require('cheerio');

function strip(html) {
    let $ = cheerio.load(html);
    let title = $('h1').text();
    let author = $('a[data-action="show-user-card"]').text();
    let image = $('img').first().attr('src');
    let date = $('time').attr('datetime');

    //remove unecessary tags
    $('header, footer, iframe, .section-divider, script').remove();

    //clean attributes
    $('*').each(function() {
        let element = Object.keys($(this).get(0).attribs);
        let attributes = element.map((key) => {
            if (key != 'href' && key != 'src') {
                $(this).removeAttr(key);
            }
        });
    });

    //remove empty tags
    $('*').not('img').filter(function() {
        return $(this).text().trim().length == 0 && $(this).find('img').length === 0;
    }).remove();

    //return body html
    let newHTML = $('body').html();

    //return object containing data
    return {
        title: title,
        author: author,
        img: image,
        date: date,
        content: newHTML
    };
}

module.exports = function(url){
    return new Promise((resolve, reject) => {
        request(url, (error, response, html) => {
            if (!error) {
                let $ = cheerio.load(html);
                let articleHTML = $('article').html();
                if ($('.lockedPostHeader').length !== 0) {
                    return reject(new Error('Given article is for Medium Members only.'));
                } else {
                    return resolve(strip(articleHTML));
                }
            }
        })
    });
}
