import {
  faArrowDown,
  faChevronDown,
  faChevronUp,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResAccordionBody from "./ResAccordionBody";
import { useState } from "react";

const RestaurantAccordion = ({
  resInfo,
  showItems,
  setShowItems,
  showIndex,
  setShowIndex,
  index
}) => {
  /* const [showItems, setShowItems] = useState(true);

  // const category =
  //   resInfo.resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
  //     (v, i, arr) =>
  //       v?.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );

  const handleClick = () => {
    setShowItems(!showItems);
  };

  console.log()
  const {resInfo,showItems} = props
  console.log(showItems) */


  const handleClick = () => {
    showItems? setShowIndex(null) : setShowIndex(index)
  };

  return (
    <>
      <div key={resInfo?.card.card.title}>
        <div>
          <div
            className="w-[50vw] flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-extrabold text-lg text-text-color tracking-wider">
              {resInfo?.card.card.title} ({resInfo?.card.card.itemCards.length})
            </span>
            <span className="mr-4">
              {showItems ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
          </div>
          {showItems && (
            <ResAccordionBody resList={resInfo?.card.card.itemCards} />
          )}
          <div className="bg-hr-line h-5"></div>
        </div>
      </div>
    </>
  );
};

export default RestaurantAccordion;
