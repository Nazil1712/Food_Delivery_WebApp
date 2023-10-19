const ResInfoMain = () => {
  return (
    <>
      <div className="all-res-menu-shimm">
        <div className="resinfo-shimm">
          <div className="non-veg-box-shimm"></div>
          <p className="resmenu-name-shimm"></p>
          <p className="resmenu-price-shimm"></p>
          <p className="resmenu-desc-shimm"></p>
        </div>
        <div className="resmenu-img-shimm"></div>
      </div>
      <div className="resmenu-hrline-shimm"></div>
    </>
  );
};

const ResMenuShimmer = () => {
  return (
    <>
      <div className="res-menu-container">
        <div className="res-menu-head1-shimm">
          <p className="icon-shimm"></p>
          <p className="icon-shimm"></p>
        </div>
        <div className="res-menu-head2-shimm">
          <div className="resmenu-name-shimm"></div>
          <div className="resmenu-cuisines-shimm"></div>
          <div className="resmenu-location-shimm"></div>
          <div className="res-menu-ratings-shimm"></div>
          <div className="resmenu-head2-hrline-shimm"></div>
        </div>
        <div className="res-menu-head3">
          <div className="price-shimm"></div>
          <div className="flex">
            <div className="offer-box-shimm"></div>
            <div className="offer-box-shimm"></div>
            <div className="offer-box-shimm"></div>
            <div className="offer-box-shimm"></div>
          </div>
        </div>
        <div className="resmenu-main">
          <ResInfoMain />
          <ResInfoMain />
          <ResInfoMain />
          <ResInfoMain />
          <ResInfoMain />
          <ResInfoMain />
        </div>
      </div>
    </>
  );
};

export default ResMenuShimmer;
