browser.webRequest.onBeforeRequest.addListener(
  request => {
    console.log(`blocking safelink ${request.url}`)
    const url = new URL(request.url)
    redirectUrl = url.searchParams.get('url')
    return {
      redirectUrl
    }
  },
  {
    urls: [
      "https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html*",
      "https://safelinks.protection.outlook.com/*",
      "https://*.safelinks.protection.outlook.com/*",
      "https://outlook.office.com/mail/safelink.html*",
      "https://*.safelinks.protection.office365.us/*",
    ]
  }, ['blocking']
)
