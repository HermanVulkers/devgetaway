import {
  Button,
  FileInput,
  Grid,
  Group,
  Image,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Upload } from 'tabler-icons-react';

import * as Styled from './profile-screen.style';

export const AboutMeForm = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const form = useForm({});

  const handleImageChange = (files) => {
    const fileArray = Array.from(files).slice(0, 10);
    const fileURLs = fileArray.map((file) => URL.createObjectURL(file));
    setImagePreviews(fileURLs);
  };

  return (
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Styled.FormSection>
        <h4>About you</h4>
        <TextInput
          label="Name"
          placeholder="Your name"
          {...form.getInputProps('name')}
        />
        <Textarea
          label="Bio"
          placeholder="Share a little bit about yourself"
          autosize
          minRows={2}
          {...form.getInputProps('interests')}
        />
        <h4>Professional Background</h4>
        <TextInput
          label="Job Title"
          placeholder="Your current job title"
          {...form.getInputProps('jobTitle')}
        />
        <TextInput
          label="Specialties"
          placeholder="Technologies you are specialized in"
          {...form.getInputProps('company')}
        />
      </Styled.FormSection>

      <Styled.FormSection>
        <h4>Interests</h4>
        <Textarea
          placeholder="Share your interests and hobbies"
          autosize
          minRows={2}
          {...form.getInputProps('interests')}
        />
      </Styled.FormSection>

      <Styled.FormSection>
        <h4>Photos of you</h4>
        <FileInput
          icon={<Upload size={20} />}
          description="Choose either a .png or .jpeg file."
          // label="Photos"
          placeholder="Upload photos"
          multiple
          accept="image/png,image/jpeg"
          {...form.getInputProps('photos')}
          onChange={(files) => {
            form.getInputProps('photos').onChange(files);
            handleImageChange(files);
          }}
        />
        <Grid mt="md" grow>
          {imagePreviews.map((src, index) => (
            <Grid.Col key={index} span={4}>
              <Image src={src} alt={`Preview ${index}`} fit="cover" />
            </Grid.Col>
          ))}
        </Grid>
      </Styled.FormSection>

      <Group position="right" mt="md">
        <Button type="submit">Save</Button>
      </Group>
    </form>
  );
};
