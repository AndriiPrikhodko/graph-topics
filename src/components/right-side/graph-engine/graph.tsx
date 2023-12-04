import { ForceGraph2D } from 'react-force-graph'
import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import graphFn from '../../../actions/graph-fn.facade'
import { setGraphData } from '../../../reducers/graph.reducer'
import {default as graphConfig} from './graph.config.json'
import { clone } from 'ramda'
import { setGraphDataLocal } from '../../../helpers/local-storage'

const { useRef } = React

const Graph = () => {
    const fgRef = useRef()
    const gData = useSelector((store: Store) => store.graphData)
    const editMode = useSelector((store: Store) => store.common.editMode)
    const graphFunction = useSelector((store: Store) =>
        store.common.graphFunction)

    const dispatch = useDispatch()
    const [edge, setEdge] = useState<string[]>([])

    // creating cached deeplinked copy of the date
    // graph re-rendering won't occur if data has
    // not been changed
    const mutableGData = useMemo(() => {
        // needed because of Immer (redux Toolkit)
        // data returned is immutable however it should be mutable
        // by design of force graph therefore creation copy is required
        return clone(gData)
    }, [gData])

    const handleNodeClick = React.useCallback(
        (node: NodeObject, event: MouseEvent) => {
            if (graphFunction !== null) {
                let nodeId = clone(node.id)
                if (graphFunction === 'deleteGraphNode') {
                    let updatedData = graphFn.deleteGraphNode
                        .call(nodeId, mutableGData)
                    let cloneData = clone(updatedData)
                    dispatch(setGraphData(cloneData))
                    setGraphDataLocal(cloneData)
                }
                else if (edge.length === 0) {
                    setEdge([node.id])
                }
                else {
                    const updatedData = graphFn[graphFunction]
                        .call([...edge, node.id].join(','), mutableGData)
                    setEdge([])
                    let cloneData = clone(updatedData)
                    dispatch(setGraphData(cloneData))
                    setGraphDataLocal(cloneData)
                }
            }
        }, [edge, setEdge, dispatch, mutableGData, graphFunction])

    return (
        <ForceGraph2D
            ref={fgRef}
            graphData={mutableGData}
            d3VelocityDecay={ editMode ? 1 : graphConfig.d3VelocityDecay}
            nodeAutoColorBy="group"

            linkWidth={2}
            linkColor={() => graphConfig.linkColor}
            enableZoomInteraction={true}
            linkDirectionalParticles={graphConfig.linkDirectionalParticles}
            linkDirectionalParticleSpeed={graphConfig.linkDirectionalParticleSpeed}

            nodeCanvasObject={(node: NodeObject, ctx, globalScale = 4) => {
                const label = node.id
                const fontSize = graphConfig.fontSize/globalScale
                ctx.font = `bold ${fontSize}px ${graphConfig.font}`
                const textWidth = ctx.measureText(label).width
                const bckgDimensions = [textWidth, fontSize]
                    .map(n => n + fontSize * graphConfig.backGroundDimensions) // some padding
                const [w, h] = bckgDimensions
                ctx.fillStyle = graphConfig.labelBackgroundColor
                ctx.fillRect(
                    node.x ? node.x - bckgDimensions[0] / 2 : 0,
                    node.y? node.y - bckgDimensions[1] / 2 : 0,
                    w,
                    h
                )
                ctx.textAlign = graphConfig.textAlign as CanvasTextAlign
                ctx.textBaseline = graphConfig.textBaseline as CanvasTextBaseline
                ctx.fillStyle = node.color && node.color !== '#a6cee3' ?
                    node.color : graphConfig.defaultNodeColor
                ctx.fillStyle = graphConfig.labelColor
                ctx.fillText(label, node.x ? node.x : 0, node.y ? node.y : 0)
                node['__bckgDimensions'] = bckgDimensions // to re-use in nodePointerAreaPaint
            }}

            // nodePointerAreaPaint={(node: NodeObject & INodeObjExt, color, ctx) => {
            //     ctx.fillStyle = "#fff";
            //     const bckgDimensions: [number, number] = node.__bckgDimensions as [number, number];
            //     bckgDimensions && ctx.fillRect(
            //         (node.x as number) - bckgDimensions[0] / 2,
            //         (node.y as number) - bckgDimensions[1] / 2, ...bckgDimensions);
            // }}

            onNodeClick={handleNodeClick}
        />
    )
}

export default Graph