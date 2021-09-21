import React from 'react';
import Errorwrapper from './Errorwrapper';

function Page404(props) {
  const { trans } = props;

  return (
    <Errorwrapper statusCode="404" errorMssg={trans("no_page")} />
  );
}

export default Page404;