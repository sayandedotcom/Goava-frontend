import React, {Suspense} from 'react';
import Layout from 'layout';
import Spinner from 'components/spinner';

const RenderPage = (props) => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <props.page />
      </Suspense>
    </Layout>
  );
};

export default RenderPage;
