import React from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import { TbLanguage } from 'react-icons/Tb';

export default function LanguageSelector() {
  const router = useRouter();
  const { locale } = router;

  const handleChange = () => {
    router.push(router.pathname, router.asPath, {
      locale: locale === 'en' ? 'pt' : 'en'
    });
  };

  return (
    <Button
      aria-haspopup="true"
      startIcon={
        <TbLanguage title="language" style={{ marginRight: '-12px' }} />
      }
      variant="outlined"
      onClick={handleChange}
      sx={{ ml: 2 }}
    >
      <Typography display={{ md: 'none', xs: 'flex' }} ml={1}>
        {locale === 'en' ? 'EN' : 'PT-BR'}
      </Typography>

      <Typography display={{ md: 'flex', xs: 'none' }} ml={1}>
        {locale === 'en' ? 'English' : 'Portugues-BR'}
      </Typography>
    </Button>
  );
}
