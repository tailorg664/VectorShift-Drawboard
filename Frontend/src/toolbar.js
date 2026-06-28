// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '10px', overflowY: 'auto' , width: '84px'}}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='API' label='API' />
                <DraggableNode type='Database' label='Database' />
                <DraggableNode type='Image' label='Image' />
                <DraggableNode type='Email' label='Email' />
                <DraggableNode type='Delay' label='Delay' />
            </div>
        </div>
    );
};
