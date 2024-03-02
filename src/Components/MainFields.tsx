import React, { useState } from "react";
import "./MainFields.css"; // Import your CSS file for styling

interface FormData {
  accountNumber: string;
  phoneNumber: string;
  cuiNumber: string;
  incNumber: string;
}

const MainFields: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    accountNumber: "",
    phoneNumber: "",
    cuiNumber: "",
    incNumber: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCopyToClipboard = (fieldName: keyof FormData) => {
    navigator.clipboard.writeText(formData[fieldName]);
  };

  const clearAllData = () => {
    setFormData({
      accountNumber: "",
      phoneNumber: "",
      cuiNumber: "",
      incNumber: "",
    });
  };

  return (
    <div className="input-section">
      <div className="column">
        <label htmlFor="account-number" className="light-txt">
          Account Number:
        </label>
        <input
          type="text"
          id="account-number"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          className="large-input" // Apply larger input style and color
        />
        <button
          onClick={() => handleCopyToClipboard("accountNumber")}
          className="dark-button" // Apply darker button style
        >
          Copy
        </button>
      </div>
      <div className="column">
        <label htmlFor="phone-number" className="light-txt">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone-number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="large-input" // Apply larger input style
        />
        <button
          onClick={() => handleCopyToClipboard("phoneNumber")}
          className="dark-button" // Apply darker button style
        >
          Copy
        </button>
      </div>
      <div className="column">
        <label htmlFor="cui-number" className="light-txt">
          CUI Number:
        </label>
        <input
          type="text"
          id="cui-number"
          name="cuiNumber"
          value={formData.cuiNumber}
          onChange={handleInputChange}
          className="large-input" // Apply larger input style
        />
        <button
          onClick={() => handleCopyToClipboard("cuiNumber")}
          className="dark-button" // Apply darker button style
        >
          Copy
        </button>
      </div>
      <div className="column">
        <label htmlFor="inc-number" className="light-txt">
          INC Number:
        </label>
        <input
          type="text"
          id="inc-number"
          name="incNumber"
          value={formData.incNumber}
          onChange={handleInputChange}
          className="large-input" // Apply larger input style
        />
        <button
          onClick={() => handleCopyToClipboard("incNumber")}
          className="dark-button" // Apply darker button style
        >
          Copy
        </button>
        <button onClick={clearAllData} className="dark-button">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default MainFields;
