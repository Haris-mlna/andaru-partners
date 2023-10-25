import { IconsFA } from "../../Atom/icons/icons";
import styles from "./responsive-button.module.css";
import { useState } from "react";

const ResponsiveButton = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);

  const handleOpen = (component, direction, isOpen, setOpen) => {
    const componentElement = document.querySelector(component);

    // Check if the component is already open
    const isComponentOpen = isOpen && (direction === 'left' ? sidebarIsOpen : contactIsOpen);

    if (isComponentOpen) {
      if (direction === 'left') {
        componentElement.style.left = '-100%'; // Close the component
        setSidebarIsOpen(false); // Close the sidebar
      } else if (direction === 'right') {
        componentElement.style.right = '-100%'; // Close the component
        setContactIsOpen(false); // Close the contact
      }
    } else {
      if (direction === 'left') {
        componentElement.style.left = '0px'; // Open the component
        setSidebarIsOpen(true);
        setContactIsOpen(false); // Close the contact
      } else if (direction === 'right') {
        componentElement.style.right = '0px'; // Open the component
        setContactIsOpen(true);
        setSidebarIsOpen(false); // Close the sidebar
      }
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleOpen("#sidebar-res", 'left', sidebarIsOpen, setSidebarIsOpen)}>
        <IconsFA new_className={styles.icons} title={"tune"} size={"small"} />
        My Profile
      </button>
      <button onClick={() => handleOpen("#contact-res", 'right', contactIsOpen, setContactIsOpen)}>
        My Contact
        <IconsFA new_className={styles.icons} title={"tune"} size={"small"} />
      </button>
    </div>
  );
};

export default ResponsiveButton;
