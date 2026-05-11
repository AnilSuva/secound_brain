import { useState } from "react";

type InputProps = {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  ref?: any;
};

function Input({ value, onChange, placeholder, multiline = false, rows = 3, ref }: InputProps) {
  const [focused, setFocused] = useState(false);

  const baseStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: `1px solid ${focused ? '#2563eb' : '#d1d5db'}`,
    boxSizing: 'border-box',
    fontSize: 14,
    transition: 'border-color 120ms ease, box-shadow 120ms ease',
    outline: 'none',
    boxShadow: focused ? '0 4px 12px rgba(37,99,235,0.12)' : 'none',
  };

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...baseStyle, resize: 'vertical', minHeight: 80 }}
        aria-label={placeholder}
      />
    );
  }

  return (
    <input
      type="text"
      ref = {ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={baseStyle}
      aria-label={placeholder}
    />
  );
}

export default Input;