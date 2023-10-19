const OffersResMenu = ({ resInfo }) => {
  const offBoxList =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  return (
    <>
      {offBoxList.map((v, i, arr) => (
        <div className="offer-box" key={i}>
          <p className="offerbox-header">{v.info.header}</p>
          <div className="offer-codes">
            <p>{v.info.couponCode}</p> |<p>{v.info.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default OffersResMenu;
