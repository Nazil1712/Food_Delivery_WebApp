const CollectionResCardShimmer = () => {
  return (
    <div className="shimm-card">
      <div className="shimm-logo">
        <img className="coll-shimm-img"></img>
      </div>
      <div>
        <h4 className="coll-shimm-info1"></h4>
        <h4 className="shimm-info2"></h4>
        <h4 className="shimm-info3"></h4>
      </div>
    </div>
  );
};

const CollectionPageShimmer = () => {
  return (
    <div className="collection-container-shimm">
      <div className="collection-header-shimm">
        <h1></h1>
        <p></p>
        <div className="collection-filter-shimm">
          <div className="collection-btn-shimm"></div>
          <div className="collection-btn-shimm"></div>
        </div>
      </div>
      <div className="collection-main-shimm">
        <h2></h2>
        <div className="collection-res-shimm">
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
          <CollectionResCardShimmer/>
        </div>
      </div>
    </div>
  );
};

export default CollectionPageShimmer;
