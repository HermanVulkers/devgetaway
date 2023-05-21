import { FileInput, Grid, Image } from '@mantine/core';
import { Upload } from 'tabler-icons-react';
import { Check } from 'tabler-icons-react';

import * as Styled from './photos.style';

export const Photos = ({
  form,
  s3PhotoUrls,
  photoBlobUrls,
  handleImageChange,
}) => {
  return (
    <>
      <FileInput
        icon={<Upload size={20} />}
        description="Choose either a .png or .jpeg file."
        placeholder="Upload photos"
        multiple
        accept="image/png,image/jpeg"
        {...form.getInputProps('photos')}
        onChange={(files) => {
          handleImageChange(files);
        }}
      />
      <Grid mt="md" grow>
        {photoBlobUrls &&
          photoBlobUrls.map((blobUrl: string, index: number) => (
            <Grid.Col key={index} span={4}>
              <Styled.NewPhoto>
                <Check />
                <Image
                  src={blobUrl}
                  alt={`Getaway photo ${index}`}
                  fit="cover"
                />
              </Styled.NewPhoto>
            </Grid.Col>
          ))}
      </Grid>
      <Grid mt="md" grow>
        {s3PhotoUrls &&
          s3PhotoUrls.map(
            (s3PhotoUrl: { id: string; url: string }, index: number) => (
              <Grid.Col key={index} span={4}>
                <Image
                  src={s3PhotoUrl.url}
                  alt={`Getaway photo ${index}`}
                  fit="cover"
                />
              </Grid.Col>
            )
          )}
      </Grid>
    </>
  );
};
