const Circle = () => {
  return <div className="shimm-circle"></div>;
};

const ImgLayoutShimmer = () => {
  return (
    <div className="imagelayout-shimmer-container">
      <div className="arrow-container">
        <div className="shimm-para"></div>
        <div className="shimm-arrow"></div>
        <div className="shimm-arrow"></div>
      </div>
      <div className="flex">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
      <div className="hr-line"></div>
    </div>
  );
};

export default ImgLayoutShimmer;
