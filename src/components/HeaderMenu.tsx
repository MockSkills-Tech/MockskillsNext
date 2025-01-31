import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeaderMenu from '@/data/constant';


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function HeaderMenus() {
  const [anchorEls, setAnchorEls] = React.useState<Record<string, HTMLElement | null>>({});

  const handleOpen = (event: React.MouseEvent<HTMLElement>, title: string) => {
    setAnchorEls((prev) => ({ ...prev, [title]: event.currentTarget }));
  };

  const handleClose = (title: string) => {
    setAnchorEls((prev) => ({ ...prev, [title]: null }));
  };

  return (
    <div className="dark:text-white text-black flex justify-between mx-[15%]"> {/* 15% margin on both sides */}
      {HeaderMenu.map((menu) => (
        <React.Fragment key={menu.title}>
          <Button
            id={`${menu.title}-button`}
            aria-controls={anchorEls[menu.title] ? `${menu.title}-menu` : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(anchorEls[menu.title]) ? 'true' : undefined}
            variant="contained"
            disableElevation
            onMouseOver={(event) => handleOpen(event, menu.title)}
            endIcon={menu.options.length > 0 && <KeyboardArrowDownIcon />}
            sx={{ marginRight: 2, backgroundColor: 'transparent' }}
            className="dark:text-white text-black border-black"
          >
            {menu.title}
          </Button>
          {menu.options.length > 0 && (
            <StyledMenu
              id={`${menu.title}-menu`}
              MenuListProps={{
                'aria-labelledby': `${menu.title}-button`,
                onMouseLeave: () => handleClose(menu.title),
              }}
              anchorEl={anchorEls[menu.title]}
              open={Boolean(anchorEls[menu.title])}
              onClose={() => handleClose(menu.title)}
              className="dark:text-white text-black"
            >
              {menu.options.map((option) => (
                <MenuItem key={option} onClick={() => handleClose(menu.title)} disableRipple>
                  <EditIcon />
                  {option}
                </MenuItem>
              ))}
            </StyledMenu>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
