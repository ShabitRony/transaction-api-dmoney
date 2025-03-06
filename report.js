const newman= require('newman');
 require('dotenv').config(); // Load environment variables from .env file

newman.run({
    // collection:`https://api.postman.com/collections/40595257-89a5e102-95a6-49c4-8ba1-208e3dd3a0ae?access_key=${process.env.access_key}`, //
    collection: require('./collection/dmoney-transaction-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // This is the path to save the report
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});