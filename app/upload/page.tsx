"use client";
import React, { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";

// Define the type for the result object based on the library's expected type
interface CloudinaryUploadWidgetInfo {
  public_id: string;
  // Add other properties if needed
}

interface CloudinaryUploadWidgetResults {
  event?: string;
  info?: string | CloudinaryUploadWidgetInfo;
}

const UploadImage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="coffee image" />
      )}
      <CldUploadButton
        className="btn btn-primary"
        uploadPreset="if4mxazb"
        options={{
          sources: ["local"],
          multiple: false,
        }}
        onSuccess={(result: CloudinaryUploadWidgetResults) => {
          // Handle the different types of `info`
          if (typeof result.info === "object" && result.info !== null) {
            setPublicId(result.info.public_id);
          } else if (typeof result.info === "string") {
            // If `info` is a string, assume it's the public_id
            setPublicId(result.info);
          } else {
            console.error("Invalid upload result:", result);
          }
        }}
      />
    </div>
  );
};

export default UploadImage;
