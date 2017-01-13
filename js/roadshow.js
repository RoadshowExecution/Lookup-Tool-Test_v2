var subCategID;
var searchInput;
var courseMaterialsJSON;
var table;
var distinctCategoriesArray = [];
var refinedCourseMaterialsJSON = {"courseMaterialsData":[]};
var previousSubCategID;
var subBucketJSON = {"courseMaterialsData":[]};
var previousTargetID = "";
var previousSubTargetID = "";
var isInitialLoad = true;
$(document).ready(function()
{
/*
  $('#searchInput').keyup(function(){
  var id=$(this).val();
  if(id.length>=3){
  ga('send', 'event', id, 'Search', id);}
  });
*/

$("body").on("click",".bucketClass",function(){
var id = $(this).attr("id");
var alt = $(this).attr("alt");
ga('send', 'event', alt, 'Click',  alt);
displaySubBuckets(id);
});

$("body").on("click",".subBucketClass",function(){
var id = $(this).attr("id");
var alt = $(this).attr("alt");
ga('send',  'event',  alt, 'Click',  alt);
displayResultsOnClickOfSubbuckets(id);
});

if(parseFloat($.browser.version)<10)
{
	alert("Preferred browser is IE10. Please contact the IT Help Desk to upgrade if still on IE8.");
}

courseMaterialsJSON={"courseMaterialsData": [
 
 
 
  {
    "storeID":"1268",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6168",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1287",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1286",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1234",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1231",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1230",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1228",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6169",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1233",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1278",
    "address":"4139 Transit Road, Williamsville, NY 14221",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR1230 - CLARENCE 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1504",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1516",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1501",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1528",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1526",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1524",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1508",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1538",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1520",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1551",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1532",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1531",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1514",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1505",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1506",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1507",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1510",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1541",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1552",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1547",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1546",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1502",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1509",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1540",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1535",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1523",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1503",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1522",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1518",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1548",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1549",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1519",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1550",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1521",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1517",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1504",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1516",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1501",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1528",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1526",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1524",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1508",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1535",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1520",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1505",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1532",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1531",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1514",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1506",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1538",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1507",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1552",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1510",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1517",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1521",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1547",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1546",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1502",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1503",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1540",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1523",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1541",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1522",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1518",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1548",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1549",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1519",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1550",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1551",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1509",
    "address":"9401 E ARAPAHOE RD, GREENWOOD VILLAGE, CO 80112",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR1509 - GREENWOOD VILLAGE 3/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8527",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"149",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"106",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"147",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6848",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1763",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"151",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"117",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"175",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"114",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6861",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"116",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1749",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"123",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"143",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"131",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1772",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6941",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1777",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6986",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1755",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1754",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1775",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"159",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"115",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"130",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"156",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"144",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6943",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"157",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"118",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"126",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"128",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"146",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"110",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"111",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"148",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"105",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"138",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"164",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"121",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6978",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"178",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1774",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"172",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"165",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6940",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"154",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6977",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"127",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"153",
    "address":"1750 JONESBORO RD, MCDONOUGH, GA 30253",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0157 - MCDONOUGH 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"114",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"130",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6940",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"151",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1856",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"105",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"143",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"131",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"106",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"149",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"144",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"134",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6977",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"123",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"145",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"128",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"133",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"118",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"178",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1777",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6986",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1755",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8413",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1754",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1764",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6979",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1749",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"172",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1774",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"129",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"121",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6980",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"161",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"157",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"159",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"174",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"164",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"148",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"165",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"147",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1775",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"153",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6978",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"156",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"111",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"146",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"110",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"117",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"116",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"175",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"154",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"126",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6848",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"152",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"127",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"115",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6861",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6943",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6941",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1763",
    "address":"4136 Jimmy Carter Blvd NW, NORCROSS, GA 30093",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0175 - TUCKER 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"105",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"151",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6941",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8924",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"130",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6977",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6940",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"134",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6943",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"139",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"149",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"154",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"148",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"132",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"116",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"115",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"114",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"106",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"110",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"144",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"127",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"146",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1755",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6979",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"172",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"121",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"164",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"175",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1749",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"111",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"159",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6848",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"153",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1856",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6980",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"143",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1777",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"123",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"178",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"131",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6861",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"161",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"147",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1775",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1754",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8413",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"118",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6986",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"174",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1763",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"117",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"128",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"126",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"133",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"157",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"156",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6978",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6942",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"145",
    "address":"1655 Shiloh Road NW, Kennesaw, GA 30144",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR1777 - KENNESAW NORTH 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1935",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1911",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1928",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1907",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1901",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1902",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1903",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1904",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1906",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1912",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8431",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1927",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1983",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1940",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1989",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1913",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1943",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6923",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1942",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1986",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1908",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6925",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1969",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1962",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1944",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1941",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6887",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1981",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1975",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6919",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1918",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6981",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1987",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1919",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1938",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1936",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6701",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1914",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1920",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6822",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1982",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1921",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1980",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1917",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1976",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1926",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1956",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1950",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1922",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1952",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8598",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1964",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1957",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1948",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2036",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4916",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1909",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1905",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1961",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1939",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1934",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1974",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1955",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1932",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1916",
    "address":"100 BARRINGTON ROAD, SCHAUMBURG, IL 60194",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1904 - SCHAUMBURG 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1922",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1905",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1909",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1936",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6981",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1920",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1903",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1921",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1912",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1919",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1987",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1942",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1916",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1918",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1982",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1927",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1955",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1901",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1974",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1989",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8431",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1935",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1983",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1938",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1940",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1917",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1941",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1962",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1986",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6887",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1944",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1981",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1932",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6925",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6701",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1908",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1914",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1980",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1975",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6822",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1976",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1969",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1957",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1934",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1911",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1950",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1904",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1913",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6919",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6923",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1926",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1907",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1948",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1939",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2036",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1937",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8598",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1928",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1943",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1906",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1952",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1902",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1961",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1964",
    "address":"295 E ARMYTRAIL RD, GLENDALE HEIGHTS, IL 60139",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL REGION STR1917 - GLENDALE HEIGHTS 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8918",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2017",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2011",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2037",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2019",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2026",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2018",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2012",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2014",
    "address":"9320 CORPORATION DRIVE, INDIANAPOLIS, IN 46256",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2018 - CASTLETON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6376",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6878",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6314",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6381",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6934",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"283",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"260",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"213",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8545",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6336",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"221",
    "address":"1885 58TH AVE, VERO BEACH, FL 32966",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0213 - VERO BEACH 1/20/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2201",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3016",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2209",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2211",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2218",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2213",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2202",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2203",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3021",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3008",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3006",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8460",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3024",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3029",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2216",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3019",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3026",
    "address":"8000 W 135TH STREET, OVERLAND PARK, KS 66223",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2209 - OVERLAND PARK SOUTH 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6320",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"204",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"207",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6873",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6872",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"274",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"277",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"284",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"251",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"258",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6315",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"222",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"208",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"205",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"220",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"209",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"210",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6856",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"285",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6976",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"249",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"202",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"206",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6341",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6378",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6852",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6353",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6339",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6312",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6343",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"218",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6372",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6316",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6325",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6356",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6329",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"224",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6310",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6326",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6330",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6322",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6306",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6379",
    "address":"1701 W OAKLAND PK BLVD, OAKLAND PARK, FL 33311",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH FLORIDA/PR STR0249 - OAKLAND PARK 1/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6945",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2505",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2550",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2558",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2579",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2506",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2504",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2503",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2552",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2575",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2582",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2584",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2587",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2589",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2577",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2576",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2502",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2507",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2566",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2583",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4177",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2580",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2501",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1605",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2581",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8548",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1610",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1601",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8550",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2557",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2555",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2554",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1603",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2551",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2562",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2510",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2509",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4168",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4125",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4608",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2564",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2571",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2565",
    "address":"9955 Pulaski Hwy, Baltimore, MD 21220",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR2502 - WHITE MARSH 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2680",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2607",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2602",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2688",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6221",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2674",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6230",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2684",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2609",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2667",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2650",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2611",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2679",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6234",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2677",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2665",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4285",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2605",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2669",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2681",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2682",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4283",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2608",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2651",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4286",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4284",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2659",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4282",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4280",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4279",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4287",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2624",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2603",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2670",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2615",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2613",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2673",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8979",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2671",
    "address":"95 HIGHLAND AVENUE, SEEKONK, MA 02771",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR2615 - SEEKONK, MA 3/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6921",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6334",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6935",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"275",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6351",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6974",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"272",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6890",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6365",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6346",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"226",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6369",
    "address":"9520 REGENCY SQ BLVD N, JACKSONVILLE, FL 32225",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR0272 - REGENCY SQ (R) 1/27/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2706",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2758",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2731",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2757",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2789",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2781",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2770",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2701",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2724",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2723",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2722",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2721",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2718",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2729",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2773",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2708",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2716",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2704",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2751",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2740",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2717",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2734",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2703",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2762",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2707",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2709",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2710",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2711",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2742",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2765",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2702",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2741",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2763",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2776",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2727",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2744",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6821",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3848",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2738",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2743",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2737",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2764",
    "address":"47725 Five Mile Road, Plymouth, MI 48170",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDWEST STR2762 - PLYMOUTH, MI 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4935",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2833",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2813",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2812",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2828",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2825",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2820",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2845",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2821",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2804",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2843",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2810",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2803",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2805",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2806",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2807",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2847",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2844",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2809",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2801",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2841",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2808",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2840",
    "address":"5650 MAIN ST NE, FRIDLEY, MN 55432",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR2802 - FRIDLEY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3037",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1973",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3011",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3032",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8994",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3007",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3003",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3013",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3004",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3025",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3010",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3034",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6961",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1851",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3018",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3014",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3002",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3015",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3009",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1924",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6920",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3022",
    "address":"6190 MID RIVERS MALL DR, SAINT PETERS, MO 63304",
    "courseOffering":"2016 D28 POWER ROADSHOW CENTRAL STR3022 - ST PETERS / COTTLEVILLE 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3485",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2686",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2406",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2405",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2401",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2685",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2663",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8979",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2667",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3489",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3482",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3480",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2614",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2653",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2623",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3404",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3481",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3486",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3403",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3409",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3401",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3405",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3487",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8931",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2668",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2688",
    "address":"100 ARTHUR BRADY DRIVE, PORTSMOUTH, NH 03801",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR3409 - PORTSMOUTH (R) 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"359",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"352",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"349",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"378",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"358",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"373",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"370",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"385",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"362",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"371",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"386",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"387",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"383",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2915",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"368",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"365",
    "address":"2625 VETERANS BLVD, KENNER, LA 70062",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR0349 - KENNER 1/28/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3632",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3633",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3634",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3627",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3663",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3620",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8493",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3604",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3661",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3652",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3631",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3651",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3647",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3644",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3615",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3616",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3605",
    "address":"625 HAMPTON POINT BLVD, HILLSBOROUGH, NC 27278",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR3661 - HILLSBOROUGH,NC 2/18/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3855",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3823",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3812",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3813",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2324",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3822",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2306",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3814",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3861",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3856",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3844",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3868",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3863",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2323",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3832",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3821",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3857",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3854",
    "address":"1266 OMNIPLEX DRIVE, CINCINNATI, OH 45240",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3821 - FOREST FAIR 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3860",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3841",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3846",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3815",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3818",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3803",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3827",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3830",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3810",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3842",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3806",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3804",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3835",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3824",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3882",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3833",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3852",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3888",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3875",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6931",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6930",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6857",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3859",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3809",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3847",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3817",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3820",
    "address":"4914 GRANDE BLVD, MEDINA, OH 44256",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR3833 - MEDINA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3907",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3902",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3909",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3919",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3908",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3917",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3911",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3901",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3906",
    "address":"1600 S SOONER ROAD, MIDWEST CITY, OK 73110",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST STR3911 - MIDWEST CITY, OK 2/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4013",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4017",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4010",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4030",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4040",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4006",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4014",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4004",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4002",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4718",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4001",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4015",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4738",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4725",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4007",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4018",
    "address":"11633 NE GLEN WIDING DR, PORTLAND, OR 97220",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST STR4004 - NE PORTLAND 3/8/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4139",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4115",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4156",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4176",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4129",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4136",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4135",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4123",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4148",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4160",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4117",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4152",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"3805",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4116",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4159",
    "address":"4960 ROUTE 8, ALLISON PARK, PA 15101",
    "courseOffering":"2016 D28 POWER ROADSHOW OHIO VALLEY STR4152 - ALLISON PARK 3/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8955",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4137",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1610",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"914",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"982",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"927",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"939",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4119",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4142",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4101",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6866",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4102",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1601",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4114",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"921",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"974",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4103",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4150",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4164",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4158",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"989",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8440",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4109",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"976",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6917",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"917",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"940",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"942",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"941",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1603",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6843",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1602",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4163",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4112",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4187",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4181",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4143",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4104",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4110",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4106",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4108",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"970",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4188",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"929",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4134",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4131",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4132",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4145",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4121",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1605",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4140",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4166",
    "address":"181 S GULPH ROAD, KING OF PRUSSIA, PA 19406",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR4188 - KING OF PRUSSIA (R) 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6234",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4286",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2681",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4287",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4280",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4282",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4283",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4284",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4285",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2673",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2680",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4279",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2608",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2674",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2676",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2684",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2659",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2677",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2688",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2651",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2669",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2665",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2615",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2650",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8979",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2611",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2679",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2667",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2603",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2602",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2682",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2609",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2605",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2613",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6221",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6230",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2671",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2607",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2670",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2624",
    "address":"371 PUTNAM PIKE, SMITHFIELD, RI 02917",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR4282 - SMITHFIELD 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8583",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4401",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4403",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4419",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4413",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4415",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4416",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4417",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4411",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4409",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4410",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4406",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8566",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4402",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4408",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4421",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4407",
    "address":"9570 S HIGHLAND DR, SANDY, UT 84092",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR4421 - EAST SANDY 3/11/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4612",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4635",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4614",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4631",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4650",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4627",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4613",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4633",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4611",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4616",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4622",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4626",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4624",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4619",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4653",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4615",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4632",
    "address":"6700 MOORETOWN ROAD, WILLIAMSBURG, VA 23188",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR4635 - WILLIAMSBURG,VA 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4703",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4704",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4712",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4709",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4745",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4702",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4713",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4720",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4707",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4708",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4742",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4747",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8562",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8944",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4705",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4728",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4706",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4737",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4723",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4701",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4724",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4722",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4711",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"PacNW Learning Center",
    "address":"27027 185TH AVE SE, COVINGTON, WA 98042",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTHWEST REGION STR4737 - COVINGTON (4C) 3/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4919",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1941",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1969",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1944",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4925",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4923",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1952",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4916",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1922",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1926",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8431",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4941",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4940",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4918",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6981",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4926",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4907",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4910",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4912",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4902",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1938",
    "address":"6489 S 27TH STREET, FRANKLIN, WI 53132",
    "courseOffering":"2016 D28 POWER ROADSHOW NORTHERN PLAINS STR4907 - FRANKLIN, WI 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6668",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6661",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1858",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1048",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1012",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1037",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"614",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6614",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8525",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8463",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1039",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6613",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6647",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1010",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1070",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"654",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"648",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6611",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"608",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"620",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"603",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"606",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"601",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1002",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1005",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"607",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"618",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"615",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6610",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"612",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1083",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"611",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6684",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1072",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6876",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6639",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"649",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"689",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6627",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6689",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6646",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6670",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1845",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6680",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6965",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"684",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6645",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6644",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6643",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6628",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6629",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1062",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6884",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6893",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"682",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6632",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1061",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1077",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6617",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6616",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1084",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6657",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6640",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"653",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"647",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6662",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1055",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1840",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6673",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6663",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6650",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6654",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6664",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"687",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6952",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6665",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6963",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6855",
    "address":"14603 OCEAN GATE AVE, HAWTHORNE, CA 90250",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC CENTRAL STR0620 - HAWTHORNE 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6213",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4878",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6223",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8923",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6202",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6207",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6212",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6208",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6220",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6209",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6201",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6203",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2662",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6230",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6204",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1229",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6215",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6214",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6226",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6225",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6233",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6206",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8473",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6218",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2610",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6236",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6210",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6235",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6229",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6228",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8958",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6217",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1209",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1258",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1271",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1265",
    "address":"1816 MERIDEN WTRBY TPKE, SOUTHINGTON, CT 06489",
    "courseOffering":"2016 D28 POWER ROADSHOW NEW ENGLAND STR6235 - SOUTH SOUTHINGTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1076",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"635",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6947",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6604",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6621",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6655",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"639",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1842",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"640",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6678",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6677",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6964",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"662",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1017",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1007",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6635",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"625",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6636",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"642",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"643",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"644",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6672",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"637",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"622",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6603",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1380",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6652",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1006",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"633",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"657",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1020",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"632",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"630",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1041",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1022",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1044",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1092",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8572",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1009",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"629",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6601",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1861",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"634",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"627",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"628",
    "address":"6000 Johnson Dr, Pleasanton, CA 94588",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH REGION STR0629 - PLEASANTON 3/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6321",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"243",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"245",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6311",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6361",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6357",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6364",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6371",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6380",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6324",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"244",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6865",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"238",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8929",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"289",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"257",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"281",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6327",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"247",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"248",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"256",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6951",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6305",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"279",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6304",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"288",
    "address":"6730 MEMORIAL HWY, TAMPA, FL 33615",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST STR6361 - HILLSBOROUGH 1/21/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6367",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"287",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"265",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"263",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"264",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6936",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6349",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"261",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"278",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6869",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8447",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6851",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"266",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"248",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"234",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"262",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6323",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6324",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6375",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6350",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"233",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"232",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6871",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6328",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"203",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8926",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6331",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6371",
    "address":"4403 MILLENIA PLAZA WAY, ORLANDO, FL 32839",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHEAST REGION STR6367 - MILLENIA/SW ORLANDO 1/26/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6966",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6660",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8597",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6649",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1846",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"650",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"651",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6675",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6688",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"662",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"637",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6674",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8571",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6620",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1043",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6669",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1022",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1003",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1068",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1085",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"636",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"652",
    "address":"2756 SUNRISE BLVD, RANCHO CORDOVA, CA 95742",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC NORTH STR0652 - RANCHO CORDOVA 3/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6542",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6892",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"504",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6553",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8995",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6531",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6526",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6839",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"509",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8439",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6538",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6570",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6575",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6585",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6563",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6808",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"514",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6863",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8454",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8418",
    "address":"1303 RIVERY BLVD, GEORGETOWN, TX 78626",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6538 - GEORGETOWN 2/3/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8987",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6952",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1061",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6680",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6614",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8463",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1039",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1857",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1084",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1013",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1858",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6610",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6611",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6657",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1077",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6617",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6616",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1083",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1037",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1845",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"683",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"668",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8525",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"610",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8988",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"601",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"611",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"606",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"608",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1028",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"607",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"654",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6613",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"616",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1048",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"618",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"615",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"614",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"609",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1005",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6647",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"620",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1087",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"603",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"689",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1072",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6637",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"645",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"647",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6643",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6645",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"648",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6963",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6670",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6627",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"684",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"649",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6884",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6628",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6629",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1062",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6893",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6639",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6644",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6689",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6646",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6673",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6965",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6683",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1002",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1840",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6664",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6663",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6661",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6654",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6960",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6619",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6855",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"682",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6668",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6875",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6684",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6665",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6876",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6650",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1010",
    "address":"1095 N PULLMAN STREET, ANAHEIM, CA 92807",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR6643 - ANAHEIM HILLS (R) 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6510",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1859",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"585",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6860",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"566",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"565",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"576",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"577",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6561",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6560",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"568",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"584",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6539",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"508",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"534",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6574",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6567",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6819",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6985",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"578",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"571",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"574",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6806",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6586",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6512",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"569",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6543",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6838",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6828",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6530",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6525",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6859",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6516",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6509",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6507",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6501",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6506",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6558",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6523",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1853",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6546",
    "address":"8400 KATY FREEWAY, HOUSTON, TX 77024",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF STR6985 - SPRING VALLEY 2/2/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"744",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"773",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"736",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"739",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"731",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"728",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"730",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"740",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"779",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"724",
    "address":"9361 KINGSTON PIKE, KNOXVILLE, TN 37922",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0730 - W KNOXVILLE 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"775",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"778",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"745",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"732",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"721",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"722",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"720",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"707",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"735",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"723",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"776",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"748",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"733",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"734",
    "address":"551 President Pl, Smyrna, TN 37167",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTH ATLANTIC STR0776 - SMYRNA, TN 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"959",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8456",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1213",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6844",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1229",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1249",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1248",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1208",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8958",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1238",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8465",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1282",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1201",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1202",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1206",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6891",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"916",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"983",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6905",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8466",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6167",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1274",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1218",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6877",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6955",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6150",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1216",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6928",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1225",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6158",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"980",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1222",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1245",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6175",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1281",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1209",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1212",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1277",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1221",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1265",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6204",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6177",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1261",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1272",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"910",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"908",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"906",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6903",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"901",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1258",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1214",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1255",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"977",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1220",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6152",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"963",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"965",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"904",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"944",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6957",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"932",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"981",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"915",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"919",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"935",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"928",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8475",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"954",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1267",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"934",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1217",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1285",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"922",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1256",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1215",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1251",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6845",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"950",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1211",
    "address":"1300 CORPORATE DRIVE, WESTBURY, NY 11590",
    "courseOffering":"2016 D28 POWER ROADSHOW NY METRO STR8465 - RACEWAY,NY 3/1/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8916",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"729",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"704",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8469",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"737",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"703",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"725",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2903",
    "address":"7740 CRAFT GOODMAN RD, OLIVE BRANCH, MS 38654",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR8469 - OLIVE BRANCH 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2509",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4641",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2554",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4617",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2565",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2551",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8550",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4601",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4621",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4647",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4637",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4602",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4638",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2576",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2564",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2550",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2566",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2575",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2581",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2563",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2571",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8548",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4640",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2501",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2560",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2504",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2558",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4603",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2579",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2562",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2584",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2582",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6945",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2587",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2552",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2557",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2503",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2507",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2589",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4648",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4604",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4605",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4607",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2502",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8551",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2577",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4639",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2505",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2583",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"2555",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4608",
    "address":"15410 CHRYSLER DRIVE, UPPER MARLBORO, MD 20772",
    "courseOffering":"2016 D28 POWER ROADSHOW MID-ATLANTIC STR8550 - UPPER MARLBORO 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"468",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"459",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8582",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"406",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"408",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"404",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"424",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"457",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"464",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"489",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"405",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"458",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"455",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6948",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"447",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"471",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"401",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"456",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"413",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"415",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"473",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"470",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"472",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"475",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"488",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"469",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"417",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"441",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"480",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"483",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"453",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"485",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"476",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6862",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"420",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"477",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/16/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"477",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"469",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"470",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"473",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"472",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"471",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"415",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"457",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"413",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"475",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"447",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6948",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"468",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"455",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"456",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"458",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"405",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"459",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"424",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"408",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"406",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"453",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"417",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"420",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"489",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"483",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"464",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"485",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"476",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8582",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"441",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"488",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"401",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"404",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6862",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"480",
    "address":"2530 E GERMANN RD, CHANDLER, AZ 85286",
    "courseOffering":"2016 D28 POWER ROADSHOW PAC MTN DESERT STR8582 - CHANDLER 2/17/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"882",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"887",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"818",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"877",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"810",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"809",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"805",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"881",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"880",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"875",
    "address":"3670 GALLERIA CIRCLE, BIRMINGHAM, AL 35244",
    "courseOffering":"2016 D28 POWER ROADSHOW MIDSOUTH STR0881 - HOOVER 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1848",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6679",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"671",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"674",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"679",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"680",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"660",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"669",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1074",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6634",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1032",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"659",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6656",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6612",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"673",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1034",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1018",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1028",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8949",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1053",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"658",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"668",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1030",
    "address":"12175 TECH CENTER DRIVE, POWAY, CA 92064",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8949 - POWAY 2/19/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6876",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6673",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6963",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6668",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6650",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"645",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1845",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6665",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6952",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"687",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6637",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6656",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6663",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"668",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1840",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6960",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6664",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6646",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1018",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6683",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6628",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6884",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6893",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6629",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1072",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6643",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"679",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"683",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6684",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"684",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6645",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"669",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6627",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"689",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"647",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"682",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"616",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6647",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1857",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"610",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1074",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6619",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"607",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6965",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"615",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6612",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"603",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"654",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8987",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8988",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"601",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"606",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"614",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1028",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1077",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6639",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6680",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6657",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1084",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"609",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1013",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"660",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6617",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6875",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1053",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"608",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1087",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8525",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1037",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8463",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6614",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1083",
    "address":"18282 COLLIER AVENUE, LAKE ELSINORE, CA 92530",
    "courseOffering":"2016 D28 POWER ROADSHOW PACIFIC SOUTH STR8988 - LAKE ELSINORE 2/23/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"904",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"927",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"926",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"976",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"922",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"950",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"920",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"919",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"918",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"915",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6877",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"969",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"925",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"928",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"916",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"902",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1208",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"982",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"957",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"965",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"939",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"934",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"935",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"962",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"903",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"921",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"901",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"983",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6903",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"959",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"909",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"908",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"912",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"944",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1281",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6177",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"954",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"963",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"906",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6911",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1277",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6905",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6917",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"949",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1220",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1221",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"953",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1214",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1249",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1215",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6957",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6150",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4102",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6844",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1248",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1256",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6928",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6175",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6891",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"951",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4163",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1245",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"933",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6158",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"932",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"947",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"910",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1255",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6152",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1225",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8475",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"981",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6845",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"977",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"980",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1261",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"941",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"907",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1216",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"961",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/24/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1256",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4163",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"949",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1255",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"947",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"932",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6158",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"933",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"4102",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1225",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6891",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6175",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6905",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1261",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1277",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1249",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1248",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6928",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1281",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1216",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6957",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1215",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1208",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1214",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6177",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"906",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1220",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"951",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6917",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6150",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"910",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6911",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6844",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"963",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"954",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1221",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"957",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6903",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"983",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"901",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"902",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"903",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"944",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"935",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"934",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"939",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"959",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"965",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"941",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"953",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"980",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"907",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"1245",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"977",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6152",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8475",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"981",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"961",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"962",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"925",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"982",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6845",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"909",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6877",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"969",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"904",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"915",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"916",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"918",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"919",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"920",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"928",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"922",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"976",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"926",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"927",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"912",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"908",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"950",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"921",
    "address":"3700 HIGHWAY 35, HAZLET, NJ 07730",
    "courseOffering":"2016 D28 POWER ROADSHOW NJ METRO STR0926 - HAZLET 2/25/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6557",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"537",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6537",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6504",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6533",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6505",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"552",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6549",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"564",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6562",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"556",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6555",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6572",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"554",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8976",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"551",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6548",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6840",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"553",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"528",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6589",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"589",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8521",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"539",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8517",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6833",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8951",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6503",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6520",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6534",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6513",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6581",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"587",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6554",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6502",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8438",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6809",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"530",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"531",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"555",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6568",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"529",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"527",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6814",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6579",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"563",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6804",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"524",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"542",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"507",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"541",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6816",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"540",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"550",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/9/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6504",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6562",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6548",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6549",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6557",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"537",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"552",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6537",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6533",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"556",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6555",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6572",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"564",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6505",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"554",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6833",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"551",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6579",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6589",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"589",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8521",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"539",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8517",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8438",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8951",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6534",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6840",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6503",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6520",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"553",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6513",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6581",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"587",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6554",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6502",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8976",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"540",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"563",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"555",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"528",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"529",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"531",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6568",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6809",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"527",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"541",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"530",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"550",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6814",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"507",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"542",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"524",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6804",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6816",
    "address":"2800 Forest Ln, Dallas, TX 75234",
    "courseOffering":"2016 D28 POWER ROADSHOW SOUTHWEST DLC (Dallas) 2/10/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8520",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"588",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6551",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8454",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6556",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"503",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6989",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"8437",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6988",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6547",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6544",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"580",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6550",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6818",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"6529",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"581",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"586",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  },
  {
    "storeID":"582",
    "address":"10815 Sentinel Dr., San Antonio, TX 78217",
    "courseOffering":"2016 D28 POWER ROADSHOW GULF Lumber DC (San Antonio) 2/4/2016 9:00AM - 1:00PM",
    "category":"D28",
    "subCategory":"",
    "categoryStatus":"0",
    "url":""
  }



]};








if((navigator.userAgent.indexOf('Trident') != -1 && navigator.userAgent.indexOf('MSIE') == -1) || navigator.userAgent.indexOf('MSIE') != -1)
{
	document.getElementById('myStyleSheet').href = "./css/knowledgeDepot.css";
}
	displayBucketsNew();
	loadDatatable(courseMaterialsJSON);
	$('#courseMaterialsTable').parents('div.dataTables_wrapper').first().hide();
	setSearchInput();
$('#' + searchInput).keyup(searchDatatableOnKeyup);





	$('#' + searchInput).focus();
	$('#searchResSection').css('background-image', 'url(./images/roadshow.jpeg)');
	
	if(window.matchMedia('(min-width: 768px)').matches)
	{
		$("#searchIcon").css('height', $("#infoIcon").height());
		$("#searchLabel").css('height', $("#infoLabel").height());
		$("#search").css('height', $("#info").height());
		$("#searchImage").css('height', $("#search").height());
	}
}
);

function reSizeSearchResSection(subCategID)
{
	var reduceBySize = 21;
	if(window.matchMedia('(max-width: 767px)').matches)
	{
		reduceBySize = 0;
	}
	var searchResSectionHeight = $("#searchResSection").height();
	if(subCategID != null && $("#"+subCategID).children().length > 0 && $("#"+subCategID).css('display') != 'none')
	{
		searchResSectionHeight = $("#searchResSection").height() - ($("#subCategoryBtn").height() + $("#"+subCategID).height()) - reduceBySize;
	}
	$("#searchResSection").height(searchResSectionHeight);
}
var resizeId;
$(window).resize(function()
{
	clearTimeout(resizeId);
	setSearchInput();

//$('#' + searchInput).keyup(searchDatatableOnKeyup);




	$("#courseMaterialsTable").css('width', '100%');	
	resizeId = setTimeout(reSizeSearchResSecOnWinResize, 400);
});

function reSizeSearchResSecOnWinResize()
{
	if(window.matchMedia('(max-width: 767px)').matches)
	{
		$("#searchResSection").height(509);
		$("#search").css('height', 'auto');
	}
	else
	{
		$("#searchResSection").height(633);
		$("#searchIcon").css('height', $("#infoIcon").height());
		$("#searchLabel").css('height', $("#infoLabel").height());
		$("#search").css('height', $("#info").height());
		$("#searchImage").css('height', $("#search").height());
	}
	reSizeSearchResSection(subCategID);
}

function setSearchInput()
{
	if(window.matchMedia('(max-width: 767px)').matches)
	{
		searchInput = "mobileSearchInput";
	}
	else
	{
		searchInput = "searchInput";
	}
}

function searchDatatableOnKeyup()
{
	
		if(window.matchMedia('(max-width: 767px)').matches)
		{
			$("#searchResSection").height(511);
		}
		else
		{
			$("#searchResSection").css('height','644');
		}
		if($('#' + searchInput).val().length > 0)
		{
			$('#'+previousTargetID).removeClass("activeImage");
			previousTargetID = "";
			$("#subBuckets").hide();
			$("#subCategoryBtn").hide();
			$("#"+subCategID).css('display','none');
			$('#courseMaterialsTable').parents('div.dataTables_wrapper').first().show();
			//$('#searchResSection').css('background-image', 'none');
		}
		if(previousTargetID == null || previousTargetID == "")
		{

			loadDatatable(courseMaterialsJSON);

      /*
      for (var i=0; i<jsonObj.length; i++) {
  if (jsonObj[i].Id == 3) {
    jsonObj[i].Username = "Thomas";
    break;
  }
}
      */

			table.fnFilter($(this).val(), 0);
     
		}
		//reSizeSearchResSection(subCategID);
}

function loadDatatable(jData)
{


      for (var i=0; i<jData.courseMaterialsData.length; i++) {
      
  if (jData.courseMaterialsData[i].storeID.length < 4) {
    jData.courseMaterialsData[i].storeID = "0"+jData.courseMaterialsData[i].storeID;
    
  }
}



	var truncatedCourseID = "";
	$('#searchResSection').css('background-image', 'none');
	if(table != null)
	{
		table.fnDestroy();
	}
	table = $('#courseMaterialsTable').dataTable( {
        "data": jData.courseMaterialsData,
        "columns": [
            {"title" : "Invited Stores", "data": "storeID", "width" : "10%"},
            {"title" : "Host Venue Address", "data": "address", "width" : "40%"},
            {"title" : "Offering ID <span class='a'>(highlight the offering id, right click to copy/paste)</span>", "data": "courseOffering", "width" : "40%"}
        ],
		"order": [[ 2, "asc" ]],
		"iDisplayLength": 15,
    "deferRender": true
    } );
}

function getCourseIDExtn(truncatedCourseID, oData)
{
	var courseIDextn = "";
	var truncatedCourseTitle = oData.courseTitle.substring(0,oData.courseTitle.indexOf('_'));
	if(truncatedCourseID != null && truncatedCourseID != "" && (truncatedCourseID.toLowerCase() == "PPT".toLowerCase() || truncatedCourseID.toLowerCase() == "PPTX".toLowerCase()))
	{
		courseIDextn = "pptx";
	}
	else if(truncatedCourseID != null && truncatedCourseID != "" && (truncatedCourseID.toLowerCase() == "XLS".toLowerCase() || truncatedCourseID.toLowerCase() == "XLSX".toLowerCase()))
	{
		courseIDextn = "xlsx";
	}
	else if(oData.courseID == null || oData.courseID == "")
	{
		if(truncatedCourseTitle.toLowerCase() == "PPT".toLowerCase() || truncatedCourseTitle.toLowerCase() == "PPTX".toLowerCase())
		{
			courseIDextn = "pptx";
		}
		else if(truncatedCourseTitle.toLowerCase() == "XLS".toLowerCase() || truncatedCourseTitle.toLowerCase() == "XLSX".toLowerCase())
		{
			courseIDextn = "xlsx";
		}
		else
		{
			courseIDextn = "pdf";
		}
	}
	else
	{
		courseIDextn = "pdf";
	}
	return courseIDextn;
}

function getCourseURL(oData, courseIDextn)
{
	var courseURL = "";
	var replacedCourseTitle  = "";
	if(oData.url != null && oData.url != "")
	{
		courseURL = $.trim(oData.url);
	}
	else if(oData.courseID == null || oData.courseID == "")
	{
		replacedCourseTitle = oData.courseTitle;
		if(replacedCourseTitle.substring(0,replacedCourseTitle.indexOf('_')) != null && (replacedCourseTitle.substring(0,replacedCourseTitle.indexOf('_')).toLowerCase() ==  "PPT".toLowerCase() || replacedCourseTitle.substring(0,replacedCourseTitle.indexOf('_')).toLowerCase() ==  "XLS".toLowerCase()
		|| replacedCourseTitle.substring(0,replacedCourseTitle.indexOf('_')).toLowerCase() ==  "PPT".toLowerCase() || replacedCourseTitle.substring(0,replacedCourseTitle.indexOf('_')).toLowerCase() ==  "XLS".toLowerCase()))
		{
			replacedCourseTitle = replacedCourseTitle.substring(replacedCourseTitle.indexOf('_') + 1)
		}
		courseURL = "https://content.homedepot.com/LearningManagement/Contents/Course_Materials/Documents/" + replacedCourseTitle + "." + courseIDextn;
	}
	else
	{
		courseURL = "https://content.homedepot.com/LearningManagement/Contents/Course_Materials/Documents/" + oData.courseID + "." + courseIDextn;
	}
	return courseURL;
}

function displayBucketsNew()
{
	$.each(courseMaterialsJSON.courseMaterialsData, function(i, item)
	{
		if ($.inArray($.trim(item.category), distinctCategoriesArray) === -1) 
		{
			distinctCategoriesArray.push($.trim(item.category));
		}
	});
	distinctCategoriesArray.sort();
	var rowIndex = 1;
	$("#categoryBkts").append('<div id="categRow1" class="row"></div>');
	$(distinctCategoriesArray).each(function(k, arrayItem)
		{	
			if(k == rowIndex * 3)
			{
				rowIndex++;
				$("#categoryBkts").append('<div id="categRow' + rowIndex +  '" class="row"></div>');
			}
			var trimmedArrayItem = arrayItem.replace(/\s+/g, '');
			//var categIDSubString = trimmedArrayItem.substring(3, trimmedArrayItem.length);
			var imgID = "img" + trimmedArrayItem;
			$("#categRow" + rowIndex).append('<div id="'+trimmedArrayItem+'" class="col-xs-12 col-sm-4 col-md-4">' +
							'<a href="#">' +
								'<img style="padding-top:3%; padding-bottom:3%" id="'+imgID+ '" alt="' + arrayItem +'"class="img-responsive bucketClass" src="./images/' + imgID+'.png">'+
							'</a>'+
						'</div>');
			 
		}
		);
	
}

function buildRefinedJSON()
{
	$.each(courseMaterialsJSON.courseMaterialsData, function(i, item)
	{
		$(distinctCategoriesArray).each(function(k, arrayItem)
		{
			if(arrayItem === item.category)
			{
				refinedCourseMaterialsJSON.courseMaterialsData.push(item);;
			}
		}
		);
	}
	);
	console.log(refinedCourseMaterialsJSON);
}
function displaySubBuckets(target_ID)
{
	isInitialLoad = false;
	$('#' + searchInput).val("");
	refinedCourseMaterialsJSON = {"courseMaterialsData":[]};
	subBucketJSON = {"courseMaterialsData":[]};
	var targetID = target_ID;
	var subCategPrefix = "subCateg";
	var categID = $.trim(targetID.substring(3, targetID.length));
	var subBucket = [];
	var imgID;
	$('#'+previousTargetID).removeClass("activeImage");
	$('#'+targetID).addClass("activeImage");
	//$('#searchResSection').css('background-image', 'url(./images/roadshow.jpeg)');
		$('#courseMaterialsTable').parents('div.dataTables_wrapper').first().hide();
		$("#subCategoryBtn").hide();
		if(window.matchMedia('(max-width: 767px)').matches)
		{
			$("#searchResSection").height(511);
		}
		else
		{
			$("#searchResSection").css('height', '644');
		}
		
		subCategID = subCategPrefix + $.trim(targetID);
		if(previousSubCategID != null)
		{
			$("#"+previousSubCategID).remove();
		}
	$("#subBuckets").hide();
	$("#subBuckets").append('<div class="row col-xs-12 col-sm-12 col-md-12" id="' + subCategID + '"></div>');
	var sortedJSON = _.sortBy(courseMaterialsJSON.courseMaterialsData, 'subCategory');
	$.each(sortedJSON, function(k, arrayItem)
		{	
			if($.trim(arrayItem.category.replace(/\s+/g, '')) ==  categID && arrayItem.categoryStatus == "1" )
			{
				if($.inArray($.trim(arrayItem.subCategory.replace(/\s+/g, '')), subBucket) === -1)
				{
					imgID = "img"+$.trim(arrayItem.subCategory.replace(/\s+/g, ''));
					$("#subBuckets").show();
					$("#subCategoryBtn").show();
					$("#"+subCategID).append('<div id="'+$.trim(arrayItem.subCategory.replace(/\s+/g, ''))+'" class="col-xs-4 col-sm-2 col-md-2">' +
								'<a href="#">'+
									'<img id="'+imgID+'" alt="' +$.trim(arrayItem.subCategory) + '" class="img-responsive subBucketClass" style = "padding-top:5%;" src="./images/' +imgID+'.png"'+ 
									'onload="javascript:reSizeSearchResSecOnWinResize()">' +
								'</a>'+
							'</div>');	
				}
			subBucket.push($.trim(arrayItem.subCategory.replace(/\s+/g, '')));
			subBucketJSON.courseMaterialsData.push(arrayItem);
			}
			else if(arrayItem.categoryStatus == "0") 
			{
				if($.trim(arrayItem.category.replace(/\s+/g, '')) ==  categID)
				{
					refinedCourseMaterialsJSON.courseMaterialsData.push(arrayItem);
				}
			}
		}
		);
		if(refinedCourseMaterialsJSON.courseMaterialsData != "")
		{
			loadDatatable(refinedCourseMaterialsJSON);
		}
		previousSubCategID = subCategID;
		previousTargetID = $.trim(targetID);
		reSizeSearchResSection(subCategID);	
}

function displayResultsOnClickOfSubbuckets(target_ID)
{
	var subBucketResultsJSON = {"courseMaterialsData":[]};
	var replacedImgID = $.trim(target_ID).substring(3, $.trim(target_ID).length);
	$('#'+previousSubTargetID).removeClass("activeImage");
	$('#'+target_ID).addClass("activeImage");
	$.each(subBucketJSON.courseMaterialsData, function(k, arrayItem)
	{
		if($.trim(arrayItem.subCategory.replace(/\s+/g, '')) ==  replacedImgID)
		{
			subBucketResultsJSON.courseMaterialsData.push(arrayItem);
		}
	}
	);
	loadDatatable(subBucketResultsJSON);	
	previousSubTargetID = target_ID;
	//reSizeSearchResSection(subCategID);	
}

