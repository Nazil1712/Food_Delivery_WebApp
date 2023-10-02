import { imgLayout } from "../utils/mockData";
import { IMG_LAYOUT_URL } from "../utils/constants";

const ImgLayout = () => {
  const row = imgLayout.map((v) => (
    <img src={IMG_LAYOUT_URL + v.imageId} key={v.id} />
  ));

  return (
    <div className="imagelayout-container">
      <div className="imgl-scrollbox">{row}</div>
      <hr/>
    </div>
  );
};

export default ImgLayout;
