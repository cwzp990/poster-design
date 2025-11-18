import { Request, Response } from 'express'
const multiparty = require('multiparty')
const { filePath } = require('../configs.ts')
const { checkCreateFolder, filesReader, send } = require('../utils/tools.ts')

const FileUrl = 'http://localhost:7001/static/'

export default {
  // design/user/image 获取用户上传列表（虚拟）
  async getUserImages(req: Request, res: Response) {
    /**
     * @api {post} /design/user/image 获取用户上传列表（虚拟）
     * @apiVersion 1.0.0
     * @apiGroup user
     */
    const list = await filesReader('user')
    send.success(res, { list })
  },
}
