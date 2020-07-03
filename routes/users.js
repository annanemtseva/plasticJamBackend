var express = require('express');
var router = express.Router();


var moment = require('moment');
var momentRange = require('moment-range');
momentRange.extendMoment(moment);


/* GET users . */
router.get('/', function (req, res, next) {
  const page = Number(req.query.page);
  const range = Number(req.query.range);
  const startIndex = page * range;
  const endIndex = startIndex + range;
  const result = new Array();

  for (let index = startIndex; index < endIndex && index <= 105; index++) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    result.push(
      {
        id: index + 1,
        firstName: "Chris" + (index + 1),
        lastName: "Gann",
        email: `cgann0${index}@hostgator.com`,
        gender: index % 3 == 0 ? 'Male' : 'Female',
        totalClicks: getRandomInt(500),
        totalPageViews: getRandomInt(300),
        ipAddress: `57.14.195.${index}`
      });
  }

  res.json({
    content: result,
    totalPages: Math.ceil(105 / range) ,
    totalElements: 105,
  });
  
});

/* GET user statistic. */
router.get('/statistic', function (req, res, next) {
  console.log('from = ', req.query.from);
  console.log('to = ', req.query.to);
  const from = Date.parse(req.query.from);
  
  const to = Date.parse(req.query.to);
  const userId = Number(req.query.id);
  
 
  const range = moment.range(from, to);
  const result = new Array();

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  for (var month of range.by('days')) {
    const parseDate = month.format('YYYY-MM-DD');
    console.log("parseDate = ", parseDate);
    result.push(
      {
        id: result.length + 1,
        page_views: getRandomInt(300),
        date: parseDate,
        clicks: getRandomInt(400),
        userId: userId


      }
    )
  }

  res.json(result);  
});




module.exports = router;
