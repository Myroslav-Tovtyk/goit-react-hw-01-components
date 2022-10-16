import React from 'react';
import PropTypes from 'prop-types';
import { Sectio, StatisticTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Sectio>
      <StatisticTitle>
        {title && <h3>{title}</h3>}
        {children}
      </StatisticTitle>
    </Sectio>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
