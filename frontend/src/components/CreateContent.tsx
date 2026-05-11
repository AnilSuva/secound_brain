import Input from '../components/Input'

interface CreateContentProps {
  open: boolean;
  onClose?: () => void;
}

function CreateContent({ open, onClose }: CreateContentProps) {
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
          <Input placeholder="Title" />
          <Input placeholder="Description" multiline rows={5} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button onClick={onClose} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', background: '#fff', cursor:'pointer' }}>Cancel</button>
            <button style={{ padding: '8px 12px', borderRadius: 6, border: 'none', background: '#2563eb', color: '#fff', cursor:'pointer' }}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CreateContent;