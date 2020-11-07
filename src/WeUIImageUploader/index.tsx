import React, { FC, useState, ChangeEventHandler } from "react";
import "./index.css";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } as const,
  description: {
    fontSize: "0.9rem",
    color: "gray"
  }
}

interface WeUIImageUploaderProps {
  onChange: (file: File | null) => void;
  title?: string;
  description?: string;
}
export const WeUIImageUploader: FC<WeUIImageUploaderProps> = ({ onChange, description, title }) => {
  const [fileDataURL, setFileDataURL] = useState<string>();
  // mdn与文件处理有关的一篇十分全面的文章：https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  // 个人补充：首次点击file input不选内容不会触发onchange，选了内容后再点击但不选文件直接关闭，会触发onchange
  const onFileChange: ChangeEventHandler<HTMLInputElement> = (ev): void => {
    if (ev.target.files) {
      const file = ev.target.files[0];
      if (!file) {
        return;
      }
      const url = URL.createObjectURL(file);
      onChange(file);
      setFileDataURL(url);
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);
    } else onChange(null);
  };

  return (
    <div style={styles.wrapper}>
      <div>{title}</div>
      <div
        className={
          fileDataURL ? "weui-uploader__file" : "weui-uploader__input-box"
        }
        style={
          fileDataURL
            ? {
                backgroundImage: `url(${fileDataURL})`,
                backgroundSize: "cover"
              }
            : {}
        }
      >
        <input
          className="weui-uploader__input"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
      </div>
      <div style={styles.description}>{description}</div>
    </div>
  );
};
