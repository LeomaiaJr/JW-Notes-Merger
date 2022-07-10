import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DragNDrop from '../../components/DragNDrop';
import { CustomDivider, Wrapper } from './styles';

const UploadPage = () => {
  const { t } = useTranslation('translation');

  const [main, setMain] = useState<File | undefined>();
  const [toMerge, setToMerge] = useState<File | undefined>();

  return (
    <Stack alignItems="center" mt="5%" height="100%">
      <Wrapper>
        <Typography variant="h5">{t('about')}</Typography>
        <CustomDivider />
        <Stack justifyContent="space-between" height="100%">
          <Stack gap={4} mt={2} justifyContent="flex-start" height="88%">
            <DragNDrop file={main} setFile={setMain} />
            <DragNDrop file={toMerge} setFile={setToMerge} />
          </Stack>

          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
              }}
            >
              <Typography variant="body1">{t('combine')}</Typography>
            </Button>
          </Box>
        </Stack>
      </Wrapper>
    </Stack>
  );
};

export default UploadPage;
