import Client from 'ssh2-sftp-client'
import config from './sftp.json' assert { type: 'json' }

const client = new Client()
const args = process.argv.slice(2)
const { sftp, pathConfig } = config[args[0]]

const main = async () => {
  try {
    await client.connect(sftp)

    // 删除备份文件, 如果有
    if (await client.exists(pathConfig.remoteBackupPath)) {
      await client.rmdir(pathConfig.remoteBackupPath, true)
      console.log('删除备份文件', pathConfig.remoteBackupPath)
    }

    // 重命名之前的文件作为备份文件
    if (await client.exists(pathConfig.remotePath)) {
      await client.rename(pathConfig.remotePath, pathConfig.remoteBackupPath)
      console.log('新的备份文件重命名', pathConfig.remoteBackupPath)
    }

    // 上传本地文件
    console.log('上传编译文件...')
    await client.uploadDir(pathConfig.localPath, pathConfig.remotePath)
    console.log('上传成功')
  } catch (err) {
    console.error(err)
  } finally {
    client.end()
  }
}

export default main

main()
