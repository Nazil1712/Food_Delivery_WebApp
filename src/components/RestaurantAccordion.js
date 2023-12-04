import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResAccordionBody from "./ResAccordionBody";
import { useState } from "react";

const RestaurantAccordion = (resInfo) => {
  const [showItems, setShowItems] = useState(false);

  const category =
    resInfo.resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (v, i, arr) =>
        v?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <>
      {category.map((v, i, arr) => {
        return (
          <div key={v.card.card.title}>
            <div>
              <div
                className="w-[50vw] flex justify-between bg-gray-200 cursor-pointer"
                onClick={handleClick}
              >
                <span className="font-extrabold text-lg text-text-color ml-4 tracking-wide">
                  {v.card.card.title} ({v.card.card.itemCards.length})
                </span>
                <span className="mr-4">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
              {/* {showItems && (
                <ResAccordionBody resList={v.card.card.itemCards} />
              )} */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantAccordion;
