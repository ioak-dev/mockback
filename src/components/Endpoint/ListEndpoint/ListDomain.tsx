import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ListDomain.scss';
import OakSubheading from '../../../oakui/OakSubheading';
import OakButton from '../../../oakui/OakButton';
import OakFooter from '../../../oakui/OakFooter';
import EndpointLink from './EndpointLink';

interface Props {
  space: string;
  projectId: string;
  history: any;
}

const ListDomain = (props: Props) => {
  const domains = useSelector(state =>
    state.domain.domains.filter(item => item.projectId === props.projectId)
  );

  useEffect(() => {
    console.log(domains);
  }, [domains]);

  const gotoCreatePage = () =>
    props.history.push(
      `/${props.space}/endpoint/domain/create?projectId=${props.projectId}`
    );

  return (
    <>
      {props.projectId && (
        <>
          <OakFooter>
            <OakButton action={gotoCreatePage} theme="primary" variant="appear">
              Create new domain
            </OakButton>
          </OakFooter>
          <div className="list-domain">
            {domains?.map(item => (
              <EndpointLink
                key={item._id}
                space={props.space}
                endpoint={item}
                history={props.history}
                type="domain"
              />
            ))}
            {!domains ||
              (domains.length === 0 && (
                <div className="typography-4">No endpoints yet</div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default ListDomain;
