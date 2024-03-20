import * as fs from 'fs'
import * as path from 'path'
import * as R from 'ramda'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const templateDir = `${__dirname}/../data/templates`
const dataDir = `${__dirname}/../data/generated`

/**
 *
 * @param dirname path to template folder
 * @returns
 * 2D array of filenames
 * and their content from template folder
 */
const readFiles = (dirname: string): string[][] => {
    // fetching file names from template dir
    const filenames = fs.readdirSync(dirname)

    // constructing fullpaths to template files
    const filePaths = filenames.
        map(filename => path.join(dirname, filename))

    // fetching generated content by templates
    // const content = filePaths.map(filePath => 
    //     require(filePath)
    // )
    return [filenames, filePaths]
}


/**
 * fakerData2File saves generated data into
 * genereted test data folder
 */
const fakerData2File = async () => {
    try {
        // extracting filenames and data from templates
        const templateData = readFiles(templateDir)
        // saving data from templates
        R.transpose(templateData).map(async ([filename, filePath]) => {
            const content: object[] = []
            // j represents number of template executions
            for(let j = 0; j < 10; j++) {
                const instance = await import(filePath);
                content.push(instance.default())
            }
            fs.writeFileSync(`${dataDir}/${filename}.json`,
                    JSON.stringify(content))
        })
    }
    catch (err) {
        throw err
    }
}

fakerData2File()