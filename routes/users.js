var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
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
  // console.log('gender', gender);
  // console.log('params:', req.query.page);
});

/* GET users listing. */
router.get('/statistic', function(req, res, next){
  const from = Date.parse(req.query.from);
  const to = Date.parse(req.query.to);


  res.json({
    // content: result,
    from: from,
    to: to,
  });
  // console.log('gender', gender);
  // console.log('params:', req.query.page);
});




module.exports = router;
