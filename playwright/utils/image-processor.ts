import sharp from 'sharp'

const getProcessedBuffer = async (imageBuffer: Buffer, topCrop = 50) => {
    const {width: imgWidth, height: imgHeight} = await sharp(imageBuffer).metadata()
    return sharp(imageBuffer)
    .extract({ left: 0, top: topCrop, width: imgWidth || 0 , height: (imgHeight || 0) - topCrop }) 
    .resize(300, 300) // width, height
    .toFormat('jpeg') // jpeg has 3 color channels and can be processed by NN classifier
    .toBuffer()
}
export default getProcessedBuffer