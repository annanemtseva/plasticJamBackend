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

  for (let index = startIndex; index < endIndex; index++) {
    result.push(
      {
        id: index,
        firstName: "Christie" + index,
        lastName: "Gann",
        email: `cgann0${index}@hostgator.com`,
        gender: index % 3 == 0 ? 'Male' : 'Female',
        totalClicks: 13469,
        totalPageViews: 15299,
        ipAddress: `57.14.195.${index}`
      });
  }

  res.json({
    content: result,
    totalPages: 100,
    totalElements: 1000,
  });
  
});

/* GET user statistic. */
router.get('/statistic', function (req, res, next) {
  const from = Date.parse(req.query.from);
  const to = Date.parse(req.query.to);
  const userId = Number(req.query.id);
  
 
  const range = moment.range(from, to);
  const result = new Array();

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  for (var month of range.by('days')) {
    const pp = month.format('YYYY-MM-DD');
    result.push(
      {
        id: result.length + 1,
        page_views: getRandomInt(300),
        date: pp,
        clicks: getRandomInt(400),
        userId: userId


      }
    )
  }

  res.json(result);  
});




module.exports = router;
