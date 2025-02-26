import Box, { BoxProps } from '@mui/material/Box';
import { forwardRef } from 'react';

export interface SvgColorProps extends BoxProps {
  src: string;
}

const SvgColorComponent = forwardRef<HTMLSpanElement, SvgColorProps>(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

SvgColorComponent.displayName = 'SvgColor';
export const SvgColor = SvgColorComponent;
