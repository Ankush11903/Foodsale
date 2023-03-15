import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";

const Logo = () => {
  return <img className="w-[5rem] rounded-full " src={logo} alt="Food Image" />;
};
const Header = () => {
  return (
    <div className="flex  bg-gradient-to-r from-orange-500 to-amber-400 px-2 w-auto  justify-between  ">
      <Logo />
      <div className="w-auto py-6">
        <ul className="flex w-auto space-x-24 text-2xl font-medium  ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

const restraurantList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "678071",
        name: "Graduate Cake Wala",
        uuid: "0a727cbc-e6d3-4eb0-aa3e-57df84658a81",
        city: "4",
        area: " Uttam Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "28b95a24183105eafe5230e7896d32d5",
        cuisines: ["Bakery"],
        tags: [],
        costForTwo: 18000,
        costForTwoString: "₹180 FOR TWO",
        deliveryTime: 46,
        minDeliveryTime: 46,
        maxDeliveryTime: 46,
        slaString: "46 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "graduate-cake-wala-rani-bagh-rani-bagh",
          city: "delhi",
        },
        cityState: "4",
        address:
          "H No-40, Bindapur Matiyala Road, Uttam Nagar, MIRZA PUR, DWARKA, South West , Delhi - 110059",
        locality: "Uttam Nagar",
        parentId: 405331,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "678071",
          deliveryTime: 46,
          minDeliveryTime: 46,
          maxDeliveryTime: 46,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: true,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "124406",
        name: "Alnaaz Muradabadi Chicken Biryani",
        uuid: "cdcd2698-def8-45cc-830e-39bb3d428e06",
        city: "4",
        area: "Dwarka",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "zlwmks22vbmntnpcch5t",
        cuisines: ["Biryani"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        slaString: "32 MINS",
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: "alnaaz-muradabadi-chicken-biryani-uttam-nagar",
          city: "delhi",
        },
        cityState: "4",
        address:
          "SHOP NO-3 SEWAK PARK DWARKA MOR METRO STATION GATE NO-2 UTTAM NAGAR",
        locality: "Sewak Park",
        parentId: 30501,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "10% off",
          shortDescriptionList: [
            {
              meta: "10% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off up to ₹40 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "10% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off up to ₹40 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "124406",
          deliveryTime: 32,
          minDeliveryTime: 32,
          maxDeliveryTime: 32,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "417201",
        name: "Rominus Pizza & Burger",
        uuid: "1e455d4d-3da8-4fb8-b78c-6b84fb9e14bf",
        city: "4",
        area: "Uttam Nagar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
        cuisines: [
          "Pizzas",
          "Italian",
          "American",
          "Snacks",
          "Desserts",
          "Beverages",
          "Continental",
        ],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 1.600000023841858,
        slugs: {
          restaurant: "rominus-pizza-and-burger-laxmi-nagar-laxmi-nagar-2",
          city: "delhi",
        },
        cityState: "4",
        address:
          "C-8 Rama Park, Metro Pillar No 769, Near Dwarka Metro Station",
        locality: "Laxmi Nagar",
        parentId: 8387,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FLAT150 off",
          shortDescriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹150 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "417201",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 1.600000023841858,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "659414",
        name: "La Pino'z Pizza",
        uuid: "64563191-9c6b-40ba-bb87-a4d7d457031f",
        city: "4",
        area: "Uttam Nagar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "c99aa4e68f6f6235e8aeb420932c13d7",
        cuisines: ["Pizzas", "Italian", "Pastas", "Mexican", "Desserts"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 1.600000023841858,
        slugs: {
          restaurant: "la-pinoz-pizza-panchkula-janakpuri",
          city: "delhi",
        },
        cityState: "4",
        address:
          "B-8 ground floor Rama park uttam nagar najafgarh road new delhi -110059",
        locality: "DwarkaMor",
        parentId: 4961,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "659414",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 1.600000023841858,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.5",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "82192",
        name: "Behrouz Biryani - Royal & Safe",
        uuid: "c4361d35-21e9-42be-9b76-612b1bd360bf",
        city: "4",
        area: "Uttam Nagar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "ii6ofthfzza72k4oyypu",
        cuisines: [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "North Indian",
          "Persian",
          "Desserts",
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 1.100000023841858,
        slugs: {
          restaurant: "behrouz-biryani-uttam-nagar-uttam-nagar",
          city: "delhi",
        },
        cityState: "4",
        address:
          "B-1 Rama park main road, uttam Nagar, near dwraka mor metro station, Piller number-762 & Transformer, Delhi-110059",
        locality: "Rama Park Road",
        parentId: 1803,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "82192",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 1.100000023841858,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "156151",
        name: "The Good Bowl",
        uuid: "1aff1781-4d48-4a11-8039-e8f3d89541b0",
        city: "4",
        area: "Uttam Nagar",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "jfmzkvwxgy640synteqk",
        cuisines: [
          "North Indian",
          "Punjabi",
          "Biryani",
          "Chinese",
          "Beverages",
          "Desserts",
          "Jain",
          "Indian",
          "Hyderabadi",
          "Mughlai",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 1.100000023841858,
        slugs: {
          restaurant: "the-good-bowl-dwarka-mor-fc-uttam-nagar",
          city: "delhi",
        },
        cityState: "4",
        address:
          "B-1 Rama park main road uttam Nagar near dwraka mor metro station Piller number-762 and Transformer pin 110059",
        locality: "Rama Park",
        parentId: 7918,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "40% off",
          shortDescriptionList: [
            {
              meta: "40% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "40% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹80 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "156151",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 1.100000023841858,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];


const RestraurantCard = ({
  name,
  cuisines,
  aggregatedDiscountInfo,
  cloudinaryImageId,
}) => {
  return (
    <div className="w-[254px]  relative  p-3 m-3 border border-black flex-wrap break-words">
      {console.log(name)}
      <img
        className="w-4/5"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Avatar"
      />
      <h2>{name}</h2>
      <h5 className="font-thin text-xs">{cuisines.join(",")}</h5>
      <h4>{aggregatedDiscountInfo.descriptionList[0].discountType}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="flex flex-wrap">
      {restraurantList.map((restraurantList) => {
        return <RestraurantCard {...restraurantList.data.data} />;
      })}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
