import { rest } from 'msw'
import serverUrl from '../api/server/endpoints'

export const handlers = [
    rest.get(`http://${serverUrl.baseUrl}:${serverUrl.port}/graphList`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                'graphList': [
                    'mockfileName1',
                    'mockfileName2',
                ]
            }),
        )
    }),
    rest.get(`http://${serverUrl.baseUrl}:${serverUrl.port}/graph`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data : '{"nodes": [{"id": "2", "__indexColor": "#740007", "color": "#a6cee3", "index": 0, "x": -64.45085191902635, "y": -23.429902183609233, "vx": 1.635925304860968e-08, "vy": -3.6084416128117926e-07}, {"id": "3", "__indexColor": "#600008", "color": "#a6cee3", "index": 1, "x": -32.923446596996826, "y": -14.700638481485846, "vx": -5.178390278050844e-08, "vy": -1.1874131623318167e-07}, {"id": "4", "__indexColor": "#10000c", "color": "#a6cee3", "index": 2, "x": 0.6083569159337872, "y": -1.551082289209215, "vx": -8.071973919630904e-09, "vy": -1.0166779295644188e-07}, {"id": "5", "__indexColor": "#e8000e", "color": "#a6cee3", "index": 3, "x": 33.58361926749205, "y": 12.852989229158167, "vx": 1.0485073908315664e-07, "vy": -1.0427229349678957e-07}, {"id": "41", "__indexColor": "#c00010", "color": "#a6cee3", "index": 4, "x": 63.18232257877302, "y": 26.828632954225846, "vx": 1.8482156721039674e-07, "vy": -8.539471755759666e-08}], "links": [{"source": {"id": "2", "__indexColor": "#740007", "color": "#a6cee3", "index": 0, "x": -64.45085191902635, "y": -23.429902183609233, "vx": 1.635925304860968e-08, "vy": -3.6084416128117926e-07}, "target": {"id": "3", "__indexColor": "#600008", "color": "#a6cee3", "index": 1, "x": -32.923446596996826, "y": -14.700638481485846, "vx": -5.178390278050844e-08, "vy": -1.1874131623318167e-07}, "__indexColor": "#24000b", "index": 0, "__controlPoints": null}, {"source": {"id": "3", "__indexColor": "#600008", "color": "#a6cee3", "index": 1, "x": -32.923446596996826, "y": -14.700638481485846, "vx": -5.178390278050844e-08, "vy": -1.1874131623318167e-07}, "target": {"id": "4", "__indexColor": "#10000c", "color": "#a6cee3", "index": 2, "x": 0.6083569159337872, "y": -1.551082289209215, "vx": -8.071973919630904e-09, "vy": -1.0166779295644188e-07}, "__indexColor": "#fc000d", "index": 1, "__controlPoints": null}, {"source": {"id": "5", "__indexColor": "#e8000e", "color": "#a6cee3", "index": 3, "x": 33.58361926749205, "y": 12.852989229158167, "vx": 1.0485073908315664e-07, "vy": -1.0427229349678957e-07}, "target": {"id": "4", "__indexColor": "#10000c", "color": "#a6cee3", "index": 2, "x": 0.6083569159337872, "y": -1.551082289209215, "vx": -8.071973919630904e-09, "vy": -1.0166779295644188e-07}, "__indexColor": "#d4000f", "index": 2, "__controlPoints": null}, {"source": {"id": "5", "__indexColor": "#e8000e", "color": "#a6cee3", "index": 3, "x": 33.58361926749205, "y": 12.852989229158167, "vx": 1.0485073908315664e-07, "vy": -1.0427229349678957e-07}, "target": {"id": "41", "__indexColor": "#c00010", "color": "#a6cee3", "index": 4, "x": 63.18232257877302, "y": 26.828632954225846, "vx": 1.8482156721039674e-07, "vy": -8.539471755759666e-08}, "__indexColor": "#ac0011", "index": 3, "__controlPoints": null}]}'
            }),
        )
    }),
]
