import { FileInput, Grid, Image } from '@mantine/core';
import { Upload } from 'tabler-icons-react';

export const Photos = ({ form, imagePreviews, handleImageChange }) => {
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
        {imagePreviews &&
          imagePreviews.map((src: string, index: number) => (
            <Grid.Col key={index} span={4}>
              <Image src={src} alt={`Getaway photo ${index}`} fit="cover" />
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
};
