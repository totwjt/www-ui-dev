import { execSync } from 'child_process'
import path from 'path'

/* ----------------------------------------------------*\
｜     一键执行：git操作、 版本号、发布
｜     pnpm run go -m "commit message"
\*---------------------------------------------------- */

// 获取命令行参数
const args = process.argv.slice(2)
let commitMessage = ''

args.forEach((arg, index) => {
  if (arg === '-m' && args[index + 1]) {
    commitMessage = args[index + 1]
  }
})

if (!commitMessage) {
  console.error('Please provide a commit message with -m')
  process.exit(1)
}

// 检查是否有更改
function hasChanges () {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' })
    return status.trim().length > 0
  } catch (error) {
    console.error('Error checking Git status:', error.message)
    process.exit(1)
  }
}

if (!hasChanges()) {
  console.log('No changes detected. Skipping commit and push.')
  process.exit(0) // 没有更改时，提前退出
}

// 执行 Git 提交和推送操作
try {
  console.log('Executing Git commit and push...')

  // 添加所有更改
  execSync('git add .', { stdio: 'inherit' })

  // 提交
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' })

  // 推送到所有远程仓库
  execSync('git push --all', { stdio: 'inherit' })

  console.log('Git commit and push to all remotes successful!')
} catch (error) {
  console.error('Error during Git operations:', error.message)
  process.exit(1)
}

// 更新 package 版本号（假设增加 patch 版本）
try {
  console.log('Updating package version...')
  execSync('npm version patch', { stdio: 'inherit' })
  console.log('Version updated!')
} catch (error) {
  console.error('Error updating version:', error.message)
  process.exit(1)
}

// 执行构建步骤
try {
  console.log('Building the library...')
  execSync('pnpm run build:lib', { stdio: 'inherit' })
  console.log('Library build successful!')
} catch (error) {
  console.error('Error during library build:', error.message)
  process.exit(1)
}

// 执行发布操作
try {
  console.log('Executing npm publish...')
  execSync('npm run pub:aliyun', { stdio: 'inherit' })
  console.log('Publish to Aliyun successful!')
} catch (error) {
  console.error('Error during npm publish:', error.message)
  process.exit(1)
}
