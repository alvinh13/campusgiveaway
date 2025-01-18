import React from 'react';
import {
  BooksImage,
  ClosetImage,
  FurnitureImage,
  GadgetsImage,
} from '@/constants/importConstants';
import ThumbnailGroup from '../molecules/thumbnailGroup';

const Categories = [
  { img: FurnitureImage, title: 'furniture', id: 1 },
  { img: BooksImage, title: 'Books', id: 2 },
  { img: GadgetsImage, title: 'electronics', id: 3 },
  { img: ClosetImage, title: 'free tuition', id: 4 },
  { img: ClosetImage, title: 'closet', id: 5 },
];

const CategoryThumbnail = () => {
  return (
    <div>
      <ThumbnailGroup options={Categories} />
    </div>
  );
};

export default CategoryThumbnail;
