import React, {Suspense} from 'react';
import Layout from 'layout';
import Spinner from 'components/spinner';

const RenderPage = ({Page}) => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default RenderPage;
