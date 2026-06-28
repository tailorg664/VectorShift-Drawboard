// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '80px', 
          height: '40px',
          padding: '0 2px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '20px',
          backgroundColor: '#121c2f',
          justifyContent: 'center', 
          flexDirection: 'column'
        }} 
        draggable
      >
          <span style={{ color: '#ffffec' }}>{label}</span>
      </div>
    );
  };
  