import ResMenuItems from "./ResMenuItems";

const ResAccordionBody = ({ resList }) => {
  // return (
  //   <>
  //     {resList.map((v, i, arr) => (
  //       <div key={v.card.info.id} className="border-b-2">
  //         <div className="flex justify-between pb-16">
  //           <div className="w-8/12">
  //             {v.card.info.itemAttribute.vegClassifier == "NONVEG" ? (
  //               <NonVeg />
  //             ) : (
  //               <Veg />
  //             )}
  //             <h3 className="font-bold pt-2">{v.card.info.name}</h3>
  //             <p className="text-sm pt-2">
  //               &#8377;{" "}
  //               {v.card.info.price / 100 || v.card.info.defaultPrice / 100}
  //             </p>
  //             <p className="text-gray-400 font-thin pt-2 text-base text-justify">
  //               {v.card.info.description}
  //             </p>
  //             {/* <div className="resmenu-hrline"></div> */}
  //           </div>
  //           <div className="flex flex-col items-center relative w-3/12">
  //             <img
  //               src={
  //                 "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
  //                 v.card.info.imageId
  //               }
  //               className="rounded-lg"
  //             />
  //             <div className="absolute bottom-0">
  //               <button
  //                 className="bg-white w-40 h-10 rounded-lg text-green-600 shadow-md shadow-white hover:scale-95"
  //                 onClick={()=>handleAddItem(v.card.info)}
  //               >
  //                 ADD <sup>+</sup>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </>
  // );

  return (
    <>
      {resList.map((v, i, arr) => (
        <ResMenuItems
          key={v.card.info.id}
          vegClassifier={v.card.info.itemAttribute.vegClassifier}
          itemName={v.card.info.name}
          price={v.card.info.price}
          defaultPrice={v.card.info.defaultPrice}
          description={v.card.info.description}
          imageId={v.card.info.imageId}
          allInfo={v.card.info}
        />
      ))}
    </>
  );
};

export default ResAccordionBody;
