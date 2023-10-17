

// 20231016150023
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.296116&lng=73.216694&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null

[{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "CIhNEOskKIDQlYqr1qbbVDDGDjgC",
      "widgetOffset": {
        "restaurantCountWidget": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food": "9",
        "inlineFacetFilter": "",
        "collectionV5MastheadWidget": ""
      }
    },
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "83637",
            "title": "Burger",
            "description": "Satisfy your cravings with these fresh and flavoursome burgers.",
            "imageId": "v1674029927/PC_Creative%20refresh/3D_bau/collections_new/Burger.png",
            "aspectRatio": "3.44",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger,burger,layout_Burger,ads_pc_burger",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "22 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 22,
            "facetList": [
              {
                "label": "Veg/Non-veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "Pure veg",
                    "id": "isVegfacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery3",
                    "analytics": {
                      
                    }
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filter by"
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery3",
                    "analytics": {
                      
                    }
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filter by"
              },
              {
                "label": "Cost for two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Rs. 300-Rs. 600",
                    "id": "costForTwofacetquery3",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery5",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filter by"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "widgetPadding": {
                "left": 16,
                "top": 20,
                "right": 16,
                "bottom": 16
              },
              "scrollBar": {
                
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "id": "restaurantCountWidget",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                "text": "Restaurants to explore",
                "headerStyling": {
                  "textSize": 15,
                  "textColor": "text_color_highest_emphasis",
                  "textFontName": "FONT_NAME_HEADER_H5",
                  "maxLines": 1
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "259056",
              "name": "Yours Deliciously",
              "cloudinaryImageId": "xsenebrshm46ymrjadr1",
              "locality": "Natubhai Centre",
              "areaName": "Natubhai Circle",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pizzas",
                "Chinese",
                "Beverages",
                "Italian",
                "Snacks"
              ],
              "avgRating": 4.2,
              "feeDetails": {
                "restaurantId": "259056",
                "fees": [
                  {
                    "name": "BASE_DISTANCE"
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ]
              },
              "parentId": "228308",
              "avgRatingString": "4.2",
              "totalRatingsString": "1K+",
              "promoted": true,
              "adTrackingId": "cid=8918713~p=1~eid=0000018b-37d2-7bc9-654a-ecf800d40102~srvts=1697448623049~83637",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 6.9,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "6.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-16 15:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=259056&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "81131",
              "name": "The Spot",
              "cloudinaryImageId": "b9hat6zzlw1bo1hbcbvj",
              "locality": "Bhandra Kacheri Road",
              "areaName": "Panigate",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Burgers",
                "Fast Food",
                "Pizzas"
              ],
              "avgRating": 4.3,
              "favourite": true,
              "feeDetails": {
                "restaurantId": "81131",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2300
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2300
              },
              "parentId": "3610",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-16 22:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=81131&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "563210",
              "name": "Ajay's Takeaway Food",
              "cloudinaryImageId": "bvzqupehz3to0aliplyy",
              "locality": "Raopura\n",
              "areaName": "Mandvi",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Burgers"
              ],
              "avgRating": 4.4,
              "veg": true,
              "feeDetails": {
                "restaurantId": "563210",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 2300
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 2300
              },
              "parentId": "333395",
              "avgRatingString": "4.4",
              "totalRatingsString": "10+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-16 22:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=563210&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "506658",
              "name": "Brown Burger Co.",
              "cloudinaryImageId": "ido7p3xblsl51ieo0ox3",
              "locality": "Ellora Park",
              "areaName": "Vadiwadi",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "American",
                "Italian",
                "Fast Food",
                "Pizzas",
                "Beverages"
              ],
              "avgRating": 4,
              "veg": true,
              "feeDetails": {
                "restaurantId": "506658",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 5300
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 5300
              },
              "parentId": "50466",
              "avgRatingString": "4.0",
              "totalRatingsString": "100+",
              "promoted": true,
              "adTrackingId": "cid=8877355~p=2~eid=0000018b-37d2-7bc9-654a-ecf900d4025b~srvts=1697448623049~83637",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 7.5,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "7.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-17 00:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=506658&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "573379",
              "name": "Burger King",
              "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              "locality": "Iscon Jan Mahal ",
              "areaName": "Sayajigunj",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4,
              "feeDetails": {
                "restaurantId": "573379",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3800
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3800
              },
              "parentId": "166",
              "avgRatingString": "4.0",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-17 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=573379&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "68033",
              "name": "McDonald's",
              "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
              "locality": "Eva Mall",
              "areaName": "Manjalpur",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "68033",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3800
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3800
              },
              "parentId": "630",
              "avgRatingString": "4.4",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-17 00:45:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1000",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=68033&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "94886",
              "name": "KFC",
              "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
              "locality": "Eva Mall",
              "areaName": "Manjalpur",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
              ],
              "avgRating": 3.9,
              "feeDetails": {
                "restaurantId": "94886",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3800
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3800
              },
              "parentId": "547",
              "avgRatingString": "3.9",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-17 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=94886&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "73701",
              "name": "Cheese & Chips",
              "cloudinaryImageId": "lp76mr12wu0tbyzplqmn",
              "locality": "M.S. University",
              "areaName": "Sayajigunj",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Fast Food",
                "Snacks"
              ],
              "avgRating": 3.7,
              "feeDetails": {
                "restaurantId": "73701",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3800
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3800
              },
              "parentId": "59123",
              "avgRatingString": "3.7",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-10-16 22:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
              },
              "loyaltyDiscoverPresentationInfo": {
                "badgeType": "BADGE_TYPE_OFFER_PACK",
                "offerSubText": "with offer pack",
                "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=73701&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
  },
  "tid": "a84ec1f4-29f7-4c26-b137-1d858e83aa54",
  "sid": "9x2c2515-5f1e-45b3-abd4-46a660bcaf83",
  "deviceId": "3c792dd0-8c2b-a63d-9745-01966e622b02",
  "csrfToken": "jLSuLfFWU4wA-pXgI2Faf2JlcjDoSWNCnVJ86oTU"
}]