import MuiAvatar from '@mui/material/Avatar';
import { AvatarProps } from '@mui/material/Avatar';
import { styled, Theme,useTheme } from '@mui/material/styles';

type AvatarType = {
  color?: string;
  type?: string;
  size?: string;
};

type CustomAvatarProps = AvatarType & AvatarProps;


const getColorStyle = ({ type }: { type?: string }) => {
  
  switch (type) {
    case 'filled':
      return {
        color: 'pink',
        background: 'transparent'
      };

    case 'outlined':
      return {
        color: 'pink',
        border: '1px solid',
        borderColor: 'pink',
        background: 'transparent'
      };

    case 'combined':
      return {
        color: 'pink',
        border: '1px solid',
        borderColor: 'pink',
        background: 'transparent',
      };

    default:
      return {
        color: 'pink',
        background: 'transparent',
      };
  }
}

const getSizeStyle = (size?: string) => {
  switch (size) {
    case 'badge':
      return {
        border: '2px solid',
        fontSize: '0.675rem',
        width: 20,
        height: 20
      };

    case 'xs':
      return {
        fontSize: '0.75rem',
        width: 24,
        height: 24
      };

    case 'sm':
      return {
        fontSize: '0.875rem',
        width: 32,
        height: 32
      };

    case 'lg':
      return {
        fontSize: '1.2rem',
        width: 52,
        height: 52
      };

    case 'xl':
      return {
        fontSize: '1.5rem',
        width: 64,
        height: 64
      };

    default:
      return {
        fontSize: '1rem',
        width: 40,
        height: 40
      };
  }
}

const AvatarStyle = styled(MuiAvatar, { shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size' })(
  ({ theme, size, type }: CustomAvatarProps & { theme: Theme }) => ({
    ...getSizeStyle(size || 'md'),
    ...getColorStyle({ type }),
    ...(size === 'badge' && {
      borderColor: theme.palette.background.default,
    })
  })
);

export const AvatarCustom = ({ children, color = 'primary', ...others }: CustomAvatarProps) => {
  const theme = useTheme();

  return (
    <AvatarStyle theme={theme} color={color} {...others}>
      {children}
    </AvatarStyle>
  );
}