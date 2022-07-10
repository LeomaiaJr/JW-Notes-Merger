import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import SnackbarUtils from '../../utils/SnackbarUtils';
import {
  CustomTypography,
  DropArea,
  FileDataWrapper,
  IconWrapper,
} from './styles';

interface DragNDropProps {
  setFile: (file: File | undefined) => void;
  file?: File;
}

const DragNDrop = ({ setFile, file }: DragNDropProps) => {
  const { t } = useTranslation('translation');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file.name.endsWith('.jwlibrary')) setFile(file);
    else SnackbarUtils.error(t('error.fileExtension'));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {file === undefined ? (
        <DropArea active={isDragActive ? 'true' : 'false'} {...getRootProps()}>
          <input {...getInputProps()} />
          <UploadFileIcon
            sx={{
              width: '25%',
              height: '25%',
            }}
          />
          <Typography mt={1} variant="h6" fontWeight={700} textAlign="center">
            {t('uploadTitle')}
          </Typography>
          <Typography
            sx={{
              opacity: 0.6,
            }}
            mt={0.5}
          >
            {t('uploadSubtitle')}
          </Typography>
        </DropArea>
      ) : (
        <FileDataWrapper>
          <Box display="flex" alignItems="center" justifyContent="center">
            <IconWrapper>
              <InsertDriveFileIcon />
            </IconWrapper>
            <CustomTypography ml={2} variant="h5">
              {file.name}
            </CustomTypography>
          </Box>
          <IconButton
            onClick={() => {
              setFile(undefined);
            }}
            sx={{
              marginRight: '16px',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
            }}
          >
            <DeleteIcon
              sx={{
                color: '#f44336',
                width: '32px',
                height: '32px',
              }}
            />
          </IconButton>
        </FileDataWrapper>
      )}
    </>
  );
};

export default DragNDrop;
