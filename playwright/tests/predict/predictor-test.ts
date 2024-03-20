import { test, expect } from '@playwright/test'
import router from '../../utils/router'
import selectors from '../../selectors'
import getNodesNumByNN from '../../utils/NN-predictor'
import getProcessedBuffer from '../../utils/image-processor'

const predictor = (data) => test(`@create @AI @graph id: ${data.id} nodes: ${data.vertex.length}`, 
  async ({ page }) => {
    await page.goto(router.base)
    await page.evaluate(() => {
      localStorage.setItem('token', 'true')
    })
    await page.goto(router.graph)
    const clear = page.locator(selectors.graphHeader.clear)
    await clear.waitFor({state: 'visible'})
    await clear.click()
    const strategySelect = page.locator(selectors.graphControls.linkStrategy)
    data.strategy ? await strategySelect.selectOption(data.strategy) : ''
    const addGraphEdge = page.locator(selectors.graphControls.addGraphEdge)
    await addGraphEdge.fill(data.vertex.join(','))
    await addGraphEdge.press('Enter')
    const graphCanvas = page.locator(selectors.graphView.canvas)
    const imageBuffer = await graphCanvas.screenshot()
    const processedBuffer = await getProcessedBuffer(imageBuffer)
    const predictedNodes = await getNodesNumByNN(processedBuffer)
    expect(predictedNodes).toEqual(data.vertex.length)
})

export default predictor