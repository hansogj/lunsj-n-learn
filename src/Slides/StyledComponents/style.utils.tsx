import { css } from 'styled-components';
import { base } from '../constants';
export const base_X = (factor: number) => css`calc(${factor}*${base})`;
export const size = (factor: number) => css`
  width: ${base_X(factor)};
  height: ${base_X(factor)};
`;
export const half = base_X(0.5);

export const center = () => css`
  margin-left: auto;
  margin-right: auto;
  display: block;
`;
