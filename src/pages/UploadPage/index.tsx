import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DragNDrop from '../../components/DragNDrop';
import { CustomDivider, Wrapper } from './styles';
import axios from 'axios';
import fileDownload from 'js-file-download';
import SnackbarUtils from '../../utils/SnackbarUtils';
import { CircularProgress } from '@mui/material';

const UploadPage = () => {
  const { t } = useTranslation('translation');

  const [main, setMain] = useState<File | undefined>();
  const [toMerge, setToMerge] = useState<File | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const sendFiles = async () => {
    try {
      setIsLoading(true);
      if (main !== undefined && toMerge !== undefined) {
        const formData = new FormData();
        formData.append('main', main);
        formData.append('toMerge', toMerge);
        const { data } = await axios.post(
          `http://144.22.234.28:1024/merge-db`,
          formData,
          {
            responseType: 'blob',
          }
        );
        fileDownload(data, 'merged.jwlibrary');
      }
    } catch {
      SnackbarUtils.error(t('error.download'));
    } finally {
      setIsLoading(false);
    }
  };

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

          {isLoading ? (
            <Stack mt={2} display="flex" alignItems="center">
              <Typography mb={1} variant="h6">
                {t('loading')}
              </Typography>
              <CircularProgress />
            </Stack>
          ) : (
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button
                disabled={main === undefined || toMerge === undefined}
                variant="contained"
                sx={{
                  textTransform: 'none',
                }}
              >
                <Typography
                  variant="body1"
                  onClick={() => {
                    sendFiles();
                  }}
                >
                  {t('combine')}
                </Typography>
              </Button>
            </Box>
          )}
        </Stack>
      </Wrapper>
    </Stack>
  );
};

export default UploadPage;
