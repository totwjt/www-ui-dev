// 检测浏览器类型和版本
export function detectBrowser () {
  const userAgent = navigator.userAgent.toLowerCase() // 统一转换为小写
  let browser = 'Unknown'
  let version = 'Unknown'

  // 检测 Chrome 浏览器
  const chromeMatch = userAgent.match(/(?:chrome|crios|crmo)\/(\d+)/)
  if (chromeMatch) {
    browser = 'Google Chrome'
    version = chromeMatch[1]
  }

  // 检测 Safari 浏览器
  const safariMatch = userAgent.match(/version\/(\d+).+?safari/)
  if (safariMatch) {
    browser = 'Safari'
    version = safariMatch[1]
  }

  // 检测 Firefox 浏览器
  const firefoxMatch = userAgent.match(/(?:firefox|fxios)\/(\d+)/)
  if (firefoxMatch) {
    browser = 'Firefox'
    version = firefoxMatch[1]
  }

  // 检测 Edge 浏览器
  const edgeMatch = userAgent.match(/edg\/(\d+)/)
  if (edgeMatch) {
    browser = 'Edge'
    version = edgeMatch[1]
  }

  return { browser, version }
}

// 检测平台信息
export const platform = () => {
  const userAgent = (navigator.userAgent || navigator.vendor).toLowerCase() // 统一转换为小写

  // 判断是否为移动设备
  const isMobile = /android|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent)

  // 判断是否为平板设备
  const isTablet = /ipad|android(?!.*mobile)|tablet/.test(userAgent)

  // 判断是否为桌面设备 (PC)
  const isDesktop = !isMobile && !isTablet

  // 检测操作系统
  let os = 'Unknown OS'
  if (/windows/.test(userAgent)) os = 'Windows'
  else if (/android/.test(userAgent)) os = 'Android'
  else if (/linux/.test(userAgent)) os = 'Linux'
  else if (/mac os/.test(userAgent)) os = 'Mac OS'
  else if (/iphone|ipad|ipod/.test(userAgent)) os = 'iOS'

  // 检测浏览器类型和版本
  const { browser, version } = detectBrowser()

  // 获取设备类型
  const deviceType = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'

  return {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    os,
    browser: {
      name: browser,
      version
    },
    userAgent
  }
}
