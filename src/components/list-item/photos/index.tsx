import { ChangeEvent } from "react";

import AddImage from "./../../../assets/add_media.svg";

interface Props {
  photoPath: string;
  setPhotoPath: (value: string) => void;
}

const Photos = (props: Props) => {
  const handleFileUpload = (file: File) => {
    console.log(file);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col ">
      PHOTOS
      <input
        type="file"
        id="upload"
        accept="*.jpg|*.png|*.jpeg"
        className="hidden"
        onChange={onFileChange}
      />
      <label htmlFor="upload" className="custom-file-upload mt-5">
        <img src={AddImage} className="w-10" />
        <span className="font-thin">Add a photo</span>
      </label>
    </div>
  );
};
export default Photos;
