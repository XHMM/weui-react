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
  },
  imagesWrapper: {}
};

interface WeUIMultiImageUploaderProps {
  onChange: (file: File[]) => void;
  title?: string;
  description?: string;
}
export const WeUIMultiImageUploader: FC<WeUIMultiImageUploaderProps> = ({
  onChange,
  description,
  title
}) => {
  const [fileDataURLs, setFileDataURLs] = useState<string[]>([]);
  // mdn与文件处理有关的一篇十分全面的文章：https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  // 个人补充：首次点击file input不选内容不会触发onchange，选了内容后再点击但不选文件直接关闭，会触发onchange
  const onFilesChange: ChangeEventHandler<HTMLInputElement> = (ev): void => {
    if (ev.target.files) {
      const files = Array.from(ev.target.files);
      if (files.length === 0) {
        return;
      }
      const urls: string[] = [];
      files.map(f => {
        const url = URL.createObjectURL(f);
        urls.push(url);
      });

      onChange(files);
      setFileDataURLs(urls);
      setTimeout(() => {
        urls.map(f => {
          URL.revokeObjectURL(f);
        });
      }, 1000);
    } else onChange([]);
  };

  return (
    <div  style={styles.wrapper}>
      <div>{title}</div>
      <div style={styles.imagesWrapper}>
        {fileDataURLs.map(u => {
          return (
            <div
              key={u}
              className={"weui-uploader__file"}
              style={{ backgroundImage: `url(${u})` }}
            />
          );
        })}
        <div className="weui-uploader__input-box">
          <input
            className="weui-uploader__input"
            type="file"
            multiple
            accept="image/*"
            onChange={onFilesChange}
          />
        </div>
      </div>

      <div style={styles.description}>{description}</div>
    </div>
  );
};
