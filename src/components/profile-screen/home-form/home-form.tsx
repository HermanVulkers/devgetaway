import { Button, Group, Loader, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import * as Styled from '../profile-screen.style';
import { submitHomeForm } from '../utils/submit-home-form';
import { BasicInformation } from './form-sections/basic-information';
import { Amenities } from './form-sections/amenities';
import { DeveloperAmenities } from './form-sections/developer-amenities';
import { Photos } from './form-sections/photos';
import { useSession } from 'next-auth/react';
import { validatePhotoUpload } from './helpers/validate-photo-upload';

export const HomeForm = () => {
  const {
    data: { user },
  } = useSession();

  const [s3PhotoUrls, setS3PhotoUrls] = useState<{ id: string; url: string }[]>(
    []
  );
  const [photoBlobUrls, setPhotoBlobUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRetrieving, setIsRetrieving] = useState(false);

  const homeForm = useForm({
    initialValues: {
      description: '',
      address: '',
      propertyType: '',
      photos: [],
      amenities: {
        airConditioning: false,
        dryer: false,
        essentials: false,
        hairDryer: false,
        iron: false,
        parking: false,
        tv: false,
        washer: false,
        workspace: false,
        gamingConsole: false,
        projector: false,
        homeGym: false,
      },
      developerAmenities: {
        ergonomicChair: false,
        externalMonitors: '',
        internetSpeed: '',
        laptopStand: false,
        standingDesk: false,
      },
    },
  });

  async function fetchHomeData() {
    setIsRetrieving(true);
    try {
      const response = await fetch('/api/get-home');
      const data = await response.json();
      setS3PhotoUrls(data?.s3PhotoUrls || []);
      homeForm.setValues({ ...data });
    } catch (error) {
      console.error('Error fetching home data', error);
    } finally {
      setIsRetrieving(false);
    }
  }

  useEffect(() => {
    fetchHomeData();
  }, []);

  async function handleFormSubmit(values) {
    setIsSubmitting(true);
    try {
      const result = await submitHomeForm(values, user.id);
      if (result.success) {
        setIsSubmitting(false);
      } else {
        // Handle unsuccessful form submission (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  }

  const handleImageSelect = async (files: FileList) => {
    if ((await validatePhotoUpload(files)) === false) {
      return;
    }

    homeForm.getInputProps('photos').onChange(files);

    const fileArray = Array.from(files);
    const blobUrls = fileArray.map((file) => URL.createObjectURL(file));
    setPhotoBlobUrls(blobUrls);
  };

  return (
    <>
      <Styled.Notification>
        <h4>Your getaway details</h4>
        <p>
          As a responsible host, it's essential to provide accurate and detailed
          information about your property. By doing so, you ensure that
          potential guests have a clear understanding of the amenities and
          features of your home!
        </p>
      </Styled.Notification>
      <Styled.FormContainer>
        {isRetrieving && (
          <Styled.Loader>
            <Loader size="sm" />
          </Styled.Loader>
        )}

        <form onSubmit={homeForm.onSubmit(handleFormSubmit)}>
          <Styled.FormSections>
            <Styled.FormSection>
              <h4>Basic Information</h4>
              <BasicInformation form={homeForm} />
            </Styled.FormSection>

            <Styled.FormSection>
              <h4>Developer Amenities</h4>
              <DeveloperAmenities form={homeForm} />
            </Styled.FormSection>

            <Styled.FormSection>
              <h4>Amenities</h4>
              <Amenities form={homeForm} />
            </Styled.FormSection>

            <Styled.FormSection>
              <h4>Photos of your getaway</h4>
              <Photos
                form={homeForm}
                s3PhotoUrls={s3PhotoUrls}
                photoBlobUrls={photoBlobUrls}
                setPhotoBlobUrls={setPhotoBlobUrls}
                handleImageSelect={handleImageSelect}
              />
            </Styled.FormSection>
          </Styled.FormSections>

          <Group position="right" mt="md">
            <Button type="submit" loading={isSubmitting}>
              Save
            </Button>
          </Group>
        </form>
      </Styled.FormContainer>
    </>
  );
};
