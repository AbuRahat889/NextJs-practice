import React from "react";

const FeaturePage = ({ params }) => {
  console.log(params);

  if(params.features.length == 3)
    return <div>{params.features[2]}</div>
  if(params.features.length == 2)
    return <div>{params.features[1]}</div>
  return (
    <div>
      <h1>this is feature page</h1>
      <h1>this is feature page</h1>
      <h1>this is feature page</h1>
      <h1>this is feature page</h1>
      <h1>this is feature page</h1>
    </div>
  );
};

export default FeaturePage;
