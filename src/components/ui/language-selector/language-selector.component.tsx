import React from 'react';
import { useRouter } from 'next/router';
import { Button, FormControl, Menu, MenuItem, Typography } from '@mui/material';
import { LanguageIcon } from './language-selector.styles';

const languages = [
  { code: 'en', text: 'English' },
  { code: 'pt', text: 'Português' }
];

export const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const router = useRouter();
  const { locale } = router;

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: { currentTarget: { lang: string } }) => {
    setAnchorEl(null);
    router.push(router.pathname, router.asPath, {
      locale: event.currentTarget.lang
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FormControl sx={{ ml: 2, mr: { xs: 2, md: 0 } }}>
      <Button
        aria-haspopup="true"
        endIcon={<i className="fa fa-angle-down" />}
        startIcon={
          <LanguageIcon
            src="/images/languages/languages.png"
            alt="language"
            locale={locale || 'en'}
          />
        }
        variant="outlined"
        onClick={handleButtonClick}
      >
        {locale === 'en' ? 'EN' : 'PT'}
      </Button>

      <Menu
        keepMounted
        PaperProps={{ style: { width: '144px' } }}
        anchorEl={anchorEl}
        id="language-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map(language => (
          <MenuItem
            key={language.code}
            lang={language.code}
            selected={locale === language.code}
            onClick={handleMenuItemClick}
          >
            <LanguageIcon
              src="/images/languages/languages.png"
              alt="language"
              locale={language.code}
              style={{ marginRight: '8px' }}
            />
            {language.text}
          </MenuItem>
        ))}
      </Menu>
    </FormControl>
  );
};
