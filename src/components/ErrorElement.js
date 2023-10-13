import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const arr = useRouteError();
  console.log(arr);

  return (
    <>
      <h1>Oops!!!</h1>
      <h3>Something went Wrong</h3>
      <h4>{arr.status} : {arr.statusText}</h4>
    </>
  );
};

export default ErrorElement;
