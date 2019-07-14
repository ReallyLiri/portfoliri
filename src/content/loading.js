import React from "react";
import styled from 'styled-components';

import { ColorScheme } from "../theme/colorScheme";

const Loading = styled.div`
  text-align: center;
  vertical-align: middle;
  padding: 150px;
  color: ${ColorScheme.darker};
  font-weight: bold;
`;

export function loadingPlaceholder() {
  return (
    <Loading>Loading...</Loading>
  );
}
