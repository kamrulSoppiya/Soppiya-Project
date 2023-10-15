import React, { useEffect, useState } from "react";
import "./color.css"; // Import your custom styles

interface MyColorPickerProps {
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<MyColorPickerProps> = ({ onColorChange }) => {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>("#000000");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };

  const handleColorPickerToggle = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorPickerClose = () => {
    setShowColorPicker(false);
  };

  const handleColorPickerAccept = () => {
    onColorChange(selectedColor);
    handleColorPickerClose();
  };

  useEffect(() => {
    handleColorChange;
    handleColorPickerAccept;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button onClick={handleColorPickerToggle}>Open Color Picker</button>

      {/* {showColorPicker && (
        <div className="color-picker-popover">
          <div className="color-picker-cover" onClick={handleColorPickerClose} />
          <div className="color-picker-content">
            <input
              type="color"
              value={selectedColor}
              onChange={handleColorChange}
            />
            <button onClick={handleColorPickerAccept}>Accept</button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '20px', backgroundColor: selectedColor, width: '50px', height: '50px' }}></div> */}
    </div>
  );
};

export default ColorPicker;
