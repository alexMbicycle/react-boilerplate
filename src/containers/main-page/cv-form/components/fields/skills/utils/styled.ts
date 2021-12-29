import {
  Box, Button, Divider, Grid, styled, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const SkillContainerStyled = styled(Box)(({ theme }) => ({
  height: 0,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(4),
  position: 'relative',
}));

export const ToolsContainerStyled = styled(Box)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});

export const InputContainerStyled = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(4, 4, 0, 4),
}));

export const GrayButtonStyled = styled(Button)(({ theme }) => ({
  width: 220,
  height: 48,
  padding: theme.spacing(0, 4),
  backgroundColor: theme.palette.grey[300],
}));

export const AddCircleIconStyled = styled(AddCircleIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.border,
  margin: theme.spacing(3, 0, 6, 0),
}));

export const ToolContainerStyled = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.border}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
}));

export const MenuItemText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

export const SaveButtonStyled = styled(Button)({
  height: 48,
});

export const SaveButtonWrapperStyled = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  display: 'inline-flex',
  justifyContent: 'flex-end',
}));
