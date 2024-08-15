import { Icon } from '@iconify/react';
import Box, { BoxProps } from '@mui/material/Box';
import { forwardRef } from 'react';

import { IconifyProps } from './types';

interface Props extends BoxProps {
  icon: IconifyProps;
}

const IconifyCustom = forwardRef<SVGElement, Props>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box ref={ref} component={Icon} className="component-iconify" icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

IconifyCustom.displayName = 'Iconify';

export const Iconify = IconifyCustom;
