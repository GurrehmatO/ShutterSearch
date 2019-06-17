import React from 'react';
import renderer from 'react-test-renderer';
import FullImage from '../FullImage.component';

describe('FullImage component', () => {
  it('should render correctly', () => {
    const props = {
      navigation: {
        getParam: () => (
          {
            id: '1052251895',
            aspect: 1.5,
            assets: {
              preview: {
                height: 300,
                url: 'https://image.shutterstock.com/display_pic_with_logo/154447/1052251895/stock-photo-child-in-pajamas-relaxing-on-a-window-sill-with-pet-lazy-weekend-with-cat-at-home-cozy-scene-1052251895.jpg',
                width: 450,
              },
              small_thumb: {
                height: 67,
                url: 'https://thumb9.shutterstock.com/thumb_small/154447/1052251895/stock-photo-child-in-pajamas-relaxing-on-a-window-sill-with-pet-lazy-weekend-with-cat-at-home-cozy-scene-1052251895.jpg',
                width: 100,
              },
              large_thumb: {
                height: 100,
                url: 'https://thumb9.shutterstock.com/thumb_large/154447/1052251895/stock-photo-child-in-pajamas-relaxing-on-a-window-sill-with-pet-lazy-weekend-with-cat-at-home-cozy-scene-1052251895.jpg',
                width: 150,
              },
              huge_thumb: {
                height: 260,
                url: 'https://image.shutterstock.com/image-photo/child-pajamas-relaxing-on-window-260nw-1052251895.jpg',
                width: 390,
              },
              preview_1000: {
                url: 'https://ak.picdn.net/shutterstock/photos/1052251895/watermark_1000/faec05ee0949077d9f033e3ee91883e6/preview_1000-1052251895.jpg',
                width: 1000,
                height: 667,
              },
              preview_1500: {
                url: 'https://image.shutterstock.com/z/stock-photo-child-in-pajamas-relaxing-on-a-window-sill-with-pet-lazy-weekend-with-cat-at-home-cozy-scene-1052251895.jpg',
                width: 1500,
                height: 1000,
              },
            },
            contributor: {
              id: '154447',
            },
            description: 'Child in pajamas relaxing on a window sill with pet. Lazy weekend with cat at home. Cozy scene, hygge concept.',
            image_type: 'photo',
            has_model_release: false,
            media_type: 'image',
          }),
      },
    };
    const component = renderer.create(<FullImage {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
