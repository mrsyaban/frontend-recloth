import { ChangeEvent, useState } from "react";

import AddImage from "./../../../assets/add_media.svg";

interface Props {
  photoPaths: string[];
  setPhotoPaths: (value: string[]) => void;
}

const Photos = (props: Props) => {
  const { photoPaths, setPhotoPaths } = props;
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null); // State to hold the temporary URL for the uploaded image

  const handleFileUpload = (file: File) => {
    setPreviewPhoto(URL.createObjectURL(file)); // Set the temporary URL for the uploaded image
    setPhotoPaths([...photoPaths, URL.createObjectURL(file)]);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col">
      PHOTOS
      <input
        type="file"
        id="upload"
        accept=".jpg,.png,.jpeg"
        className="hidden"
        onChange={onFileChange}
      />
      {previewPhoto ? ( // Check if there is a previewPhoto, if yes, display the uploaded photo
        <img src={previewPhoto} alt="Uploaded" className="w-[250px] pt-5" />
      ) : (
        <label htmlFor="upload" className="custom-file-upload mt-5">
          <img src={AddImage} alt="Add" className="w-10" />

          <span className="font-thin">Add a photo</span>
        </label>
      )}
    </div>
  );
};

export default Photos;
