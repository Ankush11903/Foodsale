import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import FoodCarousel from "./foodCarousel";

function fliterData(restaurant, searchText) {
  const filterData = restaurant.filter((restaurants) =>
    restaurants?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState("");
  const [cart, setCart] = useState(15);
  const [carouselData, setCarouselData] = useState([]);
  let rest = [];
  const [noOfRestaurant, setNoOfRestaurant] = useState(0);

  useEffect(() => {
    try {
      callApiHandler()
        .then(response => {
          // handle the response here
        })
        .catch(error => {
          console.error(error);
          // handle the error here
          let da={
            "statusCode": 0,
            "data": {
                "cacheExpiryTime": 320,
                "pages": 1,
                "pageIndex": 0,
                "scrubber": 0,
                "filters": [
                    {
                        "type": "FilterWidget",
                        "title": "Cuisines",
                        "key": "CUISINES",
                        "configType": "checkbox",
                        "visible": 1,
                        "options": [
                            {
                                "option": "Afghani",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "American",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Andhra",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Arabian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Asian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Awadhi",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Bakery",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Barbecue",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Bengali",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Beverages",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Bihari",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Biryani",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Burgers",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Burmese",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Cafe",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Chaat",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Chettinad",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Chinese",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Coastal",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Combo",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Continental",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Desserts",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "European",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Fast Food",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "French",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Grill",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "H",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Healthy Food",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Home Foo",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Home Food",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Hyderabadi",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Ice ",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Ice Cream",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Ice Cream Cakes",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Indian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Italian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Italian-American",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Jain",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Japanese",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Juices",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Kebabs",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Keto",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Lebanese",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Lucknowi",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Maharashtrian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Mediterranean",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Mexican",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Middle Eastern",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Mughlai",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Nepalese",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "North Eastern",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "North Indian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Oriental",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Paan",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Pan-Asian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Pastas",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Persian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Pizzas",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Portuguese",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Punjabi",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Rajasthani",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Salads",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Seafood",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Snacks",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "South Indian",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Street Food",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Sushi",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Sweets",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Tandoor",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Thai",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Thalis",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Tibetan",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Turkish",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Waffle",
                                "selected": 0,
                                "visible": 1
                            }
                        ],
                        "detail": "",
                        "heading": "Cuisines",
                        "applicable": 1,
                        "searchable": 1
                    },
                    {
                        "type": "FilterWidget",
                        "title": "Show Restaurants With",
                        "key": "SHOW_RESTAURANTS_WITH",
                        "configType": "checkbox",
                        "visible": 1,
                        "options": [
                            {
                                "option": "Offers",
                                "selected": 0,
                                "visible": 1
                            },
                            {
                                "option": "Pure Veg",
                                "selected": 0,
                                "visible": 1
                            }
                        ],
                        "detail": "",
                        "heading": "Offers & More",
                        "applicable": 1,
                        "searchable": 0
                    }
                ],
                "sorts": [
                    {
                        "type": "SortWidget",
                        "key": "RELEVANCE",
                        "title": "Relevance",
                        "selected": 1,
                        "visible": 1,
                        "defaultSelection": true
                    },
                    {
                        "type": "SortWidget",
                        "key": "DELIVERY_TIME",
                        "title": "Delivery Time",
                        "selected": 0,
                        "visible": 1,
                        "defaultSelection": false
                    },
                    {
                        "type": "SortWidget",
                        "key": "RATING",
                        "title": "Rating",
                        "selected": 0,
                        "visible": 1,
                        "defaultSelection": false
                    },
                    {
                        "type": "SortWidget",
                        "key": "COST_FOR_TWO",
                        "title": "Cost: Low to High",
                        "selected": 0,
                        "visible": 1,
                        "defaultSelection": false
                    },
                    {
                        "type": "SortWidget",
                        "key": "COST_FOR_TWO_H2L",
                        "title": "Cost: High to Low",
                        "selected": 0,
                        "visible": 1,
                        "defaultSelection": false
                    }
                ],
                "configs": {
                    "ribbons": {
                        "PREORDER": {
                            "type": "PREORDER",
                            "text": "Preorder",
                            "textColor": "#ffffff",
                            "imageId": "sfefefefeegeg",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#af2330",
                            "priority": 3
                        },
                        "EXCLUSIVE": {
                            "type": "EXCLUSIVE",
                            "text": "Exclusive",
                            "textColor": "#ffffff",
                            "imageId": "sfefefefeegeg",
                            "topBackgroundColor": "#fa4a5b",
                            "bottomBackgroundColor": "#d12a3b",
                            "priority": 2
                        },
                        "NEW": {
                            "type": "NEW",
                            "text": "Newly Added",
                            "textColor": "#ffffff",
                            "imageId": "sfefefefeegeg",
                            "topBackgroundColor": "#d53d4c",
                            "bottomBackgroundColor": "#af2330",
                            "priority": 4
                        },
                        "REPEAT": {
                            "type": "REPEAT",
                            "text": "Repeat",
                            "textColor": "#ffffff",
                            "imageId": "sfefefefeegeg",
                            "topBackgroundColor": "#D53D4C",
                            "bottomBackgroundColor": "#B02331",
                            "priority": 6
                        },
                        "CLOUD": {
                            "type": "CLOUD",
                            "text": "Daily Menus",
                            "textColor": "#ffffff",
                            "imageId": "sfefefefeegeg",
                            "topBackgroundColor": "#fa4a5b",
                            "bottomBackgroundColor": "#d12a3b",
                            "priority": 5
                        },
                        "PREMIUM": {
                            "type": "PREMIUM",
                            "text": "Premium",
                            "textColor": "#ffffff",
                            "imageId": "sfefefefeegeg",
                            "topBackgroundColor": "#8a584b",
                            "bottomBackgroundColor": "#583229",
                            "priority": 7
                        },
                        "PROMOTED": {
                            "type": "PROMOTED",
                            "text": "Promoted",
                            "textColor": "#ffffff",
                            "imageId": "sfefefefeegeg",
                            "topBackgroundColor": "#3a3c41",
                            "bottomBackgroundColor": "#1e2023",
                            "priority": 1
                        }
                    },
                    "croutons": {
                        "RAIN": {
                            "type": "Crouton",
                            "bgColor": "#282C3F",
                            "icon": "surge_listing_piuzrv",
                            "textColor": "#ffffff",
                            "title": "Bad Weather",
                            "message": "${amount} extra levied on some restaurants"
                        },
                        "SERVICEABLE_WITH_BANNER_RAIN": {
                            "type": "Crouton",
                            "bgColor": "#282C3F",
                            "icon": "rain_crouton_4x",
                            "textColor": "#ffffff",
                            "title": "Bad Weather",
                            "message": "Few restaurants unserviceable due to rains"
                        }
                    }
                },
                "cards": [
                    {
                        "cardType": "carousel",
                        "layoutAlignmentType": "VERTICAL",
                        "data": {
                            "type": "carousel",
                            "subtype": "topCarousel",
                            "data": {
                                "cards": [
                                    {
                                        "type": "carouselElement",
                                        "subtype": "image",
                                        "data": {
                                            "bannerId": 635529,
                                            "creativeId": "rng/md/carousel/production/pneknawbadtvceqzwiep",
                                            "type": "restaurantCollectionV2",
                                            "link": "49301",
                                            "cityId": 0,
                                            "restaurantUuid": "",
                                            "restaurantParentId": "0",
                                            "thirdPartyVendor": "",
                                            "thirdPartyAddress": false
                                        }
                                    },
                                    {
                                        "type": "carouselElement",
                                        "subtype": "image",
                                        "data": {
                                            "bannerId": 304928,
                                            "creativeId": "rng/md/carousel/production/awurei8ypqkafoqay9ym",
                                            "type": "restaurantCollectionV2",
                                            "link": "47668",
                                            "cityId": 0,
                                            "restaurantUuid": "",
                                            "restaurantParentId": "0",
                                            "thirdPartyVendor": "",
                                            "thirdPartyAddress": false
                                        }
                                    },
                                    {
                                        "type": "carouselElement",
                                        "subtype": "image",
                                        "data": {
                                            "bannerId": 619141,
                                            "creativeId": "rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
                                            "type": "restaurantCollectionV2",
                                            "link": "56413",
                                            "cityId": 0,
                                            "restaurantUuid": "",
                                            "restaurantParentId": "0",
                                            "thirdPartyVendor": "",
                                            "thirdPartyAddress": false
                                        }
                                    },
                                    {
                                        "type": "carouselElement",
                                        "subtype": "image",
                                        "data": {
                                            "bannerId": 607195,
                                            "creativeId": "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
                                            "type": "restaurantCollectionV2",
                                            "link": "56421",
                                            "cityId": 0,
                                            "restaurantUuid": "",
                                            "restaurantParentId": "0",
                                            "thirdPartyVendor": "",
                                            "thirdPartyAddress": false
                                        }
                                    }
                                ]
                            }
                        },
                        "parentWidget": false
                    },
                    {
                        "cardType": "carousel",
                        "layoutAlignmentType": "VERTICAL",
                        "data": {
                            "type": "carousel",
                            "subtype": "openFilter",
                            "data": {
                                "cards": [
                                    {
                                        "type": "carouselElement",
                                        "subtype": "image",
                                        "data": {
                                            "bannerId": 181684,
                                            "creativeId": "bkhjfipzydkoqncrxpyi",
                                            "type": "restaurantCollectionV2",
                                            "link": "11718",
                                            "cityId": 0,
                                            "restaurantUuid": "",
                                            "restaurantParentId": "0",
                                            "title": "Offers Near You",
                                            "subtitle": "0 OPTIONS",
                                            "restaurants": [],
                                            "totalCount": 0,
                                            "dwebOpenFilterTitle": "Offers Near You",
                                            "dwebOpenFilterBgColor": "#FF0000",
                                            "dwebOpenFilterSelectIcon": "eyperwsfhaoa5vktjtu4",
                                            "dwebOpenFilterDeselectIcon": "urw8usdf4mk9aywd59gq"
                                        }
                                    },
                                    {
                                        "type": "carouselElement",
                                        "subtype": "image",
                                        "data": {
                                            "bannerId": 273242,
                                            "creativeId": "rng/md/carousel/production/vquntqrzvkb08pe59cec",
                                            "type": "restaurantCollectionV2",
                                            "link": "46147",
                                            "cityId": 0,
                                            "restaurantUuid": "",
                                            "restaurantParentId": "0",
                                            "title": "Top Picks",
                                            "subtitle": "0 OPTIONS",
                                            "restaurants": [],
                                            "totalCount": 0,
                                            "dwebOpenFilterTitle": "Top Picks",
                                            "dwebOpenFilterBgColor": "#FF0000",
                                            "dwebOpenFilterSelectIcon": "rng/md/carousel/production/vt13uzhjrg5r49kh9oru",
                                            "dwebOpenFilterDeselectIcon": "rng/md/carousel/production/ser2sttildk9yt7t2s91"
                                        }
                                    },
                                    {
                                        "type": "carouselElement",
                                        "subtype": "image",
                                        "data": {
                                            "bannerId": 181680,
                                            "creativeId": "a3jqjjod5taken7dh1bs",
                                            "type": "restaurantCollectionV2",
                                            "link": "11721",
                                            "cityId": 0,
                                            "restaurantUuid": "",
                                            "restaurantParentId": "0",
                                            "title": "Veg Only",
                                            "subtitle": "0 OPTIONS",
                                            "restaurants": [],
                                            "totalCount": 0,
                                            "dwebOpenFilterTitle": "Vegetarian Options",
                                            "dwebOpenFilterBgColor": "#FF0000",
                                            "dwebOpenFilterSelectIcon": "qtjc8dzfexg72lug37a0",
                                            "dwebOpenFilterDeselectIcon": "bm8bziikwyvwqsml1clm"
                                        }
                                    }
                                ]
                            }
                        },
                        "parentWidget": false
                    },
                    {
                        "cardType": "seeAllRestaurants",
                        "layoutAlignmentType": "VERTICAL",
                        "data": {
                            "type": "seeAllRestaurants",
                            "data": {
                                "title": "SEE ALL",
                                "totalOpenRestaurants": 1659,
                                "cards": [
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "563957",
                                            "name": "Chinese Wok",
                                            "uuid": "766b813b-70e6-4d39-bf98-8c5d6cd43d81",
                                            "city": "4",
                                            "area": "City Centre Mall",
                                            "totalRatingsString": "500+ ratings",
                                            "cloudinaryImageId": "58ee0c742e8d56c3475db9ced65d2d47",
                                            "cuisines": [
                                                "Chinese",
                                                "Asian",
                                                "Tibetan",
                                                "Desserts"
                                            ],
                                            "tags": [],
                                            "costForTwo": 25000,
                                            "costForTwoString": "₹250 FOR TWO",
                                            "deliveryTime": 27,
                                            "minDeliveryTime": 27,
                                            "maxDeliveryTime": 27,
                                            "slaString": "27 MINS",
                                            "lastMileTravel": 3,
                                            "slugs": {
                                                "restaurant": "chinese-wok---wok-express-rani-bagh-rani-bagh",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Shop No- G-28 & 44, Food Court Area, Ground Floor, City Centre Mall, Plot No 5, Sector 12,Dwarka, New Delhi, DWARKA, South West ,Delhi 110075",
                                            "locality": "Sector 12",
                                            "parentId": 61955,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "60% off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "60% off | Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "60% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "ribbon": [
                                                {
                                                    "type": "PROMOTED"
                                                }
                                            ],
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 4400,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 4400,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "4400",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "cid=6556856~p=1~eid=00000187-c38d-6164-0a1b-c126006e0138",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "3 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "563957",
                                                "deliveryTime": 27,
                                                "minDeliveryTime": 27,
                                                "maxDeliveryTime": 27,
                                                "lastMileTravel": 3,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": true,
                                            "avgRating": "3.7",
                                            "totalRatings": 500,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "36694",
                                            "name": "Sargam Sweets & Restaurant",
                                            "uuid": "17e6ee59-7045-47a1-b902-66c2b1f8546a",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "10000+ ratings",
                                            "cloudinaryImageId": "qetsckyabfqyq3qz4opm",
                                            "cuisines": [
                                                "Sweets",
                                                "Snacks"
                                            ],
                                            "tags": [],
                                            "costForTwo": 30000,
                                            "costForTwoString": "₹300 FOR TWO",
                                            "deliveryTime": 24,
                                            "minDeliveryTime": 24,
                                            "maxDeliveryTime": 24,
                                            "slaString": "24 MINS",
                                            "lastMileTravel": 1.2999999523162842,
                                            "slugs": {
                                                "restaurant": "sargam-sweets-uttam-nagar-uttam-nagar",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "A 11, Mohan Garden, Near Metro Pillar 753, Peepal Wala Road, Uttam Nagar, New Delhi",
                                            "locality": "Pipal Wala Road",
                                            "parentId": 16038,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "Flat ₹125 off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹125 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.2 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "36694",
                                                "deliveryTime": 24,
                                                "minDeliveryTime": 24,
                                                "maxDeliveryTime": 24,
                                                "lastMileTravel": 1.2999999523162842,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "3.7",
                                            "totalRatings": 10000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "399890",
                                            "name": "Pizza Wings",
                                            "uuid": "32ca4ccd-456c-474d-9818-ab5c4b21a02b",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "1000+ ratings",
                                            "cloudinaryImageId": "a46a6aa00709f771fabb45c864a81b5e",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "Mexican",
                                                "American"
                                            ],
                                            "tags": [],
                                            "costForTwo": 30000,
                                            "costForTwoString": "₹300 FOR TWO",
                                            "deliveryTime": 22,
                                            "minDeliveryTime": 22,
                                            "maxDeliveryTime": 22,
                                            "slaString": "22 MINS",
                                            "lastMileTravel": 1.2999999523162842,
                                            "slugs": {
                                                "restaurant": "pizza-wings-uttam-nagar-uttam-nagar",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "GROUND FLOOR WITHOUT ROOF RIGHTS OF PROP NO.-C1, 1A RAMA PARK UTTAM NAGAR-110059, DWARKA, South West   , Delhi-110059",
                                            "locality": "Rama Park",
                                            "parentId": 159048,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "Flat ₹125 off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹199",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹125 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.2 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "399890",
                                                "deliveryTime": 22,
                                                "minDeliveryTime": 22,
                                                "maxDeliveryTime": 22,
                                                "lastMileTravel": 1.2999999523162842,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "4.0",
                                            "totalRatings": 1000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "78291",
                                            "name": "Karim's",
                                            "uuid": "bd3e9b2a-8dbe-46c4-8c52-535cb370687a",
                                            "city": "4",
                                            "area": "Janakpuri",
                                            "totalRatingsString": "5000+ ratings",
                                            "cloudinaryImageId": "t55bmgihr0woug1t6xiu",
                                            "cuisines": [
                                                "Mughlai",
                                                "North Indian",
                                                "Indian"
                                            ],
                                            "tags": [],
                                            "costForTwo": 50000,
                                            "costForTwoString": "₹500 FOR TWO",
                                            "deliveryTime": 32,
                                            "minDeliveryTime": 32,
                                            "maxDeliveryTime": 32,
                                            "slaString": "32 MINS",
                                            "lastMileTravel": 6.599999904632568,
                                            "slugs": {
                                                "restaurant": "karims-janakpuri-janakpuri",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Janak Cinema, RWA Colony, Janakpuri, Delhi, 110058",
                                            "locality": "RWA Colony",
                                            "parentId": 1674,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "50% off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "50% off | Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "50% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "ribbon": [
                                                {
                                                    "type": "PROMOTED"
                                                }
                                            ],
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 6000,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 6000,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "6000",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "cid=6539251~p=4~eid=00000187-c38d-6164-0a1b-c127006e0435",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "6.5 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "78291",
                                                "deliveryTime": 32,
                                                "minDeliveryTime": 32,
                                                "maxDeliveryTime": 32,
                                                "lastMileTravel": 6.599999904632568,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": true,
                                            "avgRating": "3.8",
                                            "totalRatings": 5000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "25651",
                                            "name": "LAJAWAB",
                                            "uuid": "a8c89f44-7394-4d45-a398-548da492a96d",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "10000+ ratings",
                                            "cloudinaryImageId": "tzo3oconpitclp9zma8d",
                                            "cuisines": [
                                                "Chinese",
                                                "South Indian",
                                                "North Indian",
                                                "Fast Food",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "tags": [],
                                            "costForTwo": 30000,
                                            "costForTwoString": "₹300 FOR TWO",
                                            "deliveryTime": 25,
                                            "minDeliveryTime": 25,
                                            "maxDeliveryTime": 25,
                                            "slaString": "25 MINS",
                                            "lastMileTravel": 1.2999999523162842,
                                            "slugs": {
                                                "restaurant": "lajawab-uttam-nagar-uttam-nagar",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Bhagwati Garden, Nawada, A-1/28, Rama Park, Block A, Mohan Garden, Uttam Nagar, Delhi, 110059, India",
                                            "locality": "A Block",
                                            "parentId": 4093,
                                            "unserviceable": false,
                                            "veg": true,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "50% off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "50% off | Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "50% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.2 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "25651",
                                                "deliveryTime": 25,
                                                "minDeliveryTime": 25,
                                                "maxDeliveryTime": 25,
                                                "lastMileTravel": 1.2999999523162842,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "3.6",
                                            "totalRatings": 10000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "417201",
                                            "name": "Rominus Pizza & Burger",
                                            "uuid": "1e455d4d-3da8-4fb8-b78c-6b84fb9e14bf",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "1000+ ratings",
                                            "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "American",
                                                "Snacks",
                                                "Desserts",
                                                "Beverages",
                                                "Continental"
                                            ],
                                            "tags": [],
                                            "costForTwo": 15000,
                                            "costForTwoString": "₹150 FOR TWO",
                                            "deliveryTime": 24,
                                            "minDeliveryTime": 24,
                                            "maxDeliveryTime": 24,
                                            "slaString": "24 MINS",
                                            "lastMileTravel": 1.600000023841858,
                                            "slugs": {
                                                "restaurant": "rominus-pizza-and-burger-laxmi-nagar-laxmi-nagar-2",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "C-8 Rama Park, Metro Pillar No 769, Near Dwarka Metro Station",
                                            "locality": "Laxmi Nagar",
                                            "parentId": 8387,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "Flat ₹125 off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹125 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.6 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "417201",
                                                "deliveryTime": 24,
                                                "minDeliveryTime": 24,
                                                "maxDeliveryTime": 24,
                                                "lastMileTravel": 1.600000023841858,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "3.9",
                                            "totalRatings": 1000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "30577",
                                            "name": "Lala Da Shudh Vaishno Dhaba",
                                            "uuid": "238c6952-b110-4fdc-b430-4aecfe26ee8b",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "10000+ ratings",
                                            "cloudinaryImageId": "ze7vm8lstqwg6azkizis",
                                            "cuisines": [
                                                "North Indian",
                                                "Snacks",
                                                "Sweets"
                                            ],
                                            "tags": [],
                                            "costForTwo": 20000,
                                            "costForTwoString": "₹200 FOR TWO",
                                            "deliveryTime": 26,
                                            "minDeliveryTime": 26,
                                            "maxDeliveryTime": 26,
                                            "slaString": "26 MINS",
                                            "lastMileTravel": 3,
                                            "slugs": {
                                                "restaurant": "lala-da-shudh-vaishno-dhaba-uttam-nagar-uttam-nagar",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Main Najafgarh Road, Opposite Metro Pillar No. 676, Uttam Nagar, New Delhi",
                                            "locality": "Main Najafgarh Road",
                                            "parentId": 4499,
                                            "unserviceable": false,
                                            "veg": true,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "Flat ₹125 off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹125 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "ribbon": [
                                                {
                                                    "type": "PROMOTED"
                                                }
                                            ],
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 4400,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 4400,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "4400",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "cid=6376176~p=7~eid=00000187-c38d-6164-0a1b-c128006e0720",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "3 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "30577",
                                                "deliveryTime": 26,
                                                "minDeliveryTime": 26,
                                                "maxDeliveryTime": 26,
                                                "lastMileTravel": 3,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": true,
                                            "avgRating": "3.9",
                                            "totalRatings": 10000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "22739",
                                            "name": "Pizza Hut",
                                            "uuid": "36ac6e98-5794-4eeb-802e-49208e94e5e8",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "5000+ ratings",
                                            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "tags": [],
                                            "costForTwo": 35000,
                                            "costForTwoString": "₹350 FOR TWO",
                                            "deliveryTime": 26,
                                            "minDeliveryTime": 26,
                                            "maxDeliveryTime": 26,
                                            "slaString": "26 MINS",
                                            "lastMileTravel": 1.600000023841858,
                                            "slugs": {
                                                "restaurant": "pizza-hut-mohan-bhagwati-complex-dwarka",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Pizza Hut Delivery - Plot 6 & 7, Mohan Bhagwati Complex, Dwarka Mor, Uttam Nagar, New Delhi",
                                            "locality": "Bhagwati Garden",
                                            "parentId": 721,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "50% off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "50% off | Use SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "50% off up to ₹100 | Use code SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "50% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "50% off up to ₹100 | Use code SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.6 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "22739",
                                                "deliveryTime": 26,
                                                "minDeliveryTime": 26,
                                                "maxDeliveryTime": 26,
                                                "lastMileTravel": 1.600000023841858,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "3.7",
                                            "totalRatings": 5000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "64035",
                                            "name": "The Burger Club",
                                            "uuid": "ca73967e-7251-4594-8de6-3c903d77b12d",
                                            "city": "4",
                                            "area": "Dwarka",
                                            "totalRatingsString": "10000+ ratings",
                                            "cloudinaryImageId": "jtloihnjdnzuvdg1y8qo",
                                            "cuisines": [
                                                "Fast Food",
                                                "American",
                                                "Beverages",
                                                "Desserts"
                                            ],
                                            "tags": [],
                                            "costForTwo": 25000,
                                            "costForTwoString": "₹250 FOR TWO",
                                            "deliveryTime": 24,
                                            "minDeliveryTime": 24,
                                            "maxDeliveryTime": 24,
                                            "slaString": "24 MINS",
                                            "lastMileTravel": 1.899999976158142,
                                            "slugs": {
                                                "restaurant": "the-burger-club-sector-3-dwarka",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "The burger club private limited dwarka mor . piller no 794,Near by Bank of brodra",
                                            "locality": "Sector 15",
                                            "parentId": 2285,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "Flat ₹125 off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹125 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.8 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "64035",
                                                "deliveryTime": 24,
                                                "minDeliveryTime": 24,
                                                "maxDeliveryTime": 24,
                                                "lastMileTravel": 1.899999976158142,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "4.2",
                                            "totalRatings": 10000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "158018",
                                            "name": "STR - Southern Tiffin Room",
                                            "uuid": "b8ba402a-e900-451e-839f-1e44d5ac9afb",
                                            "city": "4",
                                            "area": "Dwarka",
                                            "totalRatingsString": "10000+ ratings",
                                            "cloudinaryImageId": "cisq0q3c9fnbvexiufmr",
                                            "cuisines": [
                                                "South Indian",
                                                "Andhra",
                                                "Biryani"
                                            ],
                                            "tags": [],
                                            "costForTwo": 30000,
                                            "costForTwoString": "₹300 FOR TWO",
                                            "deliveryTime": 29,
                                            "minDeliveryTime": 29,
                                            "maxDeliveryTime": 29,
                                            "slaString": "29 MINS",
                                            "lastMileTravel": 1.7999999523162842,
                                            "slugs": {
                                                "restaurant": "str-southern-tiffin-room-dwarka",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Plot No G 224, Main Raja Puri Road, Vishwas Park, Bhind lO Petrol Pump, Dwarka Sector 3 DADA DEV TOWER",
                                            "locality": "Sector 3",
                                            "parentId": 15292,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "Flat ₹125 off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹125 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "ribbon": [
                                                {
                                                    "type": "PROMOTED"
                                                }
                                            ],
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "cid=6376179~p=10~eid=00000187-c38d-6164-0a1b-c129006e0a76",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.7 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "158018",
                                                "deliveryTime": 29,
                                                "minDeliveryTime": 29,
                                                "maxDeliveryTime": 29,
                                                "lastMileTravel": 1.7999999523162842,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": true,
                                            "avgRating": "4.1",
                                            "totalRatings": 10000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "411519",
                                            "name": "McDonald's",
                                            "uuid": "855bb106-5f60-471a-9396-78698e1184c7",
                                            "city": "4",
                                            "area": "Dwarka",
                                            "totalRatingsString": "1000+ ratings",
                                            "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
                                            "cuisines": [
                                                "American"
                                            ],
                                            "tags": [],
                                            "costForTwo": 40000,
                                            "costForTwoString": "₹400 FOR TWO",
                                            "deliveryTime": 31,
                                            "minDeliveryTime": 31,
                                            "maxDeliveryTime": 31,
                                            "slaString": "31 MINS",
                                            "lastMileTravel": 2.799999952316284,
                                            "slugs": {
                                                "restaurant": "mcdonalds-vegas-mall-kakrola",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Vegas Mall, Pocket 1, Sector 14 Dwarka, Dwarka, Delhi, 110078",
                                            "locality": "Sector 14",
                                            "parentId": 630,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "2.7 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "411519",
                                                "deliveryTime": 31,
                                                "minDeliveryTime": 31,
                                                "maxDeliveryTime": 31,
                                                "lastMileTravel": 2.799999952316284,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "4.1",
                                            "totalRatings": 1000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "610732",
                                            "name": "KFC",
                                            "uuid": "b1ba9a5e-2601-4cff-8e07-3fea35cb8d7d",
                                            "city": "4",
                                            "area": "Dwarka More",
                                            "totalRatingsString": "500+ ratings",
                                            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                                            "cuisines": [
                                                "Burgers",
                                                "Biryani",
                                                "American",
                                                "Snacks",
                                                "Fast Food"
                                            ],
                                            "tags": [],
                                            "costForTwo": 40000,
                                            "costForTwoString": "₹400 FOR TWO",
                                            "deliveryTime": 26,
                                            "minDeliveryTime": 26,
                                            "maxDeliveryTime": 26,
                                            "slaString": "26 MINS",
                                            "lastMileTravel": 1.100000023841858,
                                            "slugs": {
                                                "restaurant": "kfc-dwarka-mor-uttam-nagar",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "KFC Restaurant B-2,Rama Part near dwarka more metro station. New Delhi 110059.",
                                            "locality": "Metro Station",
                                            "parentId": 547,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "20% off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "20% off | Use SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "20% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.1 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "610732",
                                                "deliveryTime": 26,
                                                "minDeliveryTime": 26,
                                                "maxDeliveryTime": 26,
                                                "lastMileTravel": 1.100000023841858,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "4.0",
                                            "totalRatings": 500,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "17790",
                                            "name": "Khan Chacha",
                                            "uuid": "997845d5-2007-45f3-b44c-0a93d0276146",
                                            "city": "4",
                                            "area": "Janakpuri",
                                            "totalRatingsString": "5000+ ratings",
                                            "cloudinaryImageId": "goetk7nwyusrgpkchdvc",
                                            "cuisines": [
                                                "Kebabs",
                                                "North Indian",
                                                "Mughlai"
                                            ],
                                            "tags": [],
                                            "costForTwo": 40000,
                                            "costForTwoString": "₹400 FOR TWO",
                                            "deliveryTime": 34,
                                            "minDeliveryTime": 34,
                                            "maxDeliveryTime": 34,
                                            "slaString": "34 MINS",
                                            "lastMileTravel": 4.599999904632568,
                                            "slugs": {
                                                "restaurant": "khan-chacha-janakpuri-janakpuri",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "Gupta And Gupta Pvt Ltd. Unit No : Gf -24 , Unity One Janakpuri West Metro Station Complex, New Delhi.",
                                            "locality": "Unity One Mall",
                                            "parentId": 548,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "40% off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "40% off | Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "40% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "ribbon": [
                                                {
                                                    "type": "PROMOTED"
                                                }
                                            ],
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 4400,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 4400,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "4400",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "cid=6332682~p=13~eid=00000187-c38d-6164-0a1b-c12a006e0d75",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "4.5 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "17790",
                                                "deliveryTime": 34,
                                                "minDeliveryTime": 34,
                                                "maxDeliveryTime": 34,
                                                "lastMileTravel": 4.599999904632568,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": true,
                                            "avgRating": "4.0",
                                            "totalRatings": 5000,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "390401",
                                            "name": "MOMOS MUNCHIES",
                                            "uuid": "8fbd3b8a-e0c3-4eb8-91ac-47dda07cf301",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "500+ ratings",
                                            "cloudinaryImageId": "b2vtbksqcabjg5xnhvz5",
                                            "cuisines": [
                                                "Chinese",
                                                "Tandoor",
                                                "Snacks",
                                                "Combo"
                                            ],
                                            "tags": [],
                                            "costForTwo": 25000,
                                            "costForTwoString": "₹250 FOR TWO",
                                            "deliveryTime": 35,
                                            "minDeliveryTime": 35,
                                            "maxDeliveryTime": 35,
                                            "slaString": "35 MINS",
                                            "lastMileTravel": 2.299999952316284,
                                            "slugs": {
                                                "restaurant": "momos-munchies-rani-bagh-rani-bagh",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "S-10 Param Puri, Uttam Nagar, New Delhi, Binda Pur, Dawarka, South West, Delhi 110059",
                                            "locality": "Param Puri",
                                            "parentId": 250874,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "10% off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "10% off | Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "10% OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                                                        "discountType": "Percentage",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "2.2 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "390401",
                                                "deliveryTime": 35,
                                                "minDeliveryTime": 35,
                                                "maxDeliveryTime": 35,
                                                "lastMileTravel": 2.299999952316284,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "3.8",
                                            "totalRatings": 500,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    },
                                    {
                                        "type": "restaurant",
                                        "data": {
                                            "type": "F",
                                            "id": "659414",
                                            "name": "La Pino'z Pizza",
                                            "uuid": "d9f99e2b-dd29-4424-944d-a37de4f56981",
                                            "city": "4",
                                            "area": "Uttam Nagar",
                                            "totalRatingsString": "100+ ratings",
                                            "cloudinaryImageId": "c99aa4e68f6f6235e8aeb420932c13d7",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "Pastas",
                                                "Mexican",
                                                "Desserts"
                                            ],
                                            "tags": [],
                                            "costForTwo": 40000,
                                            "costForTwoString": "₹400 FOR TWO",
                                            "deliveryTime": 23,
                                            "minDeliveryTime": 23,
                                            "maxDeliveryTime": 23,
                                            "slaString": "23 MINS",
                                            "lastMileTravel": 1.600000023841858,
                                            "slugs": {
                                                "restaurant": "la-pinoz-pizza-panchkula-janakpuri",
                                                "city": "delhi"
                                            },
                                            "cityState": "4",
                                            "address": "B-8 ground floor Rama park uttam nagar najafgarh road new delhi -110059",
                                            "locality": "DwarkaMor",
                                            "parentId": 4961,
                                            "unserviceable": false,
                                            "veg": false,
                                            "select": false,
                                            "favorite": false,
                                            "tradeCampaignHeaders": [],
                                            "aggregatedDiscountInfo": {
                                                "header": "Flat ₹125 off",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "aggregatedDiscountInfoV2": {
                                                "header": "₹125 OFF",
                                                "shortDescriptionList": [
                                                    {
                                                        "meta": "Use MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "descriptionList": [
                                                    {
                                                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                        "discountType": "Flat",
                                                        "operationType": "RESTAURANT"
                                                    }
                                                ],
                                                "subHeader": "",
                                                "headerType": 0,
                                                "superFreedel": ""
                                            },
                                            "chain": [],
                                            "feeDetails": {
                                                "fees": [
                                                    {
                                                        "name": "distance",
                                                        "fee": 3600,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "time",
                                                        "fee": 0,
                                                        "message": ""
                                                    },
                                                    {
                                                        "name": "special",
                                                        "fee": 0,
                                                        "message": ""
                                                    }
                                                ],
                                                "totalFees": 3600,
                                                "message": "",
                                                "title": "Delivery Charge",
                                                "amount": "3600",
                                                "icon": ""
                                            },
                                            "availability": {
                                                "opened": true,
                                                "nextOpenMessage": "",
                                                "nextCloseMessage": ""
                                            },
                                            "longDistanceEnabled": 0,
                                            "rainMode": "NONE",
                                            "thirdPartyAddress": false,
                                            "thirdPartyVendor": "",
                                            "adTrackingID": "",
                                            "badges": {
                                                "imageBased": [],
                                                "textBased": [],
                                                "textExtendedBadges": []
                                            },
                                            "lastMileTravelString": "1.6 kms",
                                            "hasSurge": false,
                                            "sla": {
                                                "restaurantId": "659414",
                                                "deliveryTime": 23,
                                                "minDeliveryTime": 23,
                                                "maxDeliveryTime": 23,
                                                "lastMileTravel": 1.600000023841858,
                                                "lastMileDistance": 0,
                                                "serviceability": "SERVICEABLE",
                                                "rainMode": "NONE",
                                                "longDistance": "NOT_LONG_DISTANCE",
                                                "preferentialService": false,
                                                "iconType": "EMPTY"
                                            },
                                            "promoted": false,
                                            "avgRating": "3.6",
                                            "totalRatings": 100,
                                            "new": false
                                        },
                                        "subtype": "basic"
                                    }
                                ],
                                "totalRestaurants": 1659
                            },
                            "subtype": "personalized"
                        },
                        "parentWidget": false
                    }
                ],
                "nextPageFetch": 0
            },
            "tid": "b727e38e-c696-4609-b19a-ad7ee6ce4387",
            "sid": "6qmdbae0-914f-49da-88b3-8d0aeea0e598",
            "deviceId": "c07bd7d3-f485-35d3-b479-2aed3d0d8338",
            "csrfToken": "8pZhyT3Nf22x-SQ5kZYdCAoHTw-lwBttmPMqfI0c"
        }
        setCarouselData(da?.data?.cards[0]?.data?.data?.cards);
      
        rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
        setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);
      
        setAllRestaurant(rest);
        setRestaurant(rest);
        });
    } catch (error) {
      // handle the error here
      let da={
        "statusCode": 0,
        "data": {
            "cacheExpiryTime": 320,
            "pages": 1,
            "pageIndex": 0,
            "scrubber": 0,
            "filters": [
                {
                    "type": "FilterWidget",
                    "title": "Cuisines",
                    "key": "CUISINES",
                    "configType": "checkbox",
                    "visible": 1,
                    "options": [
                        {
                            "option": "Afghani",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "American",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Andhra",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Arabian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Asian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Awadhi",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Bakery",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Barbecue",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Bengali",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Beverages",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Bihari",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Biryani",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Burgers",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Burmese",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Cafe",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Chaat",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Chettinad",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Chinese",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Coastal",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Combo",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Continental",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Desserts",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "European",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Fast Food",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "French",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Grill",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "H",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Healthy Food",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Home Foo",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Home Food",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Hyderabadi",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Ice ",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Ice Cream",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Ice Cream Cakes",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Indian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Italian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Italian-American",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Jain",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Japanese",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Juices",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Kebabs",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Keto",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Lebanese",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Lucknowi",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Maharashtrian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Mediterranean",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Mexican",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Middle Eastern",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Mughlai",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Nepalese",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "North Eastern",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "North Indian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Oriental",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Paan",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Pan-Asian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Pastas",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Persian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Pizzas",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Portuguese",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Punjabi",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Rajasthani",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Salads",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Seafood",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Snacks",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "South Indian",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Street Food",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Sushi",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Sweets",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Tandoor",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Thai",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Thalis",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Tibetan",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Turkish",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Waffle",
                            "selected": 0,
                            "visible": 1
                        }
                    ],
                    "detail": "",
                    "heading": "Cuisines",
                    "applicable": 1,
                    "searchable": 1
                },
                {
                    "type": "FilterWidget",
                    "title": "Show Restaurants With",
                    "key": "SHOW_RESTAURANTS_WITH",
                    "configType": "checkbox",
                    "visible": 1,
                    "options": [
                        {
                            "option": "Offers",
                            "selected": 0,
                            "visible": 1
                        },
                        {
                            "option": "Pure Veg",
                            "selected": 0,
                            "visible": 1
                        }
                    ],
                    "detail": "",
                    "heading": "Offers & More",
                    "applicable": 1,
                    "searchable": 0
                }
            ],
            "sorts": [
                {
                    "type": "SortWidget",
                    "key": "RELEVANCE",
                    "title": "Relevance",
                    "selected": 1,
                    "visible": 1,
                    "defaultSelection": true
                },
                {
                    "type": "SortWidget",
                    "key": "DELIVERY_TIME",
                    "title": "Delivery Time",
                    "selected": 0,
                    "visible": 1,
                    "defaultSelection": false
                },
                {
                    "type": "SortWidget",
                    "key": "RATING",
                    "title": "Rating",
                    "selected": 0,
                    "visible": 1,
                    "defaultSelection": false
                },
                {
                    "type": "SortWidget",
                    "key": "COST_FOR_TWO",
                    "title": "Cost: Low to High",
                    "selected": 0,
                    "visible": 1,
                    "defaultSelection": false
                },
                {
                    "type": "SortWidget",
                    "key": "COST_FOR_TWO_H2L",
                    "title": "Cost: High to Low",
                    "selected": 0,
                    "visible": 1,
                    "defaultSelection": false
                }
            ],
            "configs": {
                "ribbons": {
                    "PREORDER": {
                        "type": "PREORDER",
                        "text": "Preorder",
                        "textColor": "#ffffff",
                        "imageId": "sfefefefeegeg",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#af2330",
                        "priority": 3
                    },
                    "EXCLUSIVE": {
                        "type": "EXCLUSIVE",
                        "text": "Exclusive",
                        "textColor": "#ffffff",
                        "imageId": "sfefefefeegeg",
                        "topBackgroundColor": "#fa4a5b",
                        "bottomBackgroundColor": "#d12a3b",
                        "priority": 2
                    },
                    "NEW": {
                        "type": "NEW",
                        "text": "Newly Added",
                        "textColor": "#ffffff",
                        "imageId": "sfefefefeegeg",
                        "topBackgroundColor": "#d53d4c",
                        "bottomBackgroundColor": "#af2330",
                        "priority": 4
                    },
                    "REPEAT": {
                        "type": "REPEAT",
                        "text": "Repeat",
                        "textColor": "#ffffff",
                        "imageId": "sfefefefeegeg",
                        "topBackgroundColor": "#D53D4C",
                        "bottomBackgroundColor": "#B02331",
                        "priority": 6
                    },
                    "CLOUD": {
                        "type": "CLOUD",
                        "text": "Daily Menus",
                        "textColor": "#ffffff",
                        "imageId": "sfefefefeegeg",
                        "topBackgroundColor": "#fa4a5b",
                        "bottomBackgroundColor": "#d12a3b",
                        "priority": 5
                    },
                    "PREMIUM": {
                        "type": "PREMIUM",
                        "text": "Premium",
                        "textColor": "#ffffff",
                        "imageId": "sfefefefeegeg",
                        "topBackgroundColor": "#8a584b",
                        "bottomBackgroundColor": "#583229",
                        "priority": 7
                    },
                    "PROMOTED": {
                        "type": "PROMOTED",
                        "text": "Promoted",
                        "textColor": "#ffffff",
                        "imageId": "sfefefefeegeg",
                        "topBackgroundColor": "#3a3c41",
                        "bottomBackgroundColor": "#1e2023",
                        "priority": 1
                    }
                },
                "croutons": {
                    "RAIN": {
                        "type": "Crouton",
                        "bgColor": "#282C3F",
                        "icon": "surge_listing_piuzrv",
                        "textColor": "#ffffff",
                        "title": "Bad Weather",
                        "message": "${amount} extra levied on some restaurants"
                    },
                    "SERVICEABLE_WITH_BANNER_RAIN": {
                        "type": "Crouton",
                        "bgColor": "#282C3F",
                        "icon": "rain_crouton_4x",
                        "textColor": "#ffffff",
                        "title": "Bad Weather",
                        "message": "Few restaurants unserviceable due to rains"
                    }
                }
            },
            "cards": [
                {
                    "cardType": "carousel",
                    "layoutAlignmentType": "VERTICAL",
                    "data": {
                        "type": "carousel",
                        "subtype": "topCarousel",
                        "data": {
                            "cards": [
                                {
                                    "type": "carouselElement",
                                    "subtype": "image",
                                    "data": {
                                        "bannerId": 635529,
                                        "creativeId": "rng/md/carousel/production/pneknawbadtvceqzwiep",
                                        "type": "restaurantCollectionV2",
                                        "link": "49301",
                                        "cityId": 0,
                                        "restaurantUuid": "",
                                        "restaurantParentId": "0",
                                        "thirdPartyVendor": "",
                                        "thirdPartyAddress": false
                                    }
                                },
                                {
                                    "type": "carouselElement",
                                    "subtype": "image",
                                    "data": {
                                        "bannerId": 304928,
                                        "creativeId": "rng/md/carousel/production/awurei8ypqkafoqay9ym",
                                        "type": "restaurantCollectionV2",
                                        "link": "47668",
                                        "cityId": 0,
                                        "restaurantUuid": "",
                                        "restaurantParentId": "0",
                                        "thirdPartyVendor": "",
                                        "thirdPartyAddress": false
                                    }
                                },
                                {
                                    "type": "carouselElement",
                                    "subtype": "image",
                                    "data": {
                                        "bannerId": 619141,
                                        "creativeId": "rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
                                        "type": "restaurantCollectionV2",
                                        "link": "56413",
                                        "cityId": 0,
                                        "restaurantUuid": "",
                                        "restaurantParentId": "0",
                                        "thirdPartyVendor": "",
                                        "thirdPartyAddress": false
                                    }
                                },
                                {
                                    "type": "carouselElement",
                                    "subtype": "image",
                                    "data": {
                                        "bannerId": 607195,
                                        "creativeId": "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
                                        "type": "restaurantCollectionV2",
                                        "link": "56421",
                                        "cityId": 0,
                                        "restaurantUuid": "",
                                        "restaurantParentId": "0",
                                        "thirdPartyVendor": "",
                                        "thirdPartyAddress": false
                                    }
                                }
                            ]
                        }
                    },
                    "parentWidget": false
                },
                {
                    "cardType": "carousel",
                    "layoutAlignmentType": "VERTICAL",
                    "data": {
                        "type": "carousel",
                        "subtype": "openFilter",
                        "data": {
                            "cards": [
                                {
                                    "type": "carouselElement",
                                    "subtype": "image",
                                    "data": {
                                        "bannerId": 181684,
                                        "creativeId": "bkhjfipzydkoqncrxpyi",
                                        "type": "restaurantCollectionV2",
                                        "link": "11718",
                                        "cityId": 0,
                                        "restaurantUuid": "",
                                        "restaurantParentId": "0",
                                        "title": "Offers Near You",
                                        "subtitle": "0 OPTIONS",
                                        "restaurants": [],
                                        "totalCount": 0,
                                        "dwebOpenFilterTitle": "Offers Near You",
                                        "dwebOpenFilterBgColor": "#FF0000",
                                        "dwebOpenFilterSelectIcon": "eyperwsfhaoa5vktjtu4",
                                        "dwebOpenFilterDeselectIcon": "urw8usdf4mk9aywd59gq"
                                    }
                                },
                                {
                                    "type": "carouselElement",
                                    "subtype": "image",
                                    "data": {
                                        "bannerId": 273242,
                                        "creativeId": "rng/md/carousel/production/vquntqrzvkb08pe59cec",
                                        "type": "restaurantCollectionV2",
                                        "link": "46147",
                                        "cityId": 0,
                                        "restaurantUuid": "",
                                        "restaurantParentId": "0",
                                        "title": "Top Picks",
                                        "subtitle": "0 OPTIONS",
                                        "restaurants": [],
                                        "totalCount": 0,
                                        "dwebOpenFilterTitle": "Top Picks",
                                        "dwebOpenFilterBgColor": "#FF0000",
                                        "dwebOpenFilterSelectIcon": "rng/md/carousel/production/vt13uzhjrg5r49kh9oru",
                                        "dwebOpenFilterDeselectIcon": "rng/md/carousel/production/ser2sttildk9yt7t2s91"
                                    }
                                },
                                {
                                    "type": "carouselElement",
                                    "subtype": "image",
                                    "data": {
                                        "bannerId": 181680,
                                        "creativeId": "a3jqjjod5taken7dh1bs",
                                        "type": "restaurantCollectionV2",
                                        "link": "11721",
                                        "cityId": 0,
                                        "restaurantUuid": "",
                                        "restaurantParentId": "0",
                                        "title": "Veg Only",
                                        "subtitle": "0 OPTIONS",
                                        "restaurants": [],
                                        "totalCount": 0,
                                        "dwebOpenFilterTitle": "Vegetarian Options",
                                        "dwebOpenFilterBgColor": "#FF0000",
                                        "dwebOpenFilterSelectIcon": "qtjc8dzfexg72lug37a0",
                                        "dwebOpenFilterDeselectIcon": "bm8bziikwyvwqsml1clm"
                                    }
                                }
                            ]
                        }
                    },
                    "parentWidget": false
                },
                {
                    "cardType": "seeAllRestaurants",
                    "layoutAlignmentType": "VERTICAL",
                    "data": {
                        "type": "seeAllRestaurants",
                        "data": {
                            "title": "SEE ALL",
                            "totalOpenRestaurants": 1659,
                            "cards": [
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "563957",
                                        "name": "Chinese Wok",
                                        "uuid": "766b813b-70e6-4d39-bf98-8c5d6cd43d81",
                                        "city": "4",
                                        "area": "City Centre Mall",
                                        "totalRatingsString": "500+ ratings",
                                        "cloudinaryImageId": "58ee0c742e8d56c3475db9ced65d2d47",
                                        "cuisines": [
                                            "Chinese",
                                            "Asian",
                                            "Tibetan",
                                            "Desserts"
                                        ],
                                        "tags": [],
                                        "costForTwo": 25000,
                                        "costForTwoString": "₹250 FOR TWO",
                                        "deliveryTime": 27,
                                        "minDeliveryTime": 27,
                                        "maxDeliveryTime": 27,
                                        "slaString": "27 MINS",
                                        "lastMileTravel": 3,
                                        "slugs": {
                                            "restaurant": "chinese-wok---wok-express-rani-bagh-rani-bagh",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Shop No- G-28 & 44, Food Court Area, Ground Floor, City Centre Mall, Plot No 5, Sector 12,Dwarka, New Delhi, DWARKA, South West ,Delhi 110075",
                                        "locality": "Sector 12",
                                        "parentId": 61955,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "60% off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "60% off | Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "60% off up to ₹120 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "60% OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "60% off up to ₹120 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "ribbon": [
                                            {
                                                "type": "PROMOTED"
                                            }
                                        ],
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 4400,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 4400,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "4400",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "cid=6556856~p=1~eid=00000187-c38d-6164-0a1b-c126006e0138",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "3 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "563957",
                                            "deliveryTime": 27,
                                            "minDeliveryTime": 27,
                                            "maxDeliveryTime": 27,
                                            "lastMileTravel": 3,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": true,
                                        "avgRating": "3.7",
                                        "totalRatings": 500,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "36694",
                                        "name": "Sargam Sweets & Restaurant",
                                        "uuid": "17e6ee59-7045-47a1-b902-66c2b1f8546a",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "10000+ ratings",
                                        "cloudinaryImageId": "qetsckyabfqyq3qz4opm",
                                        "cuisines": [
                                            "Sweets",
                                            "Snacks"
                                        ],
                                        "tags": [],
                                        "costForTwo": 30000,
                                        "costForTwoString": "₹300 FOR TWO",
                                        "deliveryTime": 24,
                                        "minDeliveryTime": 24,
                                        "maxDeliveryTime": 24,
                                        "slaString": "24 MINS",
                                        "lastMileTravel": 1.2999999523162842,
                                        "slugs": {
                                            "restaurant": "sargam-sweets-uttam-nagar-uttam-nagar",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "A 11, Mohan Garden, Near Metro Pillar 753, Peepal Wala Road, Uttam Nagar, New Delhi",
                                        "locality": "Pipal Wala Road",
                                        "parentId": 16038,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "Flat ₹125 off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "₹125 OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.2 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "36694",
                                            "deliveryTime": 24,
                                            "minDeliveryTime": 24,
                                            "maxDeliveryTime": 24,
                                            "lastMileTravel": 1.2999999523162842,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "3.7",
                                        "totalRatings": 10000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "399890",
                                        "name": "Pizza Wings",
                                        "uuid": "32ca4ccd-456c-474d-9818-ab5c4b21a02b",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "1000+ ratings",
                                        "cloudinaryImageId": "a46a6aa00709f771fabb45c864a81b5e",
                                        "cuisines": [
                                            "Pizzas",
                                            "Italian",
                                            "Mexican",
                                            "American"
                                        ],
                                        "tags": [],
                                        "costForTwo": 30000,
                                        "costForTwoString": "₹300 FOR TWO",
                                        "deliveryTime": 22,
                                        "minDeliveryTime": 22,
                                        "maxDeliveryTime": 22,
                                        "slaString": "22 MINS",
                                        "lastMileTravel": 1.2999999523162842,
                                        "slugs": {
                                            "restaurant": "pizza-wings-uttam-nagar-uttam-nagar",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "GROUND FLOOR WITHOUT ROOF RIGHTS OF PROP NO.-C1, 1A RAMA PARK UTTAM NAGAR-110059, DWARKA, South West   , Delhi-110059",
                                        "locality": "Rama Park",
                                        "parentId": 159048,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "Flat ₹125 off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹199",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "₹125 OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.2 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "399890",
                                            "deliveryTime": 22,
                                            "minDeliveryTime": 22,
                                            "maxDeliveryTime": 22,
                                            "lastMileTravel": 1.2999999523162842,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "4.0",
                                        "totalRatings": 1000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "78291",
                                        "name": "Karim's",
                                        "uuid": "bd3e9b2a-8dbe-46c4-8c52-535cb370687a",
                                        "city": "4",
                                        "area": "Janakpuri",
                                        "totalRatingsString": "5000+ ratings",
                                        "cloudinaryImageId": "t55bmgihr0woug1t6xiu",
                                        "cuisines": [
                                            "Mughlai",
                                            "North Indian",
                                            "Indian"
                                        ],
                                        "tags": [],
                                        "costForTwo": 50000,
                                        "costForTwoString": "₹500 FOR TWO",
                                        "deliveryTime": 32,
                                        "minDeliveryTime": 32,
                                        "maxDeliveryTime": 32,
                                        "slaString": "32 MINS",
                                        "lastMileTravel": 6.599999904632568,
                                        "slugs": {
                                            "restaurant": "karims-janakpuri-janakpuri",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Janak Cinema, RWA Colony, Janakpuri, Delhi, 110058",
                                        "locality": "RWA Colony",
                                        "parentId": 1674,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "50% off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "50% off | Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "50% OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "ribbon": [
                                            {
                                                "type": "PROMOTED"
                                            }
                                        ],
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 6000,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 6000,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "6000",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "cid=6539251~p=4~eid=00000187-c38d-6164-0a1b-c127006e0435",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "6.5 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "78291",
                                            "deliveryTime": 32,
                                            "minDeliveryTime": 32,
                                            "maxDeliveryTime": 32,
                                            "lastMileTravel": 6.599999904632568,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": true,
                                        "avgRating": "3.8",
                                        "totalRatings": 5000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "25651",
                                        "name": "LAJAWAB",
                                        "uuid": "a8c89f44-7394-4d45-a398-548da492a96d",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "10000+ ratings",
                                        "cloudinaryImageId": "tzo3oconpitclp9zma8d",
                                        "cuisines": [
                                            "Chinese",
                                            "South Indian",
                                            "North Indian",
                                            "Fast Food",
                                            "Desserts",
                                            "Beverages"
                                        ],
                                        "tags": [],
                                        "costForTwo": 30000,
                                        "costForTwoString": "₹300 FOR TWO",
                                        "deliveryTime": 25,
                                        "minDeliveryTime": 25,
                                        "maxDeliveryTime": 25,
                                        "slaString": "25 MINS",
                                        "lastMileTravel": 1.2999999523162842,
                                        "slugs": {
                                            "restaurant": "lajawab-uttam-nagar-uttam-nagar",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Bhagwati Garden, Nawada, A-1/28, Rama Park, Block A, Mohan Garden, Uttam Nagar, Delhi, 110059, India",
                                        "locality": "A Block",
                                        "parentId": 4093,
                                        "unserviceable": false,
                                        "veg": true,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "50% off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "50% off | Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "50% OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "50% off up to ₹100 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.2 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "25651",
                                            "deliveryTime": 25,
                                            "minDeliveryTime": 25,
                                            "maxDeliveryTime": 25,
                                            "lastMileTravel": 1.2999999523162842,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "3.6",
                                        "totalRatings": 10000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "417201",
                                        "name": "Rominus Pizza & Burger",
                                        "uuid": "1e455d4d-3da8-4fb8-b78c-6b84fb9e14bf",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "1000+ ratings",
                                        "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
                                        "cuisines": [
                                            "Pizzas",
                                            "Italian",
                                            "American",
                                            "Snacks",
                                            "Desserts",
                                            "Beverages",
                                            "Continental"
                                        ],
                                        "tags": [],
                                        "costForTwo": 15000,
                                        "costForTwoString": "₹150 FOR TWO",
                                        "deliveryTime": 24,
                                        "minDeliveryTime": 24,
                                        "maxDeliveryTime": 24,
                                        "slaString": "24 MINS",
                                        "lastMileTravel": 1.600000023841858,
                                        "slugs": {
                                            "restaurant": "rominus-pizza-and-burger-laxmi-nagar-laxmi-nagar-2",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "C-8 Rama Park, Metro Pillar No 769, Near Dwarka Metro Station",
                                        "locality": "Laxmi Nagar",
                                        "parentId": 8387,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "Flat ₹125 off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "₹125 OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.6 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "417201",
                                            "deliveryTime": 24,
                                            "minDeliveryTime": 24,
                                            "maxDeliveryTime": 24,
                                            "lastMileTravel": 1.600000023841858,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "3.9",
                                        "totalRatings": 1000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "30577",
                                        "name": "Lala Da Shudh Vaishno Dhaba",
                                        "uuid": "238c6952-b110-4fdc-b430-4aecfe26ee8b",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "10000+ ratings",
                                        "cloudinaryImageId": "ze7vm8lstqwg6azkizis",
                                        "cuisines": [
                                            "North Indian",
                                            "Snacks",
                                            "Sweets"
                                        ],
                                        "tags": [],
                                        "costForTwo": 20000,
                                        "costForTwoString": "₹200 FOR TWO",
                                        "deliveryTime": 26,
                                        "minDeliveryTime": 26,
                                        "maxDeliveryTime": 26,
                                        "slaString": "26 MINS",
                                        "lastMileTravel": 3,
                                        "slugs": {
                                            "restaurant": "lala-da-shudh-vaishno-dhaba-uttam-nagar-uttam-nagar",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Main Najafgarh Road, Opposite Metro Pillar No. 676, Uttam Nagar, New Delhi",
                                        "locality": "Main Najafgarh Road",
                                        "parentId": 4499,
                                        "unserviceable": false,
                                        "veg": true,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "Flat ₹125 off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "₹125 OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "ribbon": [
                                            {
                                                "type": "PROMOTED"
                                            }
                                        ],
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 4400,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 4400,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "4400",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "cid=6376176~p=7~eid=00000187-c38d-6164-0a1b-c128006e0720",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "3 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "30577",
                                            "deliveryTime": 26,
                                            "minDeliveryTime": 26,
                                            "maxDeliveryTime": 26,
                                            "lastMileTravel": 3,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": true,
                                        "avgRating": "3.9",
                                        "totalRatings": 10000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "22739",
                                        "name": "Pizza Hut",
                                        "uuid": "36ac6e98-5794-4eeb-802e-49208e94e5e8",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "5000+ ratings",
                                        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                        "cuisines": [
                                            "Pizzas"
                                        ],
                                        "tags": [],
                                        "costForTwo": 35000,
                                        "costForTwoString": "₹350 FOR TWO",
                                        "deliveryTime": 26,
                                        "minDeliveryTime": 26,
                                        "maxDeliveryTime": 26,
                                        "slaString": "26 MINS",
                                        "lastMileTravel": 1.600000023841858,
                                        "slugs": {
                                            "restaurant": "pizza-hut-mohan-bhagwati-complex-dwarka",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Pizza Hut Delivery - Plot 6 & 7, Mohan Bhagwati Complex, Dwarka Mor, Uttam Nagar, New Delhi",
                                        "locality": "Bhagwati Garden",
                                        "parentId": 721,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "50% off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "50% off | Use SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "50% off up to ₹100 | Use code SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "50% OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "50% off up to ₹100 | Use code SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.6 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "22739",
                                            "deliveryTime": 26,
                                            "minDeliveryTime": 26,
                                            "maxDeliveryTime": 26,
                                            "lastMileTravel": 1.600000023841858,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "3.7",
                                        "totalRatings": 5000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "64035",
                                        "name": "The Burger Club",
                                        "uuid": "ca73967e-7251-4594-8de6-3c903d77b12d",
                                        "city": "4",
                                        "area": "Dwarka",
                                        "totalRatingsString": "10000+ ratings",
                                        "cloudinaryImageId": "jtloihnjdnzuvdg1y8qo",
                                        "cuisines": [
                                            "Fast Food",
                                            "American",
                                            "Beverages",
                                            "Desserts"
                                        ],
                                        "tags": [],
                                        "costForTwo": 25000,
                                        "costForTwoString": "₹250 FOR TWO",
                                        "deliveryTime": 24,
                                        "minDeliveryTime": 24,
                                        "maxDeliveryTime": 24,
                                        "slaString": "24 MINS",
                                        "lastMileTravel": 1.899999976158142,
                                        "slugs": {
                                            "restaurant": "the-burger-club-sector-3-dwarka",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "The burger club private limited dwarka mor . piller no 794,Near by Bank of brodra",
                                        "locality": "Sector 15",
                                        "parentId": 2285,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "Flat ₹125 off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "₹125 OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.8 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "64035",
                                            "deliveryTime": 24,
                                            "minDeliveryTime": 24,
                                            "maxDeliveryTime": 24,
                                            "lastMileTravel": 1.899999976158142,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "4.2",
                                        "totalRatings": 10000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "158018",
                                        "name": "STR - Southern Tiffin Room",
                                        "uuid": "b8ba402a-e900-451e-839f-1e44d5ac9afb",
                                        "city": "4",
                                        "area": "Dwarka",
                                        "totalRatingsString": "10000+ ratings",
                                        "cloudinaryImageId": "cisq0q3c9fnbvexiufmr",
                                        "cuisines": [
                                            "South Indian",
                                            "Andhra",
                                            "Biryani"
                                        ],
                                        "tags": [],
                                        "costForTwo": 30000,
                                        "costForTwoString": "₹300 FOR TWO",
                                        "deliveryTime": 29,
                                        "minDeliveryTime": 29,
                                        "maxDeliveryTime": 29,
                                        "slaString": "29 MINS",
                                        "lastMileTravel": 1.7999999523162842,
                                        "slugs": {
                                            "restaurant": "str-southern-tiffin-room-dwarka",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Plot No G 224, Main Raja Puri Road, Vishwas Park, Bhind lO Petrol Pump, Dwarka Sector 3 DADA DEV TOWER",
                                        "locality": "Sector 3",
                                        "parentId": 15292,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "Flat ₹125 off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "₹125 OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "ribbon": [
                                            {
                                                "type": "PROMOTED"
                                            }
                                        ],
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "cid=6376179~p=10~eid=00000187-c38d-6164-0a1b-c129006e0a76",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.7 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "158018",
                                            "deliveryTime": 29,
                                            "minDeliveryTime": 29,
                                            "maxDeliveryTime": 29,
                                            "lastMileTravel": 1.7999999523162842,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": true,
                                        "avgRating": "4.1",
                                        "totalRatings": 10000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "411519",
                                        "name": "McDonald's",
                                        "uuid": "855bb106-5f60-471a-9396-78698e1184c7",
                                        "city": "4",
                                        "area": "Dwarka",
                                        "totalRatingsString": "1000+ ratings",
                                        "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
                                        "cuisines": [
                                            "American"
                                        ],
                                        "tags": [],
                                        "costForTwo": 40000,
                                        "costForTwoString": "₹400 FOR TWO",
                                        "deliveryTime": 31,
                                        "minDeliveryTime": 31,
                                        "maxDeliveryTime": 31,
                                        "slaString": "31 MINS",
                                        "lastMileTravel": 2.799999952316284,
                                        "slugs": {
                                            "restaurant": "mcdonalds-vegas-mall-kakrola",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Vegas Mall, Pocket 1, Sector 14 Dwarka, Dwarka, Delhi, 110078",
                                        "locality": "Sector 14",
                                        "parentId": 630,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "2.7 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "411519",
                                            "deliveryTime": 31,
                                            "minDeliveryTime": 31,
                                            "maxDeliveryTime": 31,
                                            "lastMileTravel": 2.799999952316284,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "4.1",
                                        "totalRatings": 1000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "610732",
                                        "name": "KFC",
                                        "uuid": "b1ba9a5e-2601-4cff-8e07-3fea35cb8d7d",
                                        "city": "4",
                                        "area": "Dwarka More",
                                        "totalRatingsString": "500+ ratings",
                                        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                                        "cuisines": [
                                            "Burgers",
                                            "Biryani",
                                            "American",
                                            "Snacks",
                                            "Fast Food"
                                        ],
                                        "tags": [],
                                        "costForTwo": 40000,
                                        "costForTwoString": "₹400 FOR TWO",
                                        "deliveryTime": 26,
                                        "minDeliveryTime": 26,
                                        "maxDeliveryTime": 26,
                                        "slaString": "26 MINS",
                                        "lastMileTravel": 1.100000023841858,
                                        "slugs": {
                                            "restaurant": "kfc-dwarka-mor-uttam-nagar",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "KFC Restaurant B-2,Rama Part near dwarka more metro station. New Delhi 110059.",
                                        "locality": "Metro Station",
                                        "parentId": 547,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "20% off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "20% off | Use SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "20% OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.1 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "610732",
                                            "deliveryTime": 26,
                                            "minDeliveryTime": 26,
                                            "maxDeliveryTime": 26,
                                            "lastMileTravel": 1.100000023841858,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "4.0",
                                        "totalRatings": 500,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "17790",
                                        "name": "Khan Chacha",
                                        "uuid": "997845d5-2007-45f3-b44c-0a93d0276146",
                                        "city": "4",
                                        "area": "Janakpuri",
                                        "totalRatingsString": "5000+ ratings",
                                        "cloudinaryImageId": "goetk7nwyusrgpkchdvc",
                                        "cuisines": [
                                            "Kebabs",
                                            "North Indian",
                                            "Mughlai"
                                        ],
                                        "tags": [],
                                        "costForTwo": 40000,
                                        "costForTwoString": "₹400 FOR TWO",
                                        "deliveryTime": 34,
                                        "minDeliveryTime": 34,
                                        "maxDeliveryTime": 34,
                                        "slaString": "34 MINS",
                                        "lastMileTravel": 4.599999904632568,
                                        "slugs": {
                                            "restaurant": "khan-chacha-janakpuri-janakpuri",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "Gupta And Gupta Pvt Ltd. Unit No : Gf -24 , Unity One Janakpuri West Metro Station Complex, New Delhi.",
                                        "locality": "Unity One Mall",
                                        "parentId": 548,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "40% off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "40% off | Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "40% off up to ₹80 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "40% OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "40% off up to ₹80 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "ribbon": [
                                            {
                                                "type": "PROMOTED"
                                            }
                                        ],
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 4400,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 4400,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "4400",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "cid=6332682~p=13~eid=00000187-c38d-6164-0a1b-c12a006e0d75",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "4.5 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "17790",
                                            "deliveryTime": 34,
                                            "minDeliveryTime": 34,
                                            "maxDeliveryTime": 34,
                                            "lastMileTravel": 4.599999904632568,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": true,
                                        "avgRating": "4.0",
                                        "totalRatings": 5000,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "390401",
                                        "name": "MOMOS MUNCHIES",
                                        "uuid": "8fbd3b8a-e0c3-4eb8-91ac-47dda07cf301",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "500+ ratings",
                                        "cloudinaryImageId": "b2vtbksqcabjg5xnhvz5",
                                        "cuisines": [
                                            "Chinese",
                                            "Tandoor",
                                            "Snacks",
                                            "Combo"
                                        ],
                                        "tags": [],
                                        "costForTwo": 25000,
                                        "costForTwoString": "₹250 FOR TWO",
                                        "deliveryTime": 35,
                                        "minDeliveryTime": 35,
                                        "maxDeliveryTime": 35,
                                        "slaString": "35 MINS",
                                        "lastMileTravel": 2.299999952316284,
                                        "slugs": {
                                            "restaurant": "momos-munchies-rani-bagh-rani-bagh",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "S-10 Param Puri, Uttam Nagar, New Delhi, Binda Pur, Dawarka, South West, Delhi 110059",
                                        "locality": "Param Puri",
                                        "parentId": 250874,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "10% off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "10% off | Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "10% off up to ₹40 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "10% OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "10% off up to ₹40 | Use code TRYNEW",
                                                    "discountType": "Percentage",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "2.2 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "390401",
                                            "deliveryTime": 35,
                                            "minDeliveryTime": 35,
                                            "maxDeliveryTime": 35,
                                            "lastMileTravel": 2.299999952316284,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "3.8",
                                        "totalRatings": 500,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                },
                                {
                                    "type": "restaurant",
                                    "data": {
                                        "type": "F",
                                        "id": "659414",
                                        "name": "La Pino'z Pizza",
                                        "uuid": "d9f99e2b-dd29-4424-944d-a37de4f56981",
                                        "city": "4",
                                        "area": "Uttam Nagar",
                                        "totalRatingsString": "100+ ratings",
                                        "cloudinaryImageId": "c99aa4e68f6f6235e8aeb420932c13d7",
                                        "cuisines": [
                                            "Pizzas",
                                            "Italian",
                                            "Pastas",
                                            "Mexican",
                                            "Desserts"
                                        ],
                                        "tags": [],
                                        "costForTwo": 40000,
                                        "costForTwoString": "₹400 FOR TWO",
                                        "deliveryTime": 23,
                                        "minDeliveryTime": 23,
                                        "maxDeliveryTime": 23,
                                        "slaString": "23 MINS",
                                        "lastMileTravel": 1.600000023841858,
                                        "slugs": {
                                            "restaurant": "la-pinoz-pizza-panchkula-janakpuri",
                                            "city": "delhi"
                                        },
                                        "cityState": "4",
                                        "address": "B-8 ground floor Rama park uttam nagar najafgarh road new delhi -110059",
                                        "locality": "DwarkaMor",
                                        "parentId": 4961,
                                        "unserviceable": false,
                                        "veg": false,
                                        "select": false,
                                        "favorite": false,
                                        "tradeCampaignHeaders": [],
                                        "aggregatedDiscountInfo": {
                                            "header": "Flat ₹125 off",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "aggregatedDiscountInfoV2": {
                                            "header": "₹125 OFF",
                                            "shortDescriptionList": [
                                                {
                                                    "meta": "Use MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "descriptionList": [
                                                {
                                                    "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                                                    "discountType": "Flat",
                                                    "operationType": "RESTAURANT"
                                                }
                                            ],
                                            "subHeader": "",
                                            "headerType": 0,
                                            "superFreedel": ""
                                        },
                                        "chain": [],
                                        "feeDetails": {
                                            "fees": [
                                                {
                                                    "name": "distance",
                                                    "fee": 3600,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "time",
                                                    "fee": 0,
                                                    "message": ""
                                                },
                                                {
                                                    "name": "special",
                                                    "fee": 0,
                                                    "message": ""
                                                }
                                            ],
                                            "totalFees": 3600,
                                            "message": "",
                                            "title": "Delivery Charge",
                                            "amount": "3600",
                                            "icon": ""
                                        },
                                        "availability": {
                                            "opened": true,
                                            "nextOpenMessage": "",
                                            "nextCloseMessage": ""
                                        },
                                        "longDistanceEnabled": 0,
                                        "rainMode": "NONE",
                                        "thirdPartyAddress": false,
                                        "thirdPartyVendor": "",
                                        "adTrackingID": "",
                                        "badges": {
                                            "imageBased": [],
                                            "textBased": [],
                                            "textExtendedBadges": []
                                        },
                                        "lastMileTravelString": "1.6 kms",
                                        "hasSurge": false,
                                        "sla": {
                                            "restaurantId": "659414",
                                            "deliveryTime": 23,
                                            "minDeliveryTime": 23,
                                            "maxDeliveryTime": 23,
                                            "lastMileTravel": 1.600000023841858,
                                            "lastMileDistance": 0,
                                            "serviceability": "SERVICEABLE",
                                            "rainMode": "NONE",
                                            "longDistance": "NOT_LONG_DISTANCE",
                                            "preferentialService": false,
                                            "iconType": "EMPTY"
                                        },
                                        "promoted": false,
                                        "avgRating": "3.6",
                                        "totalRatings": 100,
                                        "new": false
                                    },
                                    "subtype": "basic"
                                }
                            ],
                            "totalRestaurants": 1659
                        },
                        "subtype": "personalized"
                    },
                    "parentWidget": false
                }
            ],
            "nextPageFetch": 0
        },
        "tid": "b727e38e-c696-4609-b19a-ad7ee6ce4387",
        "sid": "6qmdbae0-914f-49da-88b3-8d0aeea0e598",
        "deviceId": "c07bd7d3-f485-35d3-b479-2aed3d0d8338",
        "csrfToken": "8pZhyT3Nf22x-SQ5kZYdCAoHTw-lwBttmPMqfI0c"
    }
    setCarouselData(da?.data?.cards[0]?.data?.data?.cards);
  
    rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
    setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);
  
    setAllRestaurant(rest);
    setRestaurant(rest);
}
  }, []);

  async function callApiHandler() {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    let da = await response.json();
    console.log(da);
    setCarouselData(da?.data?.cards[0]?.data?.data?.cards);

    rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
    setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);

    setAllRestaurant(rest);
    setRestaurant(rest);
  }

  async function callApiHandler2() {
    let response2 = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&offset=${cart}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
    );
    let dat = await response2.json();

    rest?.push(
      ...dat?.data?.cards
        ?.map((x) => x)
        ?.filter((x) => x.cardType == "restaurant")
        ?.flat()
        .map((x) => x.data?.data)
    );

    setRestaurant((prev) => [...prev, ...rest]);
    setAllRestaurant((prev) => [...prev, ...rest]);
  }

  useEffect(() => {
    try {
      callApiHandler2()
        .then(response => {
          // handle the response here
        })
        .catch(error => {
          console.error(error);
          // handle the error here
        });
    } catch (error) {
      console.log("cad")
      console.error(error);
      // handle the error here
    }
    // cleanup function
    return () => {
      // cleanup code here
    };
  }, [cart]);
  

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setCart((prev) => prev + 16);
      }
    } catch (error) {}
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <>
        {carouselData?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className=" bg-[#171a29]">
            <FoodCarousel data={carouselData} />
          </div>
        )}

        <div className="flex justify-between">
          <div className="font-semibold text-[#232737] text-2xl pt-10 pl-8 pb-2">
            {noOfRestaurant} restaurants
          </div>
          <div className="search-container mx-72 py-6 flex">
            <input
              type="text"
              class="search-input border border-gray-300 rounded-md px-4 py-2 w-full"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  let data = fliterData(allRestaurant, searchText);
                  setRestaurant(data);
                }
              }}
            />
            <button
              class="search-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3"
              onClick={() => {
                let data = fliterData(allRestaurant, searchText);
                setRestaurant(data);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <hr className="border-[#e4e3e3] mx-8 " />
        <div className="flex flex-wrap ">
          {restaurant?.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant} key={restaurant?.data?.id} />
            );
          })}

          {Array(1)
            .fill("")
            .map((e, index) => (
              <div
                key={index}
                className=" animate-pulse w-[254px] h-[220px] p-3 m-5 border border-slate-200 rounded-md bg-[#fdfdfd]"
              >
                <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-100"></div>

                <p class="leading-relaxed mt-4 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                <p class="leading-relaxed mt-2 mb-1 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                <p class="leading-relaxed  w-1/5 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
              </div>
            ))}
        </div>
      </>
    </>
  );
};

export default Body;
