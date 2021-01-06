import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Links.scss';
import { NavLink } from 'react-router-dom';
import OakButton from '../../oakui/OakButton';

interface Props {
  space: string;
}

const Links = (props: Props) => {
  const profile = useSelector(state => state.profile);

  return (
    <div className={`links ${profile.theme}`}>
      <NavLink
        to={`/${props.space}/home`}
        className="navitem"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to={`/${props.space}/project`}
        className="navitem"
        activeClassName="active"
      >
        Projects
      </NavLink>
      <NavLink
        to={`/${props.space}/endpoint`}
        className="navitem"
        activeClassName="active"
      >
        Endpoints
      </NavLink>
    </div>
  );
};

export default Links;
