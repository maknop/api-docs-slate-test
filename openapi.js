const converter = require('widdershins');
const fs = require('fs');
const axios = require('axios');


let options = {}; // defaults shown
options.codeSamples = true;
options.httpsnippet = false;
//options.language_clients = [];
//options.loadedFrom = sourceUrl; // only needed if input document is relative
//options.user_templates = './user_templates';
options.templateCallback = function(templateName,stage,data) { return data };
options.theme = 'darkula';
options.search = true;
options.sample = true; // set false by --raw
options.discovery = false;
options.includes = [];
options.shallowSchemas = false;
options.tocSummary = false;
options.headings = 2;
options.yaml = false;
options.language_tabs = [
    { 'go': 'Go' },
    { 'http': 'HTTP' },
    { 'javascript': 'JavaScript' },
    { 'javascript--node': 'Node.JS' },
    { 'python': 'Python' },{ 'ruby': 'Ruby' }
];


axios.get('https://console.redhat.com/api/insights/v1/openapi.json')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);

    //options.resolve = false;
    //options.source = sourceUrl; // if resolve is true, must be set to full path or URL of the input document
    converter.convert(response.data,options)
    .then(str => {
        fs.writeFileSync(__dirname + '/source/includes/_advisor.md', str, 'utf8');
    })
.catch(err => {
    console.error(err);
});
  })
  .catch(error => {
    console.log(error);
  });

