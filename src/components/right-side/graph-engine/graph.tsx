import { ForceGraph2D } from 'react-force-graph'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGraphEdge } from '../../../actions/graph.action'

const { useRef } = React

type NodeObject = object & {
    id?: string | number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number;
    fy?: number;
    color?: string
  }

interface INodeObjExt {
    color?: string
    __bckgDimensions?: number[]
}
const Graph = () => {
    const fgRef = useRef()
    const data = useSelector((store: Store) => store.graphData)
    const dispatch = useDispatch();

    const [edge, setEdge] = useState<string[]>([])

    const handleNodeClick = React.useCallback((node: NodeObject,event: MouseEvent) => {
        // aim at node from outside it
        if (edge.length === 0 && typeof node.id === 'string') {
            setEdge([node.id])
        }
        else {
            dispatch(addGraphEdge([...edge, node.id].join(',')))
            setEdge([])
        }
      }, [edge, setEdge, dispatch])

    return (
        // <ForceGraph3D
        //   graphData={graphData}
        //   nodeAutoColorBy="group"
        //   nodeThreeObject={node => {
        //     const sprite = new SpriteText(node.id);
        //     sprite.color = node.color;
        //     sprite.textHeight = 8;ForceGraphMethods
        //     return sprite;
        //   }}
        // />
        <ForceGraph2D
            ref={fgRef}
            graphData={data}
            d3VelocityDecay={0.3}
            // d3Force={'center'}
            nodeAutoColorBy="group"
            
            nodeCanvasObject={(node: NodeObject & INodeObjExt, ctx, globalScale) => {
                const label = typeof node.id === 'string' ? node.id : '';
                const fontSize = 9/globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                const textWidth = label ? ctx.measureText(label).width : 1;
                const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
                const [w, h] = bckgDimensions
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.fillRect(
                    node.x ? node.x - bckgDimensions[0] / 2 : 0,
                    node.y? node.y - bckgDimensions[1] / 2 : 0, 
                    w,
                    h
                )
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = node.color && node.color !== '#a6cee3' ? 
                    node.color :'rgb(120, 120, 120)';
                // ctx.fillStyle = 'rgb(120, 120, 120)';
                ctx.fillText(label, node.x ? node.x : 0, node.y? node.y : 0);
                
                // node['__bckgDimensions'] = bckgDimensions; // to re-use in nodePointerAreaPaint
            }}
            // nodePointerAreaPaint={(node, color, ctx) => {
            //     ctx.fillStyle = color;
            //     const bckgDimensions = node.__bckgDimensions;
            //     bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
            // }}

            // onEngineStop={() => {
            //     console.log(fgRef.current)
            //     fgRef.current.zoomToFit(100)
            // }}
            // on graph node click event
            onNodeClick={handleNodeClick}
        />
    )
}

export default Graph