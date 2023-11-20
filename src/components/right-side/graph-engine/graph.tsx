import { ForceGraph2D } from 'react-force-graph'
import React, { useState, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import graphFn from '../../../actions/graph-fn.facade'
import { setGraphData } from '../../../reducers/graph.reducer'
import {default as graphConfig} from './graph.config.json'
import { clone } from 'ramda'

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
    neighbors?: string[]
    links?: string[]
    color?: string
    __bckgDimensions?: number[]
}
const Graph = () => {
    const fgRef = useRef()
    const gData = useSelector((store: Store) => store.graphData)

    // needed because of Immer (redux Toolkit)
    // data returned is immutable however it should be mutable
    // by design of force graph therefore creation copy is required
    const mutableGData = clone(gData)

    const dispatch = useDispatch();

    const [edge, setEdge] = useState<string[]>([])

    const handleNodeClick = React.useCallback((node: NodeObject, event: MouseEvent) => {
        // aim at node from outside it
        if (edge.length === 0 && typeof node.id === 'string') {
            setEdge([node.id])
        }
        else {
            const updatedData = graphFn.addGraphEdge.call([...edge, node.id].join(','), mutableGData)
            dispatch(setGraphData(updatedData))
            setEdge([])
        }
      }, [edge, setEdge, dispatch])

    return (
        <ForceGraph2D
            ref={fgRef}
            graphData={mutableGData}
            d3VelocityDecay={graphConfig.d3VelocityDecay}
            nodeAutoColorBy="group"
            linkWidth={2}
            linkColor={'white'}
            linkDirectionalParticles={graphConfig.linkDirectionalParticles}
            linkDirectionalParticleSpeed={graphConfig.linkDirectionalParticleSpeed}
            
            nodeCanvasObject={(node: INodeObjExt & NodeObject, ctx, globalScale = 4) => {
                const label = typeof node.id === 'string' ? node.id : '';
                const fontSize = graphConfig.fontSize/globalScale;
                ctx.font = `${fontSize}px ${graphConfig.font}`;
                const textWidth = label ? ctx.measureText(label).width : 1;
                const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
                const [w, h] = bckgDimensions
                ctx.fillStyle = graphConfig.labelBackgroundColor
                ctx.fillRect(
                    node.x ? node.x - bckgDimensions[0] / 2 : 0,
                    node.y? node.y - bckgDimensions[1] / 2 : 0, 
                    w,
                    h
                )
                ctx.textAlign = graphConfig.textAlign as CanvasTextAlign;
                ctx.textBaseline = graphConfig.textBaseline as CanvasTextBaseline;
                ctx.fillStyle = node.color && node.color !== '#a6cee3' ? 
                    node.color : graphConfig.defaultNodeColor;
                ctx.fillStyle = graphConfig.labelColor
                ctx.fillText(label, node.x ? node.x : 0, node.y? node.y : 0);
                node['__bckgDimensions'] = bckgDimensions; // to re-use in nodePointerAreaPaint
            }}
            
            // nodePointerAreaPaint={(node: NodeObject & INodeObjExt, color, ctx) => {
            //     ctx.fillStyle = color;
            //     const bckgDimensions: [number, number] = node.__bckgDimensions as [number, number];
            //     bckgDimensions && ctx.fillRect(
            //         (node.x as number) - bckgDimensions[0] / 2, 
            //         (node.y as number) - bckgDimensions[1] / 2, ...bckgDimensions);
            // }}

            // onNodeClick={handleNodeClick}
        />
    )
}

export default Graph