import { useEffect, useState } from "react";

const IconsFA = ({ title, size, new_className }) => {
  const [sizeIcons, setSizeIcons] = useState("fs-xxl");

  useEffect(() => {
    if (size === "normal") {
      setSizeIcons("fs-xl");
    } else if (size === "small") {
      setSizeIcons("fs-sm");
    } else if (size === "large") {
      setSizeIcons("fs-xxl");
    }
  }, [size]);

  return (
    <i className={`mat-icon ${sizeIcons} material-symbols-outlined ${new_className}`}>
      {title}
    </i>
  );
};

export { IconsFA };
