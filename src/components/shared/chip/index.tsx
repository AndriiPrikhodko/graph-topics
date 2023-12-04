import React from 'react'

type Props = {
    text: string
    onRemove: React.MouseEventHandler
    styles?: object
}

const Chip: React.FC<Props> = ({ text, onRemove, styles }) => (
    <div style={styles || {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '8px',
        height: '20px',
        fontSize: '12px',
        lineHeight : '20px',
        borderRadius: '4px',
        backgroundColor: '#f1f3f4',
        margin: '0 4px',
        color : 'black'
    }}>
        {text}
        <button onClick={onRemove} style={{
            marginLeft: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#666',
            fontSize: 'smaller'
        }}>
      x
        </button>
    </div>
)

export default Chip