import * as tf from '@tensorflow/tfjs-node'
import { Tensor } from '@tensorflow/tfjs-node'
import * as R from 'ramda'

const model_url = 'file:///Users/andriiprykhodko/Documents/graph-topic/GTopic-FE/playwright/tfjs_graph/model.json'
const model = await tf.loadLayersModel(model_url)
const labelsArray = [2,3,4,5]

const getNodesNumByNN = async (imageBuffer: Buffer) => {
    const imageTensor = tf.node.decodeImage(imageBuffer)
    const batchedImageTensor = imageTensor.expandDims(0) // adding batch dim
    const prediction = await (model.predict(batchedImageTensor) as Tensor).arraySync()
    const probabilitiesArray: number [] = R.flatten((prediction as number[][]))
    const maxIndex = R.indexOf(R.apply(Math.max, probabilitiesArray), probabilitiesArray)
    return labelsArray[maxIndex]
}

export default getNodesNumByNN