import React from 'react';
import Errorwrapper from './Errorwrapper';

function Page503(props) {
  const { trans } = props;

  return (
    <Errorwrapper statusCode="503" errorMssg={trans("no_service")} />
  );
}

export default Page503;
