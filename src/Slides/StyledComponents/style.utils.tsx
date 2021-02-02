import { css, FlattenSimpleInterpolation } from 'styled-components';
import { base } from '../constants';

export const base_X = (factor: number): FlattenSimpleInterpolation => css`calc(${factor}*${base})`;
export const half = base_X(0.5);
export const double = base_X(2);

export const size = (factor: number): FlattenSimpleInterpolation => css`
  width: ${base_X(factor)};
  height: ${base_X(factor)};
`;

export const center = (): FlattenSimpleInterpolation => css`
  margin-left: auto;
  margin-right: auto;
  display: block;
`;
