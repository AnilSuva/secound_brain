import { useRef, useState } from 'react';
import Input from '../components/Input'
import axios from 'axios';

interface CreateContentProps {
  open: boolean;
  onClose: () => void;
}

const buttonStyle: React.CSSProperties = {
  padding: '8px 12px', 
  borderRadius: 6, border: '1px solid #ccc', 
  // background: '#fff', 
  cursor: 'pointer'
}

const selectedStyle: React.CSSProperties = {
  ...buttonStyle,
  background: '#2563eb',
  color: '#fff',
  border: '1px solid #2563eb'
};

const unselectedStyle: React.CSSProperties = {
  ...buttonStyle,
  background: '#fff',
  color: '#000'
};

function CreateContent({ open, onClose }: CreateContentProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState("youtube");

  async function addContent() {
    const title = titleRef.current?.value;
    const link = descRef.current?.value;

    await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/v1/content',{
      link,
      title,
      type,
    }, {
      headers: {
        "authorization" : localStorage.getItem("token")
      }
    });

    alert("content added");

    onClose();
  }

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '16px',
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          background: '#fff',
          color: '#000',
          borderRadius: 8,
          padding: 24,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Create Content</h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: 18,
              cursor: 'pointer',
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          <Input placeholder="Title" ref={titleRef}/>
          <Input placeholder="link" ref={descRef} multiline rows={5} />

          <div style={{display:'flex', gap: '10px', alignItems:'center'}}>
            <label>Type:</label>
            <button className='content-button' onClick={()=> setType("youtube")} style={type === "youtube" ? selectedStyle : unselectedStyle}>Youtube</button>
            <button className='content-button' onClick={()=> setType("twitter")} style={type === "twitter" ? selectedStyle : unselectedStyle}>Twitter</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button onClick={onClose} style={buttonStyle}>Cancel</button>
            <button onClick={addContent} style={{ padding: '8px 12px', borderRadius: 6, border: 'none', background: '#2563eb', color: '#fff', cursor: 'pointer' }}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CreateContent;