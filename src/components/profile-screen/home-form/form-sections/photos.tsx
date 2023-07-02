import {
  ActionIcon,
  Badge,
  FileInput,
  Grid,
  Image,
} from '@mantine/core';
import { Upload } from 'tabler-icons-react';
import { TrashX } from 'tabler-icons-react';

import * as Styled from './photos.style';

interface PhotosProps {
  form: any;
  s3PhotoUrls: { url: string; id: string }[];
  photoBlobUrls: string[];
  setPhotoBlobUrls: (photoBlobUrls: string[]) => void;
  handleImageSelect: (files: FileList) => void;
}

interface PhotoItemProps {
  url: string;
  index: number;
  isStaged?: boolean;
  onDelete?: () => void;
}

const PhotoItem = ({ url, index, isStaged, onDelete }: PhotoItemProps) => (
  <Grid.Col key={index} span={4}>
    <Styled.StagedPhoto>
      {isStaged && (
        <Styled.StagedPhotoHeader>
          <Badge
            variant="gradient"
            gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            size="xs"
          >
            New
          </Badge>
          <ActionIcon>
            <TrashX strokeWidth={2} color={'#bf6b40'} onClick={onDelete} />
          </ActionIcon>
        </Styled.StagedPhotoHeader>
      )}

      <Image src={url} alt={`Getaway photo ${index}`} fit="cover" />
    </Styled.StagedPhoto>
  </Grid.Col>
);

export const Photos = ({
  form,
  s3PhotoUrls,
  photoBlobUrls,
  setPhotoBlobUrls,
  handleImageSelect,
}: PhotosProps) => {
  const handleDeleteStagedPhoto = (index: number) => {
    const stagedPhotoBlobUrls = [...photoBlobUrls];
    stagedPhotoBlobUrls.splice(index, 1);
    setPhotoBlobUrls(stagedPhotoBlobUrls);

    form.setValues({
      photos: form.values.photos.filter((_: any, i: number) => i !== index),
    });
  };

  const onInputChange = (files: FileList) => {
    handleImageSelect(files);
  };

  return (
    <>
      <FileInput
        icon={<Upload size={20} />}
        description="Choose either a .png or .jpeg file. Maximum total file size is 10MB. Maximum number of photos is 10."
        placeholder="Click to upload photos"
        multiple
        accept="image/png,image/jpeg"
        // {...form.getInputProps('photos')}
        onChange={onInputChange}
      />
      <Grid mt="md" grow>
        {photoBlobUrls.map((blobUrl, index) => (
          <PhotoItem
            key={blobUrl}
            url={blobUrl}
            index={index}
            isStaged
            onDelete={() => handleDeleteStagedPhoto(index)}
          />
        ))}
      </Grid>
      <Grid mt="md" grow>
        {s3PhotoUrls.map(({ url }, index) => (
          <PhotoItem key={url} url={url} index={index} />
        ))}
      </Grid>
    </>
  );
};
