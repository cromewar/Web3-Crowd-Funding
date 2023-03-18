import { useState } from "react";
import { Collapse } from "react-collapse";
import CrowdfundingForm from "./CrowdfundingForm";

function CrowdfundingDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle} className="new-campaign">
        Create New Campaign
      </button>
      <Collapse isOpened={isOpen}>
        <CrowdfundingForm />
      </Collapse>
    </div>
  );
}

export default CrowdfundingDropdown;
